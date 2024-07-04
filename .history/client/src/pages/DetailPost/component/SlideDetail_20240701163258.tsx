import React from 'react'
import Slider from "react-slick";

const SlideDetail = ({images}:any) => {
  return (
      <div>
        {images.map((image:any, index:any) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div> 
  )
}

export default SlideDetail