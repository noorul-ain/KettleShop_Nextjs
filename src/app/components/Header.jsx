'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Search, ShoppingBasket } from 'lucide-react';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-t from-[#d9c7b8] to-[#eae5de] md:flex-row md:justify-between">
      <div className="flex items-center space-x-2 mx-10">
        <Image src="/logo.png" alt="Logo" width={160} height={140} />
      </div>
      
      <button
        className="md:hidden text-gray-700 hover:text-gray-900"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
          />
        </svg>
      </button>

      <nav
        className={`fixed top-0 left-0 h-full  from-[#d9c7b8] to-[#eae5de] lg:space-x-20 transition-transform transform md:static md:flex md:space-x-10 md:translate-x-0 ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4 md:flex-row md:p-0 md:space-y-0">
          <a href="#" className="text-gray-700 hover:text-gray-900 py-2 md:py-0 md:mx-2">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 py-2 md:py-0 md:mx-2">About</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 py-2 md:py-0 md:mx-2">Contact Us</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 py-2 md:py-0 md:mx-2">Company</a>
          <div className="flex space-x-4 md:hidden">
            <div className="p-2 rounded-full bg-primary ">
              <Search />
            </div>
            <div className="p-2 rounded-full bg-primary ">
              <ShoppingBasket />
            </div>
            <div className="p-2 rounded-full bg-primary ">
            Sign-In
        </div>
          </div>
        </div>
      </nav>

      <div className="hidden md:flex space-x-4 mx-10">
        <div className="p-2 rounded-full bg-primary ">
          <Search />
        </div>
        <div className="p-2 rounded-full bg-primary ">
          <ShoppingBasket />
        </div>
        <div className="p-2 rounded-full bg-primary ">
            Sign-In
        </div>
      </div>
    </header>
  );
}
