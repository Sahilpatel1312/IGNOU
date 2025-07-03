import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold mb-4 md:mb-0 hover:text-blue-100 transition-colors">
          EduConnect
        </Link>
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <Button variant="ghost" asChild className="text-white hover:bg-blue-600">
            <a href="#courses">Courses</a>
          </Button>
          <Button variant="ghost" asChild className="text-white hover:bg-blue-600">
            <a href="#counselling">Counselling</a>
          </Button>
          {/* Add more navigation links here if needed */}
        </nav>
      </div>
    </header>
  );
};

export default Header;