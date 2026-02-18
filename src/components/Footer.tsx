import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-gray-900 dark:to-gray-800 border-t border-amber-200/50 dark:border-gray-700/50 py-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-700 dark:text-gray-300 flex items-center justify-center gap-2 font-medium">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Shirokun
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
