import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './LogoHeader'
import '../../style/Header.scss'

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link to="/APropos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
