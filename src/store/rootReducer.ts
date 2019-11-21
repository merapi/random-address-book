import { combineReducers } from 'redux'
import users from 'store/users/reducer'

const rootReducer = combineReducers({
  users,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
