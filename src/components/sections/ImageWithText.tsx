import React from "react";
import styles from "../../styles/Sections.module.css";
interface Props {
  image_placement: "left" | "right";
  src: string;
  alt: string;
  title: string;
  text?: string;
  width: string;
  height: string;
  children?: any;
  imgStyles?: any;
  styles?: any;
  textColor?: string;
  subtitle?: any;
}

const ImageWithText: React.FC<Props> = (props) => {
  return (
    <section
      style={props.styles}
      className={`${styles.image_with_text_container} ${
        props.image_placement == "left" ? styles.left : ""
      }`}
    >
      <div data-speed="1.1" className={styles.image_with_text_info}>
        <h2 style={{ color: props.textColor }}>{props.title}</h2>
        {props.subtitle && (
          <div
            className={styles.subtitle_pill}
            style={{ color: props.textColor }}
          >
            {props.subtitle}
          </div>
        )}

        {props.text && <p style={{ color: props.textColor }}>{props.text}</p>}
        {props.children}
      </div>
      <img
        style={props.imgStyles}
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </section>
  );
};
export default ImageWithText;
