// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";
import { ScrollStatus } from "smooth-scrollbar/interfaces";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface Props {
  children: any;
}

// const ScrollContext: React.FC<Props> = ({ children }) => {
//   const main = useRef<any>();
//   const smoother = useRef<any>();
//   const location = useLocation();

//   useEffect(() => {
//     smoother.current = ScrollSmoother.create({
//       smooth: 1, // seconds it takes to "catch up" to native scroll position
//       effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
//     });
//     smoother.current.scrollTop(0);

//   }, [location.key]);

//   return (
//     <div id="smooth-wrapper" ref={main}>
//       <div id="smooth-content">{children}</div>
//     </div>
//   );
// };

var options = {
  damping: 0.08,
};

const ScrollContext: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const smoother = useRef<any>();

  useEffect(() => {
    if (!smoother.current) return;
    console.log("hello");
    const scrollbar = Scrollbar.init(smoother.current, options);
    scrollbar.scrollTo(0, 0);

    const dataSpeedEls = smoother.current.querySelectorAll(
      "[data-speed]:not([data-value='0']"
    );

    console.log(dataSpeedEls);
    for (let i = 0; i < dataSpeedEls.length; i++) {
      const el = dataSpeedEls[i];
      el.style.transitionDuration = "100ms";
    }

    scrollbar.addListener((scroll: ScrollStatus) => {
      for (let i = 0; i < dataSpeedEls.length; i++) {
        const el = dataSpeedEls[i];
        const dataSpeed = el.getAttribute("data-speed");
        const rect = el.getBoundingClientRect();
        // console.log(rect.top - scroll.offset.y);
        el.style.transform = `translateY(${
          dataSpeed * ((rect.bottom - scroll.offset.y) / 40)
        }px)`;
      }
    });
  }, [location.key]);

  return (
    <div style={{ height: "100vh" }} ref={smoother}>
      <div>{children}</div>
    </div>
  );
};

export default ScrollContext;
