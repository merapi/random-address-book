import { UsersActions, UsersActionsConsts, UsersState } from './types'

const initialState: UsersState = {
  isLoading: null,
  isEnd: false,
  error: null,
  page: 0,
  limit: 50, // 50
  maxUsers: 150, // 1000
  list: null,
  nextPageUsers: null,
  query: '',
}

export default (state: UsersState = initialState, action: UsersActions) => {
  switch (action.type) {
    case UsersActionsConsts.SET_QUERY: {
      return {
        ...state,
        query: action.query,
      }
    }

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
