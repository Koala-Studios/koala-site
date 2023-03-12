import React from "react";
import Button from "../../components/Button";
import Footer from "../../components/sections/Footer";
import ImageWithText from "../../components/sections/ImageWithText";
import StandaloneImage from "../../components/sections/StandaloneImage";
import TitleWithText from "../../components/sections/TitleWithText";
import styles from "../../styles/Home.module.css";

const ServicesSection = () => {
  return (
      <div>
        <h2 style={{marginTop:'7rem', color:"#ede7e0", fontSize:'2.5rem'}}> Our Services </h2>
        <ImageWithText
          image_placement="left"
          src="/images/placeholder.png"
          alt="TODO"
          title="Web Development"
          text="Building websites that convert visitors into customers."
          width="400"
          height="400"
        >
        </ImageWithText>
        <ImageWithText
          image_placement="right"
          src="/images/placeholder.png"
          alt="TODO"
          title="UI/UX Design"
          text="Innovative design that captures attention and inspires action."
          width="400"
          height="400"
        >
        </ImageWithText>


        <ImageWithText
          image_placement="left"
          src="/images/placeholder.png"
          alt="TODO"
          title="3D Renders"
          text="Enhance your brand's identity and message."
          width="400"
          height="400"
        >
        </ImageWithText>

        <ImageWithText
          image_placement="right"
          src="/images/placeholder.png"
          alt="TODO"
          title="Consulting"
          text="The help you need, when you need it."
          width="400"
          height="400"
        >
        </ImageWithText>

        

        <Footer></Footer>
      </div>
  );
};

export default ServicesSection;
