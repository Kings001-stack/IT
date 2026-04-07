import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero.png"
        >
          <source
            src="https://icetmtshs.lincoln.edu.my/wp-content/uploads/2023/11/Intro1.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-red-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Date */}
          <div className="mb-3">
            <p className="text-sm sm:text-base font-semibold tracking-widest uppercase">
              06TH &amp; 07TH MAY 2026
            </p>
          </div>

          {/* Main Title */}
          <div className="mb-3">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug mb-2">
              3rd International Conference
              <br />
              on Emerging Trends in
              <br />
              Management, Technology,
              <br />
              Social and Health Sciences
            </h1>
          </div>

          {/* Conference Code */}
          <div className="mb-6">
            <p className="text-sm sm:text-base font-medium">
              (ICETMTSHS, 2026)
            </p>
          </div>

          {/* Organizer */}
          <div className="border-t border-white/30 pt-5">
            <p className="text-xs sm:text-sm tracking-widest uppercase">
              ORGANIZED BY
            </p>
            <p className="text-sm sm:text-base font-semibold mt-1">
              Lincoln University College Malaysia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};