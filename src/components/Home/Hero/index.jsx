// import React, { useEffect, useRef, useState } from 'react'
// import styles from './index.module.scss'
// import { IoMdArrowRoundForward } from "react-icons/io";
// import { IoMdArrowRoundBack } from "react-icons/io";
// import { IoArrowUp } from "react-icons/io5";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { motion } from 'framer-motion';


// const initialCards = [
//   { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: 'https://studio.swiperjs.com/demo-images/nature/07.jpg', id: 1, },
//   { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: '/assets/imgs/2.jpeg', id: 2, },
//   { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: '/assets/imgs/3.jpeg', id: 3, },
//   { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: 'https://studio.swiperjs.com/demo-images/nature/07.jpg', id: 4, },
//   { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: '/assets/imgs/4.jpeg', id: 5, },
//   { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: '/assets/imgs/4.jpeg', id: 5, },
//   { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: '/assets/imgs/4.jpeg', id: 5, },
//   { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: '/assets/imgs/4.jpeg', id: 5, },
//   { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: '/assets/imgs/4.jpeg', id: 5, },
//   { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: '/assets/imgs/4.jpeg', id: 5, },

// ];


// const Hero = () => {
//   const [isSwiperInitialized, setIsSwiperInitialized] = useState(false);
//   const [isActive, setIsActive] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [currentSlide, setCurrentSlide] = useState("01");
//   const [cards, setCards] = useState(initialCards);

//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const swiperRef = useRef();


//   useEffect(() => {
//     if (swiperRef.current && prevRef.current && nextRef.current) {
//       swiperRef.current.navigation.init();
//       swiperRef.current.navigation.update();
//       setIsSwiperInitialized(true);
//     }
//   }, [swiperRef, prevRef, nextRef]);

//   const formatFractionCurrent = (number) => {
//     return number < 10 ? `0${number}` : number.toString();
//   };



//   const handleSlideClick = (index) => {
//     setIsActive(false)
//     const clickedCard = cards[index];
//     const reorderedCards = [
//       clickedCard,
//       ...cards.filter((_, i) => i !== index)
//     ];
//     setCards(reorderedCards);
//     setActiveIndex(0);
//     swiperRef.current?.slideTo(0);
//     setIsActive(false)
//   };

//   return (
//     <section id='hero' className={styles.hero}>
//       <div className={styles.full_image}>
//         <img src="https://studio.swiperjs.com/demo-images/nature/07.jpg" alt="" />

//         <div className={styles.noise}>

//         </div>
//       </div>



//       <div className={`${styles.swiper_container} ${isActive ? styles.active : ''}`}>
//         <Swiper
//           ref={swiperRef}
//           modules={[Pagination, Navigation]}
//           navigation={{
//             prevEl: prevRef.current,
//             nextEl: nextRef.current,
//           }}
//           pagination={{
//             clickable: true,
//             type: 'fraction',
//             formatFractionCurrent: (number) => {
//               const formattedNumber = formatFractionCurrent(number);
//               setCurrentSlide(formattedNumber);
//               return formattedNumber;
//             },
//           }}
//           centeredSlides
//           dir={'rtl'}
//           spaceBetween={16}
//           slidesPerView={4.1}
//           className={styles.swiper}
//           initialSlide={activeIndex}
//           onSlideChange={(swiper) => {
//             setActiveIndex(swiper.activeIndex);
//             setIsActive(true);
//           }}

//           onSwiper={(swiper) => {
//             swiperRef.current = swiper;
//             setIsActive(false)
//             if (!isSwiperInitialized) {
//               swiper.navigation.init();
//               swiper.navigation.update();
//             }
//           }}
//         >

//           {cards?.map((card, index) => (
//             <SwiperSlide key={index}>
//               <div className={`${styles.box} ${index === activeIndex ? styles.active : ''}`}
//                 // onClick={() => {
//                 //   setIsActive(false)
//                 //   setActiveIndex(index);
//                 // }}

//                 onClick={() => handleSlideClick(index)}

//               >
//                 <div className={styles.img_container}>
//                   <img src={card.img} alt="" />
//                 </div>

//                 <div className={styles.title}>
//                   <h5>خالق واحد ... معبود واحد</h5>
//                 </div>


//               </div>
//             </SwiperSlide>
//           ))}

//         </Swiper>




//       </div>


//       {!isActive &&
//         <>
//           <motion.div className={styles.sec_title}
//             initial={{ opacity: 0, y: -100 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}>
//             <h1>خالق واحد ... ومعبود واحد</h1>
//           </motion.div>
//         </>
//       }


//       <div className={styles.content_container}>


//         <div className="container">
//           <div className={styles.sec_container}>


//             <div className={styles.text_container}>
//               {!isActive &&
//                 <motion.div
//                   initial={{ opacity: 0, y: 100 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.5 }} className={styles.desc}>
//                   <p>يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.</p>
//                 </motion.div>
//               }

//               <div className={styles.read_more}>
//                 <p>إقرأ المزيد</p>
//                 <div className="icon_container">
//                   <IoArrowUp />
//                 </div>
//               </div>



//               <div className={styles.counter}>

//                 <div className={styles.counter_content}>
//                   <span>{currentSlide}</span>
//                   <hr />
//                 </div>


//                 <div className={styles.buttons}>

//                   <div ref={prevRef} className={styles.left_arrow}>
//                     <IoMdArrowRoundForward />

//                   </div>
//                   <div ref={nextRef} className={styles.right_arrow}>
//                     <IoMdArrowRoundBack />

//                   </div>
//                 </div>


//               </div>

//             </div>






//           </div>
//         </div>

//       </div>



//     </section >
//   )
// }

// export default Hero

import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoArrowUp } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { FaHandPointUp } from "react-icons/fa";


const initialCards = [
  { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: 'https://studio.swiperjs.com/demo-images/nature/07.jpg', id: 1, },
  { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: '/assets/imgs/2.jpeg', id: 2, },
  { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: '/assets/imgs/3.jpeg', id: 3, },
  { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: 'https://studio.swiperjs.com/demo-images/nature/07.jpg', id: 4, },
  { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: '/assets/imgs/4.jpeg', id: 5, },
  { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: '/assets/imgs/4.jpeg', id: 5, },
  { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: '/assets/imgs/4.jpeg', id: 5, },
  { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: '/assets/imgs/4.jpeg', id: 5, },
  { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: '/assets/imgs/4.jpeg', id: 5, },
  { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم.', img: '/assets/imgs/4.jpeg', id: 5, },

];

const breakpoints = {
  1: {
    slidesPerView: 1.6
  },
  400: { slidesPerView: 1.8 },
  500: { slidesPerView: 1.8 },
  600: { slidesPerView: 1.8 },
  700: { slidesPerView: 2.8 },
  800: { slidesPerView: 2.1 },
  850: { slidesPerView: 3.1 },
  900: {
    slidesPerView: 3.1
  },
  1300: { slidesPerView: 4.1 },
}

const HeroApi = () => {
  const [isSwiperInitialized, setIsSwiperInitialized] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState("01");
  const [cards, setCards] = useState(initialCards);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef();


  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
      setIsSwiperInitialized(true);
    }
  }, [swiperRef, prevRef, nextRef]);

  const formatFractionCurrent = (number) => {
    return number < 10 ? `0${number}` : number.toString();
  };



  const handleSlideClick = (index) => {
    setIsActive(false)
    const clickedCard = cards[index];
    const reorderedCards = [
      clickedCard,
      ...cards.filter((_, i) => i !== index)
    ];
    setCards(reorderedCards);
    setActiveIndex(0);
    swiperRef.current?.slideTo(0);
    setIsActive(false)
  };

  return (
    <section id='hero' className={styles.hero}>
      <div className={styles.full_image}>
        <img src={cards[activeIndex].img} alt="" />

        <div className={styles.noise}>

        </div>
      </div>



      <div className={`${styles.swiper_container} ${isActive ? styles.active : ''}`}>
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            clickable: true,
            type: 'fraction',
            formatFractionCurrent: (number) => {
              const formattedNumber = formatFractionCurrent(number);
              setCurrentSlide(formattedNumber);
              return formattedNumber;
            },
          }}
          dir={'rtl'}
          centeredSlides={true}
          // spaceBetween={16}
          // slidesPerView={4.1}
          breakpoints={breakpoints}

          className={styles.swiper}
          initialSlide={activeIndex}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            setIsActive(true);
          }}

          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsActive(false)
            if (!isSwiperInitialized) {
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
        >

          {initialCards?.map((card, index) => (
            <SwiperSlide key={index}>
              <div className={`${styles.box} ${index === activeIndex ? styles.active : ''}`}
                // onClick={() => {
                //   setIsActive(false)
                //   setActiveIndex(index);
                // }}
                onClick={() => handleSlideClick(index)}
              >
                <div className={styles.img_container}>
                  <img src={card.img} alt="" />
                </div>

                <div className={styles.title}>
                  <h5>خالق واحد ... معبود واحد</h5>
                </div>

                <div className={styles.icon_container}>
                  <FaHandPointUp />
                </div>


              </div>
            </SwiperSlide>
          ))}

        </Swiper>




      </div>


      {!isActive &&
        <>
          <motion.div className={styles.sec_title}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <h1>{'خالق واحد ... معبود واحد'}</h1>
          </motion.div>
        </>
      }


      <div className={styles.content_container}>


        <div className="container">
          <div className={styles.sec_container}>


            <div className={styles.text_container}>
              {!isActive &&
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }} className={styles.desc}>
                  <p>{cards[activeIndex].desc}</p>
                </motion.div>
              }

              <div className={styles.read_more}>
                <p>إقرأ المزيد</p>
                <div className="icon_container">
                  <IoArrowUp />
                </div>
              </div>



              <div className={styles.counter}>

                <div className={styles.counter_content}>
                  <span>{currentSlide}</span>
                  <hr />
                </div>


                <div className={styles.buttons}>

                  <div ref={prevRef} className={styles.left_arrow}>
                    <IoMdArrowRoundForward />

                  </div>
                  <div ref={nextRef} className={styles.right_arrow}>
                    <IoMdArrowRoundBack />

                  </div>
                </div>


              </div>

            </div>






          </div>
        </div>

      </div>



    </section >
  )
}

export default HeroApi