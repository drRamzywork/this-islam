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

const data = [
  { title: 'ما الحكاية ؟ من أنا ؟', },
  { title: 'من أين جئت ؟', },
  { title: 'الى أين أذهب ؟', },
  { title: 'ما مصيري ؟', },
  { title: 'ما الهدف من كل هذا الوجود ؟', },
  { title: 'ولم كل هذا اللُّهَاث في الدنيا إن كانت النهاية موتا وترابا وعدما ؟', },
]
const Questions = () => {
  const [activeSlide, setActiveSlide] = useState(0);



  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };

  const handleSectionClick = (index) => {
    setActiveSection(index);
    setActiveSlide(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };


  return (
    <>
      <section id='prophet' className={styles.prophet}>
        <div className="container">

          <div className={styles.text_container}>
            <div className={styles.title}>
              <h2><span>أسئلة</span>  شائعة تؤرقنا</h2>

              <div className={styles.icon_container}>
                <img src="/assets/svgs/sec_icon_title.svg" alt="" />
              </div>
            </div>

            <div className={styles.desc}>
              <p>من منا لم يتوقف لحظة في أثناء عمره ليسأل نفسه.. </p>
            </div>
          </div>
        </div>


        <div className={styles.bg}>

          <div className="container">
            <div className={styles.sec_container}>


              <div className={styles.active_section}>
                <div className={styles.img_container}>
                  <img src="/assets/svgs/question.svg" alt="" />
                </div>


              </div>

              <div className={styles.swiper_container}>
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



              </div>
            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default Questions