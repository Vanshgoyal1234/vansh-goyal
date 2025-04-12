
import React from "react";
import SectionContainer from "../SectionContainer";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <SectionContainer id="about" className="pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in-left">
          <p className="text-teal mb-4 font-mono">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-lightestSlate">
            Vansh Goyal.
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate">
            I build and design solutions.
          </h2>
          <p className="text-slate max-w-md mb-8">
            I'm a passionate engineering student specializing in [your field] with a focus on creating innovative solutions to complex problems. My expertise includes [key skills] and I'm constantly learning new technologies to expand my knowledge base.
          </p>
          <div className="flex gap-4">
            <Button className="bg-teal text-navy hover:bg-teal/80 hover:text-navy">
              Resume
            </Button>
            <Button variant="outline" className="text-teal border-teal hover:bg-teal/10">
              My Projects
            </Button>
          </div>
        </div>
        
        <div className="relative max-w-md mx-auto lg:ml-auto animate-slide-in-right">
          <div className="aspect-square rounded-lg overflow-hidden relative z-10 border-2 border-teal/20">
            <div className="w-full h-full bg-gradient-to-br from-teal/30 to-navy flex items-center justify-center">
              <span className="text-6xl text-teal/80">VG</span>
            </div>
          </div>
          <div className="absolute top-4 left-4 w-full h-full border-2 border-teal rounded-lg -z-0"></div>
        </div>
      </div>

      <div className="mt-24 animate-fade-in">
        <h3 className="text-2xl font-semibold mb-6 text-lightestSlate">About Me</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="mb-4">
              Hello! My name is Vansh Goyal, and I enjoy creating things that solve real-world problems. My interest in engineering started back in [year/experience] when I discovered how [specific experience related to engineering].
            </p>
            <p className="mb-4">
              Fast-forward to today, I've had the privilege to study at [Your University], where I've gained valuable knowledge and practical experience in [specific areas]. I've worked on various projects that have helped me develop my skills and understand the importance of [specific aspect of engineering].
            </p>
            <p>
              My main goal is to [your career/professional goal] while continuing to learn and grow in this ever-evolving field. I'm particularly interested in [specific interest areas or technologies].
            </p>
          </div>
          <div>
            <h4 className="text-xl font-medium mb-4 text-lightestSlate">Skills</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li className="flex items-center">
                <span className="text-teal mr-2">▹</span> JavaScript
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">▹</span> Python
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">▹</span> React
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">▹</span> CAD Design
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">▹</span> 3D Modeling
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">▹</span> Circuit Design
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">▹</span> MATLAB
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">▹</span> Data Analysis
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
