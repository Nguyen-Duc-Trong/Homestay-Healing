import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import icons from '../../../ultils/icons'
const { FaArrowLeft} = icons

const PopupSearch = ({setIsShowModal, content, name}:any) => {
  
  return (
    <div onClick={() => {setIsShowModal(false)}} className='fixed top-[0px] left-0 right-0 h-screen w-[100%] z-[1000] bg-[#00000080] flex justify-center '>
        <div onClick={(e) => {
          e.stopPropagation()
          setIsShowModal(true)
          }}
          className='w-[700px] top-[70px] bg-[#fff] max-h-[500px] absolute rounded-[8px]'>
            <div className='h-[45px] rounded text-center justify-between flex items-center px-[10px] border-b-[1px] border-[#ddd]'>
              <span onClick={(e) => {
                e.stopPropagation()
                setIsShowModal(false)
                }}>
                <FaArrowLeft size={20}/>
              </span>
              {/* <span className='font-bold'>
                CHỌN TỈNH THÀNH
              </span> */}
              <span className='w-[25px]'></span>
            </div>
            <div className='py-[10px] px-[25px] flex flex-col'>
              {content?.map((item:any) => {
                return(
                  <span key={item.code} className='py-[5px] flex gap-2 items-center border-b'>
                    <input type='radio' name={name} id={item.code} value={item.code} />
                    <label htmlFor={item.code}>{item.value}</label>
                  </span>
                )
              })}
            </div>
        </div>
    </div>
  )
}

export default PopupSearch