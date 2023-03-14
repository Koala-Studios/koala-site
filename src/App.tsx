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
  useLocation,
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
import ScrollContext from "./components/ScrollContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollContext>
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
        </ScrollContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
