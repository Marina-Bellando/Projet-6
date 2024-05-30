import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './LogoHeader'
import '../../style/Header.scss'

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active">
              Accueil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/APropos" activeClassName="active">
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
