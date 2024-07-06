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
    <React.Fragment>
      <Slider {...settings}>
          {images?.map((image: any, index: any) => {
            return(
              <div key={index} className='w-full bg-black h-[320px] flex justify-center'>
                  <img  src={image} alt={`Image ${index}`} className='object-contain max-h-full h-full m-auto' />
              </div>
            )
          })}
      </Slider>
    </React.Fragment>
  )
}

export default memo(SlideDetail)