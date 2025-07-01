import React from 'react';
import { Link } from 'react-router-dom';

export const navItems = [
  { name: '홈', path: '/' },
  { name: '약력', path: '/profile' },
  { name: '공약', path: '/promises' },
  { name: '뉴스', path: '/news' },
  { name: '사진/영상', path: '/gallery' },
  { name: '이야기 모음', path: '/stories' },
  { name: '후원', path: '/support' }
];

export default function NavItem({ item }) {
  return (
    <Link 
      to={item.path} 
      className="hover:text-secondary transition-colors duration-200"
    >
      {item.name}
    </Link>
  );
} 