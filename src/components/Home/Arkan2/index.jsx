import React, { useState } from 'react'
import styles from './index.module.scss'
import { IoArrowUp } from 'react-icons/io5'
import Pray from '@/public/assets/svgs/Pray'
import { motion } from 'framer-motion'
import Hand from '@/public/assets/svgs/Hand'
import Meal from '@/public/assets/svgs/Meal'
import Moon from '@/public/assets/svgs/Moon'
import Kaaba from '@/public/assets/svgs/Kaaba'


const Arkan2 = ({ arkan, home, testimonyTitle, dir }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const title = arkan?.parent?.title?.replace(/:/g, " ");
  const sectionDesc = arkan?.parent?.short_intro?.replace(/:/g, " ");
  const title1 = home?.quran?.islam[0]?.title;
  const title2 = home?.quran?.islam[1]?.title.replace(/:/g, " ");
  const title3 = home?.quran?.islam[2]?.title;
  const title4 = home?.quran?.islam[3]?.title;

  const arkanTitle = arkan?.children[0]?.title?.replace(/:/g, " ");
  const arkanDesc = arkan?.children[0]?.body_object[0]?.paragraph.content;
  const desc1 = home?.quran?.islam[0]?.text;
  const desc2 = home?.quran?.islam[1]?.text.replace(/:/g, " ");
  const desc3 = home?.quran?.islam[2]?.text;
  const desc4 = home?.quran?.islam[3]?.text;

  const data = [
    { title: title1, desc: desc1, icon: <Pray /> },
    { title: title2, desc: desc2, icon: <Meal /> },
    { title: title3, desc: desc3, icon: <Moon /> },
    { title: title4, desc: desc4, icon: <Kaaba /> },
    {
      title: testimonyTitle,
      icon: <Hand />
    },
  ]

  const hanldeClick = (index) => { setActiveIndex(index) }
  console.log(arkan?.children[0]?.body_object[0]?.paragraph.content, "arkan?.children[0]?.body_object[0]?.paragraph")

  return (
    <>
      <section id='arkan' className={styles.arkan} dir={dir}>
        <div className={styles.bg}>
          <img src="/assets/svgs/bg_shape.svg" alt="" />
        </div>





        <div className={styles.sec_container}>
          <div className="container">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.5 }} className={styles.text_container}>
              <div className={styles.title}>
                <h2>{title}</h2>

                <div className={styles.icon_container}>
                  <img src="/assets/svgs/sec_icon_title.svg" alt="" />
                </div>
              </div>

              <div className={styles.desc}>
                <p>{sectionDesc}</p>
              </div>
            </motion.div>
          </div>


          < motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 200 : -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.arkan}>
            <h3>{arkanTitle}</h3>
            <p>{arkanDesc}</p>
          </ motion.div >


          <div className="container">
            <motion.div className={styles.content_container}
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}>


              <motiondiv className={styles.boxes_container}>
                {data.map((box, idx) =>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}

                    className={styles.box} key={idx}>
                    <div className={styles.shape_container}>
                      <img src="/assets/imgs/arkan_shape.png" alt="" />
                    </div>

                    <div className={styles.content}>
                      <div className={styles.circle_container}>
                        {box.icon}

                      </div>

                      <h6 >{box.title}</h6>
                    </div>



                  </motion.div>
                )}

              </motiondiv>



            </motion.div>

          </div>

        </div>

      </section >
    </>
  )
}

export default Arkan2

