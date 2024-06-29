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

import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputSearch from '../../components/InputSearch/InputSearch.tsx';
import icons from '../../ultils/icons.js';
import Button from '../../components/Button/Button.tsx';
import PopupSearch from './component/PopupSearch.tsx';
import { setProvince, setCategory,setAcreages, setPrice } from '../../redux/slides/searchSlide.js';
import { apiGetProvinces } from '../../service/province.js';
import { apiGetCategories } from '../../service/category.js';
import {apiGetAcreages} from "../../service/acreage.js"
import {apiGetPrices} from '../../service/price.js'

const { MdOutlineNavigateNext, TfiLocationPin, RiMoneyDollarCircleLine, SlCrop, FaRegBuilding, LuDelete, CiSearch } = icons;

const SearchPage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState('');
  const { province, category, area2, price } = useSelector((state: any) => state.search);
  const [queries, setQueries] = useState({})
  // const [texts, setTexts] = useState({
  //   category: '',
  //   province: '',
  //   price: '',
  //   area2: '',
  // })

  const dispatch = useDispatch();
  useEffect(() => {
    const getProvince = async () => {
      const response = await apiGetProvinces();
      dispatch(setProvince(response.data?.response));
    };
    const getCategory = async () => {
      const response2 = await apiGetCategories(); 
      dispatch(setCategory(response2?.data?.response));
    };
    const getAcreages = async () => {
      const response3 = await apiGetAcreages();
      dispatch(setAcreages(response3?.data?.response));
    };
    const getPrice = async () => {
      const response4 = await apiGetPrices();
      dispatch(setPrice(response4?.data?.response));
    }
    getCategory();
    getProvince();
    getAcreages();
    getPrice()
  }, []);

  const handleShowModal = (content: any, name: any) => {
    setContent(content);
    setName(name);
    setIsShowModal(true);
  };

  const handleSubmit = useCallback((e:any, query: any) => {
    e.stopPropagation()
    setQueries(prev => ({...prev, ...query}))
    setIsShowModal(false)
  }, [isShowModal, queries])
  console.log(queries);
  

  const createHandleShowModal = (content: any, name: any) => (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    handleShowModal(content, name);
  };
  return (
    <React.Fragment>
      <div className='h-[55px] flex p-[10px] bg-[#febb02] rounded-[8px] items-center justify-around text-[13px] '>
        <span onClick={createHandleShowModal(category, 'category')} className='flex-1 mx-[3px]'>
          <InputSearch IconBefore={<FaRegBuilding />} IconAfter={<LuDelete />} text={
           // @ts-ignore
            queries.category || "Loại" } fontWeight />
        </span>
        <span onClick={createHandleShowModal(province, 'province')} className='flex-1 mx-[3px]'>
          <InputSearch IconBefore={<TfiLocationPin />} IconAfter={<MdOutlineNavigateNext />} text={queries.province ||'Địa chỉ'} fontWeight />
        </span>
        <span onClick={createHandleShowModal(price, 'price')} className='flex-1 mx-[3px]'>
          <InputSearch IconBefore={<RiMoneyDollarCircleLine />} IconAfter={<MdOutlineNavigateNext />} text={queries.price || 'Chọn giá'} fontWeight />
        </span>
        <span onClick={createHandleShowModal(area2, 'area2')} className='flex-1 mx-[3px]'>
          <InputSearch IconBefore={<SlCrop />} IconAfter={<MdOutlineNavigateNext />} text={queries.area2 || 'Chọn diện tích'} fontWeight />
        </span>
        <span className='flex-1 mx-[3px]'>
          <Button text={'Tìm kiếm'} onClick={undefined} className={'w-full h-[35px] text-[#fff] text-[13px] bg-[#0071c2] font-bold'} icon={<CiSearch />} />
        </span>
      </div>
      {isShowModal && <PopupSearch handleSubmit={handleSubmit} name={name} content={content} setIsShowModal={setIsShowModal} />}
    </React.Fragment>
  );
}

export default SearchPage;
