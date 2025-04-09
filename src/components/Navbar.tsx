
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "about", label: "About" },
  { id: "certificates", label: "Certificates" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => 
        document.getElementById(item.id)
      );
      
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
      
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 w-full transition-all duration-300 z-50 py-4 px-6 md:px-12 lg:px-24",
      scrolled ? "bg-navy/90 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="flex justify-between items-center">
        <div className="text-teal text-2xl font-bold font-poppins">
          Portfolio<span className="text-lightestSlate">.</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "relative px-1 py-2 text-sm font-medium transition-colors",
                activeSection === item.id
                  ? "text-teal"
                  : "text-lightSlate hover:text-teal"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-teal mr-1">{`0${index + 1}.`}</span>
              {item.label}
              {activeSection === item.id && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-teal rounded-full transform origin-left animate-[width_300ms_ease]"></span>
              )}
            </button>
          ))}
        </nav>
        
        <button 
          className="md:hidden text-teal hover:text-lightestSlate"
        >
          Menu
        </button>
      </div>
    </header>
  );
};

export default Navbar;
