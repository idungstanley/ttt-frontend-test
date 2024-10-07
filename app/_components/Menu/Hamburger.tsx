import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HamburgerProps } from '@/app/types/types.interface';

const Hamburger = ({ isToggle, color, size, toggleFn, width, height, classname }: HamburgerProps) => {
  const handleCloseModal = () => {
    toggleFn(false);
  };
  const handleOpenModal = () => {
    toggleFn(true);
  };
  return (
    <>
      {isToggle ? (
        <IoCloseOutline
          onClick={handleCloseModal}
          className={`${classname} z-[999] fixed top-4 right-12`}
          color="black"
          size={size}
          width={width}
          height={height}
        />
      ) : (
        <RxHamburgerMenu
          onClick={handleOpenModal}
          className={classname}
          color={color}
          size={size}
          width={width}
          height={height}
        />
      )}
    </>
  );
};

export default Hamburger;
