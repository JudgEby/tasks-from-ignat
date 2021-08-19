import { LoadingActionsTypes } from '../../h10/bll/loadingReducer'

type InitStateType = typeof initState

export type ThemeActionsTypes = LoadingActionsTypes | ChangeThemeACType

enum THEME {
  CHANGE_THEME = 'THEME/CHANGE_THEME',
}

const initState = {
  currentTheme: 'some',
}

export const themeReducer = (
  state = initState,
  action: ThemeActionsTypes
): InitStateType => {
  // fix any
  switch (action.type) {
    case THEME.CHANGE_THEME: {
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}

type ChangeThemeACType = {
  type: typeof THEME.CHANGE_THEME
  payload: { currentTheme: string }
}

export const changeTheme = (payload: {
  currentTheme: string
}): ChangeThemeACType => {
  return { type: THEME.CHANGE_THEME, payload }
} // fix any
