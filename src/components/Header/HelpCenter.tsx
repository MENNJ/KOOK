"use client";
import React from "react";
import { QuestionOutlined } from "@ant-design/icons";
import IconButton from "@/components/iconButton";

const HelpCenter: React.FC = () => {
  return (
    <>
      <IconButton tooltip="帮助中心">
        <QuestionOutlined style={{ color: "#c6c9d2" }} />
      </IconButton>
    </>
  );
};

export default HelpCenter;
