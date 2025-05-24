"use client";
import React from "react";
import { Layout } from "antd";
import DailyWelfare from "@/component/ui/DailyWelfare";
import KookShop from "@/component/ui/KookShop";
import PostCenter from "@/component/ui/PostCenter";
import MyFollows from "@/component/ui/MyFollows";
import SearchModule from "@/component/ui/SearchModule";
import HelpCenter from "@/component/ui/HelpCenter";

const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  return (
    <Header style={{ padding: 0, background: "#ebedf5", height: 32 }}>
      <div className="fixed right-4 top-0 flex items-center h-8 gap-3">
        <div className="flex items-center gap-2">
          <DailyWelfare />
          <KookShop />
        </div>
        <div className="flex items-center gap-2">
          <PostCenter />
          <MyFollows />
          <SearchModule />
          <HelpCenter />
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;