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

const data = ['من هو؟', 'الرسول ف نظر المنصفين ', 'قصص الرسول', 'أقوال الرسول', 'وصف القرآن للرسول', 'وصف القرآن للرسول']
const Prophet = () => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

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


  return (
    <>
      <section id='prophet' className={styles.prophet}>
        <div className="container">

          <div className={styles.sec_container}>
            <div className={styles.text_container}>
              <div className={styles.title}>
                <h2><span>محمد</span>  رسول الله</h2>

                <div className={styles.icon_container}>
                  <img src="/assets/svgs/sec_icon_title.svg" alt="" />
                </div>
              </div>

              <div className={styles.desc}>
                <p>أركان الإسلام تمثل الأسس الأساسية التي يقوم عليها الدين الإسلامي، وهي تعاليم إلزامية يجب على كل مسلم الالتزام بها لضمان تحقيق إيمانه بالشكل الصحيح وتوطيد علاقته بالله تعالى.</p>
              </div>
            </div>

            <div className={styles.swiper_container}>
              <Swiper
                spaceBetween={24}
                slidesPerView={3.8}
                pagination={{ clickable: true }}
                dir="rtl"
                modules={[Navigation, FreeMode]}
                initialSlide={1}
                onSwiper={(swiper) => swiperRef.current = swiper}
                onSlideChange={handleSlideChange}

              // centeredSlides={true}
              >
                {data.map((box, index) => (
                  <SwiperSlide key={index} >
                    <div onClick={() => handleSlideClick(index)} className={`${styles.box_container} ${activeSlide === index ? styles.active : ''}`}>
                      <div className={styles.title}>
                        <p>{box}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>


              <div className={styles.active_section}>
                <div className={styles.img_container}>
                  <img src="/assets/imgs/8.jpeg" alt="" />
                </div>

                <div className={styles.text_container}>
                  <div className={styles.title}>
                    <h3>من هو رسول الاسلام ؟</h3></div>


                  <div className={styles.desc}><p>محمد هو اسم نبي الإسلام..وهو أحد أكثر الأسماء انتشارًا حول العالم اليوم، ومعناه الذي يحمده الناس ويثنون عليه لأخلاقه وأفعاله..فمن هو محمد ؟ اسمُ رسول الإسلام: محمد بن عبد الله بن عبد المطلب بن هاشم القرشي 570-632م ويعتقد المسلمون جميعاً أنه رسول الله إلى الناس جميعاً</p></div>


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