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
import HomepageHero from "./pages/homepage/HomepageHero";
import ErrorPage from "./components/ErrorPage";
import ContactForm from "./pages/contact/ContactForm";
import ServicesSection from "./pages/services/ServicesSection";
import AlloPage from "./pages/projects/allo/AlloPage";

function App() {
  return (
    <div className="App">
      <ContextContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomepageHero />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/allo" element={<AlloPage />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </BrowserRouter>
      </ContextContainer>
    </div>
  );
}

export default App;
