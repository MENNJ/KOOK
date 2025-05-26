"use client";
import React from "react";
import { File, Folder, Tree } from "@/components/ContentSider/ui/filetree";
import { BorderlessTableOutlined, UserAddOutlined } from "@ant-design/icons";

const TextGrouping: React.FC = () => {
  return (
    <Tree className="px-3 overflow-hidden">
      <Folder element="文字分组" value="1">
        <File className="bg-[#fefefe] rounded-md px-1.5 flex flex-col">
          <div className="text-[#2e303a] flex justify-between items-center mt-1">
            <div className="flex-1 flex items-center">
              <BorderlessTableOutlined size={16} className="mr-1.5" />
              <span className="text-ellipsis whitespace-nowrap text-sm font-bold leading-5">
                游戏
              </span>
            </div>
            <div className="flex items-center">
              <UserAddOutlined size={16} />
            </div>
          </div>
          <div className="mt-0.5 mb-1.5 ml-[22px] h-[18px] text-[#2E303A66] text-ellipsis whitespace-nowrap text-xs font-normal leading-[18px]">
            Walone:菜
          </div>
        </File>
      </Folder>
    </Tree>
  );
};

export default TextGrouping;