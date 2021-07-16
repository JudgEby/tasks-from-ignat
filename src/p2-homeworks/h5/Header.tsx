import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from './Routes'
import style from './Header.module.css'

function Header() {
  return (
    <div className={style.header}>
      <NavLink
        to={PATH.PRE_JUNIOR}
        activeClassName={style.active}
        className={style.link}
      >
        Pre Junior
      </NavLink>
      <NavLink
        to={PATH.JUNIOR}
        activeClassName={style.active}
        className={style.link}
      >
        Junior
      </NavLink>
      <NavLink
        to={PATH.JUNIOR_PLUS}
        activeClassName={style.active}
        className={style.link}
      >
        Junior+
      </NavLink>
      <div className={style.block} />
    </div>
  )
}

export default Header
