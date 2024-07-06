// import React, {useEffect, useState} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import InputSearch from '../../components/InputSearch/InputSearch.tsx'
// import icons from '../../ultils/icons.js'
// import Button from '../../components/Button/Button.tsx'
// import PopupSearch from './component/PopupSearch.tsx'
// import { setProvince, setCategory } from '../../redux/slides/searchSlide.js'
// import { apiGetProvinces } from '../../service/province.js'
// import {data} from "../HomePage/components/data.js"
// import { apiGetCategories } from '../../service/category.js'

// const {MdOutlineNavigateNext, TfiLocationPin, RiMoneyDollarCircleLine, SlCrop, FaRegBuilding, LuDelete, CiSearch} = icons

// const SearchPage = () => {
//   const [isShowModal, setIsShowModal] = useState(false)
//   const [content, setContent] = useState([])
//   const [name, setName] = useState('')
//   const {province, category} = useSelector((state:any) => state.search)
//    console.log(category);
//   const handleShowModal = (content:any, name:any) => {
//     setContent(content)
//     setName(name)
//     setIsShowModal(true)
//   }
//   const dispatch = useDispatch()
//   useEffect(() => {
//     const getProvince = async() => {
//       const response = await apiGetProvinces()
//       dispatch(setProvince(response.data?.response))
//     }
//     const getCategory = async() => {
//       const response2 = await apiGetCategories() 
//       dispatch(setCategory(response2.data?.response?.value))      
//     }
//     getCategory()
//     getProvince()
//   }, [])

//   // useEffect(() => {
//   //   const getCategory = async() => {
//   //     const hihih = await apiGetCategories() 
//   //     dispatch(setCategory(hihih.data?.response?.value))      
//   //   }
//   //   getCategory()
//   // }, [])
  
//   return (
//     <React.Fragment>
//       <div className='h-[55px] flex p-[10px] bg-[#febb02] rounded-[8px] items-center justify-around text-[13px] '>
//         <span onClick={() => handleShowModal(province, 'province')} className='flex-1 mx-[3px]'>
//           <InputSearch IconBefore={<FaRegBuilding />} IconAfter={<LuDelete />} text={'Loại'} fontWeight />
//         </span>
//         <span onClick={() => handleShowModal(province, 'province')} className='flex-1 mx-[3px]'>
//           <InputSearch IconBefore={<TfiLocationPin />} IconAfter={<MdOutlineNavigateNext />} text={'Địa chỉ'} fontWeight={undefined} />
//         </span>
//         <span onClick={() => handleShowModal(province, 'province')} className='flex-1 mx-[3px]'>
//           <InputSearch IconBefore={<RiMoneyDollarCircleLine />} IconAfter={<MdOutlineNavigateNext />} text={'Chọn giá'} fontWeight={undefined} />
//         </span>
//         <span onClick={() => handleShowModal(province, 'province')} className='flex-1 mx-[3px]'>
//           <InputSearch IconBefore={<SlCrop />} IconAfter={<MdOutlineNavigateNext />} text={'Chọn diện tích'} fontWeight={undefined} />
//         </span>
//         <span onClick={handleShowModal} className='flex-1 mx-[3px]'>
//           <Button text={'Tìm kiếm'} onClick={undefined} className={'w-full h-[35px] text-[#fff] text-[13px] bg-[#0071c2] font-bold'} icon={<CiSearch />} />
//         </span>
//       </div>
//       {isShowModal && <PopupSearch name={name} content={content} setIsShowModal={setIsShowModal} /> } 
//     </React.Fragment>
//   )
// }

// export default SearchPage

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputSearch from '../../components/InputSearch/InputSearch.tsx';
import icons from '../../ultils/icons.js';
import Button from '../../components/Button/Button.tsx';
import PopupSearch from './component/PopupSearch.tsx';
import { setProvince, setCategory } from '../../redux/slides/searchSlide.js';
import { apiGetProvinces } from '../../service/province.js';
import { apiGetCategories } from '../../service/category.js';

const { MdOutlineNavigateNext, TfiLocationPin, RiMoneyDollarCircleLine, SlCrop, FaRegBuilding, LuDelete, CiSearch } = icons;

const SearchPage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState('');
  const { province, category, area2 } = useSelector((state: any) => state.search);
  // console.log(area2);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProvince = async () => {
      const response = await apiGetProvinces();
      dispatch(setProvince(response.data?.response));
    };
    const getCategory = async () => {
      const response2 = await apiGetCategories();
      console.log(response2);
      
      dispatch(setCategory(response2?.data?.response));
    };
    getCategory();
    getProvince();
  }, []);

  const handleShowModal = (content: any, name: any) => {
    setContent(content);
    setName(name);
    setIsShowModal(true);
  };

  const createHandleShowModal = (content: any, name: any) => (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    handleShowModal(content, name);
  };

  return (
    <React.Fragment>
      <div className='h-[55px] flex p-[10px] bg-[#febb02] rounded-[8px] items-center justify-around text-[13px] '>
        <span onClick={createHandleShowModal(province, 'province')} className='flex-1 mx-[3px]'>
          <InputSearch IconBefore={<FaRegBuilding />} IconAfter={<LuDelete />} text={'Loại'} fontWeight />
        </span>
        <span onClick={createHandleShowModal(province, 'province')} className='flex-1 mx-[3px]'>
          <InputSearch IconBefore={<TfiLocationPin />} IconAfter={<MdOutlineNavigateNext />} text={'Địa chỉ'} fontWeight={undefined} />
        </span>
        <span onClick={createHandleShowModal(area2, 'area2')} className='flex-1 mx-[3px]'>
          <InputSearch IconBefore={<RiMoneyDollarCircleLine />} IconAfter={<MdOutlineNavigateNext />} text={'Chọn giá'} fontWeight={undefined} />
        </span>
        <span onClick={createHandleShowModal(province, 'province')} className='flex-1 mx-[3px]'>
          <InputSearch IconBefore={<SlCrop />} IconAfter={<MdOutlineNavigateNext />} text={'Chọn diện tích'} fontWeight={undefined} />
        </span>
        <span onClick={createHandleShowModal(province, 'province')} className='flex-1 mx-[3px]'>
          <Button text={'Tìm kiếm'} onClick={undefined} className={'w-full h-[35px] text-[#fff] text-[13px] bg-[#0071c2] font-bold'} icon={<CiSearch />} />
        </span>
      </div>
      {isShowModal && <PopupSearch name={name} content={content} setIsShowModal={setIsShowModal} />}
    </React.Fragment>
  );
}

export default SearchPage;
