import React from "react";


const SocialProtection = () => {
  return (
    <div className="flex flex-col items-center justify-center  p-2 container mx-auto">
      <p className="text-4xl text-black text-center mb-4 md:px-28 font-semibold">
        Social protection plays a key role in reducing poverty, promoting
        inclusion, and boosting economic growth. In India, while progress has
        been made, challenges remain:
      </p>
      <img
        src="/images/social-protection.png"
        alt="Social Protection"
        className="w-[500] h-auto py-10"
        layout="responsive" // Ensures the image maintains its aspect ratio
      />
    </div>
  );
};

export default SocialProtection;

