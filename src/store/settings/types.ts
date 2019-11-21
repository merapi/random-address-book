import { Nationality } from 'types'

// Action consts
export enum SettingsActionsConsts {
  SET_NATIONALITIES = 'SET_NATIONALITIES',
}

// Action types
export interface SetNationalities {
  type: SettingsActionsConsts.SET_NATIONALITIES
  nationalities: Nationality[]
}

export type SettingsActions = SetNationalities

// Data types
// Nationality should be here?

// State type
export interface SettingsState {
  readonly nationalities: Nationality[]
}
