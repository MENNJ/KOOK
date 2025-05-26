"use client";
import React from "react";
import { File, Folder, Tree } from "@/components/ContentSider/ui/filetree";
import { MutedOutlined } from "@ant-design/icons";

const VoiceGrouping: React.FC = () => {
  return (
    <Tree className="overflow-hidden px-3">
      <Folder element="语音分组" value="1">
        <File className="z-0 flex-1 leading-6 flex items-center hover:bg-[#0000000A] py-2 px-1.5 rounded-md cursor-pointer">
          <div className="flex-1 flex items-center">
            <MutedOutlined height={16} width={16} />
            <span className="text-ellipsis whitespace-nowrap text-sm font-medium ml-1.5 ">
              csgo
            </span>
          </div>
          <div className="text-xs text-[#2E303A66]">00/05</div>
        </File>
      </Folder>
    </Tree>
  );
};

export default VoiceGrouping;
