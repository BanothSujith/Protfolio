import React from "react";

// SVG Icon representing a "lost" or "dizzy" cosmic object
const AstroIcon = () => (
  <svg
    className="w-16 h-16 md:w-24 md:h-24 text-emerald-400 animate-pulse drop-shadow-lg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Simplified 'Dizzy' icon or similar for the 'lost' feeling */}
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
    <path d="M16 10s-1 1-4 1-4-1-4-1" />
    <circle cx="8" cy="8" r="1" />
    <circle cx="16" cy="8" r="1" />
    <path d="M9 16c2 1.3 4 1.3 6 0" />
  </svg>
);

const NotFound = () => {
  // A simple function to simulate navigation back to the home page
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    // Added 'cosmic-bg' for the slow, animated background gradient
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-white font-inter cosmic-bg">
      {/* Container for the 404 content with a subtle glow effect */}
      <div className="text-center max-w-lg w-full bg-gray-900/80 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl border border-indigo-500/50 glowing-card transition-all duration-500 hover:border-emerald-500">
        {/* The Animated Icon with continuous slow rotation */}
        <div className="mb-6 flex justify-center icon-spin">
          <AstroIcon />
        </div>

        {/* The Main Error Code - Enhanced, multi-stop gradient for maximum pop */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-indigo-400 to-emerald-400 mb-4 tracking-tighter drop-shadow-xl">
          404
        </h1>

        {/* The Thematic Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-50 mb-4 tracking-wide">
          Signal Lost. Rendezvous Failed.
        </h2>

        {/* Descriptive Text */}
        <p className="text-gray-300 mb-8 text-lg">
          The coordinates you entered led to an uncharted sector of the web.
          This page has vanished into a digital black hole.
        </p>

        {/* Action Button - Bright color with enhanced hover/active effects */}
        <button
          onClick={handleGoHome}
          className="w-full md:w-auto px-8 py-3 bg-emerald-500 text-gray-900 font-extrabold rounded-xl shadow-2xl hover:bg-emerald-400 transition duration-300 ease-in-out transform hover:scale-[1.05] active:scale-[0.95] focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-70"
          aria-label="Go back to the application's home page"
        >
          Initiate Hyperjump Home
        </button>
      </div>

      {/* Optional: Small footer detail */}
      <p className="mt-8 text-gray-500 text-sm opacity-70">
        Error Code: PAGE_VOID_404 | Checking life support...
      </p>

      {/* Custom CSS for Animations and Background */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
          .font-inter {
            font-family: 'Inter', sans-serif;
          }

          /* 1. Background Animation (Nebula Flow) */
          @keyframes nebula-flow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .cosmic-bg {
            /* Deep dark blue/purple gradient that will slowly move */
            background: linear-gradient(135deg, #020412, #100f20, #040d16);
            background-size: 400% 400%;
            animation: nebula-flow 90s ease infinite; /* Very slow movement for subtlety */
          }

          /* 2. Enhanced Card Glow */
          .glowing-card {
              /* Dual color glow for a sci-fi look */
              box-shadow: 0 0 30px rgba(79, 70, 229, 0.3), 0 0 60px rgba(52, 211, 153, 0.2); 
          }

          /* 3. Icon Rotation Animation */
          @keyframes slow-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .icon-spin {
            animation: slow-spin 25s linear infinite; /* Continuous, slow spin */
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;
