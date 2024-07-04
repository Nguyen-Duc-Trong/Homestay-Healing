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
  return (
    <div className='w-full bg-red-500'>
      <Slider {...settings}>
        <div className='h-[320px]'>
          {images?.length > 0 && images?.map((image: any, index: any) => (
            <div key={index}>
              <img  src={image} alt={`Image ${index}`} className='object-contain h-[320px]' />
            </div>
          ))}
        </div>
      </Slider>
      {/* <div>1</div>
          <div>2</div>
          <div>3</div> */}
    </div>
  )
}

export default SlideDetail