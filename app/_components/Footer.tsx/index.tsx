import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white px-[100px] pb-[100px] text-black w-full text-[20px]">
      <div className="flex items-center gap-56">
        <div className="flex flex-col gap-10 w-2/4">
          <Image src="/dark-logo.png" alt="logo" width={100} height={100} />
          <p className="text-gray">
            Social media validation business model canvas graphical user interface launch party creative facebook iPad
            twitter.
          </p>
          <p className="text-gray">All rights reserved.</p>
        </div>
        <div className="flex w-full items-center gap-32 self-start">
          <div className="flex flex-col gap-8">
            <h4 className="font-bold">Landings</h4>
            <p className="text-gray">Home</p>
            <p className="text-gray">Products</p>
            <p className="text-gray">Services</p>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="font-bold">Company</h4>
            <p className="text-gray">Home</p>
            <p className="text-gray">Careers</p>
            <p className="text-gray">Services</p>
          </div>
          <div className="flex-col flex gap-8">
            <h4 className="font-bold">Resources</h4>
            <p className="text-gray">Blog</p>
            <p className="text-gray">Products</p>
            <p className="text-gray">Services</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
