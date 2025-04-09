
import React from "react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <main>
        <AboutSection />
        <CertificatesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
