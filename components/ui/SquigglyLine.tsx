import React from "react";

export const SquigglyLine: React.FC = () => {
  return (
    <div className="w-full max-w-2xl overflow-hidden my-4" aria-hidden="true">
      <svg
        width="100%"
        height="12"
        viewBox="0 0 400 12"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,6 Q10,12 20,6 T40,6 T60,6 T80,6 T100,6 T120,6 T140,6 T160,6 T180,6 T200,6 T220,6 T240,6 T260,6 T280,6 T300,6 T320,6 T340,6 T360,6 T380,6 T400,6"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
