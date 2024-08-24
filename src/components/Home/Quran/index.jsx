import React from 'react';
import { IoArrowUp } from 'react-icons/io5';
import styles from './index.module.scss';
import { motion } from 'framer-motion';

const Quran = () => {
  return (
    <>
      <section id='quran' className={styles.quran} dir='rtl'>

        <div className="container">
          <div className={styles.sec_container}>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.text_container}>

              <div className={styles.title}>
                <h2> <span>القرآن</span> الكريم</h2>

                <div className={styles.icon_container}>
                  <img src="/assets/svgs/sec_icon_title.svg" alt="" />
                </div>
              </div>

              <div className={styles.desc}>
                <p>ما هو القرآن الكريم الذي كثيراً ما يتصدر أعلى الكتب مبيعاً وتوزيعاً حول العالم؟ ويؤمن به ما يزيد عن مليار ونصف مسلم؟</p>
              </div>

            </motion.div>

            <div className={styles.content_container}>

              <div className={styles.text_container}>
                <div className={styles.title}>
                  <div className={styles.icon_container}>
                    <img src="/assets/svgs/title_icon.svg" alt="" />
                  </div>
                  <h3>من أين جاء القرأن</h3>
                </div>

                <div className={styles.desc}>
                  <p>             سؤال منطقي يتبادر للذهن مباشرة عند الحديث عن كتاب المسلمين المقدس: القرآن، ومحمد عليه الصلاة والسلام.. فلماذا علينا قبول رواية المسلمين حول القصة؟ ألا يحق لنا طرح الأسئلة حول ذلك؟ لا يختلف المؤرخون أن القرآن جاء على لسان رجل عربي، لا يقرأ ولا يكتب .........</p>

                  <div className={styles.button_container}>
                    <p>اقرأ المزيد</p>

                    <div className={styles.icon_container}>
                      <IoArrowUp />
                    </div>
                  </div>

                </div>
              </div>

              <div className={styles.img_container}>
                <img src="/assets/imgs/5.jpeg" alt="" />
              </div>

            </div>


            <div className={styles.content_container}>

              <div className={styles.img_container}>
                <img src="/assets/imgs/6.jpeg" alt="" />
              </div>

              <div className={styles.text_container}>
                <div className={styles.title}>
                  <div className={styles.icon_container}>
                    <img src="/assets/svgs/title_icon.svg" alt="" />
                  </div>
                  <h3> القرآن معجزة الاسلام الخالدة</h3>
                </div>

                <div className={styles.desc}>
                  <p>
                    ما هو القرآن الذي يؤمن به ما يزيد عن مليار ونصف مسلم؟ القرآن هو كتاب المسلمين المقدس الذي يؤمنون بأنه;كلام الله المنزل على رسوله محمد عليه السلام هداية للناس ونوراً خاتم الكتب السماوية المنزلة المحفوظ من التبديل والتحريف;المتعبد بتلاوته وحفظه.                  </p>
                  <div className={styles.button_container}>
                    <p>اقرأ المزيد</p>

                    <div className={styles.icon_container}>
                      <IoArrowUp />
                    </div>
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

export default Quran