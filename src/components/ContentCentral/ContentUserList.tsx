import { Avatar } from "antd";
import React from "react";
import { Crown } from "lucide-react";

interface ContentUserListProps {
  className?: string;
}
const ContentUserList: React.FC<ContentUserListProps> = ({ className }) => {
  return (
    <div className={`border-[rgba(0,0,0,0.08)] border-l-1 ${className || ""}`}>
      <div className="w-full h-full">
        <div className="overflow-y-auto w-[240px] max-w-full h-full text-[#2e303a] overflow-visible ">
          <div className="list-item box-border p-0 m-0">
            <div className="mt-0 pt-4 mb-0.5 pl-6 text-sm">在线-1</div>
            <div className=" cursor-pointer rounded-[6px] flex justify-between items-center h-12 mt-0 mr-1 mb-0.5 ml-3 py-2 px-3 relative hover:bg-zinc-200">
              <Avatar
                size={32}
                src="https://img.kookapp.cn/avatars/2025-05/12/4lniDzVhiU04m04m.png?x-oss-process=style/icon"
              />
              <div className="flex flex-1 min-h-[30px] flex-col justify-center overflow-auto">
                <div className="pl-[28px] text-sm relative flex justify-between">
                  <div className="flex items-center">
                    <div className="text-ellipsis whitespace-nowrap leading-5 overflow-hidden">
                      Kris_Wu
                    </div>
                  </div>
                  <Crown size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentUserList;
