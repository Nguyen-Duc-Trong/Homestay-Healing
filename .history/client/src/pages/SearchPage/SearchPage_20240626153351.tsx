import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import InputSearch from '../../components/InputSearch/InputSearch.tsx'
import icons from '../../ultils/icons.js'
import Button from '../../components/Button/Button.tsx'
import Modal from './component/modal.tsx'
import { setProvince } from '../../redux/slides/provinceSlide.js'
import { apiGetProvinces } from '../../service/province.js'

const {MdOutlineNavigateNext, TfiLocationPin, RiMoneyDollarCircleLine, SlCrop, FaRegBuilding, LuDelete, CiSearch} = icons

const SearchPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const getProvince = async() => {
      const response = await apiGetProvinces()
      // console.log(response.data?.response);
      dispatch(setProvince(response.data?.response))
    }
    getProvince()
  }, [])
  
  return (
    <React.Fragment>
      <div className='h-[55px] flex p-[10px] bg-[#febb02] rounded-[8px] items-center justify-around text-[13px] '>
        <InputSearch IconBefore={<FaRegBuilding />} IconAfter={<LuDelete />} text={'Loại'} fontWeight />
        <InputSearch IconBefore={<TfiLocationPin />} IconAfter={<MdOutlineNavigateNext />} text={'Địa chỉ'} fontWeight={undefined} />
        <InputSearch IconBefore={<RiMoneyDollarCircleLine />} IconAfter={<MdOutlineNavigateNext />} text={'Chọn giá'} fontWeight={undefined} />
        <InputSearch IconBefore={<SlCrop />} IconAfter={<MdOutlineNavigateNext />} text={'Chọn diện tích'} fontWeight={undefined} />
        <Button text={'Tìm kiếm'} onClick={undefined} className={'w-full h-[35px] text-[#fff] text-[13px] bg-[#0071c2] font-bold'} icon={<CiSearch />} />
      </div>
      <Modal/>
    </React.Fragment>
  )
}

export default SearchPage