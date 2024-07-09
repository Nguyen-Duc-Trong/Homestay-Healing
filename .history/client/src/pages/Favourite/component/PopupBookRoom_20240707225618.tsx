import React from 'react'
import icons from '../../../ultils/icons'


const {FaArrowLeft} = icons
const PopupBookRoom = ({setIsShowBookRoom, item, handleSubmit }) => {
    const newDataBookRom = {...item}
    return (
        <div onClick={() => { setIsShowBookRoom(false) }} className='fixed top-[0px] left-0 right-0 h-screen w-[100%] z-[1000] bg-[#00000080] flex justify-center '>
            <div onClick={(e) => {
                e.stopPropagation()
                setIsShowBookRoom(true)
            }} className='w-[700px] top-[70px] bg-[#fff] max-h-[500px] absolute rounded-[8px]'>
                <div className='h-[45px] rounded text-center justify-between flex items-center px-[10px] border-b-[1px] border-[#ddd]'>
                    <span onClick={(e) => {
                        e.stopPropagation()
                        setIsShowBookRoom(false)
                    }}>
                        <FaArrowLeft size={20} />
                    </span>
                    <span className='w-[100%] text-[18px] font-bold'>Hợp đồng đặt phòng</span>
                </div>
                <div>
                    {/* {newDataBookRom?.map((item: any, index: any) => {
                        return (
                            <div key={index}>
                                <p>{item?.title}</p>
                            </div>
                        )
                    })} */}
                </div>
            </div>
        </div>
    )
}

export default PopupBookRoom