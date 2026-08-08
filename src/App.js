import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import About from "./components/About";
import Experience from "./components/Experience";
import Capabilities from "./components/Capabilities";
import Flowstack from "./components/Flowstack";
import Process from "./components/Process";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="bg-dark min-h-screen text-textPrimary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />

        <SelectedWork />
        <Capabilities />
        <Flowstack />
        <Process />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
