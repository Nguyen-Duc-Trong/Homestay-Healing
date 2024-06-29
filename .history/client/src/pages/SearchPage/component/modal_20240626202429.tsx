import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import icons from '../../../ultils/icons'
import { setFilterArea } from '../../../redux/slides/searchSlide'
const { FaArrowLeft} = icons

const Modal = ({ content}:any) => {
  
  const {area} = useSelector((state:any)=> state.searchSlide)
  console.log(area);
  
  const dispatch = useDispatch()

  return (
    <div className="">
        <select>
          <option>Địa chỉ</option>
          {
            content?.map((item:any ,index:any)=>{
              return (
                <option onClick={()=> dispatch(setFilterArea(item?.value))}  key={index}>{item?.value}</option>
              )
            })
          }
        </select>
    </div>
  )
  // return (
  //   <div onClick={() => {setIsShowModal(false)}} className='fixed top-[0px] left-0 right-0 h-screen w-[100%] z-[1000] bg-[#00000080] flex justify-center '>
  //       <div onClick={(e) => {
  //         e.stopPropagation()
  //         setIsShowModal(true)
  //         }}
  //         className='w-[700px] top-[70px] bg-[#fff] max-h-[500px] absolute rounded-[8px]'>
  //           <div className='h-[45px] rounded text-center justify-between flex items-center px-[10px] border-b-[1px] border-[#ddd]'>
  //             <span>
  //               <FaArrowLeft size={20}/>
  //             </span>
  //             <span className='font-bold'>
  //               CHỌN TỈNH THÀNH
  //             </span>
  //             <span className='w-[25px]'></span>
  //           </div>
  //           <div className='py-[10px] px-[25px]'>
  //             {content}
  //           </div>
  //       </div>
  //   </div>
  // )
}

export default Modal