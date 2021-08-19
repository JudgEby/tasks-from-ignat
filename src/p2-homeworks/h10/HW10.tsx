import React from 'react'
import styles from './HW10.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { useDispatch, useSelector } from 'react-redux'
import { AppStoreType } from './bll/store'
import { loadingAC } from './bll/loadingReducer'

function HW10() {
  // useSelector, useDispatch
  const loading = useSelector<AppStoreType, boolean>(
    (state) => state.loading.isLoading
  )

  const dispatch = useDispatch()

  const setLoading = () => {
    dispatch(loadingAC({ isLoading: true }))
    setTimeout(() => {
      dispatch(loadingAC({ isLoading: false }))
    }, 2000)
  }

  return (
    <div>
      <hr />
      homeworks 10
      {/*should work (должно работать)*/}
      {loading ? (
        <div className={styles.ldsRoller}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      ) : (
        <div>
          <SuperButton onClick={setLoading}>set loading...</SuperButton>
        </div>
      )}
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr />
    </div>
  )
}

export default HW10
