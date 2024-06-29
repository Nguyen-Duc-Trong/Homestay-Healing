import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import icons from '../../../ultils/icons'
import Button from '../../../components/Button/Button.tsx'

const { FaArrowLeft} = icons

const PopupSearch = ({setIsShowModal, content, name}:any) => {
  
  return (
    <div onClick={() => {setIsShowModal(false)}} className='fixed top-[0px] left-0 right-0 h-screen w-[100%] z-[1000] bg-[#00000080] flex justify-center '>
        <div onClick={(e) => {
          e.stopPropagation()
          setIsShowModal(true)
          }}
          className='w-[700px] top-[70px] bg-[#fff] max-h-[500px] absolute rounded-[8px]'>
            <div className='h-[45px] rounded text-center justify-between flex items-center pt-[10px] pb-[50px] border-b-[1px] border-[#ddd]'>
              <span onClick={(e) => {
                e.stopPropagation()
                setIsShowModal(false)
                }}>
                <FaArrowLeft size={20}/>
              </span>
              <span className='w-[25px]'></span>
            </div>
            <div className='py-[10px] px-[25px] flex flex-col'>
              {content?.map((item:any) => {
                return(
                  <span key={item.code} className='py-[5px] flex gap-2 items-center border-b-[1px]'>
                    <input type='radio' name={name} id={item.code} value={item.code} />
                    <label htmlFor={item.code}>{item.value}</label>
                  </span>
                )
              })}
            </div>
            <Button text={'ÁP DỤNG'} onClick={undefined} className={'w-full h-[50px] bg-[#ffa500] text-[#000] font-bold hover:no-underline rounded-t-none'} icon={undefined}/>
        </div>
    </div>
  )
}

export default PopupSearch