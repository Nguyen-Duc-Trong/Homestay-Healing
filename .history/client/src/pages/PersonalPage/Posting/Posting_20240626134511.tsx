import React from 'react'
import Address from './Adress.tsx'

const Posting = () => {
    const listOptionMap = [
        
    ]

  return (
    <div className="px-[20px]">
         <h1 className='text-[30px] font-[600] overflow-auto'>Đăng tin mới</h1>
         <br /> <hr />
         <div className="">
            <div className="">
                <h1 className='text-[20px] font-[600]'>Địa chỉ cho thuê</h1>
                <Address setPayload={undefined}/>
            </div>
         </div>
    </div>
  )
}

export default Posting