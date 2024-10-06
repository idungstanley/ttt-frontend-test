'use client';
import { customerService, serviceList } from '@/app/constants';
import React from 'react';
import ExploreCards from '../Cards/ExploreCards';
import Image from 'next/image';
import { FaCircleCheck } from 'react-icons/fa6';
import Button from '../Button';

const Service = () => {
  return (
    <div className="bg-white p-[100px] w-full text-black">
      <div className="flex items-center justify-center flex-col w-full">
        <p className="text-gray-700">Our Services</p>
        <h1 className="text-black text-[42px] leading-[72px] w-2/3 text-center">
          Handshake infographic mass market crowdfunding iteration.
        </h1>
      </div>
      <div className="flex items-center justify-between my-20">
        {serviceList.map(({ title, description, img }, index) => (
          <ExploreCards index={index} title={title} description={description} img={img} key={index} />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <Image src="/image-4.png" alt="" width={400} height={400} />
        <div className="w-1/2 flex flex-col gap-6">
          <h2 className="leading-[56px] text-[46px] font-medium text-black">
            We connect our customers with the best, and help them keep up-and stay open.
          </h2>
          <div>
            {customerService.map(({ label }, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaCircleCheck className="text-background" />
                <p>{label}</p>
              </div>
            ))}
          </div>
          <Button
            label="Start now"
            onClick={() => ({})}
            buttonStyle="custom"
            height="h-10"
            padding="p-0"
            labelClasses="text-[20px] leading-[28px] font-bold"
            customClasses="cursor-pointer bg-background text-white w-[150px] rounded-full"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-2/5 flex flex-col gap-6">
          <h2 className="leading-[56px] text-[46px] font-medium text-black">
            We connect our customers with the best, and help them keep up-and stay open.
          </h2>
          <div className='flex flex-col gap-3'>
            {customerService.map(({ label, Icon }, index) => (
              <div
                key={index}
                className="flex items-center gap-2 w-full rounded-md shadow shadow-gray hover:bg-background text-background bg-white hover:text-white p-3"
              >
                <Icon className="" />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
        <Image src="/offer.png" alt="" width={400} height={400} />
      </div>
    </div>
  );
};

export default Service;
