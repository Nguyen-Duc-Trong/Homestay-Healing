import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
import icons from '../../ultils/icons'
import SlideDetail from './component/SlideDetail.tsx';

const { IoStarSharp, FaLocationDot, GiPriceTag, SlCrop, CiClock2} = icons

const DetailPost = () => {
  const { postId, title } = useParams();
  const location = useLocation();
  const { images, address, attributes, star, description, users, Overviews } = location.state
  const handleStar = (star: any) => {
    let stars: JSX.Element[] = [];
    for (let i = 1; i <= +star; i++) {
        stars.push(<IoStarSharp className='star-item' size={26} />);
    }
    return stars;
}
  return (
    <div className='flex w-full'>
      <div className='w-[70%]'>
        <div className='mb-[20px]'>
          <SlideDetail images={images} />
        </div>
        <div className='p-[20px]'>
          <h3 className='mb-[10px] text-[24px] text-[#e13427] pr-[20px] text-center font-bold'>
            <span className='inline-block text-[#ffd454] mr-[3px]'>
              {handleStar(+star).length > 0 && handleStar(+star).map((starr, number) => {
                return (
                  <span key={number} className='inline-flex justify-center'>
                    {starr}
                  </span>
                )
              })}
            </span>
            {title}
          </h3>
          <div className='mt-[10px]'>
            <div className='flex items-center text-[14px] mb-[10px]'>
              <FaLocationDot color='#1081e0' className='mr-[8px]'/> 
              Địa chỉ: {address}
            </div>
            <div className='flex'>
              <p className='flex items-center text-[21px] text-[#16c784]'><GiPriceTag size={16} color='#bebebe' className='mr-[8px]'/>{attributes.price}</p>
              <p className='flex items-center'><SlCrop/> {attributes.acreage}</p>
              <p className='flex items-center'><CiClock2/> {attributes.published}</p>
              <p className='flex items-center'>{Overviews?.code}</p>
            </div>
            <p>Description: {description}</p>
            <p>User: {users.name}</p>
            <p>Phone: {users.phone}</p>
            <p>Khu vực: {Overviews?.area}</p>
            <p>Mã tin: {Overviews?.code}</p>
            <p>Loại tin rao: {Overviews?.type}</p>
            <p>Đối tượng thuê: {Overviews?.target}</p>
            <p>Gói tin: {Overviews?.bonus}</p>
            <p>Ngày đăng: {Overviews?.created}</p>
            <p>Ngày hết hạn: {Overviews?.expire}</p>
            <p>Phone: {users?.phone}</p>
            <p>Zalo: {users?.zalo}</p>
          </div>
        </div> 
      </div>
      <div className='w-[30%]'>
          Right
      </div>

    </div>
  )
}

export default DetailPost