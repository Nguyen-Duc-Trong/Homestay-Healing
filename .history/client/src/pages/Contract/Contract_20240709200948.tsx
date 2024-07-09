import React, {useEffect, useState} from 'react'
import { apiGetContract } from '../../service/contract'
import { useSelector } from 'react-redux';
import Button from "../../components/Button/Button.tsx"
import PopupShowQR from './component/PopupShowQR.tsx';

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
            return { ...item, amountToPay: amount , accept : 1};
        } else {
            return item;
        }
    });
    setDataContract(newData);
};

const [isShowQR, setIsShowQR] = useState(false);

const handleShowQR = (item:any) => {
    console.log(item);
    // const newData =  dataContract.map((item: any) => {
    //     console.log(item.contractId + " " + item2.contractId);
        
    //     if (item.contractId === item2.contractId) {
    //         return { ...item, accept : 2};
    //     } else {
    //         return item;
    //     }
    // });
    // console.log(newData);
    
    //  setDataContract(newData);
    // setItem(item)
    // setIsShowQR(true);
  };

const changeButton = (item:any) => {
    if (item?.accept === 1) {
        return (
            <Button text={`Xác nhận`} onClick={handleShowQR} 
            className={'w-full rounded-t-[0px] text-center  bg-green-500 hover:no-underline'} 
            icon={undefined} bgColor={undefined} textColor={undefined} px={undefined} />
        )
    }else if (item?.accept === 2) {
        return(
            <button>Dặt lại</button>
        )
    }else{
        return(
            <Button text={'Thanh Lý Hợp Đồng'} onClick={() => handleSettlement(item)}
            className={'w-full rounded-t-[0px] text-[14px] font-bold text-center bg-[#febb02] hover:no-underline'}
            icon={undefined} bgColor={undefined} textColor={undefined} px={undefined} />
        )
    }
}
    
  return (
    <div className='bg-white w-full shadow-lg mt-[25px]'>
        <h2 className='text-center text-[20px] mb-[30px] pt-[30px]'>Đặt Phòng</h2>
        {dataContract?.length > 0 ?
            <div className="flex flex-wrap">
                {dataContract?.map((item:any, index:any) => {
                    return(
                        <div key={index} className="w-[47%] h-[400px] shadow-xl relative m-auto border-[1px] mt-0 mb-[15px] rounded-[8px]">
                            <div className=' p-[10px] h-[360px] overflow-y-auto'>
                                <p className='my-[5px]'> - Họ tên người đặt: <span className='font-bold'>{item?.username}</span> </p>
                                <p className='my-[5px]'> - Số điện thoại:  <span className='font-bold'>{item?.phone}</span> </p>
                                <p className='my-[5px]'> - Phòng: {item?.title}</p>
                                <p className='my-[5px]'> - {item?.address}</p>
                                <p className='my-[5px]'> - Giá thuê theo tháng: {item?.monthlyRateString}</p>
                                <p className='my-[5px]'> - Giá thuê theo ngày: {item?.dailyRate.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                <p className='my-[5px]'> - Diện tích: {item?.acreage}</p>
                                <p className='my-[5px]'> - Ngày thuê: {item?.startDate}</p>
                                <p className='my-[5px]'> - Ngày trả: {item?.endDate}</p>
                                <p className='my-[5px]'> - Ngày đặt: {item?.bookingDate}</p>
                                <p className='my-[5px]'> - Tiền cọc (50%): {item?.totalCost.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                <p className='my-[5px]'> - Tổng tiền cần thanh toán:  <span className='font-bold'>{item?.amountToPay ? item?.amountToPay.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : " "}</span></p>
                            </div>
                            <div className='absolute bottom-[0px] w-[100%]'>
                                {changeButton(item)}
                            </div>
                        </div>
                    )
                })}
            </div>
            :
            <div className="">Đéo có hợp đồng đâu thằng lồn</div>
        }
        {isShowQR && <PopupShowQR  setIsShowQR={setIsShowQR} />}
    </div>
  )
}

export default Contract


