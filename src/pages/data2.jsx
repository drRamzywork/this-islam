import React, { useRef } from "react";
import YouTube from "react-youtube";
import styles from "./data2.module.scss";
import Navbar from "@/components/Navbar";

const VideoWithTags = () => {
  const videoRef = useRef(null);

  // List of topics with timestamps (in seconds)
  const topics = [
    { title: "Create a Nextjs Project (Introduction)", time: 10 },
    { title: "Create Folder (utils)", time: 60 },
    { title: "Install mongoose", time: 120 },
    { title: "connectMongoDB.js file connect ", time: 180 },
  ];

  const handleTagClick = (time) => {
    if (videoRef.current) {
      videoRef.current.internalPlayer.seekTo(time);
    }
  };

  return (
    <>
      {/* https://suwa.com.sa/assets/images/logo-light.png */}
      <Navbar />

      <div className="container" dir="ltr">

        <section className={styles.sec_container}>

          <div className={styles.topics} style={{ marginBottom: "10px" }}>
            {topics.map((topic, index) => (
              <button
                key={index}
                onClick={() => handleTagClick(topic.time)}
                style={{ marginRight: "10px", cursor: "pointer" }}
              >
                {topic.title}
              </button>
            ))}
          </div>

          <YouTube
            videoId="ogDk2EsNPGI"
            ref={videoRef}
            className={styles.video}
            opts={{
              width: "100%",
              height: "500px",
              playerVars: {
                autoplay: 0,
              },
            }}
          />

        </section>

      </div>

    </>
  );
};

export default VideoWithTags;
