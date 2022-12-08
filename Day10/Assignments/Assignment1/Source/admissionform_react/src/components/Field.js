import React from "react";

const Field = ({ name, type, placeholder, label, register, error }) => {
  return (
    <div className="mb-2">
      <label
        className="block mb-3 text-lg font-bold text-secondary"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="flex items-center bg-white rounded-2xl">
        <input
          type={type || "text"}
          name={name}
          id={name}
          className="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
          placeholder={placeholder}
          {...register}
        />
      </div>
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

export default Field;
