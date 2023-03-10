import React from "react";
import Button from "../../components/Button";
import ImageWithText from "../../components/sections/ImageWithText";
import TitleWithText from "../../components/sections/TitleWithText";

const AlloPage = () => {
  return (
    <div>
      <TitleWithText
        orientation={"horizontal"}
        title={"About Us"}
        text={"Koala Studios Blah blah"}
      />
      <TitleWithText
        orientation={"horizontal"}
        title={"Our Mission"}
        text={"Koala Studios Blah blah"}
      />
      <Button type={"primary light"}>Contact Us</Button>
    </div>
  );
};

export default AlloPage;
