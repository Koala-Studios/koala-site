import React from "react";
import Button from "../../components/Button";
import ImageWithText from "../../components/sections/ImageWithText";
import TitleWithText from "../../components/sections/TitleWithText";
import AboutpageHero from "./AboutpageHero";
import ScrollingText from "../../components/sections/ScrollingText";
import { hover } from "@testing-library/user-event/dist/hover";
import Footer from "../../components/sections/Footer";
import { Link } from "react-router-dom";
import GradientHero from "../../components/sections/GradientHero";
const AlloPage = () => {
  return (
    <div style={{ backgroundColor: "#181A17", overflowX: "hidden" }}>
      <GradientHero
        gradient="linear-gradient(45deg, #181a17, #203f44,#433960)"
        title="We work with innovative brands to bring engaging products to life."
      />
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
        image_placement={"right"}
        src={"../images/koala_square.png"}
        alt={""}
        title={"Our Mission"}
        width={"40%"}
        height={""}
        imgStyles={{ borderRadius: "1.5rem" }}
      >
        <p style={{ fontFamily: "Poppins-Regular" }}>
          Our mission is to help brands succeed online by providing high-quality
          services that align with their values and goals. At Koala Studios, we
          prioritize quality above all else. We understand that every brand is
          unique, and that's why we take the time to get to know our clients and
          their values.
          <br />
          <br />
          We believe that a website should not only be visually appealing but
          also reflect the brand's personality and message. That's why we work
          closely with our clients to create custom solutions that align with
          their brand's identity.
          <br />
          <br />
          Thank you for considering Koala Studios for your needs. We look
          forward to helping you take your brand to the next level!
        </p>
      </ImageWithText>

      <div
        style={{
          padding: "var(--global-padding)",
          color: "#282420",
          background: "#ede7e0",
          display: "flex",
          gap: 20,
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 100,
          paddingTop: 100,
        }}
      >
        <h2 style={{ margin: 0, color: "black" }}>
          Want to learn more about us?
        </h2>
        <p style={{ margin: 0, color: "black" }}>
          Take a look through our projects!
        </p>
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
      <Footer></Footer>
    </div>
  );
};

export default AlloPage;
