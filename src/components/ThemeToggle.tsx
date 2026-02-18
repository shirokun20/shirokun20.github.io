import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/40 dark:border-gray-700/40 hover:border-amber-300 dark:hover:border-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-6 h-6 text-gray-800" />
      ) : (
        <Sun className="w-6 h-6 text-amber-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
