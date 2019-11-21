import { Nationality, User } from 'types'
import { FetchUsers, FetchUsersSuccess, UsersActionsConsts } from './types'

export const fetchUsers = (page: number, limit: number, nationalities: Nationality[]): FetchUsers => ({
  type: UsersActionsConsts.FETCH_USERS,
  page,
  limit,
  nationalities,
})

// export const fetchUsersError = (error: Error): FetchUsersError => ({
//   type: UsersActionsConsts.FETCH_Users_ERROR,
//   error,
// })

export const fetchUsersSuccess = (users: User[]): FetchUsersSuccess => ({
  type: UsersActionsConsts.FETCH_USERS_SUCCESS,
  users,
})
