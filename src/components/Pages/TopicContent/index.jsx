import React from 'react'
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import Topic2 from './Topic2';
import Topic3 from './Topic3';
import Topic4 from './Topic4';
import Topic5 from './Topic5';



const TopicContent = ({ contentData }) => {
  const topicImage = contentData?.parent?.image;

  const parent = contentData.parent;
  const bodyObject = parent?.body_object;
  const firstPList = bodyObject[0]?.list_p;

  const children = contentData?.children && contentData?.children[0];
  const childrens = contentData?.children;
  const childTitle = children?.title;
  const childBodyObect = children?.body_object;
  const { query } = useRouter();

  const slug = query.slug;
  const topic1 = 'who-is-the-messenger-of-islam'
  const topic2 = 'prophet-muhammad-in-the-sight-of-fair-minded-people';
  const topic3 = 'aspects-of-prophet-muhammads-life';
  const topic4 = 'some-sayings-of-prophet-muhammad';

  const topic5 = 'universality-of-islam';





  return (
    <>
      <section className={styles.topic_content} id='topic_content'>
        <div className="container">


          {!topic2 === slug || !topic4 === slug &&
            <>




            </>
          }



          {
            slug === topic1
            &&

            <>

              < div className={styles.sec_container}>

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

          {topic2 === slug &&
            <Topic2 childrens={childrens} />
          }



          {topic3 === slug &&
            <Topic3 bodyObject={bodyObject} childrens={childrens} topicImage={topicImage} />
          }


          {topic4 === slug &&

            <Topic4 childrens={childrens} bodyObject={bodyObject} firstPList={firstPList} topicImage={topicImage} />
          }


          {topic5 === slug &&
            <Topic5 childrens={childrens} bodyObject={bodyObject} firstPList={firstPList} topicImage={topicImage} parent={parent} />
          }


        </div>
      </section >
    </>
  )
}

export default TopicContent