import React, {useEffect, useState} from 'react'
import { apiGetContract } from '../../service/contract'
import { useSelector } from 'react-redux';

const Contract = () => {
    const {id } = useSelector((state: any) => state.auth);
    const [dataContract, setDataContract] = useState()
    useEffect(() => {
      const getApiContract = async () => {
        const response = await apiGetContract({userId:id})
        setDataContract(response?.data?.response?.contractId)
        console.log(response);
        
      }
      getApiContract()
    }, [])
    
  return (
    <div>

    </div>
  )
}

export default Contract