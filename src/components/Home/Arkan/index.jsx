import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { IoArrowUp } from 'react-icons/io5'
import Pray from '@/public/assets/svgs/Pray'
import { motion } from 'framer-motion'

const data = [
  { title: 'الصلاة', desc: 'تكتسب الصلاة أهميتها الكبرى في الإسلام؛ لأنها الطريق الأهم للقرب من الله ودعائه والخضوع له', icon: '/assets/svgs/pray.svg' },
  { title: 'الصلاة', desc: 'تكتسب الصلاة أهميتها الكبرى في الإسلام؛ لأنها الطريق الأهم للقرب من الله ودعائه والخضوع له', icon: '/assets/svgs/pray.svg' },
  { title: 'الصلاة', desc: 'تكتسب الصلاة أهميتها الكبرى في الإسلام؛ لأنها الطريق الأهم للقرب من الله ودعائه والخضوع له', icon: '/assets/svgs/pray.svg' },
  { title: 'الصلاة', desc: 'تكتسب الصلاة أهميتها الكبرى في الإسلام؛ لأنها الطريق الأهم للقرب من الله ودعائه والخضوع له', icon: '/assets/svgs/pray.svg' },
  { title: 'الصلاة', desc: 'تكتسب الصلاة أهميتها الكبرى في الإسلام؛ لأنها الطريق الأهم للقرب من الله ودعائه والخضوع له', icon: '/assets/svgs/pray.svg' },
]
const Arkan = () => {






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
                <h2>أركان الاسلام</h2>

                <div className={styles.icon_container}>
                  <img src="/assets/svgs/sec_icon_title.svg" alt="" />
                </div>
              </div>

              <div className={styles.desc}>
                <p>أركان الإسلام تمثل الأسس الأساسية التي يقوم عليها الدين الإسلامي، وهي تعاليم إلزامية يجب على كل مسلم الالتزام بها لضمان تحقيق إيمانه بالشكل الصحيح وتوطيد علاقته بالله تعالى.</p>
              </div>
            </motion.div>

            <motion.div className={styles.content_container}
              initial={{ opacity: 0, y: 500 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: 'tween' }}>
              {data.map((box, idx) =>
                <motion.div className={styles.icons_section}>
                  <div className={styles.circle_container}>
                    <div className={styles.icon}>
                      <Pray />
                    </div>
                    <h6 >{box.title}</h6>
                  </div>
                  <div className={styles.line} />
                </motion.div>
              )}


            </motion.div>

            <div className={styles.active_section}>
              <div className={styles.icon_container}>
                <Pray />
              </div>

              <div className={styles.title}>
                <h6>الصلاة</h6>
              </div>

              <div className={styles.desc}>
                <p>تكتسب الصلاة أهميتها الكبرى في الإسلام لأنها الطريق الأهم للقرب من الله ودعائه والخضوع له</p>
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
