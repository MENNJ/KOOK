"use client";
import React from "react";
import { Layout} from "antd";

const { Content } = Layout;

const ContentComponent: React.FC = () => {
  return (
    <Content className="bg-[#FFFFFF80] rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl mx-1 mb-1">
     内容 
    </Content>
  );
};

export default ContentComponent;
