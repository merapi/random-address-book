import { User } from 'types'
import { Nationality } from './../../types/index'

// Action consts
export enum UsersActionsConsts {
  FETCH_USERS_STARTED = 'FETCH_USERS_STARTED',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  RESET_USERS = 'RESET_USERS',
  BOTTOM_VISITED = 'BOTTOM_VISITED',
  SET_QUERY = 'SET_QUERY',
  IDLE_DETECTD = 'IDLE_DETECTD',
  SET_NEXT_PAGE_USERS = 'SET_NEXT_PAGE_USERS',
}

// Action types
export interface FetchUsersStarted {
  type: UsersActionsConsts.FETCH_USERS_STARTED
  page: number
  limit: number
  nationalities: Nationality[]
}

export interface FetchUsersError {
  type: UsersActionsConsts.FETCH_USERS_ERROR
  error: Error
}

export interface FetchUsersSuccess {
  type: UsersActionsConsts.FETCH_USERS_SUCCESS
  users: User[]
  page: number
}

export interface ResetUsers {
  type: UsersActionsConsts.RESET_USERS
}

export interface BottomVisited {
  type: UsersActionsConsts.BOTTOM_VISITED
  users: User[]
}

export interface SetQuery {
  type: UsersActionsConsts.SET_QUERY
  query: string
}

export interface IdleDetected {
  type: UsersActionsConsts.IDLE_DETECTD
}

export interface SetNextPageUsers {
  type: UsersActionsConsts.SET_NEXT_PAGE_USERS
  users: User[]
}

export type UsersActions =
  | FetchUsersStarted
  | FetchUsersSuccess
  | BottomVisited
  | FetchUsersError
  | SetQuery
  | ResetUsers
  | IdleDetected
  | SetNextPageUsers

// Data types
// User should be here?

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
