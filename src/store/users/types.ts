import { User } from 'types'
import { Nationality } from './../../types/index'

// Action consts
export enum UsersActionsConsts {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',

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

// export interface FetchUsersError {
//   type: UsersActionsConsts.FETCH_USERS_ERROR
//   error: Error
// }

export interface FetchUsersSuccess {
  type: UsersActionsConsts.FETCH_USERS_SUCCESS
  users: User[]
}

export type UsersActions = FetchUsers | FetchUsersSuccess

// Data types
// User?

// State type
export interface UsersState {
  readonly isLoading: boolean | null
  readonly error: Error | null
  readonly page: number
  readonly limit: number
  readonly maxUsers: number
  readonly list: User[] | null
  readonly nextPageUsers: User[] | null
}
