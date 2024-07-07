import React, {useEffect} from 'react'
import { apiGetContract } from '../../service/contract'
import { useSelector } from 'react-redux';

const Contract = () => {
    const {id } = useSelector((state: any) => state.auth);
    useEffect(() => {
      const getApiContract = async () => {
        const response = await apiGetContract({userId:id})
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