import React, {useEffect, useState} from 'react'
import { apiGetContract } from '../../service/contract'
import { useSelector } from 'react-redux';

const Contract = () => {
    const {id } = useSelector((state: any) => state.auth);
    const [dataContract, setDataContract] = useState([])
    useEffect(() => {
      const getApiContract = async () => {
        const response = await apiGetContract({userId:id})
        // console.log(response);
        if (response?.data?.response) {
            setDataContract(JSON.parse(response?.data?.response?.contractId) )
        }
    }
    getApiContract()
}, [])
// console.log(dataContract);
    
  return (
    <div className='bg-white w-full shadow-lg mt-[25px]'>
        <h2 className='text-center text-[20px] mb-[30px] pt-[30px]'>Đặt Phòng</h2>
        {dataContract?.length > 0 ?
            <div className="flex flex-wrap">
                {dataContract?.map((item:any, index:any) => {
                    return(
                        <div key={index} className="w-[47%] m-auto border-[1px] mt-0 p-[10px]">
                            <p> - Họ tên người đặt: {item?.username}</p>
                            <p> - Số điện thoại: {item?.phone}</p>
                            <p> - Phòng: {item?.title}</p>
                            <p> - Địa chỉ: {item?.address}</p>
                            <p> - Giá thuê theo tháng: {item?.monthlyRateString}</p>
                            <p> - Giá thuê theo ngày: {item?.dailyRate.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                            <p> - Diện tích: {item?.acreage}</p>
                            <p> - Ngày thuê: {item?.startDate}</p>
                            <p> - Ngày trả: {item?.endDate}</p>
                            <p> - Ngày đặt: {item?.bookingDate}</p>
                            <p> - Tiền cọc (50%): {item?.totalCost.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                        </div>
                    )
                })}
            </div>
            :
            <div className="">Đéo có hợp đồng đâu thằng lồn</div>
        }
    </div>
  )
}

export default Contract