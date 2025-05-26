"use client";
import React from "react";
import { Layout } from "antd";
import ContentLeft from "@/components/ContentSider/ContentLeft";
import ContentCentral from "@/components/ContentCentral/ContentCentral";

const { Content } = Layout;

const ContentComponent: React.FC = () => {
  return (
    <Content className="origin-[0] bg-no-repeat bg-cover bg-white/50 dark:bg-[#E1EBFF12] flex flex-col rounded-t-3xl rounded-bl-3xl">
      <div className="flex-1 flex justify-between">
        <ContentLeft />
        <ContentCentral />
      </div>
    </Content>
  );
};

export default ContentComponent;
