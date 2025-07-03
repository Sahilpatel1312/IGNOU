import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm mb-2">&copy; {currentYear} EduConnect. All rights reserved.</p>
        <p className="text-xs text-gray-400">Providing quality education and guidance.</p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;