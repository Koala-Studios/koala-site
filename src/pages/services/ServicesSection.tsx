import React from "react";
import Button from "../../components/Button";
import Footer from "../../components/sections/Footer";
import GradientHero from "../../components/sections/GradientHero";
import ImageWithText from "../../components/sections/ImageWithText";
import ScrollingText from "../../components/sections/ScrollingText";
import StandaloneImage from "../../components/sections/StandaloneImage";
import TitleWithText from "../../components/sections/TitleWithText";
import styles from "../../styles/Home.module.css";

const ServicesSection = () => {
  return (
    <div>
      <GradientHero
        gradient="linear-gradient(45deg, #2e2b38, #5c3b3b, #2d5448)"
        title="Our Services"
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
        image_placement="left"
        src="/images/placeholder.png"
        alt="TODO"
        title="Web Development"
        text="Building websites that convert visitors into customers."
        width="400"
        height="400"
      ></ImageWithText>
      <ImageWithText
        image_placement="right"
        src="/images/placeholder.png"
        alt="TODO"
        title="UI/UX Design"
        text="Innovative design that captures attention and inspires action."
        width="400"
        height="400"
      ></ImageWithText>

      <ImageWithText
        image_placement="left"
        src="/images/placeholder.png"
        alt="TODO"
        title="3D Renders"
        text="Enhance your brand's identity and message."
        width="400"
        height="400"
      ></ImageWithText>

      <ImageWithText
        image_placement="right"
        src="/images/placeholder.png"
        alt="TODO"
        title="Consulting"
        text="The help you need, when you need it."
        width="400"
        height="400"
      ></ImageWithText>

      <Footer></Footer>
    </div>
  );
};

export default ServicesSection;
