"use client";

import { CornerRightUp, Mic } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/components/hooks/use-auto-resize-textarea";
import IconButton from "@/components/iconButton";

interface AIInputProps {
  id?: string;
  placeholder?: string;
  minHeight?: number;
  maxHeight?: number;
  onSubmit?: (value: string) => void;
  className?: string;
}

export function ChatInput({
  id = "ai-input",
  placeholder = "输入你的信息...",
  minHeight = 36,
  maxHeight = 200,
  onSubmit,
  className,
}: AIInputProps) {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight,
    maxHeight,
  });
  const [inputValue, setInputValue] = useState("");

  const handleReset = () => {
    if (!inputValue.trim()) return;
    onSubmit?.(inputValue);
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <Textarea
        id={id}
        placeholder={placeholder}
        className={cn(
          "placeholder:text-black/50 dark:placeholder:text-white/50",
          "border-none ring-transparent dark:ring-transparent",
          "text-black dark:text-white text-wrap",
          "overflow-y-auto resize-none overflow-hidden",
          "focus-visible:ring-0 focus-visible:ring-offset-0",
          "transition-[height] duration-100 ease-out",
          "leading-[1.5]",
          `min-h-[${minHeight}px]`,
          `max-h-[${maxHeight}px]`,
          "[&::-webkit-resizer]:hidden"
        )}
        ref={textareaRef}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          adjustHeight();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleReset();
          }
        }}
      />

      <div
        className={cn(
          "absolute top-1/2 -translate-y-1/2 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#2e303a17] p-1",
          inputValue ? "right-7" : "right-0"
        )}
      >
        <Mic size={24} className="text-black/70 dark:text-white/70" />
      </div>
      <button
        onClick={handleReset}
        type="button"
        className={cn(
          "absolute top-1/2 -translate-y-1/2 right-0 p-1",
          "cursor-pointer rounded-md hover:bg-[#2e303a17]",
          "transition-all duration-200",
          inputValue
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <CornerRightUp size={24} className="text-black/70 dark:text-white/70" />
      </button>
    </div>
  );
}
