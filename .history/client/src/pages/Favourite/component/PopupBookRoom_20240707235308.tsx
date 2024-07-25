// import React from 'react'
// import icons from '../../../ultils/icons'
// import { useSelector } from 'react-redux';


// const {FaArrowLeft} = icons
// const PopupBookRoom = ({setIsShowBookRoom, item, handleSubmit }) => {
//     console.log(item);
//     const { username,phone } = useSelector((state:any) => state.auth)

//     return (
//         <div onClick={() => { setIsShowBookRoom(false) }} className='fixed top-[0px] left-0 right-0 h-screen w-[100%] z-[1000] bg-[#00000080] flex justify-center '>
//             <div onClick={(e) => {
//                 e.stopPropagation()
//                 setIsShowBookRoom(true)
//             }} className='w-[700px] top-[70px] bg-[#fff] max-h-[500px] absolute rounded-[8px]'>
//                 <div className='h-[45px] rounded text-center justify-between flex items-center px-[10px] border-b-[1px] border-[#ddd]'>
//                     <span onClick={(e) => {
//                         e.stopPropagation()
//                         setIsShowBookRoom(false)
//                     }}>
//                         <FaArrowLeft size={20} />
//                     </span>
//                     <span className='w-[100%] text-[18px] font-bold'>Hợp đồng đặt phòng</span>
//                 </div>
//                 <div>
//                     <h2 className='text-center text-[20px]'>Đặt Phòng</h2>
//                     <p> - Họ tên người đặt: {username}</p>
//                     <p> - Số điện thoại: {phone}</p>
//                     <p> - Phòng: {item?.title}</p>
//                     <p> - {item?.address}</p>
//                     <p> - Giá thuê theo tháng: {item?.attributes?.price}</p>
//                     <p> - Giá thuê theo ngày: </p>
//                     <p> - Diện tích: {item?.attributes?.acreage}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PopupBookRoom

import React from 'react'
import icons from '../../../ultils/icons'
import { useSelector } from 'react-redux';

const { FaArrowLeft } = icons;

const PopupBookRoom = ({ setIsShowBookRoom, item, handleSubmit }) => {
    console.log(item);
    const { username, phone } = useSelector((state:any) => state.auth);

 // Chuyển đổi giá thuê từ chuỗi sang số
 const monthlyRateString = item?.attributes?.price || "";
 let monthlyRate = 0;

 // Kiểm tra và xử lý chuỗi giá thuê
 if (monthlyRateString.includes("triệu")) {
     const numericPart = monthlyRateString.replace(/[^\d]/g, ""); // Loại bỏ tất cả các ký tự không phải số
     monthlyRate = Number(numericPart) * 1000000; // Chuyển đổi thành số và nhân với 1 triệu
 }

 // Tính giá thuê theo ngày và làm tròn
 const dailyRate = Math.round(monthlyRate / 30);


    return (
        <div onClick={() => { setIsShowBookRoom(false) }} className='fixed top-[0px] left-0 right-0 h-screen w-[100%] z-[1000] bg-[#00000080] flex justify-center '>
            <div onClick={(e) => {
                e.stopPropagation()
                setIsShowBookRoom(true)
            }} className='w-[700px] top-[70px] bg-[#fff] max-h-[500px] absolute rounded-[8px]'>
                <div className='h-[45px] rounded text-center justify-between flex items-center px-[10px] border-b-[1px] border-[#ddd]'>
                    <span onClick={(e) => {
                        e.stopPropagation()
                        setIsShowBookRoom(false)
                    }}>
                        <FaArrowLeft size={20} />
                    </span>
                    <span className='w-[100%] text-[18px] font-bold'>Hợp đồng đặt phòng</span>
                </div>
                <div>
                    <h2 className='text-center text-[20px]'>Đặt Phòng</h2>
                    <p> - Họ tên người đặt: {username}</p>
                    <p> - Số điện thoại: {phone}</p>
                    <p> - Phòng: {item?.title}</p>
                    <p> - Địa chỉ: {item?.address}</p>
                    <p> - Giá thuê theo tháng: {monthlyRateString}</p>
                    <p> - Giá thuê theo ngày: {dailyRate.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                    <p> - Diện tích: {item?.attributes?.acreage}</p>
                </div>
            </div>
        </div>
    )
}

export default PopupBookRoom