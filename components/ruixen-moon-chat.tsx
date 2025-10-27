"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowUpIcon,
  Sparkles,
  Briefcase,
  Target,
  Users,
  TrendingUp,
} from "lucide-react";

interface AutoResizeProps {
  minHeight: number;
  maxHeight?: number;
}

function useAutoResizeTextarea({ minHeight, maxHeight }: AutoResizeProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(
    (reset?: boolean) => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }

      textarea.style.height = `${minHeight}px`; // reset first
      const newHeight = Math.max(
        minHeight,
        Math.min(textarea.scrollHeight, maxHeight ?? Infinity)
      );
      textarea.style.height = `${newHeight}px`;
    },
    [minHeight, maxHeight]
  );

  useEffect(() => {
    if (textareaRef.current) textareaRef.current.style.height = `${minHeight}px`;
  }, [minHeight]);

  return { textareaRef, adjustHeight };
}

interface BizCanvasChatProps {
  userName?: string;
  onSubmit?: (message: string) => void;
}

export default function RuixenMoonChat({ userName, onSubmit }: BizCanvasChatProps) {
  const [message, setMessage] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 48,
    maxHeight: 150,
  });

  const handleSubmit = () => {
    if (message.trim() && onSubmit) {
      onSubmit(message);
      setMessage("");
      adjustHeight(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_moon_2.png')",
      }}
    >
      {/* Centered Title */}
      <div className="flex-1 w-full flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-10 h-10 text-blue-400" />
          </div>
          <h1 className="text-5xl font-semibold text-white drop-shadow-lg mb-3">
            BizCanvas AI
          </h1>
          <p className="text-xl text-neutral-200 drop-shadow-md max-w-2xl">
            Describe your business idea and I&apos;ll generate a complete Business Model Canvas
          </p>
        </div>

        {/* Input Box Section */}
        <div className="w-full max-w-3xl">
          <div className="relative bg-black/70 backdrop-blur-md rounded-xl border border-neutral-600 shadow-2xl">
            <Textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                adjustHeight();
              }}
              onKeyDown={handleKeyDown}
              placeholder="Describe your business idea in detail... (e.g., A subscription platform for eco-friendly products)"
              className={cn(
                "w-full px-4 py-3 resize-none border-none",
                "bg-transparent text-white text-base",
                "focus-visible:ring-0 focus-visible:ring-offset-0",
                "placeholder:text-neutral-400 min-h-[48px]"
              )}
              style={{ overflow: "hidden" }}
            />

            {/* Footer Buttons */}
            <div className="flex items-center justify-end p-3">
              <Button
                onClick={handleSubmit}
                disabled={!message.trim()}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
                  message.trim()
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    : "bg-neutral-700 text-neutral-400 cursor-not-allowed"
                )}
              >
                <Sparkles className="w-4 h-4" />
                <span className="font-medium">Generate Canvas</span>
                <ArrowUpIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Prompts */}
          <div className="flex items-center justify-center flex-wrap gap-3 mt-6">
            <QuickPrompt 
              icon={<Briefcase className="w-4 h-4" />} 
              label="E-commerce Startup"
              onClick={() => setMessage("An e-commerce platform for sustainable fashion brands targeting millennials")}
            />
            <QuickPrompt 
              icon={<Target className="w-4 h-4" />} 
              label="SaaS Product"
              onClick={() => setMessage("A SaaS tool for small businesses to manage customer relationships and sales")}
            />
            <QuickPrompt 
              icon={<Users className="w-4 h-4" />} 
              label="Social Platform"
              onClick={() => setMessage("A social networking app connecting freelancers with local businesses")}
            />
            <QuickPrompt 
              icon={<TrendingUp className="w-4 h-4" />} 
              label="Marketplace"
              onClick={() => setMessage("A peer-to-peer marketplace for renting professional equipment and tools")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface QuickPromptProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

function QuickPrompt({ icon, label, onClick }: QuickPromptProps) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className="flex items-center gap-2 rounded-full border-neutral-600 bg-black/60 text-neutral-200 hover:text-white hover:bg-black/80 hover:border-blue-500 transition-all"
    >
      {icon}
      <span className="text-sm">{label}</span>
    </Button>
  );
}
