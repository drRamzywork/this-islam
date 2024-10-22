import React from 'react'
import styles from './index.module.scss';
import { motion } from 'framer-motion'

const Topic4 = ({ bodyObject, dir, topicImage }) => {




  return (
    <>
      <div className={styles.sec_container2} dir={dir}>
        <div className={styles.title_bg}>
          <h3>
            {
              bodyObject[1]?.list_p?.title_bold === undefined ?
                bodyObject[0]?.list_p?.title_bold?.replace(/:/g, " ")
                :
                bodyObject[1]?.list_p?.title_bold?.replace(/:/g, " ")


            }
          </h3>

        </div>



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



          <div className={styles.list_container}>
            {bodyObject.map((item, index) => {
              const key = Object.keys(item)[0];

              switch (key) {
                case 'paragraph':
                  return (
                    <p key={index} className={styles.list_desc}>{item.paragraph.content} </p>

                  );
                case 'list_p':
                  return (
                    <motion.div
                      transition={{
                        type: "spring",
                        duration: 1.4
                      }}

                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}

                      exit={{ opacity: 1 }}
                      key={index} className={styles.desc_title}>
                      <strong>{item.list_p.title_bold}</strong>
                      <p>{item.list_p.content}</p>
                    </motion.div>
                  );
                case 'ul_li':
                  const content = item.ul_li.content;
                  const regex = /(.*)\((.*)\)/;
                  const match = content.match(regex);

                  const sentence = match ? match[1].trim() : content;
                  const reference = match ? match[2].trim() : '';

                  return (
                    <motion.div
                      transition={{
                        type: "spring",
                        duration: 1.4
                      }}

                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 1 }} className={styles.box} key={index}>
                      <p>
                        {sentence}
                      </p>

                      {reference && <span className={styles.reference}> ({reference})</span>}

                    </motion.div>
                  );
                default:
                  return null;
              }
            })}
          </div>


        </div>

      </div>
    </>
  )
}

export default Topic4