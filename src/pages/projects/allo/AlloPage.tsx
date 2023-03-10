import React from "react";
import project from "../../../assets/projects/allo.json";
import ImageWithText from "../../../components/sections/ImageWithText";
import ProjectHero from "../../../components/sections/ProjectHero";
import TitleWithText from "../../../components/sections/TitleWithText";

const AlloPage = () => {
  console.log(project);

  return (
    <div style={{ background: project.color1, overflowX: "hidden" }}>
      <ProjectHero project={project} />
      <TitleWithText
        orientation={"horizontal"}
        title={"dasfdaas dfd fassdfsf"}
        text={"asdfadasdfdaasdfasdffdassfadsfasds"}
      />
      <ImageWithText
        image_placement={"right"}
        src={""}
        alt={""}
        title={""}
        width={""}
        height={""}
      ></ImageWithText>
    </div>
  );
};

export default AlloPage;
