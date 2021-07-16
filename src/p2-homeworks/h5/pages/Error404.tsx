import React from 'react'
import style from './Error404.module.css'

function Error404() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.errorCode}>404</div>
        <div className={style.errorMessage}>Page not found!</div>
        <div className={style.errorMessage}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
      </div>
    </div>
  )
}

export default Error404
