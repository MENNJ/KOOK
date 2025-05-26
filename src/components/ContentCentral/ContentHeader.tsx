import React from "react";
import { EllipsisVertical } from "lucide-react";

interface ContentHeaderProps {
  className?: string;
}
const ContentHeader: React.FC<ContentHeaderProps> = ({ className }) => {
  return (
    <div
      className={`shrink-0 justify-between items-center h-[70px] mx-6 text-base leading-[22px] flex ${
        className || ""
      }`}
    >
      <div className="whitespace-nowrap flex-auto items-center flex overflow-hidden">
        <EllipsisVertical />
        <div className="flex-1 items-center flex">
          <div className="text-ellipsis whitespace-nowrap text-[#2e303a] shrink-0 max-w-full font-bold">
            游戏
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentHeader;
