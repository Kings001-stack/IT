"use client";
import React from "react";
import { Calendar, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export interface DeadlineCardProps {
  date: string;
  label: string;
  description: string;
  isPassed?: boolean;
}

export const DeadlineCard: React.FC<DeadlineCardProps> = ({
  date,
  label,
  description,
  isPassed = false,
}) => {
  return (
    <div className={cn(
      "relative group bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#e26955]/30",
      isPassed && "bg-gray-50/50 grayscale-[0.5]"
    )}>
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e26955] to-orange-400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex items-start gap-4">
        <div className={cn(
          "flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-orange-50 text-[#e26955]",
          isPassed && "bg-gray-100 text-gray-400"
        )}>
          {isPassed ? <CheckCircle2 size={24} /> : <Calendar size={24} />}
        </div>
        
        <div className="flex-grow">
          <div className="text-sm font-bold text-[#e26955] mb-1 uppercase tracking-wider">
            {label}
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">
            {date}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
