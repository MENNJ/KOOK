"use client";

import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { FileOutlined, CaretRightOutlined } from "@ant-design/icons";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

type TreeContextProps = {
  expandedItems: string[];
  handleExpand: (id: string) => void;
  setExpandedItems: React.Dispatch<React.SetStateAction<string[]>>;
};

const TreeContext = createContext<TreeContextProps | null>(null);

const useTree = () => {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error("useTree must be used within a TreeProvider");
  }
  return context;
};

const Tree = forwardRef<
  HTMLDivElement,
  { className?: string; children: React.ReactNode }
>(({ className, children }, ref) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleExpand = useCallback((id: string) => {
    setExpandedItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      expandedItems,
      handleExpand,
      setExpandedItems,
    }),
    [expandedItems, handleExpand]
  );

  return (
    <TreeContext.Provider value={contextValue}>
      <div className={cn("w-full", className)}>
        <ScrollArea ref={ref} className="h-full relative px-2">
          <AccordionPrimitive.Root
            type="multiple"
            value={expandedItems}
            onValueChange={setExpandedItems}
          >
            {children}
          </AccordionPrimitive.Root>
        </ScrollArea>
      </div>
    </TreeContext.Provider>
  );
});

Tree.displayName = "Tree";

const Folder = forwardRef<
  HTMLDivElement,
  {
    value: string;
    element: string;
    children: React.ReactNode;
    className?: string;
  }
>(({ value, element, children, className }, ref) => {
  const { expandedItems, handleExpand } = useTree();

  return (
    <AccordionPrimitive.Item value={value}>
      <AccordionPrimitive.Trigger
        className={cn("flex items-center gap-1 text-sm rounded-md py-1.5", className)}
        onClick={() => handleExpand(value)}
        aria-expanded={expandedItems.includes(value)}
        aria-label={`Toggle folder ${element}`}
      >
        <CaretRightOutlined
          className={cn(
            "transition-transform duration-200 ease-in-out",
            expandedItems.includes(value) ? "rotate-90" : "rotate-0"
          )}
        />
        <span className="text-ellipsis whitespace-nowrap font-bold leading-[18px] text-xs">
          {element}
        </span>
      </AccordionPrimitive.Trigger>
      <AccordionPrimitive.Content>
        <div className="ml-2.5">{children}</div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
});

Folder.displayName = "Folder";

const File = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string }
>(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={className}
    >
      {children}
    </div>
  );
});

File.displayName = "File";

export { Tree, Folder, File };
