import React, { useEffect, useState } from 'react'
import styles2 from './index.module.scss'

const Topic2 = ({ childrens, parent }) => {


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

                  {child.body &&
                    <div className={styles2.light_desc}>
                      <p>
                        {/* <p dangerouslySetInnerHTML={{ __html: getSecondPTagContent(child.body) }}></p> */}
                        <p dangerouslySetInnerHTML={{ __html: getPTagContent(child.body, idx) }}></p>

                      </p>
                    </div>
                  }

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
            </div>
          ))}
        </div>



      </>
    )
}

export default Topic2