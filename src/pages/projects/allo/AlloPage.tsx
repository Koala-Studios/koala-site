import React from "react";
import project from "../../../assets/projects/allo.json";
import Footer from "../../../components/sections/Footer";
import ImageWithText from "../../../components/sections/ImageWithText";
import ProjectHero from "../../../components/sections/ProjectHero";
import ScrollingText from "../../../components/sections/ScrollingText";
import TitleWithText from "../../../components/sections/TitleWithText";

const AlloPage = () => {
  console.log(project);

  return (
    <div style={{ background: project["bg_color"], overflowX: "hidden" }}>
      <ProjectHero project={project} />
      <TitleWithText
        orientation={"horizontal"}
        title={""}
        text={""}
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
        src={"../images/project/allo/vanilla_noncreamer.webp"}
        alt={""}
        title={"Who is Allo?"}
        text={"Allo Nutrition is a Toronto-based start-up offering unique health products designed to enhance your everyday lifestyle. They have created the first protein powder that mixes seamlessly into hot coffee, with options for all types of coffee drinkers."}
        width={""}
        height={""}
      ></ImageWithText>

      <ImageWithText
        image_placement={"left"}
        src={"../images/project/allo/vanilla_noncreamer.webp"}
        alt={""}
        title={"How did we Help?"}
        text={"Allo's vision was to create a unique digital experience that would allow users to understand and appreciate their innovative products. To achieve this, we helped Allo design and launch a website that goes beyond just providing product information. We worked closely with Allo to understand their brand and their goals, and crafted a website that truly represents their values and ethos. "}
        width={""}
        height={""}
      ></ImageWithText>

      <h2 style={{color:"#ede7e0"}}> Our Results</h2>
      <video style={{padding: "var(--global-padding)", maxWidth:'100%', marginTop:25,marginBottom:25 }} loop autoPlay muted>
        <source src="..\videos\allo\allo_scroll.mp4"></source></video>
        <p style={{color:"#ede7e0", marginBottom:50}}>Scrolling video in home page</p>
        <div style={{ padding: "var(--global-padding)", marginTop:25,marginBottom:50, gap:15, display:"flex", justifyContent:'space-between'}}>   
        <div>
        <img   src="..\images\project\allo\allo-shop-page.png"></img>

        <p style={{color:"#ede7e0", marginTop:15}}>Shop Page</p>
        </div>
        <div>
        <img   src="..\images\project\allo\allo-creamer-product-page.png"></img>

        <p style={{color:"#ede7e0", marginTop:15}}> Mobile Product Page</p>
        </div>
        <div>
        <img   src="..\images\project\allo\variety-pack-mobile.png"></img>

        <p style={{color:"#ede7e0", marginTop:15}}> Variety Pack Page</p>
        </div>
      </div>

      
      <img style={{padding: "var(--global-padding)", maxWidth:"100%"}} src="../images/project/allo/allo-product-desktop2.png"></img>
      
      <p style={{color:"#ede7e0", marginTop:15, marginBottom:50}}> Desktop Product Page</p>
      <Footer></Footer>
    </div>
  );
};

export default AlloPage;
