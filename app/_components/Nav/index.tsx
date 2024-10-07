'use client';
import { navOptions } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../Button';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="w-full z-[999] flex h-[70px] py-6 lg:py-14 px-6 lg:px-[100px]">
      <DesktopNav />
      <MobileNav />
    </nav>
  );
};

export default Navbar;
