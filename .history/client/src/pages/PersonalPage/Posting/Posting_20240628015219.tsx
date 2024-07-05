import React ,{useState} from 'react'
import Address from './Adress.tsx'
import Select from '../../../components/Select/Select.tsx'
import {data} from "../../HomePage/components/data.js"
import { useSelector } from 'react-redux'
import { FaCamera } from "react-icons/fa";
import { title } from 'process'
const Posting = () => {
  const {phone,username ,id} = useSelector((state:any)=> state.auth)
  const [payload , setpayload] = useState({
      star : 0,
      title : "",
      userId : id,
      categoryCode : "",
      ContactInfo : "",
      areaNumber : 0,
      priceNumber : 0,
      image : '',
      address : "",
      priceCode : "",
      areCode : "",
      description : "",
      target : "",
      province : "",


  })
  console.log(payload);
  
  return (
    <div className="px-[20px] h-[100vh] ">
        <div className="flex pb-[200px]">
          <div className="w-2/3">
            <Address payload={payload} setPayload={setpayload} /> 
            <div className="w-full">
              <h1  className='font-semibold text-xl py-4'>Thông tin mô tả </h1>
              <Select options={data} name="categoryCode" setValue={setpayload}  label="Loai chuyên mục" />
              <br />
              <div className="">
                <label className='font-medium' htmlFor='title'>Tiêu đề </label> <br />
                <input
                 value={payload.title} onChange={(e:any)=> setpayload({...payload, title: e.target.value })}
                  className='border-[2px] w-[100%]' type="text" id='title' />
              </div>
              <div className="">
                <label className='font-medium' htmlFor='desc'>Mô tả </label> <br />
                <textarea
                value={payload.description} onChange={(e:any)=> setpayload({...payload, description: e.target.value })} 
                className='border-[2px] w-[100%]' rows={5} id='desc' />
              </div> <br />
              <div className="">
                <label className='font-medium' htmlFor='contact'>Thông tin liên hệ</label> <br />
                <input value={username} readOnly  className='px-[10px] border-[1px] outline-none bg-gray-200 w-[100%]'  type="text" id='contact' />
                <br /> <br />
                <label className='font-medium' htmlFor='sdt'>Số điện thoại</label> <br />
                <input value={phone} readOnly  className='px-[10px] border-[1px] outline-none bg-gray-200 w-[100%]'  type="text" id='sdt' />
              </div> <br />
              <div className="flex">
                <div className="w-[50%]">
                  <label className='font-medium' htmlFor='cost'>Giá cho thuê</label> <br />
                  <input className='border-[2px] w-[60%]' type="text" id='cost' />
                  <button className='px-[5px] bg-gray-200'>Đồng/tháng</button>
                <small>Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000</small>
                </div>
                <br />
                <div className="w-[30%]">
                  <label className='font-medium' htmlFor='acreage'>Diện tích</label> <br />
                  <input className='border-[2px] w-[60%]' type="number" id='acreage' /><button className='px-[5px] bg-gray-200'>m<sup>2</sup></button>
                </div>
                <div className="w-[20%]">
                    <label className='font-medium' htmlFor='star'>Đánh giá</label> <br />
                    <input className='border-[2px] w-[60%]' type="number" id='star' /><button className='px-[5px] bg-gray-200'>Sao</button>
                </div>
              </div> <br />
              <h1 className='font-medium' >Hình ảnh </h1>
              <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small><br />
              <div className="w-full">
              <label className='font-medium w-[100%] 
              items-center justify-center bg-gray-100
              flex border-2 h-[150px]' htmlFor='img'>
                <div className="text-center">
                <FaCamera className=' text-[50px] text-blue-500' />
                Thêm ảnh
                </div>
              </label> <br />
              <input hidden type="file" id="img"  />
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