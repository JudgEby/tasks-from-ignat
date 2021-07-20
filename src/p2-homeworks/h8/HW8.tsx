import React, { useState } from 'react'
import { homeWorkReducer, PeopleType, StateType } from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './HW8.module.css'

const initialPeople = [
  { _id: 0, name: 'Кот', age: 3 },
  { _id: 1, name: 'Александр', age: 66 },
  { _id: 2, name: 'Коля', age: 16 },
  { _id: 3, name: 'Виктор', age: 44 },
  { _id: 4, name: 'Дмитрий', age: 40 },
  { _id: 5, name: 'Ирина', age: 55 },
]

function HW8() {
  const [people, setPeople] = useState<StateType>(initialPeople) // need to fix any

  // need to fix any
  const finalPeople = people.map((p: PeopleType) => (
    <div key={p._id} className={styles.people}>
      <span className={styles.name}>{p.name}</span>
      <span className={styles.age}>{p.age}</span>
    </div>
  ))

  const sortUp = () =>
    setPeople(homeWorkReducer(initialPeople, { type: 'sort', payload: 'up' }))

  const sortDown = () => {
    setPeople(homeWorkReducer(initialPeople, { type: 'sort', payload: 'down' }))
  }

  const checkByAge = () => {
    setPeople(homeWorkReducer(initialPeople, { type: 'check', payload: 18 }))
  }

  return (
    <div>
      <hr />
      homeworks 8{/*should work (должно работать)*/}
      <div className={styles.list}>{finalPeople}</div>
      <div>
        <SuperButton className={styles.button} onClick={sortUp}>
          sort up
        </SuperButton>
        <SuperButton className={styles.button} onClick={sortDown}>
          sort down
        </SuperButton>
        <SuperButton className={styles.button} onClick={checkByAge}>
          check 18
        </SuperButton>
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativePeople/>*/}
      <hr />
    </div>
  )
}

export default HW8
