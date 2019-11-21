import { UsersActions, UsersActionsConsts, UsersState } from './types'

const initialState: UsersState = {
  isLoading: null,
  isEnd: false,
  error: null,
  page: 0,
  limit: 1, // 50
  maxUsers: 5, // 1000
  list: null,
  nextPageUsers: null,
}

export default (state: UsersState = initialState, action: UsersActions) => {
  switch (action.type) {
    case UsersActionsConsts.FETCH_USERS: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case UsersActionsConsts.FETCH_USERS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    }

    case UsersActionsConsts.FETCH_USERS_SUCCESS: {
      const { users, page } = action
      return {
        ...state,
        page,
        isLoading: false,
        isEnd: page * state.limit >= state.maxUsers,
        error: null,
        list: state.list ? [...state.list, ...users] : [...users],
      }
    }
  }
  return state
}
