"use client";
import React, { useState } from "react";
import { Input, Modal, Tooltip, Tabs } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { TabsProps } from "antd";

const TAB_ITEMS = [
  { key: "1", label: "综合", content: "综合" },
  { key: "2", label: "用户", content: "用户" },
  { key: "3", label: "频道", content: "频道" },
  { key: "4", label: "服务器", content: "服务器" },
  { key: "5", label: "服务器消息", content: "服务器消息" },
  { key: "6", label: "私信", content: "私信" },
];

const SHORTCUTS = [
  { keys: ["Tab"], action: "切换分类" },
  { keys: ["↑", "↓"], action: "移动光标" },
  { keys: ["Enter"], action: "选择条目" },
  { keys: ["Esc"], action: "关闭窗口" },
];

const SearchModule: React.FC = () => {
  const [open, setOpen] = useState(false);

  const items: TabsProps["items"] = TAB_ITEMS.map((tab) => ({
    key: tab.key,
    label: tab.label,
    children: (
      <div className="cursor-pointer rounded-md min-h-16 px-2 flex items-center hover:bg-[#0000000A]">
        {tab.content}
      </div>
    ),
  }));

  const showModal = () => setOpen(true);
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="搜索">
        <span className="icon-container" onClick={showModal}>
          <SearchOutlined style={{ color: "#c6c9d2" }} />
        </span>
      </Tooltip>
      
      <Modal
        keyboard
        className="relative"
        classNames={{ content: "h-[590px]" }}
        open={open}
        onCancel={handleCancel}
        closable={false}
        footer={null}
        width={800}
      >
        <Input
          className="h-12"
          size="large"
          placeholder="请输入搜索内容"
          prefix={<SearchOutlined style={{ color: "#c6c9d2" }} />}
        />
        
        <Tabs defaultActiveKey="1" items={items} />
        
        <div className="absolute left-0 bottom-0 h-10 shrink bg-[#ebedf5] w-full flex items-center px-6 text-xs rounded-b-3xl">
          {SHORTCUTS.map((shortcut) => (
            <React.Fragment key={shortcut.action}>
              {shortcut.keys.map((key) => (
                <span 
                  key={key}
                  className={`border border-solid border-[#2E303A66] rounded-lg px-1.5 font-sans text-[#2E303A66] ${
                    key === "↑" || key === "↓" 
                      ? "h-[18px] leading-[16px] ml-1" 
                      : "h-[18px] leading-[18px]"
                  }`}
                >
                  {key}
                </span>
              ))}
              <span className="ml-1 mr-8 text-xs text-[#2E303A66]">
                {shortcut.action}
              </span>
            </React.Fragment>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default SearchModule;