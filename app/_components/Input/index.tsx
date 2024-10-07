import React from 'react';
import { InputDataTypes } from '@/app/types/types.interface';

function Input({
  label,
  placeholder,
  hint,
  cornerHint,
  required,
  name,
  type = 'text',
  autoComplete,
  value,
  onChange,
  leadingIcon,
  trailingIcon,
  trailingClick,
  bgColor,
  borderRadius,
  height = 'h-10',
  classes,
  onBlur,
  styles,
  width = 'w-full',
  labelClasses,
  isError,
  errorMessage,
  keyDownFunc
}: InputDataTypes) {
  const handleTrailingIconClick = () => {
    if (trailingClick) {
      trailingClick();
    }
  };

  return (
    <div className="relative w-full">
      <div className={`relative py-1 rounded-[16px] ${bgColor}`}>
        {leadingIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-1.5 pointer-events-none">{leadingIcon}</div>
        )}
        <div
          className={`flex px-2 flex-col gap-1 items-start justify-center ${width} appearance-none block ${
            leadingIcon && 'pl-8'
          } ${trailingIcon && 'pr-10'} ${trailingIcon && 'pr-10'} ${
            borderRadius ? borderRadius : name === 'search' && !borderRadius ? 'rounded-full py-0.5' : 'rounded-full py-2'
          }  ${bgColor} ${height} ${classes}`}
        >
          {label && (
            <div className="flex justify-between">
              <label htmlFor={name} className={`z-10 text-[14px] leading-5 dark:text-brand-gray-50 ${labelClasses}`}>
                {label} {required && <span className="ml-1 text-red-500">*</span>}
              </label>
              {cornerHint && <span className="text-gray-500">{cornerHint}</span>}
            </div>
          )}
          <input
            maxLength={2000}
            type={type}
            onKeyDown={keyDownFunc}
            id={name}
            required={required}
            name={name}
            autoComplete={autoComplete}
            className={`${
              borderRadius ? borderRadius : name === 'search' && !borderRadius ? 'rounded-full py-0.5' : ''
            } placeholder-black text-black dark:text-white bg-transparent outline-none focus:outline-none w-full`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            style={{ ...styles }}
          />
        </div>
        {trailingIcon && (
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={handleTrailingIconClick}
          >
            {trailingIcon}
          </div>
        )}
      </div>
      {hint && <p className="mt-2 text-sm text-gray-500">{hint}</p>}
      {isError && <p className="text-brand-warning text-[15px]">{errorMessage}</p>}
    </div>
  );
}

export default Input;
