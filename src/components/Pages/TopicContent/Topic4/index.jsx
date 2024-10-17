import React from 'react'
import styles from './index.module.scss';


const Topic4 = ({ bodyObject, childrens, topicImage }) => {



  // { console.log(bodyObject[1]?.list_p?.title_bold, "bodyObject[1]?.list_p?.title_bold") }

  return (
    <>
      <div className={styles.sec_container2}>
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

          <div className={styles.topic_img}>
            <img src={topicImage} alt="" />
          </div>



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
                    <div key={index} className={styles.desc_title}>
                      <strong>{item.list_p.title_bold}</strong>
                      <p>{item.list_p.content}</p>
                    </div>
                  );
                case 'ul_li':
                  const content = item.ul_li.content;
                  const regex = /(.*)\((.*)\)/;
                  const match = content.match(regex);

                  const sentence = match ? match[1].trim() : content;
                  const reference = match ? match[2].trim() : '';

                  return (
                    <div className={styles.box} key={index}>
                      <p>
                        {sentence}
                      </p>

                      {reference && <span className={styles.reference}> ({reference})</span>}

                    </div>
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