import React from 'react';
import { IoArrowUp } from 'react-icons/io5';
import styles from './index.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';

const quran = ({ quran, title_main1, title_main2, dir, read_moreBtn }) => {

  const title = quran?.section_1?.title;
  const desc = quran?.section_1?.text;

  const title_2 = quran?.section_2?.title;
  const desc_2 = quran?.section_2?.text;
  const img_2 = quran?.section_2?.image;

  const title_3 = quran?.section_3?.title;
  const desc_3 = quran?.section_3?.text;
  const img_3 = quran?.section_3?.image;


  return (
    <>
      <section id='quran' className={styles.quran} dir={dir}>
        <div className="container">
          <div className={styles.sec_container}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.text_container}>

              <div className={styles.title}>
                <h2>
                  <span>{title_main1}</span>
                  {` `}
                  {title_main2}
                </h2>
                <div className={styles.icon_container}>
                  <img src="/assets/svgs/sec_icon_title.svg" alt="" />

                </div>
              </div>

              <div className={styles.desc}>
                <p>{desc}</p>
              </div>

            </motion.div>
            <div className={styles.content_container}>
              <div className={styles.text_container}>
                <motion.div initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 1, type: "tween" }} className={styles.title}>
                  <div className={styles.icon_container}>
                    <img src="/assets/svgs/title_icon.svg" alt="" />
                  </div>
                  <h3>{title_2}</h3>


                </motion.div>

                <div className="mobile">
                  <motion.div initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 1, type: "tween" }} className={styles.img_container}>
                    <img src={img_2} alt="" />
                  </motion.div>

                </div>


                <motion.div initial={{ x: 50 }}
                  whileInView={{ x: 0 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 1, type: "tween" }} className={styles.desc}>
                  <p>{desc_2}</p>

                  <Link target='_blank' href={`/where-does-the-quran-come-from`} className={styles.button_container}>
                    <p>{read_moreBtn}</p>

                    <div className={styles.icon_container}>
                      <IoArrowUp />
                    </div>
                  </Link>

                </motion.div>
              </div>



              <div className="desktop">
                <motion.div initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 1, type: "tween" }} className={styles.img_container}>
                  <img src={img_2} alt="" />
                </motion.div>
              </div>

            </div>
            <div className={styles.content_container}>

              <div className="desktop">

                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 1, type: "tween" }}
                  className={styles.img_container}>
                  <img src={img_3} alt="" />
                </motion.div>
              </div>

              <div className={styles.text_container}>
                <motion.div initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 1, type: "tween" }} className={styles.title}>
                  <div className={styles.icon_container}>
                    <img src="/assets/svgs/title_icon.svg" alt="" />
                  </div>
                  <h3>{title_3}</h3>
                </motion.div>
                <div className="mobile">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 1, type: "tween" }}
                    className={styles.img_container}>
                    <img src={img_3} alt="" />
                  </motion.div>
                </div>

                <motion.div initial={{ x: 50 }}
                  whileInView={{ x: 0 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 1, type: "tween" }} className={styles.desc}>
                  <p>{desc_3?.replace(/&nbsp;/g, " ")}</p>
                  <Link target='_blank' href={`/the-quran-the-eternal-miracle-of-islam`} className={styles.button_container}>
                    <p>{read_moreBtn}</p>

                    <div className={styles.icon_container}>
                      <IoArrowUp />
                    </div>
                  </Link>

                </motion.div>


              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default quran;