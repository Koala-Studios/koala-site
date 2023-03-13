import React, { useEffect, useRef } from "react";
import styles from "../../styles/Sections.module.css";
interface Props {
  video_placement: "left" | "right";
  src: string;
  title: string;
  text?: string;
  width: string;
  height: string;
  children?: any;
  videoStyles?: any;
  styles?: any;
  textColor?: string;
  loop?: boolean;
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry: any) => {
      if (!entry.isIntersecting) {
        entry.target.pause();
        entry.target.currentTime = 0;
        //   playState = false;
      } else {
        entry.target.play();
        //   playState = true;
      }
    });
  },
  { rootMargin: "-15% 0% -15% 0%" }
);

const VideoWithText: React.FC<Props> = (props) => {
  const videoRef = useRef<any>();

  useEffect(() => {
    if (videoRef) {
      observer.observe(videoRef.current!);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      style={props.styles}
      className={`${styles.image_with_text_container} ${
        props.video_placement === "left" ? styles.left : ""
      }`}
    >
      <div className={styles.image_with_text_info}>
        <h2 style={{ color: props.textColor }}>{props.title}</h2>
        <p style={{ color: props.textColor }}>{props.text}</p>
        {props.children}
      </div>
      <video
        ref={videoRef}
        style={props.videoStyles}
        autoPlay
        loop={props.loop}
        muted
        width={props.width}
        height={props.height}
      >
        <source src={props.src} />
      </video>
    </section>
  );
};
export default VideoWithText;
