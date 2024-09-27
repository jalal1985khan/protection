import React from "react";

const WhatWeDo = () => {
  return (
    <>
      {/* What We Do  */}

      <div className="flex flex-col items-center justify-center py-10 px-4">
        <p className="text-4xl text-custom-blue text-center mb-4 font-semibold">
          What We Do
        </p>
        <p className="text-xl text-center mb-4">
          Here is how we make it all come together
        </p>
        <img
          src="/images/what-we-do.png"
          alt="Social Protection"
          className="w-[500] h-auto "
          layout="responsive" // Ensures the image maintains its aspect ratio
        />
      </div>

    </>
  );
};

export default WhatWeDo;
