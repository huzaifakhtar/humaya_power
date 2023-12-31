import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_wrapper}>
        <div className={styles.logo}>
          {/* <!-- Navbar Logo --> */}
          <Link href="/"><a><img src="/Humaya Logo.png" alt="" /></a></Link>
        </div>
        <ul>
          {/* <!-- Navbar Links --> */}
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/blog'>Blog</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
        </ul>
      </div>
      <div>
        {/* <!-- Menu Icon --> */}
        <div className={styles.menuIcon}>
          <span className={`${styles.icon} ${styles.icon_bars}`}></span>
          <span className={`${styles.icon} ${styles.icon_bars} ${styles.overlay}`}></span>
        </div>

        <div className={styles.overlay_menu}>
          <ul>
            {/* <!-- Navbar Links --> */}
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/about'><a>About</a></Link></li>
            <li><Link href='/blog'><a>Blog</a></Link></li>
            <li><Link href='/contact'><a>Contact</a></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 

