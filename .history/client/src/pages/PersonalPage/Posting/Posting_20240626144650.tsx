import React from 'react'
import Address from './Adress.tsx'
import Select from '../../../components/Select/Select.tsx'
import {useSelector} from "react-redux"
import { log } from 'console'
const Posting = () => {
    const listOptionMap = [
        
    ]
    const { categories} = useSelector((state:any)=> state.app)
    console.log(categories);
    
  return (
    <div className="px-[20px] overflow-auto">
        <div className="flex">
          <div className="w-2/3">
            <Address /> 
            <div className="">
              <h1  className='font-semibold text-xl py-4'>Thông tin mô tả </h1>
              <Select label="Loai Loại chuyên mục"/>
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