
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, X } from "lucide-react";

interface ImageDialogProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

const ImageDialog = ({ children, imageSrc, imageAlt }: ImageDialogProps) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleReset = () => {
    setZoomLevel(1);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setZoomLevel(1); // Reset zoom when dialog closes
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[90vw] sm:max-h-[90vh] p-0 border-none bg-transparent">
        <div className="rounded-lg overflow-hidden flex flex-col items-center justify-center bg-navy/95 p-2">
          <div className="relative w-full overflow-auto flex items-center justify-center" 
               style={{ height: "80vh" }}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="object-contain transition-transform duration-200"
              style={{ transform: `scale(${zoomLevel})` }}
              onClick={handleReset}
            />
          </div>
          
          <div className="flex items-center gap-2 mt-2 bg-navy p-2 rounded-lg">
            <Button
              variant="outline"
              size="icon"
              onClick={handleZoomOut}
              className="text-teal border-teal hover:bg-teal/10"
              disabled={zoomLevel <= 0.5}
            >
              <ZoomOut size={18} />
            </Button>
            
            <span className="text-lightSlate text-sm min-w-[60px] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            
            <Button
              variant="outline"
              size="icon"
              onClick={handleZoomIn}
              className="text-teal border-teal hover:bg-teal/10"
              disabled={zoomLevel >= 3}
            >
              <ZoomIn size={18} />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
