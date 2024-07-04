import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
const DetailPost = () => {
  // const params = useParams()
  const { postId, title } = useParams();
  const location = useLocation();
  const { images, address, attributes, star, description, users } = location.state;
  // console.log(params);
  
  return (
   <div>
      <h1>{title}</h1>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
      <div>
        <p>Address: {address}</p>
        <p>Price: {attributes.price}</p>
        <p>Acreage: {attributes.acreage}</p>
        <p>Published: {attributes.published}</p>
        <p>Description: {description}</p>
        <p>User: {users.name}</p>
        <p>Phone: {users.phone}</p>
      </div>
    </div>
  )
}

export default DetailPost