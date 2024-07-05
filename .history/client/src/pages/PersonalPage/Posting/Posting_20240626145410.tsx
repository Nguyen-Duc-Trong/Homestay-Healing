import React from 'react'
import Address from './Adress.tsx'
import Select from '../../../components/Select/Select.tsx'
import {data} from "../../HomePage/components/data.js"
const Posting = () => {
    const listOptionMap = [
        
    ]    
  return (
    <div className="px-[20px] overflow-auto">
        <div className="flex">
          <div className="w-2/3">
            <Address /> 
            <div className="">
              <h1  className='font-semibold text-xl py-4'>Thông tin mô tả </h1>
              <Select options={data} label="Loai Loại chuyên mục"/>
              <div className="">
                <label htmlFor='title'>Tiêu đề </label>
                <input className='border-[1px]' type="text" id='title' />
              </div>
            </div>
          </div>
          <div className="w-1/3">
          map
          </div>
        </div>

    </div>
  )
}

export default Posting