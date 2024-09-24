import React from 'react'
import styles from './index.module.scss';

const TopicContent = ({ contentData }) => {
  const topicImage = contentData?.parent?.image
  const parent = contentData.parent;
  const bodyObject = parent?.body_object;
  const firstPList = bodyObject[0]?.list_p;

  const children = contentData?.children[0];
  const childTitle = children?.title;
  const childBodyObect = children?.body_object;

  console.log(childBodyObect, "contentData")
  return (
    <>
      <section className={styles.topic_content} id='topic_content'>
        <div className="container">

          <div className={styles.sec_container}>

            <div className={styles.first_p_list}>
              <div className={styles.title}>
                <h3>{firstPList.title_bold}</h3>
              </div>

              <div className={styles.desc}>
                <p>
                  {firstPList.content}
                </p>
              </div>
            </div>

            <div className={styles.topic_img}>
              <img src={topicImage} alt="" />
            </div>

            {bodyObject.map((topic, idx) =>
              <div className={styles.p_list} key={idx}>
                <div className={styles.title}>
                  <h3>{topic?.list_p?.title_bold}</h3>
                </div>

                <div className={styles.desc}>
                  <p>
                    {topic?.list_p?.content}
                  </p>
                </div>
              </div>
            )}

          </div>

          <div className={styles.sec_container2}>
            <div className={styles.title_bg}>
              <h3>{childTitle}</h3>
            </div>




            <div className={styles.content_container_bg}>


              {childBodyObect.map((topic, idx) =>
                <div className={styles.ol_list} key={idx}>
                  <div className={styles.title}>
                    <h3>{topic?.ol_li?.title}</h3>
                  </div>

                  <div className={styles.desc}>
                    <p>
                      {topic?.ol_li?.content}
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>


        </div>
      </section>
    </>
  )
}

export default TopicContent