import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
   <div className="header-navbar w-[100%] bg-blue-500">
        <ul className="header-list-nav flex justify-around w-[1120px] m-auto ">
            <Link to="/">
                <li className=''>Trang chủ</li>
            </Link>
            <Link to="/favourite">
                <li>Favourite</li>
            </Link>
            <Link to="/NotFoundPage">
                <li>NotFoundPage</li>
            </Link>
            <Link to="/search">
                <li>SearchPage</li>
            </Link>
        </ul>
   </div>
)
}

export default Navbar