"use client";
import React from "react";
import { Tooltip } from "antd";
import Image from "next/image";

const KookShop: React.FC = () => {
  return (
    <Tooltip title="KOOK商城">
      <span className="icon-container">
        <Image src="/kook/shop.png" alt="shop" width={16} height={16} />
      </span>
    </Tooltip>
  );
};

export default KookShop;