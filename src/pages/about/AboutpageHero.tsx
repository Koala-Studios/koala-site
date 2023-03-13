import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import styles from "../../styles/Home.module.css";

const AboutpageHero = () => {
  return (
    <div className={styles.hero_section}>
      <section className={styles.hero_container}>
        <div
          style={{
            background: "linear-gradient(45deg, #181a17, #203f44,#433960)",
          }}
          className={styles.hero_video}
        ></div>
        <div className={styles.hero_content}>
          <h1 className={styles.title}>
            We work with innovative brands to bring engaging products to life.
          </h1>
        </div>
      </section>
    </div>
  );
};

export default AboutpageHero;
