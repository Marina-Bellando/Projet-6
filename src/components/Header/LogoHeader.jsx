import React from 'react'
import logo from '../../assets/LogoHeader.png'
import '../../style/LogoHeader.scss'

const LogoHeader = () => {
  return (
    <div className="LogoHeader">
      <img src={logo} alt="Logo Kasa" />
    </div>
  )
}

export default LogoHeader
