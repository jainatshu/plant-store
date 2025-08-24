import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Urvann Plant Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;