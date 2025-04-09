
import React from "react";
import SectionContainer from "../SectionContainer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <SectionContainer id="contact" className="items-center text-center">
      <div className="max-w-lg mx-auto mb-16">
        <h2 className="section-title">Get In Touch</h2>
        <p className="mt-6">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question, want to collaborate, or just want to say hi, 
          I'll do my best to get back to you!
        </p>
      </div>
      
      <Card className="w-full max-w-2xl mx-auto bg-lightNavy border-lightestNavy animate-fade-in">
        <CardContent className="p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-lightSlate">
                  Name
                </label>
                <Input 
                  id="name"
                  placeholder="Your Name"
                  className="bg-navy border-lightestNavy focus:border-teal"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-lightSlate">
                  Email
                </label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-navy border-lightestNavy focus:border-teal"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm text-lightSlate">
                Subject
              </label>
              <Input 
                id="subject"
                placeholder="How can I help you?"
                className="bg-navy border-lightestNavy focus:border-teal"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-lightSlate">
                Message
              </label>
              <Textarea 
                id="message"
                placeholder="Your message..."
                className="min-h-[150px] bg-navy border-lightestNavy focus:border-teal"
              />
            </div>
            
            <Button className="w-full bg-teal text-navy hover:bg-teal/80">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <div className="mt-16 flex flex-col items-center">
        <p className="text-lightSlate mb-4">Or reach me directly at:</p>
        <a 
          href="mailto:your.email@example.com" 
          className="text-teal hover:text-teal/80 underline underline-offset-4"
        >
          your.email@example.com
        </a>
        <div className="flex gap-6 mt-6">
          <a href="#" className="text-lightSlate hover:text-teal transition-colors">LinkedIn</a>
          <a href="#" className="text-lightSlate hover:text-teal transition-colors">GitHub</a>
          <a href="#" className="text-lightSlate hover:text-teal transition-colors">Twitter</a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
