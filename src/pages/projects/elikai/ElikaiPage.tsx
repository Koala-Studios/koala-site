import React from "react";
import project from "../../../assets/projects/elikai.json";
import Footer from "../../../components/sections/Footer";
import ImageWithText from "../../../components/sections/ImageWithText";
import NextProject from "../../../components/sections/NextProject";
import ProjectHero from "../../../components/sections/ProjectHero";
import ScrollingText from "../../../components/sections/ScrollingText";
import TitleWithText from "../../../components/sections/TitleWithText";
import VideoWithText from "../../../components/sections/VideoWithText";

const ElikaiPage = () => {
  console.log(project);

  return (
    <div style={{ background: project["bg_color"], overflowX: "hidden" }}>
      <ProjectHero project={project} />

      <ScrollingText
        TextArray={[
          "Amazon",
          "Design",
          "3D Renders",
          "Amazon",
          "Design",
          "3D Renders"
        ]}
      />
      <ImageWithText
              image_placement={"right"}
              src={"../images/project/elikai/shot1.jpg"}
              title={"Who is Elikai?"}
              subtitle={"Home & Decor"}
              text={"Elikai is a household goods and decorations manufacturer."}
              width="40%"
              height="40%"
              imgStyles={{ border: "1px #ffffff36 solid", borderRadius: "1.5rem" }} alt={""}>
        
      </ImageWithText>

      <ImageWithText
        image_placement={"left"}
        src={"../images/project/allo/hazelnut_creamer.webp"}
        alt={""}
        title={"How did we Help?"}
        text={
          "(In Progress)"
        }
        width={"40%"}
        height={""}
        imgStyles={{ borderRadius: "1.5rem" }}
      ></ImageWithText>

      <h2 style={{ color: "#ede7e0", fontSize:32, marginBottom:150 }}> Gallery</h2>

    <div style={{marginBottom:150}}> 
        <img src="..\images\project\elikai\shot3_less_contrast.jpg"></img>
        <img src="..\images\project\elikai\shot4_3_ps.jpg"></img>
        <img src="..\images\project\elikai\water1_test1_ps.jpg"></img>
        <img src="..\images\project\elikai\shot1.jpg"></img>

    </div>
      <NextProject next_link={`/projects/${project.next_handle}`} />
      <Footer></Footer>
    </div>
  );
};

export default ElikaiPage;
