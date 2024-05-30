import React from 'react'
import LogoFooter from '../../assets/LogoFooter.png'
import '../../style/Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <img src={LogoFooter} alt="Logo Kasa" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
