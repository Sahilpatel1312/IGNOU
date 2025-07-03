import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Info, Users, GraduationCap, Briefcase, Megaphone, Newspaper, Mail, BarChart, CloudSun, X, Facebook, Youtube } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-blue-800 py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <X className="h-4 w-4" />
              <Facebook className="h-4 w-4" />
              <Youtube className="h-4 w-4" />
            </div>
            <span className="h-4 border-l border-gray-400"></span>
            <a href="#" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <CloudSun className="h-4 w-4" />
              <span>IGNOU's AWS</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="cursor-pointer hover:text-blue-200">A-</span>
              <span className="h-4 border-l border-gray-400"></span>
              <span className="cursor-pointer hover:text-blue-200">A+</span>
            </div>
            <span className="h-4 border-l border-gray-400"></span>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-white border border-gray-400 cursor-pointer"></div>
              <div className="w-4 h-4 rounded-full bg-black border border-gray-400 cursor-pointer"></div>
            </div>
            <span className="h-4 border-l border-gray-400"></span>
            <a href="#" className="hover:text-blue-200 transition-colors">English</a>
            <span className="h-4 border-l border-gray-400"></span>
            <a href="#" className="hover:text-blue-200 transition-colors">Hindi</a>
            <span className="h-4 border-l border-gray-400"></span>
            <a href="#" className="hover:text-blue-200 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>

      {/* Main Header Section */}
      <div className="py-6 bg-blue-900">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Placeholder for IGNOU Logo */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold text-xs">
              LOGO
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                Indira Gandhi National Open University(IGNOU)
              </h1>
              <p className="text-lg md:text-xl font-semibold">
                इंदिरा गांधी राष्ट्रीय मुक्त विश्वविद्यालय (इग्नू)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {/* Placeholder for NAAC Badge */}
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-xs">
              NAAC
            </div>
            {/* Placeholder for NIRF Badge */}
            <div className="w-20 h-20 bg-red-600 rounded-lg flex flex-col items-center justify-center text-white font-bold text-xs">
              NIRF
              <span className="text-[0.6rem] font-normal mt-1">Under OU Category</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="bg-blue-700 py-3">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            <li>
              <Button variant="ghost" asChild className="text-white hover:bg-blue-600 flex items-center space-x-2">
                <Link to="/"><Home className="h-4 w-4" /><span>Home</span></Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild className="text-white hover:bg-blue-600 flex items-center space-x-2">
                <Link to="/about"><Info className="h-4 w-4" /><span>About Us</span></Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild className="text-white hover:bg-blue-600 flex items-center space-x-2">
                <Link to="/employee-services"><Users className="h-4 w-4" /><span>Employee Services</span></Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild className="text-white hover:bg-blue-600 flex items-center space-x-2">
                <Link to="/student-services"><GraduationCap className="h-4 w-4" /><span>Student Services</span></Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild className="text-white hover:bg-blue-600 flex items-center space-x-2">
                <Link to="/career"><Briefcase className="h-4 w-4" /><span>Career</span></Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild className="text-white hover:bg-blue-600 flex items-center space-x-2 relative">
                <Link to="/announcements"><Megaphone className="h-4 w-4" /><span>Announcements</span><span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full animate-pulse">New</span></Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild className="text-white hover:bg-blue-600 flex items-center space-x-2">
                <Link to="/media"><Newspaper className="h-4 w-4" /><span>Media</span></Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild className="text-white hover:bg-blue-600 flex items-center space-x-2">
                <Link to="/contact"><Mail className="h-4 w-4" /><span>Contact Us</span></Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild className="text-white hover:bg-blue-600 flex items-center space-x-2">
                <Link to="/nirf"><BarChart className="h-4 w-4" /><span>NIRF</span></Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild className="text-white hover:bg-blue-600 flex items-center space-x-2">
                <Link to="/ignou-aws"><CloudSun className="h-4 w-4" /><span>IGNOU's AWS</span></Link>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;