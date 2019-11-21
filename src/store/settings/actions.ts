import { Nationality } from 'types'
import { SettingsActionsConsts } from './types'

export const setNationalities = (nationalities: Nationality[]) => ({
  type: SettingsActionsConsts.SET_NATIONALITIES,
  nationalities,
})
