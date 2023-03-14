import React from "react";
import { Link } from "react-router-dom";
import project from "../../../assets/projects/lovejapan.json";
import Button from "../../../components/Button";
import Footer from "../../../components/sections/Footer";
import ImageWithText from "../../../components/sections/ImageWithText";
import NextProject from "../../../components/sections/NextProject";
import ProjectHero from "../../../components/sections/ProjectHero";
import ScrollingText from "../../../components/sections/ScrollingText";
import TitleWithText from "../../../components/sections/TitleWithText";
import styles from "../../../styles/ProjectSections.module.css";
import StatBadge from "../StatBadge";

const LoveJapan = () => {
  console.log(project);

  return (
    <div style={{ background: project["bg_color"], overflowX: "hidden" }}>
      <ProjectHero project={project} />

      <ScrollingText
        TextArray={[
          "UI/UX Design",
          "Consulting",
          "Data Analysis",
          "Consulting",
          "UI/UX Design",
          "Data Analysis",
        ]}
      />
      <ImageWithText
        image_placement={"right"}
        src={"../images/project/lovejapan/lovejapan.webp"}
        alt={""}
        title={"About LoveJapan4Life"}
        subtitle={"Clothing & Apparel"}
        width={"40%"}
        height={""}
        imgStyles={{ borderRadius: "1.5rem", border: "2px solid #ede7e0" }}
      >
        <p>
          The client was inspired to create a store after falling in love with
          Japan during a trip over three years ago. They were captivated by the
          beauty of the country, its people, culture, and delicious food. Upon
          returning to North America, they realized that there were many others
          who shared the same love for Japan. LoveJapan4Life's mission is to
          provide the best and most authentic Japanese-themed products to spread
          the joy of Japan around the world, even to those who cannot travel
          there.
        </p>

        <Link
          style={{ width: "fit-content", display: "block" }}
          to={project.site_link}
          target="_blank"
        >
          <Button type={"primary light"}>
            View Live Site{" "}
            <img src="../images/cta_link_black.png" height="12" width="12" />
          </Button>
        </Link>
      </ImageWithText>
      <TitleWithText orientation={"horizontal"} title={"How did we help?"}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <p style={{ maxWidth: 800, fontSize: 25 }}>
            After conducting a thorough analysis, we were able to pinpoint the
            most pressing issues and devised a comprehensive plan to address
            them. Leveraging insights from our analytics data, we identified the
            key bottlenecks in the customer conversion process and formulated
            targeted solutions to improve the client's website. <br />
            <br />
            By working closely with the client, we provided a clear roadmap for
            implementing these changes, which led to a significant boost in
            performance.
          </p>
        </div>
      </TitleWithText>

      <h2 style={{ color: "#ede7e0", fontSize: "2rem" }}> Our Results</h2>

      <div
        style={{
          padding: "var(--global-padding)",
          display: "flex",
          gap: 40,
          justifyContent: "center",
          alignItems: "center",
          color: "#ede7e0",
          fontSize: 13,
          marginTop: 50,
          marginBottom: 150,
        }}
      >
        <StatBadge
          LargeText="+159%"
          SmallText="Conversion Rate"
          UnderText={<div>From 0.8%</div>}
        />
        <StatBadge
          LargeText="+216% "
          SmallText="Sessions"
          UnderText={<div>From +100,000 Sessions</div>}
        />
        <StatBadge LargeText="+652%" SmallText="Revenue" />
        <StatBadge LargeText="16" SmallText="Ramens Consumed" />
      </div>
      <TitleWithText orientation={"horizontal"} title={"Conclusion"}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <p style={{ maxWidth: 800 }}>
            Thanks to our collaborative efforts, the client was able to
            successfully execute most of the recommended modifications,
            resulting in a host of positive outcomes. These included increased
            website traffic, higher engagement rates, and a substantial
            improvement in conversion rate. <br />
            By leveraging data-driven insights and providing actionable
            recommendations, we were able to help the client achieve their goals
            and drive meaningful growth.
          </p>
        </div>
      </TitleWithText>

      <NextProject next_link={`/projects/${project.next_handle}`} />
      <Footer></Footer>
    </div>
  );
};

export default LoveJapan;
