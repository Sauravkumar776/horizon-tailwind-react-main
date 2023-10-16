import React from 'react';

const UnderlineInput = ({ type, placeholder, extra, inputExtra,onChange, ...rest }) => {
    return (
        <div className={`py-1 border-b border-teal-500 dark:border-darkInputBorderColor ${extra}`}>
            <input
                className={`appearance-none bg-transparent dark:bg-darkThemeColor border-none w-full text-gray-700 dark:text-white py-1 px-2 leading-tight focus:outline-none ${inputExtra}`}
                type={type}
                placeholder={placeholder}
                {...rest}
                onChange={onChange}
            />

        </div>
    );
};

export default UnderlineInput;
