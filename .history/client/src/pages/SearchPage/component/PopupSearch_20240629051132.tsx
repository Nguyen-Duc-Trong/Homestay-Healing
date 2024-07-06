import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import icons from '../../../ultils/icons'
import {setActiveItem} from "../../../redux/slides/main1Slide.js"
const { FaArrowLeft} = icons

const PopupSearch = ({setIsShowModal, content, name, handleSubmit, queries}:any) => {
  console.log(content, name);
  
  const dispatch = useDispatch()
    const change = (e:any, item:any)=>{      
      dispatch(setActiveItem(item.id))
       handleSubmit(e,{[name]: item.value, [`${name}Code`]: item.code})
    }
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
              <span className='w-[25px]'></span>
            </div>
            <div className='pt-[10px] pb-[35px] px-[25px] flex flex-col'>
              <span><input type="radio"
               onChange={(e:any) => handleSubmit(e,{[name]: ""})} 
              
              /> Tất cả </span>
              {content?.map((item:any) => {
                return(
                  <span key={item?.code} className='py-[5px] flex gap-2 items-center border-b-[1px]'>
                    <input 
                      type='radio' 
                      name={name} 
                      id={item.code} 
                      value={item.code} 
                      checked={item?.code === queries[`${name}Code`] ? true : false}
                      onChange={
                        name === 'category' ?
                        (e:any)=> change(e,item)
                        :(e:any) => handleSubmit(e,{[name]: item.value, [`${name}Code`]: item.code})} 
                    />
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