import React, { useState, useRef } from "react";
import { SmilePlus, Scan } from "lucide-react";
import IconButton from "@/components/iconButton";
import useClickOutside from "@/components/hooks/useClickOutside";
import { ChatInput } from "@/components/ContentCentral/ui/ChatInput";

interface ContentBottomProps {
  className?: string;
}

const ContentBottom: React.FC<ContentBottomProps> = ({ className }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleRichTextClick = () => {
    setIsExpanded(!isExpanded);
  };

  useClickOutside(containerRef, () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  });

  return (
    <div
      ref={containerRef}
      className={`z-0 py-3 px-6 transition-all duration-800 ease-in-out ${
        isExpanded ? "max-h-[1000px]" : "max-h-[76px]"
      } h-full ${className || ""}`}
    >
      <div className="h-full relative">
        <div className="rounded-[8px] flex flex-col justify-center items-center w-full h-full bg-white">
          <div className="bg-[#fefefe] rounded-2xl w-full h-full px-2 py-2 flex relative z-[1]">
            <div
              className={`transition-all duration-800 ease-in-out ${
                isExpanded
                  ? "opacity-0 w-0 pointer-events-none"
                  : "opacity-100 w-7"
              } flex items-center justify-center overflow-hidden`}
            >
              <IconButton tooltip="emoji">
                <SmilePlus size={24} />
              </IconButton>
            </div>

            <div
              className={`relative flex-1 h-full overflow-hidden transition-all duration-800 ease-in-out`}
            >
              <div
                className={`absolute w-full h-full rounded-xl transition-all duration-800 ease-in-out ${
                  isExpanded
                    ? "opacity-0 translate-y-4 pointer-events-none"
                    : "opacity-100 translate-y-0"
                } `}
              >
                <ChatInput />
              </div>
              <div
                className={`absolute w-full h-full rounded-xl transition-all duration-800 ease-in-out ${
                  isExpanded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                } bg-amber-400`}
              >
                <div className="absolute bottom-2 right-2 w-10 h-6 rounded-2xl bg-red-500"></div>
              </div>
            </div>
            <div
              className={`transition-all duration-800 ease-in-out ${
                isExpanded
                  ? "opacity-0 w-0 pointer-events-none"
                  : "opacity-100 w-6"
              } flex justify-center items-center gap-2 ml-1 overflow-hidden`}
            >
              <IconButton tooltip="富文本编辑" onClick={handleRichTextClick}>
                <Scan size={24} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBottom;
