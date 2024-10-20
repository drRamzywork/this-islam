import React from 'react'
import styles from '../index.module.scss';
import styles3 from './index.module.scss';


const Topic3 = ({ bodyObject, childrens, topicImage, dir }) => {


  const subTopic = childrens?.filter((c) => c?.id === 68)[0];
  const subTopic2 = childrens?.filter((c) => c?.id === 69)[0];
  const subTopic3 = childrens?.filter((c) => c?.id === 70)[0];
  const childrenMain = childrens?.filter((c) => c?.id !== 70 & c?.id !== 68 & c?.id !== 69);

  return (
    <>
      <div className={styles.sec_container2} dir={dir}>
        <div className={styles.title_bg}>
          <h3>
            {bodyObject[1]?.list_p?.title_bold?.replace(/:/g, " ")}
          </h3>

        </div>



        <div className={styles.content_container_bg}>

          <div className={styles.topic_img}>
            <img src={topicImage} alt="" />
          </div>


          {childrenMain?.map((topic, idx) => (
            <div className={styles.ol_list} key={idx}>

              <div className={styles.title}>
                <h3>{topic?.title?.replace(/:/g, " ")}</h3>
              </div>

              <div className={styles.desc}>
                <p>
                  {topic?.ol_li?.content}
                </p>
              </div>
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

              {topic?.id === 71 && topic?.short_intro &&
                <span className={styles3.custom_desc}>
                  {topic?.short_intro}
                </span>
              }



              {topic?.id === 71 &&

                <>

                  <div className={styles3.lists} dir={dir} >
                    <div className={styles3.title} dir={dir}>
                      <span>{1}</span>
                      <h6>
                        {subTopic?.title?.replace(/:/g, " ")}
                      </h6>
                    </div>

                    <ul>
                      {subTopic?.body_object.map((sub, idx) => (
                        <li key={idx}>
                          {sub?.ul_li?.content}
                        </li>
                      ))}
                    </ul>
                  </div>


                  <div className={styles3.lists} dir={dir}>

                    <div className={styles3.title} dir={dir}>
                      <span>{2}</span>
                      <h6>
                        {subTopic2?.title?.replace(/:/g, " ")}
                      </h6>
                    </div>


                    <ul>
                      {subTopic2.body_object.map((sub, idx) => (
                        <li key={idx}>
                          {sub?.ul_li?.content}
                        </li>
                      ))}
                    </ul>
                  </div>


                  <div className={styles3.title} dir={dir}>
                    <span>{3}</span>
                    <h6>
                      {subTopic3?.title?.replace(/:/g, " ")}
                    </h6>
                  </div>


                  <ul>
                    {subTopic3.body_object.map((sub, idx) => (
                      <li key={idx}>
                        {sub?.ul_li?.content}
                      </li>
                    ))}
                  </ul>
                </>
              }




            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Topic3