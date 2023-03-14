import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Sections.module.css";
interface Props {
  next_link: string;
}

const NextProject: React.FC<Props> = (props) => {
  return (
    <section className={`${styles.next_project}`}>
      <Link to={`${props.next_link}`}>Next Project</Link>

      <Link style={{fontSize:'15px', textDecoration:'underline'}} to="/projects">View All Projects</Link>
    </section>
  );
};

export default NextProject;
