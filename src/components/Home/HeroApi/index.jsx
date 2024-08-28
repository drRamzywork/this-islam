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
import { FaHandPointUp } from 'react-icons/fa';


const initialCards = [
  { desc: 'تعتبر فلسفة الخطأ والصواب أحد أهم الإشكالات الفكرية في عدد من الديانات والعقائد، وتختلف تلك العقائد فيما بينها في طريقة تعاملها مع الخطأ والذنب والتوبة والندم. وينظر الإسلام بميزان دقيق إلى الطبيعة البشرية التي خلقها الله وجعل فيها نوازع الخير والشر، فهو لا يتعامل معها باعتبارها مَلَكاً', img: '/assets/imgs/home_screen5.png', id: 1, title: 'الخطيئة والتوبة' },

  { desc: 'يعتبر عيسى -عليه السلام- من أهم الشخصيات عبر التاريخ، ومن أعظم من قدموا الخير للإنسانية، واختلف الناس في الموقف منه بين من جعله إلهاً، أو ابناً للرب، وبين من عاداه ورماه بالنقائص والاتهامات الباطلة، فما موقف الإسلام من عيسى -عليه السلام-؟', img: '/assets/imgs/home_screen4.png', id: 2, title: 'موقف الإسلام من عيسى عليه السلام' },

  { desc: 'يؤكد الإسلام أن الاعتقاد النظري لا يكفي للدخول في الإيمان، فإذا كان الرب الخالق واحدًا فينبغي أن يكون الإله والمعبود واحدًا. تعني كلمة (الله) باللغة العربية ثلاث معان مجتمعة: فهي تعني المعبود الذي يخلص الناس له صلاتهم وصيامهم وتوجه قلوبهم وجميع عباداتهم. والعظيم في ذاته وصفاته ومجده بحيث تحار', img: '/assets/imgs/home_screen3.png', id: 3, title: 'خالق واحد .. معبود واحد' },


  { desc: 'يندهش بعض الناس -جراء ما يتكرر في وسائل الإعلام- إذا علموا أن السلام له مكانة استثنائية في الإسلام، فالمسلم يكرر لفظ السلام ويستشعر معانيه عدة مرات يومياً. فالسلام اسم من أسماء الله تعالى، وجنته في الآخرة اسمها دار السلام، وتحية المسلمين تبدأ بكلمة السلام، وتنتهي صلاة المسلمين', img: '/assets/imgs/home_screen2.png', id: 4, title: 'الإسلام دين السلام' },

  { desc: 'يصدق القول في كثير من الأسر في العصر الحاضر أنها عبارة عن مجموعة من الأفراد لديهم مفاتيح متعددة لبيت واحد وصار كثير من الأشخاص للأسف يتهرب من تحمل مسؤولية حقيقية تجاه زوجة أو أولاد، فما الذي يمنعه من أن يستمتع ويقضي ملذاته بدون تحمل تلك المسؤولية؟', img: '/assets/imgs/home_screen1.png', id: 5, title: 'الأسرة في الإسلام' },
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



const HeroApi = ({ contentFamily, homeData, contentPeace, contentOneCreator, contentJesus, contentSin, dir }) => {
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

    setActiveIndex(index);
    setIsActive(false)
  };

  const carouselItems = [
    {
      img: '/assets/imgs/home_screen1.png',
      desc: contentFamily?.parent?.short_intro,
      title: homeData.family,
      sec_title: homeData.inIslam,
      path: "the-family-in-islam",
    },

    {
      img: '/assets/imgs/home_screen2.png',
      desc: contentPeace?.parent?.short_intro,

      title: homeData.islam,
      sec_title: homeData.islamReligion,
      path: "islam-is-the-religion-of-peace",
    },
    {
      img: '/assets/imgs/home_screen3.png',
      desc: contentOneCreator?.parent?.short_intro,

      title: homeData.oneCreator,
      sec_title: homeData.oneGod,
      path: "one-creator-who-alone-deserves-to-be-worshipped",
    },
    {
      img: '/assets/imgs/home_screen4.png',
      desc: contentJesus?.parent?.short_intro,

      title: homeData.islamApproach,
      sec_title: homeData.eissa,
      path: "islams-view-of-jesus-christ",
    },
    {
      img: '/assets/imgs/home_screen5.png',
      desc: contentSin?.parent?.short_intro,

      title: homeData.sin,
      sec_title: homeData.redemption,
      path: "sin-and-repentance",
    },
  ];

  return (
    <section id='hero' className={styles.hero} dir={dir}>
      <div className={styles.full_image}>
        <img src={carouselItems[activeIndex].img} alt="" />

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
          dir={dir}
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

          {carouselItems?.map((card, index) => (
            <SwiperSlide key={index}>
              <div className={`${styles.box} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => handleSlideClick(index)}
              >
                <div className={styles.img_container}>
                  <img src={card.img} alt="" />
                </div>

                <div className={styles.title}>
                  <h5>{card.title} {card.sec_title}</h5>
                </div>

              </div>
            </SwiperSlide>
          ))}

        </Swiper>




      </div>


      {/* {!isActive &&
        <>
          <motion.div className={styles.sec_title}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
            <h1>{carouselItems[activeIndex].title}</h1>
          </motion.div>
        </>
      } */}

      <div className={styles.content_container}>


        <div className="container">
          <div className={styles.sec_container}>


            <div className={styles.text_container}>
              {/* {!isActive && */}
              <motion.div
                key={activeIndex}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 1 }}
                className={styles.desc}>
                <p>{carouselItems[activeIndex].desc}</p>
              </motion.div>
              {/*   }*/}

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