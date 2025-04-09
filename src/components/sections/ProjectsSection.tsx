
import React from "react";
import SectionContainer from "../SectionContainer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Smart Home Energy Monitor",
    description: "Designed and built an IoT-based energy monitoring system that tracks household electricity usage in real-time, providing detailed analytics and recommendations for energy savings.",
    image: "/placeholder.svg",
    tags: ["IoT", "Embedded Systems", "Data Analytics"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 2,
    title: "Autonomous Delivery Robot",
    description: "Developed a small-scale autonomous robot capable of navigating indoor environments to deliver packages, using computer vision and machine learning for obstacle avoidance.",
    image: "/placeholder.svg",
    tags: ["Robotics", "Computer Vision", "Machine Learning"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 3,
    title: "Structural Analysis Software",
    description: "Created a web-based application for civil engineers that performs complex structural calculations and generates visual representations of stress analysis for building designs.",
    image: "/placeholder.svg",
    tags: ["Web Development", "Structural Engineering", "3D Visualization"],
    link: "#",
    github: "#",
    featured: true
  },
];

const ProjectsSection = () => {
  return (
    <SectionContainer id="projects" title="Projects">
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center animate-fade-in`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className={`relative w-full md:w-1/2 aspect-video overflow-hidden rounded-lg group`}>
              <div className="absolute inset-0 bg-teal/20 group-hover:bg-transparent transition-all duration-300"></div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
              <p className="text-teal mb-2 text-sm">Featured Project</p>
              <h3 className="text-2xl font-semibold text-lightestSlate mb-4">{project.title}</h3>
              
              <Card className="bg-lightNavy border-lightestNavy mb-4">
                <CardContent className="p-6">
                  <p>{project.description}</p>
                </CardContent>
              </Card>
              
              <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                {project.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="border-teal/50 text-teal text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className={`flex gap-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                <Button variant="outline" size="sm" className="text-teal border-teal hover:bg-teal/10">
                  View Project
                </Button>
                <Button variant="ghost" size="sm" className="text-lightSlate hover:text-teal">
                  Source Code
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
