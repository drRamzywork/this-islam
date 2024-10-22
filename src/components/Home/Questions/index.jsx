import React, { useRef, useState } from 'react'
import styles from './index.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoArrowUp } from 'react-icons/io5';
import { RiMenuAddLine } from "react-icons/ri";


const Questions = ({
  questions }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const data = [
    { title: questions?.parent.body_object[1]?.list_p?.title_bold || questions?.parent.body_object[2]?.list_p?.title_bold, },
    { title: questions?.parent.body_object[2]?.list_p?.title_bold || questions?.parent.body_object[2]?.paragraph?.title_bold, },
    { title: questions?.parent.body_object[3]?.list_p?.title_bold || questions?.parent.body_object[2]?.list_p?.title_bold, },
    { title: questions?.parent.body_object[4]?.list_p?.title_bold || questions?.parent.body_object[2]?.list_p?.title_bold, },
  ]

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };

  const secTitle = questions?.parent.title;
  const words = secTitle.replace(/\.+$/, "").split(" ");
  const firstWord = words[0];
  const restOfTitle = words.slice(1).join(" ");

  return (
    <>
      <section id='prophet' className={styles.prophet} >
        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }} className={styles.text_container}>
            <div className={styles.title}>
              <h2><span>{firstWord}</span>  {restOfTitle}</h2>

              <div className={styles.icon_container}>
                <img src="/assets/svgs/sec_icon_title.svg" alt="" />
              </div>
            </div>

            <div className={styles.desc}>
              <p>
                {questions?.parent.short_intro}
              </p>
            </div>
          </motion.div>

        </div>


        <div className={styles.bg}>

          <div className="container">
            <div className={styles.sec_container}>


              <div className={styles.active_section}>
                <motion.div initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 1, type: "tween" }} className={styles.img_container}>
                  <img src="/assets/svgs/question.svg" alt="" />
                </motion.div>


              </div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={styles.swiper_container}>
                {data.map((question, index) =>
                  <div key={index} onClick={() => handleSlideClick(index)} className={`${styles.box_container} ${activeSlide === index ? styles.active : ''}`}>
                    <div className={styles.icon}>
                      <RiMenuAddLine />
                    </div>
                    <div className={styles.title}>
                      <p>{question.title}</p>
                    </div>
                  </div>

                )}
              </motion.div>
            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default Questions