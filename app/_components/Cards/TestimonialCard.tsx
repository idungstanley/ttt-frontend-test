import Image from 'next/image';
import React from 'react';

const TestimonialCard = ({
  message,
  image,
  name,
  work,
  id
}: {
  message: string;
  image: string;
  name: string;
  work: string;
  id: number;
}) => {
  return (
    <div className="bg-white p-10 w-[350px] flex flex-col gap-10 rounded-md text-black">
      <p className='w-[250px] text-[24px] leading-[36px]'>{`"${message}"`}</p>
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={`Testimonial card-${id}`}
          width={100}
          height={100}
          className="rounded-full w-[60px] h-[60px]"
        />
        <div className="flex flex-col justify-between">
          <h3 className='font-bold'>{name}</h3>
          <p>{work}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
