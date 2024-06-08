import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";
type ImageConfirmDialogProps = {
  selectedFile: string | undefined;
  setIsInputClicked: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  handleSendImage: () => void;
};

const ImageConfirmDialog: React.FC<ImageConfirmDialogProps> = ({
  selectedFile,
  setIsInputClicked,
  onClose,
  handleSendImage,
}) => (
  <Dialog open={!!selectedFile}>
    <DialogContent
      className=" bg-sigMain border border-sigColorBgBorder md:max-w-3xl max-w-xl h-[80vh] flex flex-col "
      onInteractOutside={onClose}
    >
      <DialogHeader className="flex-1">
        <div className="flex items-center relative h-3/4 my-auto">
          <Image
            src={selectedFile!}
            alt="Selected File"
            fill
            className="rounded-md border mx-auto border-sigColorBgBorder object-contain"
          />
        </div>
      </DialogHeader>
      <DialogFooter>
        <Button className="bg-[blue]" onClick={handleSendImage}>
          Send
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
export default ImageConfirmDialog;
