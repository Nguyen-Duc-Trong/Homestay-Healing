import React, {useState , useEffect} from 'react'
import {Link } from "react-router-dom"
import { FaRegHeart } from "react-icons/fa";
import {useSelector,useDispatch} from "react-redux"
import {setActiveItem} from "../../../../redux/slides/main1Slice.js"
const Navbar = ({setnav}) => {
    const dispatch = useDispatch();
    const activeItem = useSelector((state: any) => state.reducer.main1.activeItem);


    useEffect(() => {
        // Lưu active item vào localStorage mỗi khi nó thay đổi
        localStorage.setItem('activeItem', activeItem.toString());
    }, [activeItem]);

    const handleHeaderActive = (id: number) => {
        dispatch(setActiveItem(id));
    };;

  return (
   <div className={`header-navbar w-[100%]  ${setnav}  ` }>
        <ul className={`header-list-nav flex justify-around w-[1120px]  m-auto h-[40px] items-center text-[#ffffff] font-bold text-[14px] `}>
            <Link to="/">
                <li className={`flex  items-center px-[31.2px] h-[40px] hover:bg-[#f73859] ${activeItem === 1 ? "bg-[#f73859]" : ""} `}
                    onClick={() => handleHeaderActive(1)}>
                    <span>Trang chủ</span>
                </li>
            </Link>
            <Link to="/">
                <li className={`flex items-center px-[31.2px] h-[40px] hover:bg-[#f73859] ${activeItem === 2 ? "bg-[#f73859]" : ""} `}
                    onClick={() => handleHeaderActive(2)}>
                    Homestays độc lập
                </li>
            </Link>
            <Link to="/">
                <li className={`flex items-center px-[31.2px] h-[40px] hover:bg-[#f73859] ${activeItem === 3 ? "bg-[#f73859]" : ""} `}
                    onClick={() => handleHeaderActive(3)}>
                   Homestay nhóm
                </li>
            </Link>
            <Link to="/">
                <li className={`${activeItem === 4 ? "bg-[#f73859]" : ""} flex items-center px-[31.2px] h-[40px] hover:bg-[#f73859]`}
                    onClick={() => handleHeaderActive(4)}>
                    Homestay nghỉ dưỡng
                </li>
            </Link>
            <Link to={"/favourite"}>
                <li className={`flex items-center px-[31.2px] h-[40px] hover:bg-[#f73859] ${activeItem === 5 ? "bg-[#f73859]": ""}`}
                    onClick={() => handleHeaderActive(5)}>
                    <FaRegHeart className='mr-[5px] text-[15px]'/> Yêu thích
                </li>
            </Link>
            <Link to="/">
                <li className={`${activeItem === 6 ? "bg-[#f73859]" : ""} flex items-center px-[31.2px] h-[40px] hover:bg-[#f73859]`}
                    onClick={() => handleHeaderActive(6)}>
                    Tin tức
                </li>
            </Link>
            <Link to="/personal">
                <li className={`${activeItem === 7 ? "bg-[#f73859]" : ""} flex items-center px-[31.2px] h-[40px] hover:bg-[#f73859]`}
                    onClick={() => handleHeaderActive(0)}>
                   Bảng giá dịch vụ
                </li>
            </Link>
        </ul>
   </div>
)
}

export default Navbar