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
import { FetchUsersStarted, UsersActionsConsts } from './types'

function* fetchUsers(action: FetchUsersStarted) {
  const abortController = new window.AbortController()
  try {
    const { nationalities, page, limit } = action

    yield put(userActions.fetchUsersStarted(page, limit, nationalities))
    const response: FetchUsersResponse = yield call(
      Api.user.fetchUsers,
      page,
      limit,
      nationalities,
      abortController,
    )
    return response
  } catch (e) {
    yield put(userActions.fetchUsersError(e))
    console.error(`fetchUsers`, e)
  } finally {
    if (yield cancelled()) {
      abortController.abort()
    }
  }
}

function* fetchNextPage() {
  const page = yield* select(userSelectors.currentPage)
  const limit = yield* select(userSelectors.limit)
  const nationalities = yield* select(settingsSelectors.nationalities)

  const response = yield call(
    fetchUsers,
    userActions.fetchUsersStarted(page + 1, limit, nationalities),
  )

  return response
}

function* preloadNextPageData() {
  const response = yield fetchNextPage()
  yield put(userActions.setNextPageUsers(response.results))
}

function* bottomVisited() {
  try {
    const nextPageUsers = yield select(userSelectors.nextPageUsers)
    let users, page

    if (nextPageUsers) {
      users = nextPageUsers
      page = (yield select(userSelectors.currentPage)) + 1
    } else {
      const response: FetchUsersResponse = yield fetchNextPage()
      users = response.results
      page = response.info.page
    }

    yield put(userActions.fetchUsersSuccess(users, page))
  } catch (e) {
    console.error(`bottomVisited`, e)
  }
}

function* canFetchMore() {
  const endOfData = yield select(userSelectors.isEnd) // aleady fetched all data
  const query = yield select(userSelectors.query) // not while searching
  return !endOfData && !query
}

function* watchBottomVisited() {
  while (true) {
    yield take(UsersActionsConsts.BOTTOM_VISITED)
    if (yield canFetchMore()) {
      yield call(bottomVisited)
    }
  }
}

function* resetUsers() {
  yield put(userActions.resetUsers())
}

function* idleDetected() {
  const nextPageUsers = yield* select(userSelectors.nextPageUsers)
  const fetchMore = yield canFetchMore()
  if (!nextPageUsers && fetchMore) {
    yield call(preloadNextPageData)
  }
}

function* watchIdle() {
  // Only monitor for idle after first fetch
  // (edge case with slow connection that will fire two requests at the start)
  yield take(UsersActionsConsts.FETCH_USERS_SUCCESS)
  yield takeLatest(UsersActionsConsts.IDLE_DETECTD, idleDetected)
}

export default function*() {
  yield fork(watchIdle)
  yield takeLatest(SettingsActionsConsts.SET_NATIONALITIES, resetUsers)
  yield fork(watchBottomVisited)
}
