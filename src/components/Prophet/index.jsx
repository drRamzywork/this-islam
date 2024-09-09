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



const breakpoints = {
  320: {
    slidesPerView: 2.4,
  },
  380: {
    slidesPerView: 2.4,
  },
  640: {
    slidesPerView: 2.4,
  },
  768: {
    slidesPerView: 3.8,
  },

};



const Prophet = ({ mohamed, whoIsMohamed, mohamedSights, mohamedStories, mohameSaying, desMohamed }) => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const data = [{ title: whoIsMohamed.title, img: whoIsMohamed.image, desc: whoIsMohamed.short_intro }, { title: mohamedSights.title, img: mohamedSights.image, desc: mohamedSights.short_intro }, { title: mohamedStories.title, img: mohamedStories.image, desc: mohamedStories.short_intro }, { title: mohameSaying.title, img: mohameSaying.image, desc: mohameSaying.short_intro }, { title: desMohamed.title, img: desMohamed.image, desc: desMohamed.short_intro }]





  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };


  const handleSlideClick = (index) => {
    swiperRef?.current?.slideTo(index);
    setActiveSlide(index);
  };

  const handleSectionClick = (index) => {
    setActiveSection(index);
    setActiveSlide(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };


  const [title_1, ...rest] = mohamed.split(' ');

  const title_2 = rest.join(' ');

  return (
    <>
      <section id='prophet' className={styles.prophet}>
        <div className="container">

          <div className={styles.sec_container}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={styles.text_container}>
              <div className={styles.title}>
                <h2><span>{title_1}</span> {` `} {title_2}</h2>

                <div className={styles.icon_container}>
                  <img src="/assets/svgs/sec_icon_title.svg" alt="" />
                </div>
              </div>

              <div className={styles.desc}>
                <p>
                  الرسول محمد ﷺ هو خاتم الأنبياء، أرسله الله رحمةً للعالمين ليخرج البشرية من الظلمات إلى النور، وقد بلغ رسالة الإسلام بصدق وأمانة، وهو القدوة الكاملة في الأخلاق والتواضع والعدل.                </p>

              </div>
            </motion.div>

            <div className={styles.swiper_container}>
              <Swiper
                spaceBetween={24}
                pagination={{ clickable: true }}
                dir="rtl"
                modules={[Navigation, FreeMode]}
                initialSlide={1}
                onSwiper={(swiper) => swiperRef.current = swiper}
                onSlideChange={handleSlideChange}
                breakpoints={breakpoints}
              >
                {data.map((box, index) => (
                  <SwiperSlide key={index} >
                    <div onClick={() => handleSlideClick(index)} className={`${styles.box_container} ${activeSlide === index ? styles.active : ''}`}>
                      <div className={styles.title}>
                        <p>{box.title}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className={styles.active_section}>
                <motion.div
                  key={activeSlide}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 1, type: "tween" }} className={styles.img_container}>
                  <img src={data[activeSlide].img} alt="" />
                </motion.div>

                <div className={styles.text_container}>
                  <motion.div initial={{ x: -50 }}
                    whileInView={{ x: 0 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 1, type: "tween" }} className={styles.title}>
                    <h3>
                      {data[activeSlide].title}
                    </h3>
                  </motion.div>


                  <motion.div initial={{ x: 50 }}
                    whileInView={{ x: 0 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 1, type: "tween" }} className={styles.desc}><p>{data[activeSlide].desc}</p></motion.div>


                  <div className={styles.button_container}>
                    <p>اقرأ المزيد</p>

                    <IoArrowUp />
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default Prophet