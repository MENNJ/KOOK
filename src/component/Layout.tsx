"use client";
import React from "react";
import { Layout, ConfigProvider } from "antd";
import Header from "@/component/Header";
import Content from "@/component/Content";
import Sider from "@/component/Sider";

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7acc35",
          colorBgContainer: "#ebedf5",
        },
        components: {
          Menu: {
            itemBg: "#ebedf5",
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
            bodyBg: "transparent",
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
        <Sider />
        <Layout className="h-full">
          <Header />
          <Content />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
