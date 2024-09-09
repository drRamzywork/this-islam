import React from 'react'
import Link from 'next/link'
import styles from './index.module.scss'
const Footer = ({ dir }) => {
  return (
    <footer className={styles.footer} dir={dir}>
      <div className="container">

        <div className={styles.sec_container}>
          <div className={styles.header}>
            <Link href={'#'} className={styles.logo}>
              <img src="/assets/imgs/white_logo.png" alt="this islam" />
            </Link>
            <div className={styles.social_media}>
              <ul>
                <li>
                  <img src="/assets/svgs/instagram.svg" alt="this islam" />
                </li>
                <li>
                  <img src="/assets/svgs/facebook.svg" alt="this islam" />
                </li>
                <li>
                  <img src="/assets/svgs/whatsapp.svg" alt="this islam" />
                </li>
                <li>
                  <img src="/assets/svgs/twitter.svg" alt="this islam" />
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className={styles.copyright}>
            &copy;جميع الحقوق محفوظة لهذا هو الاسلام 2024@
          </div>
        </div>
      </div>

    </footer >
  )
}

export default Footer