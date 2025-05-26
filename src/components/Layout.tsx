"use client";
import React, { useState } from "react";
import { Layout, ConfigProvider } from "antd";
import Header from "@/components/Header";
import Content from "@/components/Content";
import Sider from "@/components/Sider";

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "transparent",
          colorBgContainer: "transparent",
          colorBgBase: "transparent",
          colorBgElevated: "#ffffff",
        },
        components: {
          Menu: {
            itemBg: "transparent",
            itemSelectedBg: "#ffffff",
            itemHoverBg: "#ffffff",
            itemSelectedColor: "#000000",
            itemActiveBg: "#ffffff",
            iconSize: 32,
            itemHeight: 48,
            itemMarginBlock: 16,
            itemMarginInline: 16,
            itemPaddingInline: 14,
            itemBorderRadius: 6,
            algorithm: true,
            activeBarBorderWidth: 0,
          },
          Layout: {
            bodyBg: "#transparent",
            headerBg: "#transparent",
            lightSiderBg: "#transparent",
            lightTriggerBg: "#transparent",
            lightTriggerColor: "#transparent",
            siderBg: "#transparent",
            triggerBg: "#transparent",
            triggerColor: "#transparent",
            headerHeight: 32,
            headerPadding: 0,
          },
          Modal: {
            borderRadiusLG: 24,
            borderRadiusSM: 24,
          },
          Input: {
            borderRadiusLG: 16,
            borderRadiusSM: 16,
            activeBorderColor: "transparent",
            activeShadow: "none",
            hoverBorderColor: "transparent",
          },
          Tabs: {
            inkBarColor: "#7acc35",
            itemActiveColor: "#2e303a",
            itemHoverColor: "#2e303a",
            itemSelectedColor: "#2e303a",
          },
        },
      }}
    >
      <Layout className="h-screen">
        <Sider collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout className="h-full">
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
