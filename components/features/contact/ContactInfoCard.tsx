import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  details: string[];
  className?: string;
}

export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon: Icon,
  title,
  details,
  className,
}) => {
  return (
    <div className={cn("bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start gap-4", className)}>
      <div className="p-3 bg-red-50 rounded-lg text-red-900">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
        <div className="space-y-1">
          {details.map((detail, index) => (
            <p key={index} className="text-gray-600 leading-relaxed">
              {detail}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
