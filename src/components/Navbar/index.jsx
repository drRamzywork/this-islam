import React from 'react';
import styles from './index.module.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";


const Navbar = () => {
  return (
    <nav id='navbar' className={styles.navbar}  >
      <div className="container">
        <div className={styles.sec_container}>
          <div className={styles.logo}>
            <img src="/assets/imgs/white_logo.png" alt="logo this is islam" />
          </div>

          <div className={styles.settings_container}>
            <div className={styles.icon_container}>
              <GiHamburgerMenu />
            </div>
            <div className={styles.icon_container}>
              <MdLanguage />
            </div>
          </div>
        </div>
      </div >
    </nav>
  )
}

export default Navbar