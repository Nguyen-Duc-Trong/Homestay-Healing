import React from 'react'
import Address from './Adress.tsx'
import Select from '../../../components/Select/Select.tsx'
import {data} from "../../HomePage/components/data.js"
import { useSelector } from 'react-redux'
const Posting = () => {
  const {phone,username} = useSelector((state:any)=> state.auth)

  return (
    <div className="px-[20px] h-[100vh] ">
        <div className="flex pb-[200px]">
          <div className="w-2/3">
            <Address /> 
            <div className="">
              <h1  className='font-semibold text-xl py-4'>Thông tin mô tả </h1>
              <Select options={data} label="Loai chuyên mục" />
              <br />
              <div className="">
                <label className='font-medium' htmlFor='title'>Tiêu đề </label> <br />
                <input className='border-[2px] w-[100%]' type="text" id='title' />
              </div>
              <div className="">
                <label className='font-medium' htmlFor='desc'>Mô tả </label> <br />
                <textarea className='border-[2px] w-[100%]' rows={10} id='desc' />
              </div>
              <div className="">
                <label className='font-medium' htmlFor='contact'>Thông tin liên hệ</label> <br />
                <input value={username} readOnly  className='px-[10px] border-[1px] outline-none bg-gray-200 w-[100%]'  type="text" id='contact' />
                <br />
                <label className='font-medium' htmlFor='sdt'>Số điện thoại</label> <br />
                <input value={phone} readOnly  className='px-[10px] border-[1px] outline-none bg-gray-200 w-[100%]'  type="text" id='sdt' />
              </div> <br />
              <div className="">
                <label className='font-medium' htmlFor='cost'>Giá cho thuê</label> <br />
                <input className='border-[2px] w-[30%]' type="text" id='cost' />
                <select>
                  <option>Đồng/tháng</option>
                  <option>Triệu đồng/tháng</option>
                </select>
              </div>
              <br />
              <div className="">
              <label className='font-medium' htmlFor='cost'>Hình ảnh</label> <br />

              </div>
            </div>
          </div>
          </div>
          <div className="w-1/3">
               map
          </div>

    
    </div>
  )
}

export default Posting