'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useClickAway } from 'react-use';
import Link from 'next/link';
import Image from 'next/image';
import Hamburger from '../Menu/Hamburger';
import { navOptions } from '@/app/constants';

const MobileNav = () => {
  const ref = useRef(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleToggleFn = () => {
    setMenuOpen((prev) => !prev);
  };

  useClickAway(ref, () => setMenuOpen(false));

  return (
    <div className="flex items-center justify-between w-full lg:hidden">
      <Link href="/">
        <Image src="/Logo.png" alt="logo" width={100} height={100} className="w-[150px]" />
      </Link>
      <div className="flex items-center gap-2 md:gap-4 relative">
        <Hamburger isToggle={menuOpen} size={30} toggleFn={handleToggleFn} color="white" />
        <div className={`z-[50] ${menuOpen ? 'fixed inset-0 w-full h-full top-0 flex' : 'hidden'}`}>
          <div
            ref={ref}
            className={`flex flex-col items-center px-10 justify-start w-[80%] h-screen pt-20 z-[30] bg-white bg-opacity-95 fixed ${
              menuOpen ? 'right-0' : '-right-[100%]'
            }`}
            style={{ transition: 'all 0.4s ease-in-out' }}
          >
            {navOptions.map((route, idx) => (
              <motion.li
                key={route.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + idx / 10
                }}
                className="w-full list-none"
              >
                <a
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="flex items-center justify-start w-full text-black py-4"
                  href={route.route}
                >
                  <span className="flex gap-1 whitespace-nowrap">{route.label}</span>
                </a>
              </motion.li>
            ))}
            <div
              className={`fixed bottom-0 h-[90px] p-4 w-[80%] gap-8 shadow-sm flex items-center justify-center ${
                menuOpen ? 'right-0' : '-right-full'
              }`}
              style={{ transition: 'all 0.4s ease-in-out' }}
            >
              <Link href="/">
                <Image src="/dark-logo.png" alt="logo" width={100} height={100} className="w-[150px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
