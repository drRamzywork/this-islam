import React from 'react'
import styles from './index.module.scss'
const TopicBanner = ({ contentData }) => {
  const topicImage = contentData?.parent?.image;

  const parent = contentData.parent;

  return (
    <>
      <section className={styles.topic_banner}>
        <div className={styles.images_container}>
          <div className={styles.banner}>
            {/* <img src="/assets/imgs/banner.png" alt="" /> */}
            <img src={topicImage} alt="" />
          </div>

          <div className={styles.lines}>
            <img src="/assets/imgs/lines.png" alt="" />
          </div>
        </div>

        <div className="container">
          <div className={styles.text_container}>
            <div className={styles.title}>
              <h1>{parent.title}</h1>
            </div >
            <div className={styles.desc}>
              <p>{parent?.short_intro?.replace(/&nbsp;/g, " ")}</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default TopicBanner