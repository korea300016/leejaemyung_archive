import React from 'react';
import { navItems } from './NavItem';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-primary text-white h-20 shadow-md z-50">
      <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-4">
        <div className="text-2xl font-bold">이재명</div>
        <nav className="flex gap-6">
          {navItems.map(item => (
            <a key={item.name} href={item.path} className="hover:text-secondary transition-colors duration-200">
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
} 