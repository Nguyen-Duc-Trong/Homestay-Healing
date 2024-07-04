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
      <div className='h-[320px]'>
        {images.map((image: any, index: any) => (
          <Slider {...settings}>
            <img key={index} src={image} alt={`Image ${index}`} className='object-contain h-[320px]' />
          </Slider>
        ))}
      </div>
      {/* <div>1</div>
          <div>2</div>
          <div>3</div> */}
    </div>
  )
}

export default SlideDetail