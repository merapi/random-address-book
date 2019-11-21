import { combineReducers } from 'redux'
import settings from 'store/settings/reducer'
import users from 'store/users/reducer'

const rootReducer = combineReducers({
  users,
  settings,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
