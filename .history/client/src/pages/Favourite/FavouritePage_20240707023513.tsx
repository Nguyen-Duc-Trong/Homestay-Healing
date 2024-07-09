import React,{useEffect, useState} from 'react'
import heat from "../../assets/imgs/ImgFavouritePage/Capture.png"
import {Link} from "react-router-dom"
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
  }, [])

  useEffect(() => {
    const filteredData = dataPost?.filter((item: any) => listFavorite?.includes(item?.id));
    setFilteredData(filteredData)
    dispatch(setTotalCartRoom(newFilteredData?.length))
    // console.log(filteredData);
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
      <div className="w-[100%] flex">
        <div className={`w-full bg-white rounded-lg ${listFavorite.length > 0 ? "" : "h-[250px]"}  mr-[10px] mt-[15px] p-[10px]`}>
            {listFavorite.length > 0 ?
            <div className="">
              {/* <h3 className='text-[1.5rem] mb-[5px] leading-[1.2rem] font-[600]'>Danh sách tin đăng</h3> */}
              {
                newFilteredData?.map((item:any ,index:any)=>{
                return (
                  <div key={index} className="flex">
                      <div className='w-[200px] h-[150px] mr-[10px]'>
                        <img src={JSON.parse(item?.images?.image)[1]} className='w-full h-full object-cover' />
                      </div>
                      <div className='w-[60%]'>
                        <p>{item?.title}</p>
                        <p>{item?.address}</p>
                        <p>
                          <span>{item?.attributes?.price}</span>
                          <span>{item?.attributes?.acreage}</span>
                        </p>
                      </div>
                      <div className='w-[20%]'>
                        <Button text={'Đặt Phòng'} onClick={undefined} className={'w-full text-center bg-[#febb02] text-[#000000] font-bold hover:no-underline'} icon={undefined} bgColor={undefined} textColor={undefined} px={undefined}/>
                        <Button text={undefined} onClick={()=> handleDelete(item?.id)} className={'w-full text-center bg-red-500'} icon={<FaTrashCan/>} bgColor={undefined} textColor={undefined} px={undefined}/>
                      </div>
                  </div>
                )
                })

              }

            </div>
            :
            <div className="">
              <img className='w-[100%] h-[100%] boder-none'  src={heat} alt="Danh sách trống " />

            </div>
            }
        </div>
        {/* <div className="w-[30%] rounded-lg  min-h-[600px] ml-[10px] mt-[15px] ">
        <div className=" bg-white w-[100%] border-[2px] h-[200px]  border-[1px] p-[10px] mb-[10px]">
          <h3 className='text-[1.5rem] mb-[5px] leading-[1.2rem] font-[600]'>Danh mục cho thuê</h3>
            <ul>
              <Link to="/">
                <li className='flex text-[1.1rem] font-[500] py-[5px] hover:text-red-500'  > 
                <FaChevronRight className='mt-[6px]' /> Cho thuê Homestays độc lập</li>
              </Link>
              <Link to="/">
                <li className='flex text-[1.1rem] font-[500] py-[5px] hover:text-red-500'  > 
                <FaChevronRight className='mt-[6px]' /> Cho thuê Homestay nhóm</li>
              </Link>
              <Link to="/">
                <li className='flex text-[1.1rem] font-[500] py-[5px] hover:text-red-500'  > 
                <FaChevronRight className='mt-[6px]' /> Cho thuê Homestay nghỉ dưỡng</li>
              </Link>
            </ul>
        </div>
        <div className=" bg-white w-[100%] border-[2px] p-[10px] rounded-lg  ">
          <h3 className='text-[1.5rem] mb-[5px] leading-[1.2rem] font-[600]'>Bài viết mới</h3>
          <ul className='p-[10px]'>
            <Link to="/">

            </Link>
            <Link to="/">
              <li className='flex text-[1.1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Quy trình đăng ký tạm trú cho người thuê phòng trọ mới nhất
              </li>
            </Link>
            <Link to="/">
              <li className='flex text-[1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Thủ tục thuê homestay chính xác dành cho người nước ngoài
              </li>
            </Link>
            <Link to="/">
              <li className='flex text-[1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Cho thuê homestay có cần đăng ký giấy phép kinh doanh hay không?
              </li>
            </Link>
            <Link to="/">
              <li className='flex text-[1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Kinh doanh cho homestay trọ cần đóng những loại thuế nào?
              </li>
            </Link>
            <Link to="/">
              <li className='flex text-[1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Sinh viên Hà Nội nên ở homestay hay ký túc xá? Cần lưu ý điều gì khi homestay?
              </li>
            </Link>
            <Link to="/">
              <li className='flex text-[1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Chia sẻ "mẹo" đăng tin thuê homestay phòng trọ hiệu quả tại website
              </li>
            </Link>
          </ul>
        </div>
        <div className="bg-white w-[100%] border-[2px] p-[10px] rounded-lg">
        <h3 className='text-[1.5rem] mb-[5px] leading-[1.2rem] font-[600]'>Có thể bạn quan tâm</h3>
          <ul>
            <Link to="/">
              <li className='flex text-[1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Mẫu hợp đồng cho thuê phòng trọ
              </li>
            </Link>
            <Link to="/">
              <li className='flex text-[1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Cẩn thận các kiểu lừa đảo khi thuê phòng trọ
              </li>
            </Link>
            <Link to="/">
              <li className='flex text-[1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Kinh nghiệm thuê phòng trọ Sinh Viên
              </li>
            </Link>
          </ul>
        </div>
        </div> */}
      </div>
    </div>
  )
}

export default Favourite;