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
        <div className='p-[20px] bg-[#fff]'>
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
              {address}
            </div>
            <div className='flex mb-[30px]'>
              <p className='flex items-center mr-[35px]'>
                <GiPriceTag size={16} color='#bebebe' className='mr-[8px]'/>
                <span className='text-[21px] text-[#16c784] font-bold'>{attributes.price}</span>    
              </p>
              <p className='flex items-center mr-[35px]'>
                <SlCrop color='#bebebe' className='mr-[8px]'/>
                <span className='text-[14px]'>{attributes.acreage}</span> 
              </p>
              <p className='flex items-center mr-[35px]'>
                <CiClock2 color='#bebebe' className='mr-[8px]'/> 
                <span className='text-[14px]'>{attributes.published}</span>  
              </p>
              <p className='flex items-center'>{Overviews?.code}</p>
            </div>
            <h2 className='text-[21px] text-[#333333] font-bold mb-[15px]'>Thông tin mô tả</h2>
            <p className='text-[15px] mb-[15px]'>{description}</p>
            <p className='text-[15px] mb-[15px]'>Giá phòng: {attributes?.price}</p>
            <p className='text-[15px] mb-[15px]'>Phòng rộng: {attributes?.acreage}</p>
            <p className='text-[15px] mb-[15px]'>{address}</p>
            <p className='text-[15px] mb-[15px]'>Liên hệ thuê phòng: {users.phone} - {users.name} </p>
            <h3 className='text-[18px] text-[#333333] font-bold mb-[15px]'>Đặc điểm tin đăng</h3>
            <div className='flex'>
              <div className='w-[30%]'>
                <p>Mã tin: </p>
                <p>Khu vực: </p>
                <p>Loại tin rao: </p>
                <p>Đối tượng thuê:</p>
                <p>Gói tin:</p>
                <p>Ngày đăng:</p>
                <p>Ngày hết hạn:</p>
                <p>Phone:</p>
                <p>Zalo:</p>
              </div>
              <div className='w-[70%]'>
                <p>{Overviews?.code}</p>
                <p>{Overviews?.area}</p>
                <p>{Overviews?.type}</p>
                <p>{Overviews?.target}</p>
                <p>{Overviews?.bonus}</p>
                <p>{Overviews?.created}</p>
                <p>{Overviews?.expire}</p>
                <p>{users?.phone}</p>
                <p>{users?.zalo}</p>
              </div>
            </div>
           
          
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