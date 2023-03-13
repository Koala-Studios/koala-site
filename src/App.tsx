import React from "react";
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
import LoveJapan from "./pages/projects/lovejapan/LoveJapan";
function App() {
  return (
    <div className="App">
      <ContextContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomepagePage />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/allo" element={<AlloPage />} />
            <Route path="/projects/stlth" element={<StlthPage />} />
            <Route path="/projects/lovejapan" element={<LoveJapan />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </ContextContainer>
    </div>
  );
}

export default App;
