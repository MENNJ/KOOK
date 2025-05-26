import React from "react";
import { Bell, Users, Search } from "lucide-react";
import IconButton from "@/components/iconButton";

interface ContentRightProps {
  className?: string;
}
const ContentRight: React.FC<ContentRightProps> = ({ className }) => {
  return (
    <div
      className={`border-[rgba(0,0,0,0.08)] border-l-1 shrink-0 flex flex-col items-center w-[52px] pt-6 gap-4 ${
        className || ""
      }`}
    >
      <IconButton tooltip="频道免打扰" tooltipPlacement="left">
        <Bell size={24} />
      </IconButton>
      <IconButton tooltip="用户列表" tooltipPlacement="left">
        <Users size={24} />
      </IconButton>
      <IconButton tooltip="搜索" tooltipPlacement="left">
        <Search size={24} />
      </IconButton>
    </div>
  );
};
export default ContentRight;
