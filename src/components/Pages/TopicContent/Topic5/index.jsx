import React from 'react'
import styles from '../index.module.scss';
import styles3 from '../Topic3/index.module.scss';

const Topic5 = ({ childrens, topicImage }) => {



  return (
    <>
      <div className={styles.sec_container2}>



        <div className={styles.content_container_bg}>

          <div className={styles.topic_img}>
            <img src={topicImage} alt="" />
          </div>



          {childrens.map((topic, idx) => (
            <div className={styles.ol_list} key={idx}>

              <div className={styles.title}>
                <h3>{topic?.title?.replace(/:/g, " ")}</h3>
              </div>


              <div className={styles.desc}>
                <p>{topic?.quotations}</p>
                <p>
                  {topic?.body_without_tags}
                </p>


              </div>

              {topic?.body_object?.map((obj) => (
                <>
                  {obj?.ul_li?.content &&
                    <div className={styles3.lists}>
                      <ul>
                        <li>{obj?.ul_li?.content}</li>
                      </ul>
                    </div>

                  }


                </>

              ))}

              {topic.body_image &&
                <div className={styles.topic_img}>
                  <img src={topic.body_image} alt="" />
                </div>
              }

              <span className={styles3.custom_desc}>
                {topic?.short_intro}
              </span>






            </div>
          ))}

        </div>

      </div>
    </>
  )
}

export default Topic5