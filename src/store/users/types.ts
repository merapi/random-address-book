import { User } from 'types'
import { Nationality } from './../../types/index'

// Action consts
export enum UsersActionsConsts {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  BOTTOM_VISITED = 'BOTTOM_VISITED',
  SET_QUERY = 'SET_QUERY',

  // PRELOAD_NEXT_PAGE = 'PRELOAD_NEXT_PAGE',
  // SHOW_USER_DETAIL = 'SHOW_USER_DETAIL',
}

// Action types
export interface FetchUsers {
  type: UsersActionsConsts.FETCH_USERS
  page: number
  limit: number
  nationalities: Nationality[]
}

// export interface StartFetchUsers {
//   type: UsersActionsConsts.FETCH_USERS
// }

// export interface StopFetchUsers {
//   type: UsersActionsConsts.FETCH_USERS_SUCCESS
// }

export interface FetchUsersError {
  type: UsersActionsConsts.FETCH_USERS_ERROR
  error: Error
}

export interface FetchUsersSuccess {
  type: UsersActionsConsts.FETCH_USERS_SUCCESS
  users: User[]
  page: number
}

export interface BottomVisited {
  type: UsersActionsConsts.BOTTOM_VISITED
  users: User[]
}

export interface SetQuery {
  type: UsersActionsConsts.SET_QUERY
  query: string
}

export type UsersActions =
  | FetchUsers
  | FetchUsersSuccess
  | BottomVisited
  | FetchUsersError
  | SetQuery

// Data types
// User?

// State type
export interface UsersState {
  readonly isLoading: boolean | null
  readonly isEnd: boolean
  readonly error: Error | null
  readonly page: number
  readonly limit: number
  readonly maxUsers: number
  readonly list: User[] | null
  readonly nextPageUsers: User[] | null
  readonly query: string
}
