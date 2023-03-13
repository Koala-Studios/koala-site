import React, { useEffect, useState } from "react";
import { IProjectPage } from "../utils";
import styles from "../../styles/ProjectSections.module.css";
import ScrollingText from "./ScrollingText";
import { useLocation } from "react-router-dom";

interface Props {
  project: IProjectPage;
}

const ProjectHero: React.FC<Props> = ({ project }) => {
  const [animate, setAnimate] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (animate == false) {
      setTimeout(() => {
        setAnimate(true);
      }, 300);
    }
  }, [location.key]);

  return (
    <div className={`${styles.hero_container} ${animate ? styles.dark : ""}`}>
      <div className={styles.hero_info}>
        <img src={project.logo} />
        <h1>
          Protein Podwer <br />
          For Hot Coffee
        </h1>
      </div>

      <div className={styles.title_image}>
        <img className={styles.hero_image} src={project.hero_image} />
      </div>

      {/* <div className={styles.scroll_container}>
        <div className={styles.scroll_indicator}></div>
      </div> */}
    </div>
  );
};

const ProjectTag = () => {};

export default ProjectHero;
