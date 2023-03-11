import React from "react";
import project from "../../../assets/projects/stlth.json";
import Footer from "../../../components/sections/Footer";
import ImageWithText from "../../../components/sections/ImageWithText";
import ProjectHero from "../../../components/sections/ProjectHero";
import ScrollingText from "../../../components/sections/ScrollingText";
import TitleWithText from "../../../components/sections/TitleWithText";
import VideoWithText from "../../../components/sections/VideoWithText";

const StlthPage = () => {
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
          "UI/UX Design",
          "Consulting",
          "3D Renders",
          "Graphic Design",
          "UI/UX Design",
          "Consulting",
          "3D Renders",
        ]}
      />
      <VideoWithText
        video_placement={"right"}
        src={"../images/project/stlth/stlth-devices-color.mp4"}
        title={"Who is Stlth?"}
        loop={false}
        text={"STLTH's founders were introduced to vaping products almost a decade ago and it helped them transition away from traditional cigarettes, which confirmed their belief in the potential of vaping systems. Their mission is to provide an alternative to traditional tobacco products for adult smokers. STLTH uses analytical machinery to develop and maintain less harmful products and is a leader in compliance, consulting third-party labs regularly to validate their methods and results."}
        width={"40%"}
        height={""}
        videoStyles={{border:"1px #ffffff36 solid", borderRadius:'1.5rem'}}
      ></VideoWithText>
      <VideoWithText
        video_placement={"left"}
        src={"../images/project/stlth/stlth-usb.webm"}
        title={"How could we Help?"}
        text={"The mission of the redesign project was to ensure that the brand and website were in sync with each other. The client had a clear vision of their brand, but the previous website design failed to communicate that vision to its audience. "}
        width={"40%"}
        height={""}
        videoStyles={{border:"1px #ffffff36 solid", borderRadius:'1.5rem'}}
      ></VideoWithText>
      <h2 style={{color:"#ede7e0"}}> Our Results</h2>
      <video style={{padding: "var(--global-padding)", maxHeight:'90vh', marginTop:25,marginBottom:150 }} loop autoPlay muted>
        <source  src="..\images\project\stlth\2023-03-10_18-48-45-2x-RIFE-RIFE4.0-120fps.mp4"></source></video>
    <h2 style={{color:"#ede7e0", marginBottom:100}}>Here's a few instances of the pages that we  worked on</h2>
    <div style={{ padding: "var(--global-padding)", marginTop:25,marginBottom:150, gap:15, display:"flex", justifyContent:'left', height:"80vh"}}>   
        
        <div >
        <img style={{height:"100%", border: "2px solid #ffffff36", borderRadius:"30px"}}  src="..\images\project\stlth\stlth-home-page-old.png"></img>

        <p style={{color:"#ede7e0", marginTop:15}}> Old Landing Page</p>
        </div>
        <div>
        <img   style={{height:"100%"}} src="..\images\project\stlth\home-page-new-photo.png"></img>
        <p style={{color:"#ede7e0", marginTop:15}}>New Landing Page</p>
        </div>

      </div>

      <div style={{ padding: "var(--global-padding)", marginTop:25,marginBottom:150, gap:30, display:"flex", justifyContent:'right', height:"80vh"}}>   
        <div >
        <img style={{height:"100%", border: "2px solid #ffffff36", borderRadius:"30px"}}  src="..\images\project\stlth\stlth-menu.png"></img>

        <p style={{color:"#ede7e0", marginTop:15}}> Old Menu</p>
        </div>
        <div>
        <img   style={{height:"100%"}} src="..\images\project\stlth\stlth-new-menu.png"></img>
        <p style={{color:"#ede7e0", marginTop:15}}>New Menu</p>
        </div>

      </div>

      <div style={{ padding: "var(--global-padding)", marginTop:25,marginBottom:150, gap:30, display:"flex", justifyContent:'left', height:"80vh"}}>   
        <div >
        <img style={{height:"100%", border: "2px solid #ffffff36", borderRadius:"30px"}}  src="..\images\project\stlth\stlth-home-cart-old.png"></img>

        <p style={{color:"#ede7e0", marginTop:15}}> Old Landing Page</p>
        </div>
        <div>
        <img   style={{height:"100%"}} src="..\images\project\stlth\stlth-cart-new.png"></img>
        <p style={{color:"#ede7e0", marginTop:15}}>New Landing Page</p>
        </div>
      </div>
        <ImageWithText 
        src="..\images\project\stlth\stlth-device.jpg"
        alt=""
        image_placement={"right"}
        title={"Conclusion"}
        text={"The Solution was to focus on the brand's values while enhancing the customer experience through the elimination of inconsistencies, improving calls to action, and making the website more polished and user-friendly."}
        width={"40%"}
        height={""}
        imgStyles={{border:"1px #ffffff36 solid", borderRadius:'1.5rem'}}>

        </ImageWithText>
      <Footer></Footer>
    </div>
  );
};

export default StlthPage;
