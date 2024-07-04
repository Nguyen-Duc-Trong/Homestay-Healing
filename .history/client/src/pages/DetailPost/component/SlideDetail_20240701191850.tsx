import React, {memo} from 'react'
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 0.5,
  slidesToScroll: 1
};

const SlideDetail = ({images}:any) => {
  console.log(images);
  
  return (
    <div className='w-full bg-red-500'>
      <Slider {...settings}>
        <div className='h-[320px]'>
          {images?.map((image: any, index: any) => {
            return(
              <div key={index}>
                <Slider {...settings}>
                  <img  src={image} alt={`Image ${index}`} className='object-contain h-[320px]' />
                </Slider>
                {/* <img  src={image} alt={`Image ${index}`} className='object-contain h-[320px]' /> */}
              </div>
            )
          })}
        </div>
      </Slider>
      {/* <div>1</div>
          <div>2</div>
          <div>3</div> */}
    </div>
  )
}

export default memo(SlideDetail)