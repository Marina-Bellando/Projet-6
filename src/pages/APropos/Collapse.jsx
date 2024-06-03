import React, { useState } from 'react'
import '../../style/Collapse.scss'
import chevronIcon from '../../assets/Chevron.png'

const Collapse = ({ title, children, customClass = '' }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`collapseAPropos ${customClass}`}>
      <div className="collapseAPropos-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img
          src={chevronIcon}
          alt="Chevron"
          className={`collapseAPropos-icon ${isOpen ? 'rotate' : ''}`}
        />
      </div>
      <div className={`collapseAPropos-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default Collapse
