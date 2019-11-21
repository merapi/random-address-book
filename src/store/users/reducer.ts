import { UsersActions, UsersActionsConsts, UsersState } from './types'

const initialState: UsersState = {
  isLoading: null,
  error: null,
  page: 1,
  limit: 50,
  maxUsers: 1000,
  list: null,
  nextPageUsers: null,
}

export default (state: UsersState = initialState, action: UsersActions) => {
  switch (action.type) {
    case UsersActionsConsts.FETCH_USERS_SUCCESS: {
      const { users } = action
      return {
        ...state,
        list: state.list ? [...state.list, ...users] : [...users],
      }
    }
  }
  return state
}
