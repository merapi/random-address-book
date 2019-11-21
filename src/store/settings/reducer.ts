import { SettingsActions, SettingsActionsConsts, SettingsState } from './types'

const initialState: SettingsState = {
  nationalities: ['ES'],
}

export default (
  state: SettingsState = initialState,
  action: SettingsActions,
) => {
  switch (action.type) {
    case SettingsActionsConsts.SET_NATIONALITIES: {
      const { nationalities } = action
      return {
        ...state,
        nationalities,
      }
    }
  }
  return state
}
