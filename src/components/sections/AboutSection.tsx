
import React from "react";
import SectionContainer from "../SectionContainer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutSection = () => {
  return (
    <SectionContainer id="about" className="pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in-left">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="w-20 h-20 border-2 border-teal">
              <AvatarImage 
                src="/lovable-uploads/4c9b66f6-48b2-4e54-b8b2-10c76081541a.png" 
                alt="Vansh Goyal" 
                className="object-cover"
              />
              <AvatarFallback>VG</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-teal mb-2 font-mono">Hi, my name is</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lightestSlate">
                Vansh Goyal.
              </h1>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate">
            I build and design solutions.
          </h2>
          <p className="text-slate max-w-md mb-8">
            I'm a passionate engineering student specializing in Electronics and Telecommunication Engineering at MIT Academy of Engineering, Alandi. I'm focused on creating innovative solutions and expanding my technical skills.
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
              Hello! My name is Vansh Goyal, and I enjoy creating things that solve real-world problems. My interest in engineering started when I discovered how technology can transform our daily lives and create positive impact.
            </p>
            <p className="mb-4">
              Currently, I'm a first-year student studying Electronics and Telecommunication Engineering at MIT Academy of Engineering, Alandi. I'm developing my knowledge in circuit design, programming, and electronics fundamentals while working on projects that help me apply these concepts practically.
            </p>
            <p>
              My main goal is to gain expertise in electronic systems and communication technologies while building innovative solutions. I'm particularly interested in embedded systems, circuit design, and IoT applications.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-medium mb-4 text-lightestSlate">Skills</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li className="flex items-center">
                <span className="text-teal mr-2">▹</span> Python
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">▹</span> Arduino
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">▹</span> Electronics
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">▹</span> Circuit Design
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">▹</span> ESP8266
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">▹</span> Microcontrollers
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">▹</span> IoT
              </li>
              <li className="flex items-center">
                <span className="text-teal mr-2">▹</span> RF Engineering
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
