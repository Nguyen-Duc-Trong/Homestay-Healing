import React from 'react'
import icons from '../../../ultils/icons'

const {MdCancel} = icons
const PopupShowQR = ({setIsShowQR}) => {
    const handleExit = () => {

    }
  return (
    <div  onClick={() => { setIsShowQR(false) }} className='fixed top-[0px] left-0 right-0 h-screen w-[100%] z-[1000] bg-[#00000080] flex justify-center'>
          <div onClick={(e) => {
                e.stopPropagation()
                setIsShowQR(true)
            }} className='w-[50%] m-auto'>
              <div className='h-[45px] rounded text-center justify-between flex items-center px-[10px] border-b-[1px] border-[#ddd] cursor-default'>
                  <span onClick={(e) => {
                      e.stopPropagation()
                      setIsShowQR(true)
                  }}>
                      <MdCancel size={20} />
                  </span>
                  <span className='w-[] text-[18px] font-bold'></span>
              </div>
              <div className='w-[90%] h-fit m-auto'>
                  <img className='h-[500px]' src="https://res.cloudinary.com/drorqx56b/image/upload/v1720523982/Homstay%20Healing/56d38169-7278-4a41-a540-d0bc6c33ff4e.png" alt="" />
              </div>
          </div>
    </div>
  )
}

export default PopupShowQR