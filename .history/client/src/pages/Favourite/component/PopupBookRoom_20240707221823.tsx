import React from 'react'

const PopupBookRoom = ({setIsShowBookRoom, content, name, handleSubmit, queries}) => {
  return (
    <div onClick={() => {setIsShowBookRoom(false)}} className='fixed top-[0px] left-0 right-0 h-screen w-[100%] z-[1000] bg-[#00000080] flex justify-center '>
        <div className='w-[700px] top-[70px] bg-[#fff] max-h-[500px] absolute rounded-[8px]'>
            PopupBookRoom
        </div>
    </div>
  )
}

export default PopupBookRoom