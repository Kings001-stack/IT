import React from "react";
import Image from "next/image";

export const ConferenceOverview: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative">
            <Image
              src="https://icetmtshs.lincoln.edu.my/wp-content/uploads/2025/05/IMG-20250506-WA0021-1024x682.jpg"
              alt="Conference overview - professionals engaged in discussion"
              width={1024}
              height={682}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              ICETMTSHS
            </h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                The 3rd International Conference on Emerging Trends in Management, Technology, Social and Health Sciences (ICETMTSHS 2026) serves as a dynamic global forum for scholars, researchers, industry leaders, policymakers, and practitioners to engage in meaningful dialogue at the intersection of knowledge, innovation, and societal transformation. As the world navigates unprecedented technological advancement, shifting socio-economic paradigms, and evolving health challenges, the need for integrative, forward-thinking solutions has never been more urgent.
              </p>
              <p>
                This year, under the theme <strong>"Reimagining the Future: Innovation, Sustainability, and Human-Centric Development,"</strong> the conference will explore cutting-edge innovations and groundbreaking research that reshape how organizations are managed, technologies are designed, societies evolve, and health systems are strengthened. The theme underscores a collective commitment to fostering sustainable progress while placing human values, equity, and well-being at the core of development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
