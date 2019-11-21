import { AppState } from 'store/rootReducer'

export const list = (state: AppState) => state.users.list
export const currentPage = (state: AppState) => state.users.page
export const limit = (state: AppState) => state.users.limit
export const isLoading = (state: AppState) => state.users.isLoading
export const isError = (state: AppState) => state.users.error
export const isEnd = (state: AppState) => state.users.isEnd
export const query = (state: AppState) => state.users.query
