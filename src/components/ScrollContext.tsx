import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface Props {
  children: any;
}

const ScrollContext: React.FC<Props> = ({ children }) => {
  const main = useRef<any>();
  const smoother = useRef<any>();
  const location = useLocation();

  useEffect(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 1, // seconds it takes to "catch up" to native scroll position
      effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
    });
    smoother.current.scrollTop(0);
    
  }, [location.key]);

  return (
    <div id="smooth-wrapper" ref={main}>
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default ScrollContext;
