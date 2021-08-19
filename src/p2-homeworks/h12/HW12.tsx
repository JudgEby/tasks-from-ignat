import React from 'react'
import s from './HW12.module.css'
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio'
import { AppStoreType } from '../h10/bll/store'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from './bll/themeReducer'

const themes = ['dark', 'red', 'some', 'blue', 'chocolate']

function HW12() {
  const theme = useSelector<AppStoreType, string>(
    (state) => state.themes.currentTheme
  )
  const dispatch = useDispatch()
  // useDispatch, onChangeCallback
  const onChangeCallback = (value: string) => {
    dispatch(changeTheme({ currentTheme: value }))
  }
  return (
    <div className={s[theme]}>
      <hr />
      <span className={s[theme + '-text']}>homeworks 12</span>
      <SuperRadio options={themes} onChangeOption={onChangeCallback} />
      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}

      <hr />
    </div>
  )
}

export default HW12
