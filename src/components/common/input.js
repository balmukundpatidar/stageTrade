import React from "react";

const Input = ({ type, name, onChange, onBlur, value, className, id, placeholder }) => {
  return (
    <>
      <input
        id={id}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={`block py-2.5 px-0 w-full text-base text-darkGray transition bg-transparent border-0 border-b-2 border-lightBlue focus:outline-none focus:border-yellowGreen ${className}`}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
