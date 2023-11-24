"use client"
import React from "react";
import useDarkMode from "@app/_hooks/useDarkMode";

const DarkModeToggle = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onClick={toggleDarkMode}
        checked={isDark}
      />
      <div className="w-11 h-6 bg-gray peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-600/30 rounded-full peer dark:bg-gray peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray">☀️🌙 </div>
      
      {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
         mode {isDark? "🌕" : "☀️"}
      </span> */}
    </label>
  );
};

export default DarkModeToggle;