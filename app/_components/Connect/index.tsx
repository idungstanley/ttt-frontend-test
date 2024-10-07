'use client'
import Image from 'next/image';
import React from 'react'
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
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:py-16 w-full">
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
          className="lg:w-500px w-full lg:flex hidden flex-col gap-4 self-start"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: [0, 1], x: [100, 0] }}
          transition={{
            duration: 1,
            ease: 'easeInOut'
          }}
        >
            <div className="flex flex-col lg:flex-row lg:items-center border-b border-gray py-4 gap-4 w-full">
              <p className="lg:w-[400px] w-full">We connect our customers with the best?</p>
              <FaChevronCircleDown className="lg:text-[20px] text-[15px]" />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center border-b border-gray py-4 gap-4 w-full">
              <p className="w-full lg:w-[400px]">Android research & development rockstar?</p>
              <FaChevronCircleDown className="lg:text-[20px] text-[15px]" />
            </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Connect
