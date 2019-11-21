import Api, { FetchUsersResponse } from 'api'
import {
  call,
  cancelled,
  fork,
  put,
  take,
  takeLatest,
} from 'redux-saga/effects'
import * as settingsSelectors from 'store/settings/selectors'
import { SettingsActionsConsts } from 'store/settings/types'
import { select } from 'utils/saga/typedEffects'
import * as userActions from './actions'
import * as userSelectors from './selectors'
import { FetchUsers, UsersActionsConsts } from './types'

export function* fetchUsers(action: FetchUsers) {
  const abortController = new window.AbortController()
  try {
    const { nationalities, page, limit } = action
    const response: FetchUsersResponse = yield call(
      Api.user.fetchUsers,
      page,
      limit,
      nationalities,
      abortController,
    )
    yield put(
      userActions.fetchUsersSuccess(response.results, response.info.page),
    )
  } catch (e) {
    yield put(userActions.fetchUsersError(e))
    console.error(`fetchUsers`, e)
  } finally {
    if (yield cancelled()) {
      abortController.abort()
    }
  }
}

export function* bottomVisited() {
  try {
    const page = yield* select(userSelectors.currentPage)
    const limit = yield* select(userSelectors.limit)
    const nationalities = yield* select(settingsSelectors.nationalities)
    // yield call(fetchUsers, actions.fetchUsers(page + 1, limit, nationalities))
    yield put(userActions.fetchUsers(page + 1, limit, nationalities))
  } catch (e) {
    console.error(`bottomVisited`, e)
  }
}

export function* watchBottomVisited() {
  while (true) {
    yield take(UsersActionsConsts.BOTTOM_VISITED)
    const endOfData = yield select(userSelectors.isEnd) // aleady fetched all data
    const query = yield select(userSelectors.query) // not while searching
    if (!endOfData && !query) {
      yield call(bottomVisited)
    }
  }
}

export function* resetUsers() {
  yield put(userActions.resetUsers())
}

export default function*() {
  yield takeLatest(UsersActionsConsts.FETCH_USERS, fetchUsers)
  yield takeLatest(SettingsActionsConsts.SET_NATIONALITIES, resetUsers)
  yield fork(watchBottomVisited)
}
