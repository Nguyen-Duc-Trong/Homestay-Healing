import React, { memo, useEffect, useState } from 'react'
import  Select  from '../../../components/Select/Select.tsx'
import { apiGetPublicProvinces, apiGetPublicDistrict } from '../../../service/app.js'
import { log } from 'console'

const Address = ({ setPayload }) => {

    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')
    const [reset, setReset] = useState(false)
    console.log(" tỉnh" +province);
    console.log("huyện " +district);
    
    
    useEffect(() => {
        const fetchPublicProvince = async () => {
            const response = await apiGetPublicProvinces()
            if (response.status === 200) {
                setProvinces(response?.data.results)
            }
        }
        fetchPublicProvince()
    }, [])
    useEffect(() => {
        setDistrict('')
        const fetchPublicDistrict = async () => {
            const response = await apiGetPublicDistrict(province)
            if (response.status === 200) {
                setDistricts(response.data?.results)
            }
        }
        province && fetchPublicDistrict()
        !province ? setReset(true) : setReset(false)
        !province && setDistricts([])
    }, [province])    
    console.log(districts);
    
    return (
        <div>
            <h2 className='font-semibold text-xl py-4'>Địa chỉ cho thuê</h2>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                    <Select type='province' value={province} setValue={setProvince} options={provinces} label='Tỉnh/Thành phố' reset={undefined} name={undefined} />
                    <Select reset={reset} type='district' value={district} setValue={setDistrict} options={districts} label='Quận/Huyện' name={undefined} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor='exactly-address'>Địa chỉ chính xác</label>
                    <input type="text"  readOnly className='border-[1px] outline-none bg-gray-200' 
                    value={`
                            ${district ? `${districts?.find((item:any) => item.district_id === district)},` :''} 
                            ${province ? provinces?.find((item:any) => item.province_id === province) : ''}
                          `}
                    />
                </div>
                {/* <InputReadOnly
                    label=''
                    value={`${district ? `${districts?.find(item => item.district_id === district)?.district_name},` : ''} ${province ? provinces?.find(item => item.province_id === province)?.province_name : ''}`}
                /> */}

            </div>
        </div>
    )
}

export default memo(Address)