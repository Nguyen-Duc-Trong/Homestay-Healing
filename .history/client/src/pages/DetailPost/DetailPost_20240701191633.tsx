import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
import icons from '../../ultils/icons'
import SlideDetail from './component/SlideDetail.tsx';

const { IoStarSharp} = icons

const DetailPost = () => {
  const { postId, title } = useParams();
  const location = useLocation();
  const { images, address, attributes, star, description, users } = location.state
  const handleStar = (star: any) => {
    let stars: JSX.Element[] = [];
    for (let i = 1; i <= +star; i++) {
        stars.push(<IoStarSharp className='star-item' size={17} />);
    }
    return stars;
}
  return (
    <div className='flex w-full'>
      <div className='w-[70%]'>
        <div className='mb-[10px]'>
          <SlideDetail images={images} />
        </div>
        <h3 className='mb-[10px] text-[14px] text-[#e13427] pr-[20px] font-bold'>
          <span className='inline-block text-[#ffd454] mr-[3px]'>
            {handleStar(+star).length > 0 && handleStar(+star).map((starr, number) => {
              return (
                <span key={number}>
                  {starr}
                </span>
              )
            })}
          </span>
          {title}
        </h3>
        <div className='mt-[10px]'>
          <p>Address: {address}</p>
          <p>Price: {attributes.price}</p>
          <p>Acreage: {attributes.acreage}</p>
          <p>Published: {attributes.published}</p>
          <p>Description: {description}</p>
          <p>User: {users.name}</p>
          <p>Phone: {users.phone}</p>
        </div>
      </div>
      <div className='w-[30%]'>
          Right
      </div>

    </div>
  )
}

export default DetailPost