import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { KeyMember } from "@/lib/data/keyMembersData";
import { Award } from "lucide-react";

interface MemberCardProps {
  member: KeyMember;
  index: number;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member, index }) => {
  const isEven = index % 2 === 0;

  return (
    <article
      id={`member-${member.id}`}
      className={cn(
        "group relative grid grid-cols-1 md:grid-cols-12 gap-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100"
      )}
    >
      {/* Image pane */}
      <div
        className={cn(
          "relative md:col-span-4 h-72 md:h-auto overflow-hidden bg-gray-100",
          isEven ? "md:order-first" : "md:order-last"
        )}
      >
        <Image
          src={member.imageUrl}
          alt={`Photo of ${member.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          unoptimized
          priority={index === 0}
        />
        {/* Gradient overlay on image bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:hidden" />
      </div>

      {/* Content pane */}
      <div
        className={cn(
          "md:col-span-8 flex flex-col justify-center p-8 md:p-10",
          isEven
            ? "bg-white border-l-4 border-l-transparent group-hover:border-l-[#9b1d20] transition-all"
            : "bg-gray-50/70 border-r-4 border-r-transparent group-hover:border-r-[#9b1d20] transition-all"
        )}
      >
        {/* Role badge */}
        <div className="flex items-center gap-2 mb-4">
          <Award size={14} className="text-[#9b1d20] flex-shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#9b1d20]">
            {member.role}
          </span>
        </div>

        {/* Name */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-1">
          {member.name}
        </h2>

        {/* Credentials */}
        {member.credentials && (
          <p className="text-sm font-medium text-gray-500 mb-1 italic">
            {member.credentials}
          </p>
        )}

        {/* Institution */}
        <p className="text-sm font-semibold text-[#9b1d20]/80 mb-5">
          {member.institution}
        </p>

        {/* Divider */}
        <div className="w-12 h-1 rounded-full bg-[#9b1d20]/30 mb-5" />

        {/* Bio */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-5 md:line-clamp-none">
          {member.bio}
        </p>
      </div>
    </article>
  );
};
