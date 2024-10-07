'use client';
import React from 'react';
import Button from '../Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="w-full px-6 lg:px-[100px] pb-6 lg:pb-[100px]">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:justify-between w-full lg:my-20 my-10">
        <div className="lg:basis-1/2 basis-0 flex items-start flex-col gap-10">
          <div className="flex flex-col items-start gap-4">
            <h2 className="lg:text-[42px] text-[30px] leading-[40px] lg:leading-[72px] text-white">
              Save time by building fast with Boldo Template
            </h2>
            <p>
              Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator
              success deployment non-disclosure.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Button
              label="Buy template"
              onClick={() => ({})}
              buttonStyle="custom"
              height="h-10"
              customClasses="cursor-pointer bg-green text-black w-fit px-10 rounded-full"
            />
            <Button
              label="Explore"
              onClick={() => ({})}
              buttonStyle="custom"
              height="h-10"
              customClasses="cursor-pointer bg-transparent text-white w-fit px-10 rounded-full border border-white"
            />
          </div>
        </div>
        <div className="lg:basis-1/2 basis-0 w-full self-end flex place-content-end">
          <Image src="/hero-graphics.png" alt="graph-1" width={500} height={500} />
        </div>
      </div>
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          delayChildren: 2
        }}
      >
        <Image src="/Logo-wall.png" alt="logo wall" className="w-full h-full" width={500} height={500} />
      </motion.div>
    </div>
  );
};

export default Hero;
