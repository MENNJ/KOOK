"use client";
import React from "react";
import { Popover, Tooltip } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const MyFollows: React.FC = () => {
  const content = <p className="text-stone-400">暂无关注的频道</p>;
  return (
    <Tooltip title="我的关注">
      <Popover content={content} trigger="click" arrow={false}>
        <span className="icon-container">
          <HeartOutlined style={{ color: "#c6c9d2" }} />
        </span>
      </Popover>
    </Tooltip>
  );
};

export default MyFollows;