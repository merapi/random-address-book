import Api, { FetchUsersResponse } from 'api'
import { call, cancelled, put, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import { FetchUsers, UsersActionsConsts } from './types'

export function* fetchUsers(action: FetchUsers) {
  const abortController = new window.AbortController()
  try {
    const { nationalities, page, limit } = action
    const response: FetchUsersResponse = yield call(Api.user.fetchUsers, page, limit, nationalities, abortController)
    yield put(actions.fetchUsersSuccess(response.results))
  } catch (e) {
    // yield put(actions.fetchAccountsError(e))
    console.error(`fetchUsers`, e)
  } finally {
    if (yield cancelled()) {
      abortController.abort()
    }
  }
}

export default function*() {
  yield takeLatest(UsersActionsConsts.FETCH_USERS, fetchUsers)
}
