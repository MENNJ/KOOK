"use client";
import React from "react";
import { Tooltip } from "antd";
import Image from "next/image";

const DailyWelfare: React.FC = () => {
  return (
    <Tooltip title="今日免费福利">
      <span className="icon-container">
        <Image src="/kook/dail.png" alt="dail" width={16} height={16} />
      </span>
    </Tooltip>
  );
};

export default DailyWelfare;