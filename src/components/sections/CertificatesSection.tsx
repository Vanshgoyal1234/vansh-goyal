
import React from "react";
import SectionContainer from "../SectionContainer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ImageDialog from "../ImageDialog";
import { Search } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Digital 101",
    issuer: "FutureSkills Prime & NASSCOM",
    date: "January 2024",
    description: "Comprehensive 30-hour training program covering essential digital fundamentals approved by the IT-ITeS Sector Skills Council and Government of India.",
    image: "/lovable-uploads/31acd10f-f07f-4d3f-9548-568228d79ea8.png",
  },
  {
    id: 2,
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "December 2023",
    description: "Foundational certification covering Python programming fundamentals, data types, control structures, and basic algorithmic thinking.",
    image: "/lovable-uploads/28f67cb9-0a6a-4f52-a07a-f0cba77d1fab.png",
  },
  {
    id: 3,
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "March 2023",
    description: "Certification validating proficiency in Python basics including syntax, data structures, functions and problem-solving skills.",
    image: "/lovable-uploads/98962807-5c1c-4833-9c9d-65175d0cd744.png",
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
                <p className="text-sm text-lightSlate">{cert.description}</p>
              </div>
            </CardContent>
            <CardFooter>
              <ImageDialog imageSrc={cert.image} imageAlt={cert.title}>
                <Button variant="outline" size="sm" className="text-teal border-teal hover:bg-teal/10 ml-auto">
                  <Search size={16} className="mr-2" />
                  View Certificate
                </Button>
              </ImageDialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default CertificatesSection;
