import React from "react";
import { IProjectPage } from "../utils";
import styles from "../../styles/ProjectSections.module.css"

interface Props {
    project: IProjectPage;
}

const ProjectHero: React.FC<Props> = ({ project }) => {
  return (
    <div
      className={styles.hero_container}
    >
      {/* <div className={styles.hero_info}>
        <img src={project.logo}/>
      </div> */}

      <div className={styles.title_image}>
        <img src={project.hero_image}/>
      </div>
      {/* <div className={styles.scroll_container}>
        <div className={styles.scroll_indicator}></div>
      </div> */}
    </div>
  );
};

const ProjectTag = () => {

}


export default ProjectHero;
