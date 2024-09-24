import React from 'react'
import styles from './index.module.scss';
import styles2 from './topic2.module.scss'
import styles3 from './topic3.module.scss'
import { useRouter } from 'next/router';

const TopicContent = ({ contentData }) => {
  const topicImage = contentData?.parent?.image;

  const parent = contentData.parent;
  const bodyObject = parent?.body_object;
  const firstPList = bodyObject[0]?.list_p;

  const children = contentData?.children[0];
  const childrens = contentData?.children;
  const childTitle = children?.title;
  const childBodyObect = children?.body_object;
  const { query } = useRouter();

  const slug = query.slug;
  const topic2 = 'prophet-muhammad-in-the-sight-of-fair-minded-people';
  const topic3 = 'aspects-of-prophet-muhammads-life';

  const subTopic = childrens.filter((c) => c.id === 68)[0];
  const subTopic2 = childrens.filter((c) => c.id === 69)[0];
  const subTopic3 = childrens.filter((c) => c.id === 70)[0];

  const childrenMain = childrens.filter((c) => c.id !== 70 & c.id !== 68 & c.id !== 69)

  console.log(subTopic, "subTopic")
  return (
    <>
      <section className={styles.topic_content} id='topic_content'>
        <div className="container">


          {!topic2 === slug &&
            <>

              <div className={styles.sec_container2}>
                <div className={styles.title_bg}>
                  <h3>{childTitle}</h3>
                </div>




                <div className={styles.content_container_bg}>


                  {childBodyObect?.map((topic, idx) =>
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

            </>
          }


          <div className={styles.sec_container}>

            <div className={styles.first_p_list}>
              <div className={styles.title}>
                <h3>{firstPList?.title_bold}</h3>
              </div>

              <div className={styles.desc}>
                <p>
                  {firstPList?.content}
                </p>
              </div>
            </div>

            <div className={styles.topic_img}>
              <img src={topicImage} alt="" />
            </div>

            {bodyObject?.map((topic, idx) =>
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


          {topic2 === slug &&

            <div className={styles2.sec_container3}>
              {childrens.map((child, idx) => (
                <div className={styles2.box} key={idx}>
                  <div className={styles2.header_box}>

                    {child.left_image &&
                      <div className={styles2.img_container}>
                        <img src={child.left_image} alt="" />
                      </div>
                    }

                    <div className={styles2.text}>

                      <div className={styles2.title}>
                        <h2>
                          {child.title?.replace(/:/g, " ")}
                        </h2>
                      </div>


                      <div className={styles2.light_desc}>
                        <p>( Mahatma Gandhi, statement published i 'Young India,' 11/ 9 /1924). </p>
                      </div>

                    </div>


                  </div>

                  <div className={styles2.desc}>
                    <p>"أردت أن أعرف صفات الرجل الذي يملك بدون نزاع قلوب ملايين البشر.. لقد أصبحت مقتنعًا كل الاقتناع أن السيف لم يكن الوسيلة التي من خلالها اكتسب الإسلام مكانته، بل كان ذلك من خلال بساطة الرسول مع دقته وصدقه في الوعود، وتفانيه وإخلاصه لأصدقائه وأتباعه، وشجاعته مع ثقته المطلقة في ربه وفي رسالته. هذه الصفات هي التي مهدت الطريق، وتخطت المصاعب وليس السيف. بعد انتهائي من قراءة الجزء الثاني من حياة الرسول وجدت نفسي أسفًا لعدم وجود المزيد للتعرف أكثر على حياته العظيمة".</p>
                  </div>
                </div>
              ))}




            </div>

          }




          {topic3 === slug &&

            <div className={styles.sec_container2}>
              <div className={styles.title_bg}>
                <h3>
                  {bodyObject[1]?.list_p?.title_bold?.replace(/:/g, " ")}
                </h3>

              </div>




              <div className={styles.content_container_bg}>



                {childrenMain.map((topic, idx) => (
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
                          <div className={styles3.lists}>
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

                        <div className={styles3.lists}>
                          <div className={styles3.title}>
                            <span>{1}</span>
                            <h6>
                              {subTopic?.title?.replace(/:/g, " ")}
                            </h6>
                          </div>

                          <ul>
                            {subTopic.body_object.map((sub, idx) => (
                              <li key={idx}>
                                {sub?.ul_li?.content}
                              </li>
                            ))}
                          </ul>
                        </div>


                        <div className={styles3.lists}>

                          <div className={styles3.title}>
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


                        <div className={styles3.title}>
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

          }





        </div>
      </section >
    </>
  )
}

export default TopicContent