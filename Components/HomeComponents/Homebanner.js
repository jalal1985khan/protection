import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomeBanner = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center bg-white p-8 rounded-lg">
      {/* Background Blue & Yellow Shape - Hidden on mobile */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img src="images/setu-bg-1.png" className="absolute top-0 left-0 w-1/3 h-full" />
        <img src="images/setu-bg-2.png" className="absolute bottom-52 right-0 w-1/3 h-full" />
      </div>

      {/* Grandma Image */}
      <div className="relative z-10 md:w-1/3 w-full flex justify-center md:ml-32">
        <img
          src="images/grandma-image.png"
          alt="Grandma"
          className="object-cover max-h-[600px]"
        />
      </div>

      {/* Text & Button Content */}
      <div className="relative z-10 md:w-1/3 w-full text-center md:text-left mt-8 md:mt-0 md:mr-60">
      <h2 className="text-black italic text-3xl md:text-6xl font-bold mb-5">
  <span>&apos;</span><span className="font-leckerli text-3xl md:text-6xl text-gray-900">Setu</span><span>&apos;</span>
</h2>

        <h3 className="text-xl md:text-3xl font text-custom-blue mb-4">
          Leveraging Social Protection for a Resilient Bharat
        </h3>
        <p className="text-gray-700 mb-6">
          Setu unites organisations and stakeholders to enhance social
          protection systems across India, focusing on universal social security
          for all, especially the vulnerable—formal and informal workers, women,
          people with disabilities, transgender communities, and more. Our
          mission is to ensure comprehensive social safety nets reach everyone,
          building resilience and promoting social inclusion.
        </p>
        <Link 
  href={''} 
  className="bg-yellow-400 text-black px-4 py-2 mt-4 rounded flex items-center justify-center w-28 mx-auto md:mx-0"
>
  <span>Join us</span>
  <Image
    src={"/images/btn-arrow.png"}
    alt="arrow icon"
    className="ml-2"
    width={20}
    height={20}
  />
</Link>

      </div>
    </div>
  );
};

export default HomeBanner;
