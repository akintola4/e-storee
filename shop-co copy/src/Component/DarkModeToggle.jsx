import React from 'react';

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className="flex items-center w-10 h-6 p-1 bg-gray-200 rounded-full dark:bg-gray-800"
      onClick={() => setDarkMode(!darkMode)}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
          darkMode ? 'translate-x-4' : ''
        }`}
      />
    </button>
  );
}

export default DarkModeToggle;