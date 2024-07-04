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
    <Slider {...settings}>
    
      {/* <div>
        {images.map((image: any, index: any) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div> */}
      <div className='w-full flex'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
     
    </Slider> 
  )
}

export default SlideDetail