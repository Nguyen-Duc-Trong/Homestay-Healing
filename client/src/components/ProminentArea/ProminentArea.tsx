import React from 'react'
import ProminentAreaContainer from './ProminentAreaContainer/ProminentAreaContainer.tsx'
import { location } from '../../ultils/constant.js'
import {useDispatch, useSelector} from 'react-redux'
import {setFilterArea} from "../../redux/slides/searchSlide.js";

const ProminentArea = () => {
  const dispatch = useDispatch()
  const areas = useSelector((state:any) => state.search.area)
  const hihi = (id) => {
    dispatch(setFilterArea(id))
  }
  // console.log(areas);
  
  return (
    <React.Fragment>
        <h2 className='flex justify-center items-center mb-[15px] text-[17px] font-bold'>Khu vực nổi bật</h2>
        <div className='flex items-center justify-center gap-5 cursor-pointer'>
         {location.map((item:any , index:any) => {
          return(
            <div onClick={() => hihi(item.id)} key={index}>
              <ProminentAreaContainer   name={item.name} img={item.img}/>
            </div>
          )
         })}
        </div>
      </React.Fragment>
  )
}

export default ProminentArea