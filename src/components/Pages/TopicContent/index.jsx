import React from 'react'

const TopicContent = ({ contentData }) => {
  const topicImage = contentData?.parent?.imageك

  console.log(contentData, "contentData")
  return (
    <>
      <section className='topic_content' id='topic_content'>

      </section>
    </>
  )
}

export default TopicContent