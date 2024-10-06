'use client';
import React from 'react';
import Button from '../Button';
import Input from '../Input';

const Email = () => {
  return (
    <div className="bg-white p-[100px]">
      <div className="flex items-center gap-10 flex-col justify-center bg-background p-10 rounded-3xl">
        <h2 className="text-white text-[42px] leading-[72px] w-2/3 text-center">
          An enterprise template to ramp up your company website
        </h2>
        <div className="flex items-center justify-around gap-10">
          <Input
            name="email"
            type="email"
            classes="rounded-full bg-white text-black w-[300px] pl-5"
            placeholder="Your email address"
            onChange={() => ({})}
          />
          <Button
            label="Start now"
            onClick={() => ({})}
            buttonStyle="custom"
            height="h-10"
            padding="p-0"
            labelClasses="text-[20px] leading-[28px] font-bold"
            customClasses="cursor-pointer bg-green border rounded-full border-background text-background px-6 w-[150px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Email;
