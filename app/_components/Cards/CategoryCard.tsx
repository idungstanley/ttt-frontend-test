import Image from 'next/image';
import React from 'react';

const CategoryCard = ({
  image,
  category,
  id,
  date,
  message,
  icon,
  name
}: {
  image: string;
  category: string;
  date: string;
  message: string;
  icon: string;
  name: string;
  id: number;
}) => {
  return (
    <div className="max-w-[300px] h-[400px]">
      <div className="flex flex-col gap-2 h-full">
        <Image src={image} alt={`card-${id}`} height={400} width={400} className="rounded-3xl h-[200px]" />
        <div className="flex flex-col justify-between gap-4 flex-grow">
          <div className=''>
            <div className="flex items-center gap-2">
              <p className="font-bold">{category}</p>
              <p className="text-gray">{date}</p>
            </div>
            <p className="text-wrap text-gray">{message}</p>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src={icon}
              alt={`Testimonial card-${id}`}
              width={100}
              height={100}
              className="rounded-full w-[60px] h-[60px]"
            />
            <p>{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
