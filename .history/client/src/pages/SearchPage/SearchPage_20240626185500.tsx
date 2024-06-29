import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import InputSearch from '../../components/InputSearch/InputSearch.tsx'
import icons from '../../ultils/icons.js'
import Button from '../../components/Button/Button.tsx'
import Modal from './component/Modal.tsx'
import { setProvince } from '../../redux/slides/provinceSlide.js'
import { apiGetProvinces } from '../../service/province.js'

const {MdOutlineNavigateNext, TfiLocationPin, RiMoneyDollarCircleLine, SlCrop, FaRegBuilding, LuDelete, CiSearch} = icons

const SearchPage = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    const getProvince = async() => {
      const response = await apiGetProvinces()
      dispatch(setProvince(response.data?.response))
    }
    getProvince()
  }, [])
  
  return (
    <React.Fragment>
      <div className='h-[55px] flex p-[10px] bg-[#febb02] rounded-[8px] items-center justify-around text-[13px] '>
        <span className='flex-1 mx-[3px]'>
          <InputSearch IconBefore={<FaRegBuilding />} IconAfter={<LuDelete />} text={'Loại'} fontWeight />
        </span>
        <div className='flex-1 mx-[3px]'>
          <InputSearch IconBefore={<TfiLocationPin />} IconAfter={<MdOutlineNavigateNext />} text={'Địa chỉ'} fontWeight={undefined} />
        </div>
        <div className='flex-1 mx-[3px]'>
          <InputSearch IconBefore={<RiMoneyDollarCircleLine />} IconAfter={<MdOutlineNavigateNext />} text={'Chọn giá'} fontWeight={undefined} />
        </div>
        <div className='flex-1 mx-[3px]'>
          <InputSearch IconBefore={<SlCrop />} IconAfter={<MdOutlineNavigateNext />} text={'Chọn diện tích'} fontWeight={undefined} />
        </div>
        <div className='flex-1 mx-[3px]'>
          <Button text={'Tìm kiếm'} onClick={undefined} className={'w-full h-[35px] text-[#fff] text-[13px] bg-[#0071c2] font-bold'} icon={<CiSearch />} />
        </div>
      </div>
      {/* <Modal/> */}
    </React.Fragment>
  )
}

export default SearchPage