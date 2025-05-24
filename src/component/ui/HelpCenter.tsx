"use client";
import React, { useState, useMemo } from "react";
import { Tooltip, Tour } from "antd";
import { QuestionOutlined } from "@ant-design/icons";

const HelpCenter: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const steps = useMemo(
    () => [
      {
        title: "搜索功能",
        description: "点击这里可以快速搜索内容",
        target: () =>
          document.querySelector(
            '.icon-container [aria-label="search"]'
          ) as HTMLElement,
      },
      {
        title: "发帖中心",
        description: "点击这里可以创建新帖子",
        target: () =>
          document.querySelector(
            '.icon-container [aria-label="form"]'
          ) as HTMLElement,
      },
      {
        title: "我的关注",
        description: "查看你关注的用户和内容",
        target: () =>
          document.querySelector(
            '.icon-container [aria-label="heart"]'
          ) as HTMLElement,
      },
      {
        title: "KOOK商城",
        description: "浏览和购买商城商品",
        target: () =>
          document.querySelector(
            '.icon-container img[alt="shop"]'
          ) as HTMLElement,
      },
      {
        title: "今日福利",
        description: "领取每日免费福利",
        target: () =>
          document.querySelector(
            '.icon-container img[alt="dail"]'
          ) as HTMLElement,
      },
      {
        title: "侧边栏菜单",
        description: "快速导航到不同功能区域",
        target: () => document.querySelector(".ant-menu-light") as HTMLElement,
      },
    ],
    []
  );

  const buttonBaseStyles =
    "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const customActionsRender = (
    _: React.ReactNode,
    { current, total }: { current: number; total: number }
  ) => {
    const buttons = [];

    if (current > 0) {
      buttons.push(
        <button
          key="prev"
          onClick={() => setCurrent(current - 1)}
          className={`${buttonBaseStyles} text-gray-600 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:ring-gray-300 cursor-pointer`}
          aria-label="Previous step"
        >
          上一步
        </button>
      );
    }

    buttons.push(
      <button
        key="nextOrFinish"
        onClick={() =>
          current < total - 1 ? setCurrent(current + 1) : setOpen(false)
        }
        className={`${buttonBaseStyles} text-white bg-[#7acc35] hover:bg-[#7ca45e] focus:ring-[#7acc35] cursor-pointer`}
        aria-label={current < total - 1 ? "Next step" : "Finish tour"}
      > 
        {current < total - 1 ? "下一步" : "完成"}
      </button>
    );

    return <div className="flex gap-3 ml-4">{buttons}</div>;
  };

  const handleOpenTour = () => {
    setCurrent(0);
    setOpen(true);
  };

  return (
    <>
      <Tooltip title="帮助中心">
        <span
          className="icon-container cursor-pointer"
          onClick={handleOpenTour}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleOpenTour()}
          aria-label="打开帮助引导"
        >
          <QuestionOutlined style={{ color: "#c6c9d2" }} />
        </span>
      </Tooltip>

      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        current={current}
        onChange={setCurrent}
        gap={{ radius: 8, offset: 4 }}
        actionsRender={customActionsRender}
      />
    </>
  );
};

export default HelpCenter;
