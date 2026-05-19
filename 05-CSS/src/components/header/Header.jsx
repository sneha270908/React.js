import React from 'react'
import Styles from './header.module.css'

const Header = () => {
  return (
    <div className={Styles.head}>
        <h3>Hello</h3>
        <button>login</button>
    </div>
  )
}

export default Header