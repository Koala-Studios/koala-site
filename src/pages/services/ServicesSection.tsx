import React from "react";
import Button from "../../components/Button";
import ImageWithText from "../../components/ImageWithText";
import StandaloneImage from "../../components/StandaloneImage";

const ServicesSection = () => {
  return (
    <>
      <StandaloneImage
        src="/images/leaves_bg.jpg"
        alt=""
        width="400"
        height="400"
        fullwidth={true}
      ></StandaloneImage>
      <ImageWithText
        image_placement="left"
        src="/images/placeholder.png"
        alt="TODO"
        title="Web Development"
        text="In here say we do web development, UI/UX design, and consulting. For more information, click below:"
        width="400"
        height="400"
      >
        <Button type="primary">View Our Work</Button>
      </ImageWithText>
      <ImageWithText
        image_placement="right"
        src="/images/placeholder.png"
        alt="TODO"
        title="UI/UX Design"
        text="In here say we do web development, UI/UX design, and consulting. For more information, click below:"
        width="400"
        height="400"
      >
        <Button type="primary">View Our Work</Button>
      </ImageWithText>
      <ImageWithText
        image_placement="left"
        src="/images/placeholder.png"
        alt="TODO"
        title="Consulting"
        text="The help you need, when you need it"
        width="400"
        height="400"
      >
        <Button type="primary">View Our Work</Button>
      </ImageWithText>
    </>
  );
};

export default ServicesSection;
