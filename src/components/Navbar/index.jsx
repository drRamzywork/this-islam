import React, { useState } from 'react';
import styles from './index.module.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";
import SimpleBar from 'simplebar-react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
const Navbar = ({ allTopics, allLangs, dir }) => {
  const { locale, asPath } = useRouter()
  const [topicsMenu, setTopicsMenu] = useState(false);
  const [LangsMenu, setLangsMenu] = useState(false);

  return (
    <nav id='navbar' className={styles.navbar} dir={dir}>
      <div className="container">
        <div className={styles.sec_container}>
          <div className={styles.logo}>
            <img src="/assets/imgs/white_logo.png" alt="logo this is islam" />
          </div>

          <div className={styles.settings_container}>
            <div className={styles.icon_container} onClick={() => setTopicsMenu(prev => !prev)}>
              <GiHamburgerMenu />
            </div>


            <div className={styles.icon_container} onClick={() => setLangsMenu(prev => !prev)}>
              <MdLanguage />
            </div>
          </div>
        </div>
      </div >

      {topicsMenu &&
        <motion.div
          animate={locale === 'ar' ? { x: [300, 0] } : { x: [-300, 0] }}
          transition={{ duration: 0.5, ease: "easeOut" }}

          className={styles.menu_container}>
          <div className={styles.close_btn} onClick={() => setTopicsMenu(false)}>
            <img src="/assets/svgs/close_btn.svg" alt="" />
          </div>

          <SimpleBar
            style={{
              height: "100%",
              overflowX: "hidden",
            }}
          >
            <ul>
              {allTopics.map((topic, idx) =>
                <li key={idx}>
                  <a href="#">
                    {topic.title}
                  </a>
                </li>
              )}
            </ul>
          </SimpleBar>
        </motion.div>
      }

      {LangsMenu &&
        <motion.div
          animate={locale === 'ar' ? { x: [300, 0] } : { x: [-300, 0] }}
          transition={{ duration: 0.5, ease: "easeOut" }}

          className={styles.menu_container}>
          <div className={styles.close_btn} onClick={() => setLangsMenu(false)}>
            <img src="/assets/svgs/close_btn.svg" alt="" />
          </div>

          <SimpleBar
            style={{
              height: "100%",
              overflowX: "hidden",
            }}
          >
            <ul>
              {allLangs.map((lang, idx) =>
                <li key={idx} className={lang.code === locale && styles.active}>
                  <a href={`/${lang.code}${asPath}`}>
                    {lang.native}
                  </a>
                </li>
              )}
            </ul>
          </SimpleBar>
        </motion.div>
      }
      {
        (topicsMenu || LangsMenu) &&
        <div className={styles.layer} onClick={() => {
          setTopicsMenu(false);
          setLangsMenu(false);
        }} />
      }
    </nav >
  )
}

export default Navbar