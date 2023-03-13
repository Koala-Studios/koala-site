import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import styles from "../../styles/Home.module.css";

const AboutpageHero = () => {
  return (
    <div className={styles.hero_section}>
      <section className={styles.hero_container}>
        <div className={styles.hero_video}>
          <img
            style={{ borderBottomLeftRadius: "4rem" }}
            src="/images/koala_square.png"
          />
        </div>
        <div className={styles.hero_content}>
          <h1 className={styles.title}>
            A Bit <br />
            About <br />
            Koala
            <br />
            Studios
          </h1>
        </div>
      </section>
    </div>
  );
};

export default AboutpageHero;
