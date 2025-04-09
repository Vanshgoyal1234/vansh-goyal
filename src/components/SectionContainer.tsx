
import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  className,
  children,
  title,
}) => {
  return (
    <section
      id={id}
      className={cn(
        "section-padding min-h-screen flex flex-col justify-center",
        className
      )}
    >
      {title && (
        <h2 className="section-title mb-16">{title}</h2>
      )}
      {children}
    </section>
  );
};

export default SectionContainer;
