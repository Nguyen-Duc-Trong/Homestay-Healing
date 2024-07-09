import React, {useEffect, useState} from 'react'
import { apiGetContract } from '../../service/contract'
import { useSelector } from 'react-redux';
import Button from "../../components/Button/Button.tsx"

const Contract = () => {
interface ContractType {
    contractId: string;
    username: string;
    phone: string;
    title: string;
    address: string;
    monthlyRateString: string;
    dailyRate: number;
    acreage: number;
    startDate: string;
    endDate: string;
    bookingDate: string;
    totalCost: number;
    amountToPay?: number;
}
    const {id } = useSelector((state: any) => state.auth);
    const [dataContract, setDataContract] = useState<ContractType[]>([]);
    useEffect(() => {
      const getApiContract = async () => {
        const response = await apiGetContract({userId:id})
        if (response?.data?.response) {
            setDataContract(JSON.parse(response?.data?.response?.contractId) )
        }
    }
    getApiContract()
}, [])

const handleSettlement = (contract: any) => {
    const totalCost = contract.totalCost;
    const deposit = totalCost * 0.5; // Giả sử tiền cọc là 50%
    const amount = totalCost - deposit;
    const newData = dataContract.map((item: any) => {
        if (contract.contractId === item.contractId) {
            return { ...item, amountToPay: amount , accept : true};
        } else {
            return item;
        }
    });
    setDataContract(newData);
};
console.log(dataContract);

// console.log(dataContract);
    
  return (
    <div className='bg-white w-full shadow-lg mt-[25px]'>
        <h2 className='text-center text-[20px] mb-[30px] pt-[30px]'>Đặt Phòng</h2>
        {dataContract?.length > 0 ?
            <div className="flex flex-wrap">
                {dataContract?.map((item:any, index:any) => {
                    return(
                        <div key={index} className="w-[47%] h-[400px] m-auto border-[1px] mt-0 p-[10px] mb-[15px]">
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
                            <p> - Tổng tiền cần thanh toán: {item.amountToPay ? item.amountToPay.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : " "}</p>
                            <div>
                                {
                                    item?.accept ?
                                        <Button text={`Xác nhận`} onClick={undefined} className={'w-full text-center bg-yellow-500 hover:no-underline'} icon={undefined} bgColor={undefined} textColor={undefined} px={undefined} />
                                        :
                                        <Button text={'Thanh Lý Hợp Đồng'} onClick={() => handleSettlement(item)} className={'w-full text-center bg-yellow-500 hover:no-underline'} icon={undefined} bgColor={undefined} textColor={undefined} px={undefined} />
                                }
                            </div>
                            
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


