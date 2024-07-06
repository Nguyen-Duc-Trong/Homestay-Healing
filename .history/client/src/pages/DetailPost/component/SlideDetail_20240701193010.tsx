import React, {memo} from 'react'
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const SlideDetail = ({images}:any) => {
  console.log(images);
  
  return (
    <div className='w-full bg-red-500'>
      <Slider {...settings}>
          {images?.map((image: any, index: any) => {
            return(
              <div key={index} className='h-[320px] flex justify-center  h-[320px]'>
                  <img  src={image} alt={`Image ${index}`} className='object-contain' />
              </div>
            )
          })}
      </Slider>
    </div>
  )
}

export default memo(SlideDetail)