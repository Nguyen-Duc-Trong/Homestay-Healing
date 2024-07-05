import React, { memo } from 'react';
import { removeVnAndSpaces } from "../../pages/HomePage/components/data.js";

const Select = ({ label, options, value, setValue, type, reset, name }) => {
  return (
    <div className='flex flex-col gap-2 flex-1'>
      <label className='font-medium' htmlFor="select-address">{label}</label>
      <select
        value={reset ? '' : value}
        onChange={(e) => !name ? setValue(e.target.value) : setValue((prev) => ({ ...prev, [name]: removeVnAndSpaces(e.target.value) }))}
        id="select-address"
        className='outline-none border border-gray-300 p-2 rounded-md w-full'
      >
        <option value="">{`--Chọn ${label}--`}</option>
        {options?.map((item) => {
          const key = type === 'province' ? item.province_id : type === 'district' ? item.district_id : item.code;
          const value = type === 'province' ? item.province_id : type === 'district' ? item.district_id : item.code;
          const displayName = type === 'province' ? item.province_name : type === 'district' ? item.district_name : item.value;

          return (
            <option key={key} value={value}>
              {displayName}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default memo(Select);