import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-lg md:px-20 z-10 relative"> {/* Increased shadow for more visibility */}
      {/* Logo Section */}
      <div className="flex items-center">
        <img 
          src="/images/Community-action-collab-logo.png" // Replace with the actual path to your logo image
          alt="Logo"
          className="h-10" // Adjust height as needed
        />
      </div>

      {/* Join Now Button */}
      <div>
        <Link 
          href="#" 
          className="bg-custom-yellow text-black font-semibold py-2 px-4 hover:bg-yellow-500 transition duration-200">
          Join Now
        </Link>
      </div>
    </header>
  );
};

export default Header;
