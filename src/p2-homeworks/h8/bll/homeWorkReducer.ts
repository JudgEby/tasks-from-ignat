export type StateType = PeopleType[]
export type PeopleType = { _id: number; name: string; age: number }
export type ActionType = { type: ActionsTypesType; payload: PayloadsType }

export type ActionsTypesType = 'sort' | 'check'
export type PayloadsType = 'up' | 'down' | number

export const homeWorkReducer = (
  state: StateType,
  action: ActionType
): StateType => {
  // need to fix any
  switch (action.type) {
    case 'sort': {
      if (action.payload === 'up') {
        const newState = [...state]
        return newState.sort((a: PeopleType, b: PeopleType) => {
          const nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase()
          if (nameA < nameB)
            //сортируем строки по возрастанию
            return -1
          if (nameA > nameB) return 1
          return 0 // Никакой сортировки
        })
      }
      if (action.payload === 'down') {
        const newState = [...state]
        return newState.sort((a: PeopleType, b: PeopleType) => {
          const nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase()
          if (nameA > nameB)
            //сортируем строки по убыванию
            return -1
          if (nameA < nameB) return 1
          return 0 // Никакой сортировки
        })
      }
      return state
    }
    case 'check': {
      // need to fix
      return state.reduce(
        (res: StateType, p: PeopleType) =>
          p.age >= action.payload ? [...res, p] : [...res],
        []
      )
    }
    default:
      return state
  }
}
