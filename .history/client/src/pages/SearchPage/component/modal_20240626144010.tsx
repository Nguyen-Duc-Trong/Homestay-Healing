import React from 'react'
import icons from '../../../ultils/icons'

const { FaArrowLeft} = icons

const modal = () => {
  return (
    <div className='fixed top-[0px] left-0 right-0 h-screen w-[100%] z-[1000] bg-[#00000080] flex justify-center '>
        <div className='w-[700px] top-[70px] bg-[#fff] max-h-[500px] absolute rounded-[8px]'>
            <div className='h-[45px] rounded text-center justify-between flex items-center'>
              <span className='text-[25px]'>
                < FaArrowLeft/>
              </span>
              Chọn tỉnh thành
              <span className='w-[25px]'></span>
            </div>
            <div>
              content
            </div>
        </div>
    </div>
  )
}

export default modal