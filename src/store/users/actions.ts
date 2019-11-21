import { Nationality, User } from 'types'
import {
  FetchUsers,
  FetchUsersError,
  FetchUsersSuccess,
  UsersActionsConsts,
} from './types'

export const fetchUsers = (
  page: number,
  limit: number,
  nationalities: Nationality[],
): FetchUsers => ({
  type: UsersActionsConsts.FETCH_USERS,
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
