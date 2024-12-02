import { FC, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  width?: string; // Optional prop for dynamic width
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  width = "max-w-xl",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-neutral bg-opacity-30"
      onClick={onClose} // Close modal when clicking on the background
    >
      <div
        className={`bg-primary rounded-lg p-4 w-full ${width} relative max-h-[75vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()} // Prevent closing modal on click inside
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-white hover:opacity-80 transition-opacity"
          >
            &#10005; {/* Close icon */}
          </button>
        </div>

        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
