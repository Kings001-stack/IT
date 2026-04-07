import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { SquigglyLine } from "@/components/ui/SquigglyLine";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery | ICETMTSHS 2026",
  description: "View the gallery of ICETMTSHS 2024 and our organizing committee events.",
};

const imageFiles = [
  "IMG-20250506-WA0041.jpg",
  "IMG-20250506-WA0032.jpg",
  "IMG-20250506-WA0040.jpg",
  "IMG-20250506-WA0036.jpg",
  "1.jpg",
  "IMG-20250506-WA0038.jpg",
  "IMG-20250506-WA0035.jpg",
  "IMG-20250506-WA0006.jpg",
  "IMG-20250506-WA0031.jpg",
  "IMG-20250506-WA0039.jpg",
  "IMG-20250506-WA0042.jpg",
  "IMG-20250506-WA0043.jpg",
  "IMG-20250506-WA0045.jpg",
  "IMG-20250506-WA0005.jpg",
  "IMG-20250506-WA0037.jpg",
  "IMG-20250506-WA0007.jpg",
  "IMG-20250506-WA0008.jpg",
  "IMG-20250506-WA0033.jpg",
  "IMG-20250506-WA0009.jpg",
  "IMG-20250506-WA0010.jpg",
  "IMG-20250506-WA0011.jpg",
  "IMG-20250506-WA0012.jpg",
  "IMG-20250506-WA0013.jpg",
  "IMG-20250506-WA0014.jpg",
  "IMG-20250506-WA0015.jpg",
  "IMG-20250506-WA0016.jpg",
  "IMG-20250506-WA0018.jpg",
  "IMG-20250506-WA0019.jpg",
  "IMG-20250506-WA0020.jpg",
  "IMG-20250506-WA0021.jpg",
  "IMG-20250506-WA0022.jpg",
  "IMG-20250506-WA0025.jpg",
  "IMG-20250506-WA0026.jpg",
  "IMG-20250506-WA0028.jpg",
  "IMG-20250506-WA0029.jpg",
  "IMG-20250506-WA0030.jpg"
];

export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Header */}
      <section className="bg-white border-b border-gray-100 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="text-[#9b1d20]" size={24} />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#9b1d20]">
                Photos
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#9b1d20] mb-2">
              Gallery
            </h1>
            <SquigglyLine />
            <p className="mt-4 text-gray-600 max-w-2xl text-lg font-medium">
              ICETMTSHS 2024 Gallery
            </p>
          </div>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {imageFiles.map((filename, index) => (
            <div 
              key={filename} 
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Image
                src={`https://icetmtshs.lincoln.edu.my/wp-content/uploads/2025/05/${filename}`}
                alt={`ICETMTSHS Gallery Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                unoptimized
                priority={index < 8} // load first 8 images eagerly
              />
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-[#9b1d20]/0 group-hover:bg-[#9b1d20]/10 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
