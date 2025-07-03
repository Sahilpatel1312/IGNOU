import React from 'react';
import CounsellingForm from './CounsellingForm';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
            Your Gateway to <span className="text-yellow-300">Higher Education</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up animation-delay-200">
            Discover top online courses and get personalized counselling to achieve your academic and career goals.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center md:justify-start">
            <a href="#courses" className="inline-block bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
              Explore Courses
            </a>
            <a href="#counselling" className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
              Get Free Counselling
            </a>
          </div>
        </div>

        {/* Right side: Counselling Form */}
        <div className="md:w-1/2 w-full max-w-md z-10">
          <CounsellingForm />
        </div>
      </div>

      {/* Background elements for visual flair */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="gradient1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>
          <circle cx="20" cy="20" r="30" fill="url(#gradient1)" />
          <circle cx="80" cy="80" r="40" fill="url(#gradient1)" />
          <circle cx="50" cy="0" r="25" fill="url(#gradient1)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;