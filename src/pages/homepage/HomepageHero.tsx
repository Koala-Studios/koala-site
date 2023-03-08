import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import styles from "../../styles/Home.module.css";
import "../../styles/homepage.css";

const HomepageHero = () => {
  return (
    <div className={styles.hero_section}>
      <section className={styles.hero_container}>
        <div className={styles.hero_video}>
          {/* <img src="/images/koala test2_ps.png" /> */}
          <video autoPlay loop muted style={{ width: "auto", height: "100%" }}>
            <source src="/videos/koalavideo2_60fps.mp4" />
          </video>
        </div>
        <div className={styles.hero_content}>
          <h1 className={styles.title}>
            We Build <br /> Koality
            <br /> ECommerce <br />
            Websites
          </h1>
          {/* <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}
          <div className={styles.hero_ctas}>
            <Link to="/contact">
              <Button type="secondary light" classes={styles.contact_btn}>
                Contact Us
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                style={{
                  color: "#597685",
                  boxShadow: "0px 8px 10px 0 #7b8e95",
                }}
                type="primary light"
              >
                View Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* <div className={styles.hero_flower_1}>
        <Image src="/flower1.png" width={370} height={558} />
      </div> */}
    </div>
  );
};

export default HomepageHero;
