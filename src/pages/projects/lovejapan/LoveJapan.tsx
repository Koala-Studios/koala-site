import React from "react";
import { Link } from "react-router-dom";
import project from "../../../assets/projects/allo.json";
import Footer from "../../../components/sections/Footer";
import ImageWithText from "../../../components/sections/ImageWithText";
import NextProject from "../../../components/sections/NextProject";
import ProjectHero from "../../../components/sections/ProjectHero";
import ScrollingText from "../../../components/sections/ScrollingText";
import TitleWithText from "../../../components/sections/TitleWithText";
import styles from "../../../styles/ProjectSections.module.css";

const LoveJapan = () => {
  console.log(project);

  return (
    <div style={{ background: project["bg_color"], overflowX: "hidden" }}>
      <ProjectHero project={project} />

      <ScrollingText
        TextArray={[
            "UI/UX Design",
            "Consulting",
            "UI/UX Design",
            "Consulting",
            "UI/UX Design",
            "Consulting",
        ]}
      />
      <ImageWithText
        image_placement={"right"}
        src={"../images/project/lovejapan/lovejapan.webp"}
        alt={""}
        title={"About LoveJapan4Life"}
        text={''}
        width={"40%"}
        height={""}
        imgStyles={{ borderRadius: "1.5rem" }}
      >
        <p>The store owner was inspired to create a store after falling in love with Japan during a trip over three years ago.
        They were captivated by the beauty of the country, its people, culture, and delicious food. Upon returning to North America,
        they realized that there were many others who shared the same love for Japan. 
        The owner's mission is to provide the best and most authentic Japanese-themed products to spread the joy of Japan around the world, 
        even to those who cannot travel there.</p>
      </ImageWithText>
        <TitleWithText orientation={"horizontal"} title={"How did we help?"} text={''}>

        <p>
            After conducting a thorough analysis, we were able to pinpoint the most pressing issues and devised a comprehensive plan to address them.
            Leveraging insights from our analytics data, we identified the key bottlenecks in the customer conversion process and formulated targeted solutions to improve the client's website. 
            By working closely with the client, we provided a clear roadmap for implementing these changes, which led to a significant boost in performance.<br/><br/>
            Thanks to our collaborative efforts, the client was able to successfully execute most of the recommended modifications, resulting in a host of positive outcomes.
            These included increased website traffic, higher engagement rates, and a substantial improvement in overall customer satisfaction.
            By leveraging data-driven insights and providing actionable recommendations, we were able to help the client achieve their goals and drive meaningful growth
        </p>
            </TitleWithText>


      <NextProject next_link={`/projects/${project.next_handle}`} />
      <Footer></Footer>
    </div>
  );
};

export default LoveJapan;
