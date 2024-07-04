import React from 'react'
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
        <div className='h-[320px]'>
          {images?.length > 0 && images?.map((image: any, index: any) => {
            return(
              <div key={index}>
                <img  src={image} alt={``} className='object-contain h-[320px] ' />
              </div>
            )
          })}
        </div>
      </Slider>
    </div>
  )
}

export default SlideDetail