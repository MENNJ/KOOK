"use client";
import React from "react";
import Image from "next/image";
import IconButton from "@/components/iconButton";

const DailyWelfare: React.FC = () => {
  return (
    <IconButton tooltip="今日免费福利">
      <Image src="/kook/dail.png" alt="dail" width={16} height={16} />
    </IconButton>
  );
};

export default DailyWelfare;
