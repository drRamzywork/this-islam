import React, { useEffect, useState } from 'react'
import styles2 from './index.module.scss'
import { motion } from 'framer-motion'
const Topic2 = ({ childrens, dir }) => {


  // const getSecondPTagContent = (htmlString) => {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(htmlString, 'text/html');
  //   const pTags = doc.querySelectorAll('p'); // Select all <p> tags
  //   return pTags[1] ? pTags[0].innerHTML : ''; // Return the second <p> tag's content if it exists
  // };


  const getPTagContent = (htmlString, index) => {
    const parser = new DOMParser();
    const doc = parser?.parseFromString(htmlString, 'text/html');
    const pTags = doc?.querySelectorAll('p');
    if (index === 0) {
      return pTags[0] ? pTags[0].innerHTML : '';
    } else {
      return pTags[1] ? pTags[1].innerHTML : '';
    }
  };


  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, [])
  if (isClient)

    return (
      <>

        <div className={styles2.sec_container3} dir={dir}>
          {childrens?.map((child, idx) => (
            <motion.div
              transition={{
                type: "spring",
                duration: 1.4
              }}

              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}

              exit={{ opacity: 1 }}
              className={styles2.box} key={idx}>
              <div className={styles2.header_box}>

                {child?.left_image &&
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

                  {child.body &&
                    <div className={styles2.light_desc}>
                      <p>
                        {/* <p dangerouslySetInnerHTML={{ __html: getSecondPTagContent(child.body) }}></p> */}
                        <p dangerouslySetInnerHTML={{ __html: getPTagContent(child.body, idx) }}></p>

                      </p>
                    </div>
                  }


                  {/* <p dangerouslySetInnerHTML={{ __html: getPTagContent(child.childrens, idx) }}></p> */}



                  {/* 
                  {child.body_object.map((elm, indexx) =>
                    elm.paragraph ? (
                      <p
                        key={indexx}
                      >
                        {elm.paragraph.content}
                      </p>
                    ) : elm?.ol_li ? (
                      <li
                        key={indexx + 1}

                      >
                        <span

                        >
                          <strong

                          >
                            {elm?.ol_li?.title}
                          </strong>{" "}
                          {elm?.ol_li?.content}
                        </span>
                      </li>
                    ) : elm?.list_p ? (
                      <div>
                        <p

                        >
                          {elm?.list_p.title_bold}
                        </p>
                        <p

                        >
                          {elm?.list_p.content}
                        </p>
                      </div>
                    ) : elm?.ul_li ? (
                      <li

                      >
                        <span

                        >
                          <strong
                          >
                            {elm?.ul_li?.title}
                          </strong>
                          {Array.isArray(elm?.ul_li?.content) ? (
                            <div>
                              {elm?.ul_li?.content.map((subElm, subIdx) => (
                                <li
                                  key={subIdx}
                                >
                                  <span

                                  >
                                    {subElm}
                                  </span>
                                </li>
                              ))}

                            </div>
                          ) : (

                            elm.ul_li.content
                          )}
                        </span>
                      </li>
                    ) : null
                  )} */}

                </div>


              </div>

              <div className={styles2.desc}>
                <p>
                  {/* "أردت أن أعرف صفات الرجل الذي يملك بدون نزاع قلوب ملايين البشر.. لقد أصبحت مقتنعًا كل الاقتناع أن السيف لم يكن الوسيلة التي من خلالها اكتسب الإسلام مكانته، بل كان ذلك من خلال بساطة الرسول مع دقته وصدقه في الوعود، وتفانيه وإخلاصه لأصدقائه وأتباعه، وشجاعته مع ثقته المطلقة في ربه وفي رسالته. هذه الصفات هي التي مهدت الطريق، وتخطت المصاعب وليس السيف. بعد انتهائي من قراءة الجزء الثاني من حياة الرسول وجدت نفسي أسفًا لعدم وجود المزيد للتعرف أكثر على حياته العظيمة". */}

                  {
                    child.short_intro
                  }


                </p>
              </div>
            </motion.div>
          ))}
        </div>



      </>
    )
}

export default Topic2