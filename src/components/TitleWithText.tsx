import React from "react";
import styles from "../styles/Sections.module.css";
interface Props {
  orientation: "vertical" | "horizontal";
  title: string;
  text: string;
}

const TitleWithText: React.FC<Props> = (props) => {
  return (
    <section
      className={`${styles.title_with_text} ${
        props.orientation == "vertical" ? "vertical" : "horizonal"
      }`}
    >
      <h2>{props.title}</h2>
      <div className="paragraph-container">
        <p>{props.text}</p>
      </div>
    </section>
  );
};

export default TitleWithText;
