import React from "react";

export const GoogleMap: React.FC = () => {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-sm border border-gray-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.004945371688!2d101.59798787570417!3d3.1093121533568656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4952504936d5%3A0xe67fdaf0f0985c8e!2sLincoln%20University%20College!5e0!3m2!1sen!2smy!4v1712497000000!5m2!1sen!2smy"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lincoln University College Location"
      ></iframe>
    </div>
  );
};
