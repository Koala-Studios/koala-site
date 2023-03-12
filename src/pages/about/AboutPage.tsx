import React from "react";
import Button from "../../components/Button";
import ImageWithText from "../../components/sections/ImageWithText";
import TitleWithText from "../../components/sections/TitleWithText";
import AboutpageHero from "./AboutpageHero";
import ScrollingText from "../../components/sections/ScrollingText";
import { hover } from "@testing-library/user-event/dist/hover";
import styles from "../../styles/Navbar.module.css";
import Footer from "../../components/sections/Footer";
import { Link } from "react-router-dom";
const AlloPage = () => {
  return (
    <div style={{ backgroundColor:"#181A17", overflowX:'hidden'}}>
      <AboutpageHero></AboutpageHero>
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

        <img className={styles.logo} style={{marginTop:150  }}
          alt="Koala Studios Logo"
          src="/images/koala_logo_white.png"
          width={260}
        />

      <ImageWithText
        image_placement={"right"}
        src={"../images/project/allo/vanilla_noncreamer.webp"}
        alt={""}
        title={"Our Mission"}
        text={""}
        width={""}
        height={""}
        imgStyles={{ borderRadius: "1.5rem" }}
        > 
        <p style={{fontFamily:'Poppins-Regular'}}>
        Our mission is to help brands succeed online by providing high-quality services that align with their values and goals. 
            At Koala Studios, we prioritize quality above all else.
            We understand that every brand is unique, and that's why we take the time to get to know our clients and their values.
            <br/><br/>We believe that a website should not only be visually appealing but also reflect the brand's personality and message.
            That's why we work closely with our clients to create custom solutions that align with their brand's identity.
            <br/><br/>Thank you for considering Koala Studios for your needs. We look forward to helping you take your brand to the next level!"
        </p>
      </ImageWithText>

      <div style={{padding: "var(--global-padding)", color: "#ede7e0", display:'flex', gap:10, flexDirection:'column', alignItems:'center', marginBottom:150, marginTop:100}}>
        <h2>Want to learn more about us?</h2>
        <p>Take a look through our projects!</p>
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
