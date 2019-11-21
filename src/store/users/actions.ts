import { Nationality, User } from 'types'
import {
  FetchUsersError,
  FetchUsersStarted,
  FetchUsersSuccess,
  UsersActionsConsts,
} from './types'

export const fetchUsersStarted = (
  page: number,
  limit: number,
  nationalities: Nationality[],
): FetchUsersStarted => ({
  type: UsersActionsConsts.FETCH_USERS_STARTED,
  page,
  limit,
  nationalities,
})

export const fetchUsersError = (error: Error): FetchUsersError => ({
  type: UsersActionsConsts.FETCH_USERS_ERROR,
  error,
})

export const fetchUsersSuccess = (
  users: User[],
  page: number,
): FetchUsersSuccess => ({
  type: UsersActionsConsts.FETCH_USERS_SUCCESS,
  users,
  page,
})

export const resetUsers = () => ({
  type: UsersActionsConsts.RESET_USERS,
})

export const bottomVisited = () => ({
  type: UsersActionsConsts.BOTTOM_VISITED,
})

export const setQuery = (query: string) => ({
  type: UsersActionsConsts.SET_QUERY,
  query,
})

export const idleDetected = () => ({
  type: UsersActionsConsts.IDLE_DETECTD,
})

export const setNextPageUsers = (users: User[]) => ({
  type: UsersActionsConsts.SET_NEXT_PAGE_USERS,
  users,
})
