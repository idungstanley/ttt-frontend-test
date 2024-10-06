'use client';
import { TESTIMONIALS } from '@/app/constants';
import React from 'react';
import TestimonialCard from '../Cards/TestimonialCard';
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6';
import { FaChevronCircleDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className=" w-full text-white">
      <div className="flex flex-col gap-4 relative bg-background p-[100px]">
        <h2 className="text-[42px] leading-[72px] text-white w-3/5">
          An enterprise template to ramp up your company website
        </h2>
        <div className="flex items-start gap-10">
          {TESTIMONIALS.map(({ image, work, name, message }, index) => (
            <TestimonialCard key={index} id={index} work={work} name={name} message={message} image={image} />
          ))}
        </div>
        <div className="flex items-center gap-6 top-32 absolute right-40 text-[72px]">
          <FaCircleArrowLeft className="hover:text-green cursor-pointer" />
          <FaCircleArrowRight className="hover:text-green cursor-pointer" />
        </div>
      </div>
      <div className="customer-connect bg-white w-full p-[100px] text-black">
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
        <div className="flex items-center justify-between py-16">
          <motion.h3
            className="leading-[56px] text-[36px] w-2/5"
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
            className="w-500px flex-col gap-4 self-start"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: [0, 1], x: [100, 0] }}
            transition={{
              duration: 1,
              ease: 'easeInOut'
            }}
          >
            <div className="flex items-center border-b border-gray py-4 gap-4">
              <p className="w-[400px]">We connect our customers with the best?</p>
              <FaChevronCircleDown className="text-[20px]" />
            </div>
            <div className="flex items-center border-b border-gray py-4 gap-4">
              <p className="w-[400px]">Android research & development rockstar?</p>
              <FaChevronCircleDown className="text-[20px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
