import React from 'react'

const PopupShowQR = ({setIsShowQR}) => {
    const handleExit = () => {

    }
  return (
    <div  onClick={() => { setIsShowQR(false) }}>
        <div>
            <img src="https://res.cloudinary.com/drorqx56b/image/upload/v1720523982/Homstay%20Healing/56d38169-7278-4a41-a540-d0bc6c33ff4e.png" alt="" />
        </div>
    </div>
  )
}

export default PopupShowQR