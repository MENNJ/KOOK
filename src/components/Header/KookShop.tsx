"use client";
import React from "react";
import Image from "next/image";
import IconButton from "@/components/iconButton";

const KookShop: React.FC = () => {
  return (
    <IconButton tooltip="KOOK商城">
      <Image src="/kook/shop.png" alt="shop" width={16} height={16} />
    </IconButton>
  );
};

export default KookShop;
