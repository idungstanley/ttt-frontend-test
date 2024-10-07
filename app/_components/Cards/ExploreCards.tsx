'use client';
import Image from 'next/image';
import React from 'react';
import Button from '../Button';
import { FaArrowRight } from 'react-icons/fa6';

const ExploreCards = ({
  img,
  title,
  description,
  index
}: {
  img: string;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div className="lg:w-[300px] w-full h-[600px]">
      <div className="flex flex-col gap-2">
        <Image src={img} alt={`card ${index}`} height={400} width={400} />
        <h3 className="text-black">{title}</h3>
        <p className="text-wrap text-gray">{description}</p>
        <Button
          label="Explore page"
          icon={<FaArrowRight />}
          iconPosition="right"
          onClick={() => ({})}
          buttonStyle="custom"
          labelClasses="self-start"
          height="h-10"
          padding="p-0"
          customClasses="cursor-pointer bg-transparent border-b border-black text-black w-fit"
        />
      </div>
    </div>
  );
};

export default ExploreCards;
