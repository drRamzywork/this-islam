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


const Prophet = ({ dir, mohamed, whoIsMohamed, mohamedSights, mohamedStories, mohameSaying, desMohamed, prophetDesc, read_moreBtn }) => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const data = [
    { title: whoIsMohamed?.title, slug: whoIsMohamed?.slug, img: whoIsMohamed?.image, desc: whoIsMohamed?.short_intro },
    { title: mohamedSights?.title, slug: mohamedSights?.slug, img: mohamedSights?.image, desc: mohamedSights?.short_intro },
    { title: mohamedStories?.title, slug: mohamedStories?.slug, img: mohamedStories?.image, desc: mohamedStories?.short_intro },
    { title: mohameSaying?.title, slug: mohameSaying?.slug, img: mohameSaying?.image, desc: mohameSaying?.short_intro },
    { title: desMohamed?.title, slug: desMohamed?.slug, img: desMohamed?.image, desc: desMohamed?.short_intro }
  ].filter((item) => item.title); // Filter out any undefined items

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handleSlideClick = (index) => {
    swiperRef?.current?.slideTo(index);
    setActiveSlide(index);
  };

  const [title_1, ...rest] = mohamed?.split(' ') || [];
  const title_2 = rest?.join(' ');

  return (
    <section id='prophet' className={styles.prophet} dir={dir}>
      <div className="container">
        <div className={styles.sec_container}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.text_container}
          >
            <div className={styles.title}>
              <h2><span>{title_1}</span> {` `} {title_2}</h2>
              <div className={styles.icon_container}>
                <img src="/assets/svgs/sec_icon_title.svg" alt="" />
              </div>
            </div>
            <div className={styles.desc}>
              <p>{prophetDesc || "No description available."}</p>
            </div>
          </motion.div>

          {data.length > 0 && (
            <div className={styles.swiper_container}>
              <Swiper
                spaceBetween={24}
                pagination={{ clickable: true }}
                dir={dir}
                modules={[Navigation, FreeMode]}
                initialSlide={0}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
                breakpoints={breakpoints}
              >
                {data.map((box, index) => (
                  <SwiperSlide key={index}>
                    <div onClick={() => handleSlideClick(index)} className={`${styles.box_container} ${activeSlide === index ? styles.active : ''}`}>
                      <div className={styles.title}>
                        <p>{box?.title || "Untitled"}</p>
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
                  transition={{ duration: 1, type: "tween" }}
                  className={styles.img_container}
                >
                  <img src={data[activeSlide]?.img || "/assets/default.jpg"} alt="" />
                </motion.div>

                <div className={styles.text_container}>
                  <motion.div
                    initial={{ x: -50 }}
                    whileInView={{ x: 0 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 1, type: "tween" }}
                    className={styles.title}
                  >
                    <h3>{data[activeSlide]?.title || "Untitled"}</h3>
                  </motion.div>

                  <motion.div
                    initial={{ x: 50 }}
                    whileInView={{ x: 0 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 1, type: "tween" }}
                    className={styles.desc}
                  >
                    <p>{data[activeSlide]?.desc || "No description available."}</p>
                  </motion.div>

                  <Link href={data[activeSlide]?.slug || "#"} target='_blank' className={styles.button_container}>
                    <p>{read_moreBtn || "Read more"}</p>
                    <IoArrowUp />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Prophet;


// const Prophet = ({ dir, mohamed, whoIsMohamed, mohamedSights, mohamedStories, mohameSaying, desMohamed, prophetDesc, read_moreBtn }) => {
//   const swiperRef = useRef(null);
//   const [activeSlide, setActiveSlide] = useState(0);
//   const data = [{ title: whoIsMohamed?.title, slug: whoIsMohamed?.slug, img: whoIsMohamed?.image, desc: whoIsMohamed?.short_intro },

//   { title: mohamedSights?.title, slug: mohamedSights?.slug, img: mohamedSights?.image, desc: mohamedSights?.short_intro },

//   { title: mohamedStories?.title, slug: mohamedStories?.slug, img: mohamedStories?.image, desc: mohamedStories?.short_intro },

//   { title: mohameSaying?.title, slug: mohameSaying?.slug, img: mohameSaying?.image, desc: mohameSaying?.short_intro },

//   { title: desMohamed?.title, slug: desMohamed?.slug, img: desMohamed?.image, desc: desMohamed?.short_intro }]

//   const handleSlideChange = (swiper) => {
//     setActiveSlide(swiper.activeIndex);
//   };

//   const handleSlideClick = (index) => {
//     swiperRef?.current?.slideTo(index);
//     setActiveSlide(index);
//   };

//   const [title_1, ...rest] = mohamed?.split(' ') || [];;
//   const title_2 = rest?.join(' ');


//   return (
//     <>
//       <section id='prophet' className={styles.prophet} dir={dir}>
//         <div className="container">

//           <div className={styles.sec_container}>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className={styles.text_container}>
//               <div className={styles.title}>
//                 <h2><span>{title_1}</span> {` `} {title_2}</h2>

//                 <div className={styles.icon_container}>
//                   <img src="/assets/svgs/sec_icon_title.svg" alt="" />
//                 </div>
//               </div>

//               <div className={styles.desc}>
//                 <p>
//                   {prophetDesc}
//                 </p>

//               </div>
//             </motion.div>

//             <div className={styles.swiper_container}>
//               <Swiper
//                 spaceBetween={24}
//                 pagination={{ clickable: true }}
//                 dir={dir}
//                 modules={[Navigation, FreeMode]}
//                 initialSlide={1}
//                 onSwiper={(swiper) => swiperRef.current = swiper}
//                 onSlideChange={handleSlideChange}
//                 breakpoints={breakpoints}
//               >
//                 {data.map((box, index) => (
//                   <SwiperSlide key={index} >
//                     <div onClick={() => handleSlideClick(index)} className={`${styles.box_container} ${activeSlide === index ? styles.active : ''}`}>
//                       <div className={styles.title}>
//                         <p>{box?.title}</p>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>

//               <div className={styles.active_section}>
//                 <motion.div
//                   key={activeSlide}
//                   initial={{ scale: 0.5, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   exit={{ scale: 0 }}
//                   transition={{ duration: 1, type: "tween" }} className={styles.img_container}>
//                   <img src={data[activeSlide].img} alt="" />
//                 </motion.div>

//                 <div className={styles.text_container}>
//                   <motion.div initial={{ x: -50 }}
//                     whileInView={{ x: 0 }}
//                     exit={{ scale: 0 }}
//                     transition={{ duration: 1, type: "tween" }} className={styles.title}>
//                     <h3>
//                       {data[activeSlide].title}
//                     </h3>
//                   </motion.div>


//                   <motion.div initial={{ x: 50 }}
//                     whileInView={{ x: 0 }}
//                     exit={{ scale: 0 }}
//                     transition={{ duration: 1, type: "tween" }} className={styles.desc}><p>{data[activeSlide].desc}</p></motion.div>


//                   <Link href={data[activeSlide].slug} target='_blank' className={styles.button_container}>
//                     <p>{read_moreBtn}</p>

//                     <IoArrowUp />
//                   </Link>
//                 </div>

//               </div>

//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   )
// }

// export default Prophet