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
            {images.map((image: any, index: any) => (
               <Slider {...settings}>
                 <img key={index} src={image} alt={`Image ${index}`} />
               </Slider>
            ))}
          </div>
          {/* <div>1</div>
          <div>2</div>
          <div>3</div> */}
      </Slider>
    </div>
  )
}

export default SlideDetail