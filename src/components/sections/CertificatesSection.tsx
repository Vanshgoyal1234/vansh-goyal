
import React from "react";
import SectionContainer from "../SectionContainer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    id: 1,
    title: "Advanced Engineering Principles",
    issuer: "Engineering Institute of Technology",
    date: "July 2023",
    description: "Comprehensive certification covering advanced engineering principles and methodologies.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Machine Learning for Engineers",
    issuer: "Stanford Online",
    date: "March 2023",
    description: "Specialized training in applying machine learning algorithms to engineering problems.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Project Management Professional",
    issuer: "Project Management Institute",
    date: "November 2022",
    description: "Industry-standard certification for project management in engineering contexts.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Sustainable Engineering Design",
    issuer: "Green Engineering Foundation",
    date: "May 2022",
    description: "Certification in environmentally conscious engineering design principles.",
    image: "/placeholder.svg",
  },
];

const CertificatesSection = () => {
  return (
    <SectionContainer id="certificates" title="Certificates">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert, index) => (
          <Card key={cert.id} className="group bg-lightNavy border-lightestNavy card-hover animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-lightestSlate group-hover:text-teal transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-lightSlate">
                    {cert.issuer}
                  </CardDescription>
                </div>
                <span className="text-teal text-sm">{cert.date}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0 bg-navy/50">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm">{cert.description}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="text-teal border-teal hover:bg-teal/10 ml-auto">
                View Certificate
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default CertificatesSection;
