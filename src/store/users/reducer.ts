import { UsersActions, UsersActionsConsts, UsersState } from './types'

export const initialState: UsersState = {
  isLoading: false,
  isEnd: false,
  error: null,
  page: 0,
  limit: 50, // 50
  maxUsers: 1000, // 1000
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

    case UsersActionsConsts.RESET_USERS: {
      return initialState
    }

    case UsersActionsConsts.FETCH_USERS_STARTED: {
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
        nextPageUsers: null,
        isLoading: false,
        isEnd: page * state.limit >= state.maxUsers,
        error: null,
        list: state.list ? [...state.list, ...users] : [...users],
      }
    }

    case UsersActionsConsts.SET_NEXT_PAGE_USERS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        nextPageUsers: action.users,
      }
    }
  }
  return state
}
