import React from "react";
import Button from "../../components/Button";
import ImageWithText from "../../components/sections/ImageWithText";
import TitleWithText from "../../components/sections/TitleWithText";
import AboutpageHero from "./AboutpageHero";
import styles from "../../styles/AboutPage.module.css";
const AlloPage = () => {
  return (
    <div style={styles} >
      <AboutpageHero></AboutpageHero>
      <p style={{color:"#ede7e0", marginBottom:15, marginTop:150 }}>
        
      <h2 style={{color:"#ede7e0"}}>Our Mission</h2>
      Our mission is to help brands succeed online by providing high-quality services that align with their values and goals.
      At Koala Studios, we prioritize quality above all else.
      </p>
      <p style={{color:"#ede7e0"}}>
      We understand that every brand is unique, and that's why we take the time to get to know our clients and their values. We believe that a website should not only be visually appealing but also reflect the brand's personality and message. That's why we work closely with our clients to create custom solutions that align with their brand's identity.
      Thank you for considering Koala Studios for your needs. We look forward to helping you take your brand to the next level!
      </p>
      <ImageWithText
        image_placement={"right"}
        src={"../images/project/allo/vanilla_noncreamer.webp"}
        alt={""}
        title={"Who we are?"}
        text={
          "Allo Nutrition is a Toronto-based start-up offering unique health products designed to enhance your everyday lifestyle. They have created the first protein powder that mixes seamlessly into hot coffee, with options for all types of coffee drinkers."
        }
        width={""}
        height={""}
        imgStyles={{ borderRadius: "1.5rem" }}
      ></ImageWithText>
    </div>
    
  );
};

export default AlloPage;
