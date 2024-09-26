import React from 'react'
import styles2 from './index.module.scss'

const Topic2 = ({ childrens }) => {
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



    </>
  )
}

export default Topic2