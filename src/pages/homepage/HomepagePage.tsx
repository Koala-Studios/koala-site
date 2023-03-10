import React from "react";
import ImageWithText from "../../components/sections/ImageWithText";
import ScrollingText from "../../components/sections/ScrollingText";
import HomepageHero from "./HomepageHero";
import styles from "../../styles/Home.module.css";
import Footer from "../../components/sections/Footer";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const HomepagePage = () => {
  return (
    <div style={{ overflowX: "hidden", backgroundColor: "#181A17" }}>
      <HomepageHero />
      <ScrollingText
        TextArray={[
          "Shopify Ecommerce",
          "UI/UX Design",
          "Web Development",
          "Consulting",
          "3D Renders",
          "Graphic Design",
        ]}
      />
      <ImageWithText
        image_placement="right"
        src="/images/koala_square.png"
        alt=""
        title=""
        width="40%"
        height="40%"
        imgStyles={{ borderRadius: "1.5rem" }}
        styles={{ backgroundColor: "#181A17" }}
      >
        <h2 className={styles.box1_title}>
          BIG Or Small, <br /> <span>Koala Studios </span>
          <br />
          will help you SURPASS your Ecommerce
          <br /> goals
        </h2>
      </ImageWithText>
      <ImageWithText
        image_placement="left"
        src="/images/koala_square.png"
        alt=""
        title="Why is a well presented store important"
        text="A more professional and easier experience for your customers will increase conversion rates and brand awareness inmensly. Koala Studios specializes on user experience that is proven to get results"
        width="40%"
        height="40%"
        imgStyles={{ borderRadius: "1.5rem" }}
        styles={{ backgroundColor: "#ede7e0" }}
        textColor="#282420"
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/services">
            <Button
              style={{
                borderColor: "#39744f",
                whiteSpace: "nowrap",
                border: "2px solid black",
              }}
              type={"secondary"}
            >
              Our Services
            </Button>
          </Link>
          <Link to="/projects">
            <Button
              style={{
                backgroundColor: "#39744f",
                whiteSpace: "nowrap",
                border: "2px solid #39744f",
              }}
              type={"primary"}
            >
              View Our Work
            </Button>
          </Link>
        </div>
      </ImageWithText>
      <Footer />
    </div>
  );
};

export default HomepagePage;
