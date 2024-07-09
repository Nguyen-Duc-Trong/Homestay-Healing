import React, {useEffect, useState} from 'react'
import { apiGetContract } from '../../service/contract'
import { useSelector } from 'react-redux';
import Button from "../../components/Button/Button.tsx"

const Contract = () => {
    const {id } = useSelector((state: any) => state.auth);
    const [dataContract, setDataContract] = useState([])
    const [amountToPay, setAmountToPay] = useState<{ [key: string]: number }>({});
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

const handleSettlement = (contract: any) => {
    const totalCost = contract.totalCost;
    const deposit = totalCost * 0.5; // Giả sử tiền cọc là 50%
    const amount = totalCost - deposit;
    const newData = dataContract.filter((item:any)=>{
        if(contract.contractId === item.contractId){
            return {...item, amountToPay :amount }
        }else{
            return item
        }
    })
    setDataContract(newData)
    // setAmountToPay((prev) => ({ ...prev, [contract.contractId]: amount }));
};
// console.log(dataContract);
    
  return (
    <div className='bg-white w-full shadow-lg mt-[25px]'>
        <h2 className='text-center text-[20px] mb-[30px] pt-[30px]'>Đặt Phòng</h2>
        {dataContract?.length > 0 ?
            <div className="flex flex-wrap">
                {dataContract?.map((item:any, index:any) => {
                    return(
                        <div key={index} className="w-[47%] m-auto border-[1px] mt-0 p-[10px] mb-[15px]">
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
                            {amountToPay[item.contractId] !== undefined && (
                                    <p> - Tổng tiền phải thanh toán (sau khi trừ tiền cọc): {amountToPay[item.contractId].toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                )}
                            <Button text={'Thanh Lý Hợp Đồng'} onClick={() => handleSettlement(item)} className={'w-full text-center bg-yellow-500 hover:no-underline'} icon={undefined} bgColor={undefined} textColor={undefined} px={undefined}/>
                            {/* <Button text={'Thanh Lý Hợp Đồng'} onClick={undefined} className={'w-full text-center bg-yellow-500 hover:no-underline'} icon={undefined} bgColor={undefined} textColor={undefined} px={undefined}/> */}

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


