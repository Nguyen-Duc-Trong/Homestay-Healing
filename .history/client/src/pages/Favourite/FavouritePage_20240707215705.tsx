/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect, useState} from 'react'
import heat from "../../assets/imgs/ImgFavouritePage/Capture.png"
import {useNavigate, Link} from "react-router-dom"
import { FaChevronRight } from "react-icons/fa";
import {apiGetBookRoom, apiAddBookRoom, apiDeleteBookRoom} from "../../service/bookRoom"
import { useSelector, useDispatch } from 'react-redux';
import { apiGetPosts } from '../../service/post';
import {setTotalCartRoom} from '../../redux/slides/main1Slide'
import icons from '../../ultils/icons';
import Button from '../../components/Button/Button.tsx';


const {FaTrashCan} = icons

const Favourite = () => {
  const [listFavorite, setListFavorite] = useState<string[]>([])
  const {id} = useSelector((state:any) => state.auth)
  const [dataPost, setDataPost] = useState([])
  const [newFilteredData, setFilteredData] = useState([])
  const dispatch = useDispatch()

  const getDataBookRoom = async () => {
    try {
      const response = await apiGetBookRoom({userId: id})
      const arr = response?.data?.response?.bookRoomId
      const newArr = JSON.parse(arr)
      setListFavorite(newArr)
      // console.log(newArr);
    } catch (error) {
      console.log(error); 
    }
  }
  const getPost = async () =>{
    const response = await apiGetPosts()
    console.log(response?.data?.response);
    setDataPost(response?.data?.response)
  }
  useEffect(() => {
    getDataBookRoom()
    getPost()
    dispatch(setTotalCartRoom(newFilteredData))
  }, [])
console.log(newFilteredData);

  useEffect(() => {
    const filteredData = dataPost?.filter((item: any) => listFavorite?.includes(item?.id));
    setFilteredData(filteredData)
    dispatch(setTotalCartRoom(newFilteredData))
    // console.log(filteredData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listFavorite, dataPost]);
  
const handleDelete = async (idPost:any)=>{
  const response = apiDeleteBookRoom({userId :id, postId : idPost })
  getDataBookRoom()
  
}
  return (
    <div className='w-full'>
      <h1 className='text-[2rem] mb-[5px] leading-[1.2rem] font-[600]'>
        Phòng đã lưu
      </h1>
      <h2>Số phòng đã lưu: {newFilteredData ? newFilteredData?.length : 0} </h2>
      <div className="w-[100%] flex mb-[40px] shadow-lg">
        <div className={`w-full bg-white rounded-lg ${listFavorite.length > 0 ? "" : "h-[250px]"}`}>
          {listFavorite.length > 0 ?
            <div className="mx-[15px]">
              {
                newFilteredData?.map((item: any, index: any) => {
                  return (
                    <div key={index} className="flex my-[15px] border-b-[1px] border-gray-500 border-dashed pb-[15px] cursor-pointer">
                      <div className='w-[200px] h-[150px] mr-[10px]'>
                        <img src={JSON.parse(item?.images?.image)[1]} className='w-full h-full object-cover' />
                      </div>
                      <div className='w-[60%] mr-[10px]'>
                        <p className='text-[20px] text-[#ff0000] font-bold pr-[30px] mb-[10px]'>{item?.title}</p>
                        <p className='text-[16px]'>{item?.address}</p>
                        <p>
                          <span className='text-[16px] text-[#16c784] font-bold'>{item?.attributes?.price}</span>
                          <span>{item?.attributes?.acreage}</span>
                        </p>
                      </div>
                      <div className='w-[20%] pt-[30px]'>
                        <Button text={'Đặt Phòng'} onClick={undefined} className={'w-full text-center bg-[#febb02] hover:bg-yellow-600 text-[#000000] font-bold hover:no-underline mb-[10px]'} icon={undefined} bgColor={undefined} textColor={undefined} px={undefined} />
                        <Button text={undefined} onClick={() => handleDelete(item?.id)} className={'w-full text-center bg-red-500 hover:bg-red-700'} icon={<FaTrashCan />} bgColor={undefined} textColor={undefined} px={undefined} />
                      </div>
                    </div>
                  )
                })

              }
            </div>
            :
            <div className="">
              <img className='w-[100%] h-[100%] boder-none' src={heat} alt="Danh sách trống " />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Favourite;