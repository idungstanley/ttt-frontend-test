'use client';
import { navOptions } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../Button';

const Navbar = () => {
  return (
    <nav className="w-full h-[70px] py-14 px-[100px]">
      <div className="flex items-center justify-between">
        <Image src="/Logo.png" alt="logo" width={100} height={100} />
        <div className="flex items-center gap-10">
          {navOptions.map(({ label, route }, index) => (
            <Link href={route} key={index}>
              {label}
            </Link>
          ))}
          <div className="flex items-center justify-center">
            <Button
              label="Log in"
              onClick={() => ({})}
              buttonStyle="custom"
              height="h-10"
              customClasses="cursor-pointer bg-white text-black w-fit px-6 rounded-full hover:bg-[#4169E1]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
