type InitStateType = typeof initState

export type LoadingActionsTypes = LoadingACType

enum IS_LOADING {
  IS_LOADING = 'IS_LOADING',
}

const initState = {
  isLoading: false,
}

export const loadingReducer = (
  state = initState,
  action: LoadingActionsTypes
): InitStateType => {
  // fix any
  switch (action.type) {
    case IS_LOADING.IS_LOADING: {
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}

type LoadingACType = {
  type: typeof IS_LOADING.IS_LOADING
  payload: { isLoading: boolean }
}

export const loadingAC = (payload: { isLoading: boolean }): LoadingACType => ({
  type: IS_LOADING.IS_LOADING,
  payload,
}) // fix any
