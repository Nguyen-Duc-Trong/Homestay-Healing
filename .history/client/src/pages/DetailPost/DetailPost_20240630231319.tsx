import React from 'react'
import { useParams } from 'react-router-dom'

const DetailPost = () => {
  const params = useParams()
  console.log(params);
  
  return (
    <div>DetailPost</div>
  )
}

export default DetailPost