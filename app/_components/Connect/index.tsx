'use client';
import Image from 'next/image';
import React from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Connect = () => {
  return (
    <div className="bg-white w-full p-6 lg:p-[100px] text-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        transition={{
          type: 'tween',
          duration: 1,
          ease: 'easeInOut',
          delayChildren: 2
        }}
      >
        <Image
          src="/base-bg.jpeg"
          width={500}
          height={500}
          className="w-full h-[400px] bg-contain object-cover rounded-3xl"
          alt="connect"
        />
      </motion.div>
      <div className="lg:flex hidden items-center justify-between lg:py-16">
        <motion.h3
          className="lg:text-[42px] text-[30px] leading-[40px] lg:leading-[72px] lg:w-2/5 w-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{
            type: 'tween',
            duration: 1,
            ease: 'easeInOut',
            delayChildren: 2
          }}
        >
          We connect our customers with the best, and help them keep up-and stay open.
        </motion.h3>
        <motion.div
          className="max-w-500px flex flex-col gap-4 self-start"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: [0, 1], x: [100, 0] }}
          transition={{
            duration: 1,
            ease: 'easeInOut'
          }}
        >
          <div className="flex items-center border-b border-gray py-4 gap-4">
            <p className="w-[400px]">We connect our customers with the best?</p>
            <FaChevronCircleDown className="lg:text-[20px] text-[15px]" />
          </div>
          <div className="flex items-center border-b border-gray py-4 gap-4">
            <p className="w-[400px]">Android research & development rockstar?</p>
            <FaChevronCircleDown className="lg:text-[20px] text-[15px]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Connect;
