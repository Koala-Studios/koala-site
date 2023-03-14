import React from "react";
import { Link } from "react-router-dom";
import project from "../../../assets/projects/allo.json";
import Button from "../../../components/Button";
import Footer from "../../../components/sections/Footer";
import ImageWithText from "../../../components/sections/ImageWithText";
import NextProject from "../../../components/sections/NextProject";
import ProjectHero from "../../../components/sections/ProjectHero";
import ScrollingText from "../../../components/sections/ScrollingText";
import TitleWithText from "../../../components/sections/TitleWithText";
import styles from "../../../styles/ProjectSections.module.css";
import StatBadge from "../StatBadge";

const AlloPage = () => {
  return (
    <div style={{ background: project["bg_color"], overflowX: "hidden" }}>
      <ProjectHero
        project={project}
        title={
          <h1>
            Protein Podwer <br />
            For Hot Coffee
          </h1>
        }
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
        title={"About Allo"}
        subtitle={"Health & Fitness"}
        text={
          "Allo Nutrition is a Toronto-based company offering unique health products designed to enhance your everyday lifestyle. They have created the first protein powder that mixes seamlessly into hot coffee, with options for all types of coffee drinkers."
        }
        width={"40%"}
        height={""}
        imgStyles={{ borderRadius: "1.5rem" }}
      >
        <div>
          <Link
            style={{ width: "fit-content", display: "block" }}
            to={project.site_link}
            target="_blank"
          >
            <Button type={"primary light"}>
              View Live Site
              <img src="../images/cta_link_black.png" height="12" width="12" />
            </Button>
          </Link>
        </div>
      </ImageWithText>

      <ImageWithText
        image_placement={"left"}
        src={"../images/project/allo/hazelnut_creamer.webp"}
        alt={""}
        title={"How did we Help?"}
        width={"40%"}
        height={""}
        imgStyles={{ borderRadius: "1.5rem" }}
      >
        <p>
          Allo's vision was to create a unique digital experience that would
          allow users to understand and appreciate their innovative products. To
          achieve this, we helped Allo design and launch a website that goes
          beyond just providing product information.
          <br />
          <br /> We worked closely with Allo to understand their brand and their
          goals, and crafted a website that truly represents their values and
          ethos.
        </p>
      </ImageWithText>

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
        }}
      >
        <StatBadge
          LargeText="4.02%"
          SmallText="Conversion Rate"
          UnderText={
            <Link
              target="_blank"
              to={
                "https://lp.littledata.io/average/ecommerce-conversion-rate-(all-devices)/Shopify"
              }
            >
              (vs 2022 Avg 1.4%)
            </Link>
          }
        />
        <StatBadge LargeText="1 Year" SmallText="Since Launch" />
        <StatBadge LargeText="+300,000" SmallText="Sessions" />
        <StatBadge LargeText="14" SmallText="Coffees Spilled" />
      </div>
      <h2 style={{ color: "#ede7e0", marginTop: 60 }}>Featured</h2>

      <div
        style={{
          padding: "var(--global-padding)",
        }}
      >
        <video
          style={{
            maxWidth: "100%",
            borderRadius: "1rem",
            border: "2px solid #282420",
          }}
          loop
          autoPlay
          muted
        >
          <source src="..\videos\allo\allo_scroll.mp4"></source>
        </video>
      </div>

      <p style={{ color: "#ede7e0", marginBottom: 50 }}>
        Scrolling video in home page
      </p>
      <div
        style={{
          padding: "var(--global-padding)",
          marginTop: 25,
          marginBottom: 50,
          width: "100%",
          gap: 15,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img
            style={{ borderRadius: "1rem", width: "100%" }}
            src="..\images\project\allo\allo-shop-page.png"
          ></img>

          <p style={{ color: "#ede7e0", marginTop: 15 }}>Shop Page</p>
        </div>
        <div>
          <img
            style={{ borderRadius: "1rem", width: "100%" }}
            src="..\images\project\allo\allo-creamer-product-page.png"
          ></img>

          <p style={{ color: "#ede7e0", marginTop: 15 }}>
            {" "}
            Mobile Product Page
          </p>
        </div>
        <div>
          <img
            style={{ borderRadius: "1rem", width: "100%" }}
            src="..\images\project\allo\variety-pack-mobile.png"
          ></img>

          <p style={{ color: "#ede7e0", marginTop: 15 }}> Variety Pack Page</p>
        </div>
      </div>

      <div style={{ padding: "var(--global-padding)" }}>
        <img
          style={{ maxWidth: "100%", borderRadius: "1rem" }}
          src="../images/project/allo/allo-product-desktop.png"
        ></img>
      </div>

      <p style={{ color: "#ede7e0", marginTop: 15, marginBottom: 150 }}>
        {" "}
        Desktop Product Page
      </p>
      <NextProject next_link={`/projects/${project.next_handle}`} />
      <Footer></Footer>
    </div>
  );
};

export default AlloPage;
