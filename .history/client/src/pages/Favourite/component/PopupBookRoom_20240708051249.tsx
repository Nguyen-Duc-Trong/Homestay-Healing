import React, { useState, memo } from 'react'
import icons from '../../../ultils/icons'
import { useSelector } from 'react-redux';
import Button from '../../../components/Button/Button.tsx';
import { apiDeleteBookRoom } from '../../../service/bookRoom';
import { apiAddContract } from '../../../service/contract.js';

const { FaArrowLeft } = icons;

const PopupBookRoom = ({ setIsShowBookRoom, item, handleSubmit }) => {
    const { username, phone, id } = useSelector((state: any) => state.auth);

    // State để lưu trữ ngày bắt đầu và ngày kết thúc
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
  
    // Chuyển đổi giá thuê từ chuỗi sang số
    const monthlyRateString = item?.attributes?.price || "";
    let monthlyRate = 0;

    // Kiểm tra và xử lý chuỗi giá thuê
    if (monthlyRateString.includes("triệu")) {
        const numericPart = monthlyRateString.replace(/[^\d.]/g, ""); // Loại bỏ tất cả các ký tự không phải số
        monthlyRate = Number(numericPart) * 1000000; // Chuyển đổi thành số và nhân với 1 triệu
    }

    // Tính giá thuê theo ngày và làm tròn
    const dailyRate = Math.round(monthlyRate / 30);
    const [payload , setPayload] = useState({
        username: username,
        phone: phone,
        userId: id,
        title: item?.title ,
        address: item?.address,
        acreage:item?.attributes?.acreage,
        monthlyRateString:monthlyRateString,
        dailyRate:dailyRate,
        startDate:'',
        endDate:'',
        // totalCost: totalCost
    })
    // Tính tổng số tiền thuê dựa trên số ngày thuê
    const calculateTotalCost = () => {
        if (!payload?.startDate || !payload?.endDate) {
            return 0;
        }
        const start = new Date(payload?.startDate);
        const end = new Date(payload?.endDate);
        // Kiểm tra nếu ngày kết thúc nhỏ hơn hoặc bằng ngày bắt đầu
        if (end <= start) {
            return 0;
        }
        const timeDifference = end.getTime() - start.getTime();
        const daysDifference = timeDifference / (1000 * 3600 * 24);
        // Nếu số ngày thuê là 30 hoặc 31 thì tính giá thuê theo tháng
        if (daysDifference === 30 || daysDifference === 31) {
            return monthlyRate  * 50/100;
        }
        return Math.round(daysDifference * dailyRate * 50/100);
    }
    const totalCost = calculateTotalCost();
    const handleAccept = async (e:any) => {
        e.stopPropagation()
        if (!payload.startDate || !payload.endDate) {
            alert('Vui lòng nhập đầy đủ thông tin ngày bắt đầu và ngày kết thúc.');
            return;
        }
        const bookingDate = new Date().toISOString().split('T')[0]; 
        setIsShowBookRoom(false)
        await apiAddContract( {userId: id, dataContract: {...payload, totalCost: totalCost, bookingDate : bookingDate}})
        // const response = await apiDeleteBookRoom({userId :id, postId : item?.id })
    }

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
                <div className='px-[20px] pt-[20px]'>
                    <p className='my-[5px]'> - Họ tên người đặt: <span className='font-bold'>{username}</span></p>
                    <p className='my-[5px]'> - Số điện thoại: <span className='font-bold'>{phone}</span></p>
                    <p className='my-[5px]'> - Phòng: {item?.title}</p>
                    <p className='my-[5px]'> - {item?.address}</p>
                    <p className='my-[5px]'> - Giá thuê theo tháng: {monthlyRateString}</p>
                    <p className='my-[5px]'> - Giá thuê theo ngày: {dailyRate.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                    <p className='my-[5px]'> - Diện tích: {item?.attributes?.acreage}</p>
                    <div className='my-4'>
                        <label htmlFor="start-date" className='block mb-2'>Ngày bắt đầu:</label>
                        <input
                            type="date"
                            id="start-date"
                            value={payload?.startDate}
                            onChange={(e) => setPayload({...payload, startDate:e.target.value} )}
                            className='border p-2 rounded w-full'
                        />
                    </div>
                    <div className='my-4'>
                        <label htmlFor="end-date" className='block mb-2'>Ngày kết thúc:</label>
                        <input
                            type="date"
                            id="end-date"
                            value={payload?.endDate}
                            onChange={(e) => setPayload({...payload, endDate:e.target.value})}
                            className='border p-2 rounded w-full'
                        />
                    </div>
                    <p className='mb-[10px]'> - Tổng tiền cọc (50%): {totalCost.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                </div>
                <Button text={'XÁC NHẬN'} 
                    onClick={(e:any) => handleAccept(e)} 
                    className={'bg-[#00fff6] w-full rounded-t-none hover:no-underline hover:bg-red-500 text-[18px] font-bold'} 
                    icon={undefined} 
                    bgColor={undefined} 
                    textColor={undefined} 
                    px={undefined} 
                />
            </div>
        </div>
    )
}

export default memo(PopupBookRoom)
