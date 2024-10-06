'use client';
import React from 'react';
import Button from '../Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-full px-[100px]'>
      <div className="flex items-center justify-between w-full my-20">
        <div className='basis-1/2 flex items-start flex-col gap-10'>
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-[42px] leading-[72px] text-white">Save time by building fast with Boldo Template</h2>
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
        <div className="basis-1/2 w-full self-end flex place-content-end">
          <Image src="/hero-graphics.png" alt="graph-1" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
