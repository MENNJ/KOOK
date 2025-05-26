"use client";
import React from "react";
import {
  EditOutlined,
  EyeInvisibleOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
  RollbackOutlined,
  SafetyOutlined,
  ShareAltOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Popover } from "antd";

interface MenuItemProps {
  title: string;
}

const MenuOption: React.FC<{ icon: React.ComponentType; label: string }> = ({
  icon: Icon,
  label,
}) => (
  <div className="flex items-center cursor-pointer rounded-md h-8 px-2 ">
    <Icon />
    <div className="flex-1 ml-3 overflow-hidden">{label}</div>
  </div>
);

const MenuItem: React.FC<MenuItemProps> = ({ title }) => {
  const menuItems = [
    { icon: ShareAltOutlined, label: "服务器助力" },
    { icon: UserAddOutlined, label: "邀请其他人" },
    { icon: NotificationOutlined, label: "通知设置" },
    { icon: SafetyOutlined, label: "隐私设置" },
    { icon: EditOutlined, label: "我的服务器内昵称" },
    { icon: EyeInvisibleOutlined, label: "隐藏免打扰频道" },
    { icon: RollbackOutlined, label: "隐藏免打扰频道" },
  ];

  const content = (
    <div className="rounded-[12px] min-h-[210px] w-[232px]">
      {menuItems.slice(0, 1).map((item, index) => (
        <MenuOption key={index} icon={item.icon} label={item.label} />
      ))}
      <div className="border-t border-gray-200 my-1" />
      {menuItems.slice(1, 6).map((item, index) => (
        <MenuOption key={index + 1} icon={item.icon} label={item.label} />
      ))}
      <div className="border-t border-gray-200 my-1" />
      {menuItems.slice(6).map((item, index) => (
        <MenuOption key={index + 6} icon={item.icon} label={item.label} />
      ))}
    </div>
  );

  return (
    <div className="h-[96px] flex flex-col">
      <div className="h-[10px] w-full" />
      <Popover content={content} trigger="click" color="#ffffff">
        <div className="h-[48px] flex items-center justify-between py-3 px-6 hover:bg-[#0000000a] dark:hover:bg-[#ffffff0f] rounded-tl-xl cursor-pointer">
          <span className="text-[#333436] dark:text-[#dbdde1] text-[16px] font-semibold">
            {title}
          </span>
          <MenuUnfoldOutlined />
        </div>
      </Popover>
      <div className="h-[37px] px-6 flex">
        <span className="bg-[#00d287] text-white text-center cursor-pointer rounded-[10px] w-10 h-[18px] text-xs font-bold leading-[18px]">
          Lv.0
        </span>
      </div>
      <div className="bg-[#00000014] w-11/12 h-[1px]  mx-auto" />
    </div>
  );
};

export default MenuItem;
