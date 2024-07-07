import React, {useEffect, useState} from 'react'
import { apiGetContract } from '../../service/contract'
import { useSelector } from 'react-redux';

const Contract = () => {
    const {id } = useSelector((state: any) => state.auth);
    const [dataContract, setDataContract] = useState([])
    useEffect(() => {
      const getApiContract = async () => {
        const response = await apiGetContract({userId:id})
        setDataContract(JSON.parse(response?.data?.response?.contractId) )
        
    }
    getApiContract()
}, [])
console.log(dataContract);
    
  return (
    <div>
        {dataContract?.length > 0 ?
            <div className="">

            </div>
            :
            <div className="">Đéo có hợp đồng đâu thằng lồn</div>
        }
    </div>
  )
}

export default Contract