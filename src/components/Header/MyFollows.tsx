"use client";
import React from "react";
import { Popover } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import IconButton from "@/components/iconButton";

const MyFollows: React.FC = () => {
  const content = <p className="text-stone-400">暂无关注的频道</p>;
  return (
    <Popover content={content} trigger="click" arrow={false}>
      <IconButton tooltip="我的关注">
        <HeartOutlined style={{ color: "#c6c9d2" }} />
      </IconButton>
    </Popover>
  );
};

export default MyFollows;
