import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProjectList from "./pages/projects/ProjectList";
import ContextContainer from "./components/ContextContainer";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import ContactForm from "./pages/contact/ContactForm";
import ServicesSection from "./pages/services/ServicesSection";
import AlloPage from "./pages/projects/allo/AlloPage";
import AboutPage from "./pages/about/AboutPage";
import HomepagePage from "./pages/homepage/HomepagePage";
import StlthPage from "./pages/projects/stlth/StlthPage";
import LoveJapanPage from "./pages/projects/lovejapan/LoveJapanPage";
import ElikaiPage from "./pages/projects/elikai/ElikaiPage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const main = useRef<any>();
  const smoother = useRef<any>();

  useEffect(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 1, // seconds it takes to "catch up" to native scroll position
      effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
    });
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div id="smooth-wrapper" ref={main}>
          <div id="smooth-content">
            <Routes>
              <Route path="/" element={<HomepagePage />} />
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/projects/allo" element={<AlloPage />} />
              <Route path="/projects/stlth" element={<StlthPage />} />
              <Route path="/projects/lovejapan" element={<LoveJapanPage />} />
              <Route path="/projects/elikai" element={<ElikaiPage />} />
              <Route path="/services" element={<ServicesSection />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
