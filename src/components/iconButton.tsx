import React, { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IconButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  tooltip?: string;
  tooltipPlacement?: "top" | "bottom" | "left" | "right";
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  className = "",
  onClick,
  disabled = false,
  tooltip = "",
  tooltipPlacement = "top",
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className={`relative inline-flex items-center justify-center cursor-pointer rounded-md hover:bg-[#2e303a17] w-7 h-7 ${className}`}
            onClick={onClick}
            disabled={disabled}
            type="button"
          >
            {children}
          </button>
        </TooltipTrigger>
        {tooltip && (
          <TooltipContent side={tooltipPlacement}>
            <p>{tooltip}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default IconButton;
