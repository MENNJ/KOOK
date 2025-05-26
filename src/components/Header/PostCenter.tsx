"use client";
import React from "react";
import { Popover } from "antd";
import { FormOutlined } from "@ant-design/icons";
import IconButton from "@/components/iconButton";

const PostCenter: React.FC = () => {
  const content = <p className="text-stone-400">暂无帖子</p>;
  return (
    <Popover content={content} trigger="click" arrow={false}>
      <IconButton tooltip="帖子中心">
        <FormOutlined style={{ color: "#c6c9d2" }} />
      </IconButton>
    </Popover>
  );
};

export default PostCenter;
