import React, { useState } from 'react'
import styles from './index.module.scss'
import { IoArrowUp } from 'react-icons/io5'
import Pray from '@/public/assets/svgs/Pray'
import { motion } from 'framer-motion'
import Hand from '@/public/assets/svgs/Hand'
import Meal from '@/public/assets/svgs/Meal'
import Moon from '@/public/assets/svgs/Moon'
import Kaaba from '@/public/assets/svgs/Kaaba'


const Arkan = ({ arkan, home, arkanDesc, testimonyTitle }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const title = arkan?.children[0].title.replace(/:/g, " ");
  const title1 = home?.quran?.islam[0]?.title;
  const title2 = home?.quran?.islam[1]?.title.replace(/:/g, " ");
  const title3 = home?.quran?.islam[2]?.title;
  const title4 = home?.quran?.islam[3]?.title;

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
      desc: 'تكتسب الصلاة أهميتها الكبرى في الإسلام لأنها الطريق الأهم للقرب من الله ودعائه والخضوع له', icon: <Hand />
    },
  ]

  const hanldeClick = (index) => { setActiveIndex(index) }




  return (
    <>
      <section id='arkan' className={styles.arkan}>
        <div className={styles.bg}>
          <img src="/assets/imgs/7.jpeg" alt="" />
        </div>

        <div className="container">

          <div className={styles.sec_container}>
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
                <p>{arkanDesc}</p>
              </div>
            </motion.div>

            <motion.div className={styles.content_container}
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: 'tween' }}>
              {data.map((box, idx) =>
                <motion.div className={`${styles.icons_section} ${idx === activeIndex && styles.active}`} key={idx} onClick={() => hanldeClick(idx)}>
                  <div className={styles.circle_container}>
                    <div className={styles.icon}>
                      {box.icon}
                    </div>
                    <h6 >{box.title}</h6>
                  </div>
                  <div className={styles.line} />
                </motion.div>
              )}


            </motion.div>

            <div className={styles.active_section}>
              <div className={styles.icon_container}>
                {data[activeIndex].icon}
              </div>

              <div className={styles.title}>
                <h6>{data[activeIndex].title}</h6>
              </div>

              <div className={styles.desc}>
                <p>{data[activeIndex].desc}</p>

                <div className="mobile">
                  <div className={styles.more_btn}>

                    <IoArrowUp />
                  </div>

                </div>
              </div>

              <div className={styles.more_btn}>
                <p>اقرأ المزيد</p>

                <IoArrowUp />
              </div>
            </div>

          </div>
        </div>

      </section >
    </>
  )
}

export default Arkan

// import Head from 'next/head'
// import styles from './index.module.scss'

// export default function Arkan() {
//   return (
//     <div className={styles.container}>

//       <main className={styles.main}>
//         <div className={`${styles.content} text-center`}>
//           <h1 className={styles.title}>أركان الإسلام</h1>
//           <p className={styles.description}>
//             أركان الإسلام تمثل الأسس الأساسية التي يقوم عليها الدين الإسلامي، وهي
//             تعاليم إلزامية يجب على كل مسلم الالتزام بها لضمان تحقيق إيمانه بالشكل
//             الصحيح وتوطيد علاقته بالله تعالى.
//           </p>

//           <div className={styles.pillarsContainer}>
//             <div className={`${styles.pillar} ${styles.center}`}>
//               <div className={styles.pillarContent}>
//                 <img src="/assets/svgs/pray.svg" alt="الصلاة" />
//                 <p>الصلاة</p>
//                 <p className={styles.pillarDescription}>
//                   تكتسب الصلاة أهميتها الكبرى في الإسلام:
//                   لأنها الطريق الأمثل للتقرب من الله وعبادته
//                   والخضوع له
//                 </p>
//                 <a href="#" className={styles.readMore}>اقرأ المزيد ›</a>
//               </div>
//             </div>
//             <div className={`${styles.pillar} ${styles.topRight}`}>
//               <img src="/assets/svgs/pray.svg" alt="الزكاة" />
//               <p>الزكاة</p>
//             </div>
//             <div className={`${styles.pillar} ${styles.bottomRight}`}>
//               <img src="/assets/svgs/pray.svg" alt="الحج" />
//               <p>الحج</p>
//             </div>
//             <div className={`${styles.pillar} ${styles.bottomLeft}`}>
//               <img src="/assets/svgs/pray.svg" alt="الصيام" />
//               <p>الصيام</p>
//             </div>
//             <div className={`${styles.pillar} ${styles.topLeft}`}>
//               <img src="/assets/svgs/pray.svg" alt="الشهادة" />
//               <p>الشهادة</p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }
