import React from "react";

const DropDown = ({ type, placeholder, altimeValue, valueUpdate, allData,className }) => {
  return (
    <div>
      <label className="font-medium" htmlFor={placeholder}>
        {placeholder}
      </label>
      <select
        required
        value={altimeValue}
        onChange={valueUpdate}
        id={placeholder}
        className={`w-full focus:outline-none border border-gray-600 py-2 pl-2 rounded-lg text-lg font-medium ${className}`}
      >
        <option disabled value="" hidden>Select Room</option>
        {allData?.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
