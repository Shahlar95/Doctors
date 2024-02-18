import React from 'react'
import styles from './_Header.module.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <section className={styles.header}>
      <div className="container">
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'car'}>Cars</Link></li>
          <li><Link to={'time'}>Time</Link></li>
        </ul>
      </div>
    </section>
  )
}

export default Header