
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ImageDialogProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

const ImageDialog = ({ children, imageSrc, imageAlt }: ImageDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[80vw] sm:max-h-[80vh] p-0 border-none bg-transparent">
        <div className="rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-w-full max-h-[80vh] object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
