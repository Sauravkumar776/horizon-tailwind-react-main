import React from 'react';

const UnderlineDropDown = ({ options, extra, ...rest }) => {
  return (
    <div className="m-4 py-1 border-b border-teal-500 dark:border-darkInputBorderColor relative">
      <select
        className={`appearance-none bg-transparent dark:bg-darkThemeColor border-none w-full text-gray-700 dark:text-white py-1 px-2 leading-tight focus:outline-none ${extra}`}
        {...rest}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default UnderlineDropDown;
