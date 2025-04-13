
import React from "react";
import SectionContainer from "../SectionContainer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import ImageDialog from "../ImageDialog";

const projects = [
  {
    id: 1,
    title: "4G Mobile Network Jammer",
    description: "Designed and implemented a 4G mobile network jammer on Circuit-On-Board (COB) technology that can temporarily disrupt cellular signals in a controlled environment. This project demonstrates principles of wireless communication interference and signal processing.",
    image: "/lovable-uploads/22942a65-010e-4081-9ea4-9f9dd6623574.png",
    tags: ["RF Engineering", "Electronics", "Signal Processing", "COB Technology"],
    featured: true
  },
  {
    id: 2,
    title: "Weather Monitoring System",
    description: "Created a real-time weather monitoring system using Arduino, DHT11 sensor, and LCD display that accurately measures temperature and humidity levels. This system can be used for environmental monitoring in various settings like homes, greenhouses, or laboratories.",
    image: "/lovable-uploads/4c9b66f6-48b2-4e54-b8b2-10c76081541a.png",
    tags: ["Arduino", "IoT", "Sensor Technology", "Environmental Monitoring"],
    featured: true
  },
  {
    id: 3,
    title: "Police LED Light System",
    description: "Developed a compact and efficient police LED light system with alternating red and blue patterns controlled by an ESP module. This project demonstrates skills in microcontroller programming, LED control, and low-power design for emergency signaling applications.",
    image: "/lovable-uploads/7c20d59f-777f-4447-9067-c03daf0a8430.png",
    tags: ["ESP8266", "LED Design", "Microcontrollers", "Embedded Systems"],
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
                  <p className="text-lightSlate">{project.description}</p>
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
                <ImageDialog imageSrc={project.image} imageAlt={project.title}>
                  <Button variant="outline" size="sm" className="text-teal border-teal hover:bg-teal/10">
                    <Search size={16} className="mr-2" />
                    View Project
                  </Button>
                </ImageDialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
