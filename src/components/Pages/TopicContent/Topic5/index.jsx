import React from 'react'
import styles from '../index.module.scss';
import styles3 from '../Topic3/index.module.scss';
import { motion } from 'framer-motion';

const Topic5 = ({ childrens, topicImage, dir }) => {


  return (
    <>
      <div className={styles.sec_container2} dir={dir}>



        <div className={styles.content_container_bg}>

          <motion.div
            transition={{
              type: "spring",
              duration: 2.4
            }}

            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 1 }} className={styles.topic_img}>
            <img src={topicImage} alt="" />
          </motion.div>



          {childrens?.map((topic, idx) => (
            <div className={styles.ol_list} key={idx}>

              <motion.div
                transition={{
                  type: "spring",
                  duration: 2.4
                }}

                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 1 }} className={styles.title}>
                <h3>{topic?.title?.replace(/:/g, " ")}</h3>
              </motion.div>


              <motion.div
                transition={{
                  type: "spring",
                  duration: 1.4
                }}

                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1 }} className={styles.desc}>
                <p>{topic?.quotations}</p>
                <p>
                  {topic?.body_without_tags}
                </p>


              </motion.div>

              {topic?.body_object?.map((obj) => (
                <>
                  {obj?.ul_li?.content &&
                    <div className={styles3.lists} dir={dir}>
                      <ul>
                        <li>{obj?.ul_li?.content}</li>
                      </ul>
                    </div>

                  }


                </>

              ))}

              {topic.body_image &&
                <motion.div
                  transition={{
                    type: "spring",
                    duration: 2.4
                  }}

                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 1 }} className={styles.topic_img}>
                  <img src={topic.body_image} alt="" />
                </motion.div>
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