import React from "react";
import ShoppingCart from "./ShoppingCart";

import { Link } from "react-router-dom";

const Header: React.FC = () => {

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="group flex items-center gap-2">
            <div className="bg-indigo-600 text-white p-2 rounded-lg group-hover:bg-indigo-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
              TechStore
            </span>
          </Link>
          <div className="relative flex items-center gap-4">
             <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
                <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
                <Link to="/" className="hover:text-indigo-600 transition-colors">Products</Link>
                <Link to="/" className="hover:text-indigo-600 transition-colors">Deals</Link>
             </nav>
             <div className="h-6 w-px bg-gray-200 mx-2 hidden md:block"></div>
            <ShoppingCart />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
