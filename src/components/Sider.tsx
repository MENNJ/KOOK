"use client";
import React, { useState } from "react";
import { Gamepad2, Crown, Sparkles, Megaphone } from "lucide-react";
import { Layout, Menu } from "antd";
import SiderAvatar from "@/components/Sider/SiderAvatar";
import Logo from "@/components/Sider/Logo";
import { ModeToggle } from "@/components/b";

const { Sider } = Layout;

const items = [Gamepad2, Crown, Sparkles, Megaphone].map((Icon, index) => ({
  key: String(index + 1),
  icon: <Icon className="h-7 w-7" />,
  className:
    "icon-clip flex items-center justify-center bg-white hover:scale-110 !transform-none !transition-transform !duration-300 !ease-in-out",
}));

interface SiderComponentProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const SiderComponent: React.FC<SiderComponentProps> = ({
  collapsed,
  setCollapsed,
}) => {
  const [selectedKey, setSelectedKey] = useState("4");

  const menuPillStyle = {
    top: `${64 * Number(selectedKey) - 24}px`,
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width="80"
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed) => {
        setCollapsed(collapsed);
      }}
    >
      <div>
        <div className="flex items-center justify-center h-8 ml-1 pt-[5px]">
          <Logo />
        </div>
        {!collapsed && (
          <span className="menu-pill" style={menuPillStyle}></span>
        )}
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          onSelect={({ key }) => setSelectedKey(key)}
          items={items}
        />
        <ModeToggle />
      </div>
      <SiderAvatar />
    </Sider>
  );
};

export default SiderComponent;