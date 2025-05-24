"use client";
import React from "react";
import { Popover, Tooltip } from "antd";
import { FormOutlined } from "@ant-design/icons";

const PostCenter: React.FC = () => {
  const content = <p className="text-stone-400">暂无帖子</p>;
  return (
    <Tooltip title="帖子中心">
      <Popover content={content} trigger="click" arrow={false}>
        <span className="icon-container">
          <FormOutlined style={{ color: "#c6c9d2" }} />
        </span>
      </Popover>
    </Tooltip>
  );
};

export default PostCenter;