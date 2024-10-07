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
      <div className="flex flex-col gap-4 relative bg-background p-6 lg:p-[100px] text-white w-full">
        <h2 className="lg:text-[42px] text-[25px] leading-[40px] lg:leading-[72px] text-white w-full lg:w-3/5">
          An enterprise template to ramp up your company website
        </h2>
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {TESTIMONIALS.map(({ image, work, name, message }, index) => (
            <TestimonialCard key={index} id={index} work={work} name={name} message={message} image={image} />
          ))}
        </div>
        <div className="flex items-center gap-6 top-28 lg:top-32 absolute lg:right-40 right-20 text-[30px] lg:text-[72px]">
          <FaCircleArrowLeft className="hover:text-green cursor-pointer" />
          <FaCircleArrowRight className="hover:text-green cursor-pointer" />
        </div>
      </div>
  );
};

export default Testimonials;
