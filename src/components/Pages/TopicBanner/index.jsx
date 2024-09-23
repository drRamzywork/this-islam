import React from 'react'
import styles from './index.module.scss'
const TopicBanner = ({ contentData }) => {

  console.log(contentData, "contentData")
  return (
    <>
      <section className={styles.topic_banner}>
        <div className={styles.images_container}>
          <div className={styles.banner}>
            <img src="/assets/imgs/banner.png" alt="" />
          </div>

          <div className={styles.lines}>
            <img src="/assets/imgs/lines.png" alt="" />
          </div>
        </div>

        <div className="container">
          <div className={styles.text_container}>
            <div className={styles.title}>
              <h1>من هو رسول الاسلام ؟</h1>
            </div >
            <div className={styles.desc}>
              <p>محمد هو اسم نبي الإسلام..وهو أحد أكثر الأسماء انتشارًا حول العالم اليوم، ومعناه الذي يحمده الناس ويثنون عليه لأخلاقه وأفعاله..فمن هو محمد ؟ اسمُ رسول الإسلام: محمد بن عبد الله بن عبد المطلب بن هاشم القرشي 570-632م ويعتقد المسلمون جميعاً أنه رسول الله إلى الناس جميعاً: أرسل الله </p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default TopicBanner