import React from "react";
import project from "../../../assets/projects/allo.json"
import ProjectHero from "../../../components/sections/ProjectHero";


const AlloPage = () => {

    console.log(project);

  return (
    <>
      <ProjectHero project={project}/>
      
    </>
  );
};

export default AlloPage;
