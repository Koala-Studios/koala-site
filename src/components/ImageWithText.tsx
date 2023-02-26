import React from "react";
import styles from "../styles/Sections.module.css";
interface Props {
  image_placement: "left" | "right";
  src: string;
  alt: string;
  title: string;
  text?: string;
  width: string;
  height: string;
  children?: any;
}

const ImageWithText: React.FC<Props> = (props) => {
  return (
    <section
      className={`${styles.image_with_text_container} ${
        props.image_placement == "left" ? styles.left : ""
      }`}
    >
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        {props.children}
      </div>
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </section>
  );
};

export default ImageWithText;
