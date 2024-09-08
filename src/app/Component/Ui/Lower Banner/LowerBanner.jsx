// components/LowerBanner.js
import React from "react";
import "./LowerBanner.css"

export default function LowerBanner() {
  const bannerItems = [
    {
      icon: "/Icon/light-blub.png", // Replace with actual SVG path or component
      text: "Deep Understanding of each Concept",
    },
    {
      icon: "/Icon/clock.png", // Replace with actual SVG path or component
      text: "Real-time technical implementations",
    },
    {
      icon: "/Icon/verified.png", // Replace with actual SVG path or component
      text: "In-time project completion",
    },
    {
      icon: "/Icon/consulting.png", // Replace with actual SVG path or component
      text: "One-on-one guidance for each issue",
    },
  ];

  return (
    <div className="lower-banner">
      <div className="lower-banner-content">
        {bannerItems.map((item, index) => (
          <div key={index} className="banner-item">
            <img src={item.icon} alt="Icon" className="banner-icon bg-[#229dd2] p-2 rounded-[50%]" />
            <p className="banner-text">{item.text}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
}
