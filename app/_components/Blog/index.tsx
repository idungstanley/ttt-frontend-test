'use client';
import { CATEGORIES } from '@/app/constants';
import React from 'react';
import CategoryCard from '../Cards/CategoryCard';
import Button from '../Button';

const Blog = () => {
  return (
    <div className="bg-white px-[100px] w-full text-black">
      <div className="flex items-center justify-center flex-col w-full">
        <p className="text-gray-700">Blog</p>
        <h1 className="text-black text-[42px] leading-[72px] w-2/3 text-center">
          Value proposition accelerator product management venture
        </h1>
      </div>
      <div className="flex items-center justify-center gap-10 my-20">
        {CATEGORIES.map(({ image, name, category, date, icon, message }, index) => (
          <CategoryCard
            id={index}
            name={name}
            message={message}
            category={category}
            date={date}
            image={image}
            icon={icon}
            key={index}
          />
        ))}
      </div>
      <div className='flex items-center justify-center'>
        <Button
          label="Load more"
          onClick={() => ({})}
          buttonStyle="custom"
          height="h-10"
          padding="p-0"
          labelClasses="text-[20px] leading-[28px] font-bold"
          customClasses="cursor-pointer bg-white border rounded-full border-background text-background px-6 w-[150px] rounded-full"
        />
      </div>
    </div>
  );
};

export default Blog;
