"use client";
import React from "react";
import { Layout } from "antd";
import DailyWelfare from "@/components/Header/DailyWelfare";
import KookShop from "@/components/Header/KookShop";
import PostCenter from "@/components/Header/PostCenter";
import MyFollows from "@/components/Header/MyFollows";
import SearchModule from "@/components/Header/SearchModule";
import HelpCenter from "@/components/Header/HelpCenter";
import { Button } from "@/components/ui/button";
import { ArrowRightToLine, ArrowLeftToLine } from "lucide-react";

const { Header } = Layout;

interface HeaderComponentProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  collapsed,
  setCollapsed,
}) => {
  return (
    <Header>
      <Button
        className="lg:hidden cursor-pointer h-8 w-8 border-none bg-transparent text-[#c6c9d2] checked:bg-transparent hover:bg-transparent hover:text-[#c6c9d2]"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ArrowRightToLine /> : <ArrowLeftToLine />}
      </Button>
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
