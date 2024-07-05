import React ,{useState ,useEffect} from 'react'
import Address from './Adress.tsx'
import Select from '../../../components/Select/Select.tsx'
import {data} from "../../HomePage/components/data.js"
import { useSelector } from 'react-redux'
import { FaCamera } from "react-icons/fa";
import { apiUploadImages ,apiNewPost} from '../../../service/post.js'
import { MdDelete } from "react-icons/md";
import { ProgressBar } from 'react-loader-spinner'
import { apiGetPrices, apiGetProvinces } from '../../../service/price.js'
import { getMinMaxPrice } from '../../../ultils/Common/getCode.js'
const Posting = () => {
  type Item = {id: number; url: string;};
  type Payload = {
    star: number;
    title: string;
    userId: number;
    categoryCode: string;
    ContactInfo: string;
    areaNumber: number;
    priceNumber: number;
    images: string[];
    address: string;
    priceCode: string;
    areCode: string;
    description: string;
    target: string;
    province: string;
  };
  type Provinces = {
    code : string,
    value : string
  }
  const {phone,username ,id} = useSelector((state:any)=> state.auth)
  const [imagesPreview, setImagesPreview] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false)
  const [payload , setPayload] = useState<Payload>({
      star : 5,
      title : "",
      userId : id,
      categoryCode : "",
      ContactInfo : username,
      areaNumber : 0,
      priceNumber : 0,
      images : [],
      address : "",
      priceCode : "",
      areCode : "",
      description : "",
      target : "",
      province : "",
  })
  const [minMaxArr, setMinMaxArr] = useState([])
  const [dataProvinces, setDataProvinces] = useState<Provinces[]>([])

  console.log(payload);
  const targets = [
    { code: 'Nam', value: 'Nam' },
    { code: 'Nữ', value: 'Nữ' },
]
  const handleFile = async (e:any) => {
    e.stopPropagation()
    setIsLoading(true)
    const uploadAssetsName = process.env.REACT_APP_UPLOAD_ASSETS_NAME;
    if (!uploadAssetsName) {
      console.error("REACT_APP_UPLOAD_ASSETS_NAME is not defined");
      return;
    }
    let images :any  = []
    let files = e.target.files;    
    let formData = new FormData()
    for (let i of files) {
      formData.append('file', i)
      formData.append('upload_preset',uploadAssetsName)
      let response = await apiUploadImages(formData)
      if (response.status === 200) {
        images = [...images, response.data?.secure_url]
      }
    }    
    setIsLoading(false)
    setImagesPreview( [...imagesPreview,...images])
    setPayload({...payload , images : [...payload.images, ...images] })
  }
  const handleDeleteImage = (image:any) => {
    setImagesPreview((prev:any) => prev?.filter((item:any) => item !== image))
    setPayload((prev:any) => ({
        ...prev,
        images: prev.images?.filter((item:any) => item !== image)
    }))
}
const handleSubmit = async () => {
  const response = await apiNewPost(payload)
  console.log(response);
}
const getData = async ()=>{
  const apiPrices = await apiGetPrices()
  const apiProvinces = await apiGetProvinces()
  const dataPrices = apiPrices?.data?.response
  const dataProvinces = apiProvinces?.data?.response
  setDataProvinces(dataProvinces)
  setMinMaxArr(dataPrices)
}
useEffect(() => {
    switch (payload?.address) {
    case "  Thành phố Hồ Chí Minh ":
      setPayload({...payload , areCode : dataProvinces[0]?.code})
      break;
      case "  Thành phố Hà Nội ":
      setPayload({...payload , areCode : dataProvinces[3]?.code})   
      break;
      case  "  Tỉnh Bình Dương ":
      setPayload({...payload , areCode : dataProvinces[2]?.code})
      break;
      case "  Tỉnh Bình Định ":
      setPayload({...payload , areCode : dataProvinces[1]?.code})  
      break;
    default:
      break;
  }
}, [payload.address])

useEffect(() => {
getData()
}, [])

const setPriceCode = (price:any, minMaxArr:any) => {
  const value = +price.target.value;
  const numPrice = value / 1000000; 

  const priceRange = minMaxArr.find(item => numPrice >= item.min && numPrice <= item.max);

  if (priceRange) {
    setPayload({
      ...payload,
      priceNumber: value,
      priceCode: priceRange.code
    });
  } else {
    setPayload({
      ...payload,
      priceNumber: value,
      priceCode: "" 
    });
  }
};
const setAreaCode = ()=>{

}
  return (
    <div className="px-[20px] h-[100vh] ">
        <div className="flex pb-[200px]">
          <div className="w-2/3">
            <Address payload={payload} setPayload={setPayload} /> 
            <div className="w-full">
              <h1  className='font-semibold text-xl py-4'>Thông tin mô tả </h1>
              <Select options={data} name="categoryCode" setValue={setPayload}  label="Loai chuyên mục" />
              <br />
              <div className="">
                <label className='font-medium' htmlFor='title'>Tiêu đề </label> <br />
                <input
                 value={payload.title} onChange={(e:any)=> setPayload({...payload, title: e.target.value })}
                  className='border-[2px] w-[100%]' type="text" id='title' />
              </div>
              <div className="">
                <label className='font-medium' htmlFor='desc'>Mô tả </label> <br />
                <textarea
                value={payload.description} onChange={(e:any)=> setPayload({...payload, description: e.target.value })} 
                className='border-[2px] w-[100%]' rows={5} id='desc' />
              </div> <br />
              <div className="">
                <label className='font-medium' htmlFor='contact'>Thông tin liên hệ</label> <br />
                <input value={username} readOnly  className='px-[10px] border-[1px] outline-none bg-gray-200 w-[100%]'  type="text" id='contact' />
                <br /> <br />
                <label className='font-medium' htmlFor='sdt'>Số điện thoại</label> <br />
                <input value={phone} readOnly  className='px-[10px] border-[1px] outline-none bg-gray-200 w-[100%]'  type="text" id='sdt' />
              </div> <br />
              <div className="flex">
                <div className="w-[50%]">
                  <label className='font-medium' htmlFor='cost'>Giá cho thuê</label> <br />
                  <input
                  value={payload.priceNumber} onChange={(e:any)=> setPriceCode(e,minMaxArr)} 
                  className='border-[2px] w-[60%]' type="number" id='cost' />
                  <button className='px-[5px] bg-gray-200'>Đồng/tháng</button>
                <small className='opacity-40'>Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000</small>
                </div>
                <br />
                <div className="w-[30%]">
                  <label className='font-medium' htmlFor='acreage'>Diện tích</label> <br />
                  <input
                  value={payload.areaNumber} onChange={(e:any)=> setPayload({...payload, areaNumber: e.target.value })} 
                  className='border-[2px] w-[60%]' type="number" id='acreage' /><button className='px-[5px] bg-gray-200'>m<sup>2</sup></button>
                </div>
                <div className="w-[20%]">
                    <label className='font-medium' htmlFor='star'>Đánh giá</label> <br />
                    <input
                    value={payload.star} onChange={(e:any)=> setPayload({...payload, star: e.target.value > 5 || e.target.value <0 ? 1 :  e.target.value })} 
                    className='border-[2px] w-[60%]' type="number" id='star' /><button className='px-[5px] bg-gray-200'>Sao</button>
                </div>
              </div> <br />
              <Select value={payload.target} setValue={setPayload} name='target' options={targets} label='Đối tượng cho thuê' />
              <br /><br /><br />
              <h1 className='font-medium' >Hình ảnh </h1>
              <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small><br />
              <div className="w-full">
              <label className='font-medium w-[100%] 
              items-center justify-center bg-gray-100
              flex border-2 h-[150px]' htmlFor='img'>
                {isLoading? <div className="">
                  <ProgressBar 
                          visible={true}
                          height="80"
                          width="80"
                          ariaLabel="progress-bar-loading"
                          wrapperStyle={{color : "green"}}
                          wrapperClass=""
                          />
                </div>
                   :
                    <div className="text-center">
                  <FaCamera className=' text-[50px] text-blue-500' />
                  Thêm ảnh
                </div>
              }
              </label> <br />
              <input onChange={ handleFile} hidden type="file" id="img" multiple />
              </div>
              <div className="">
                  <h3 className="">preview</h3>
                  <div className='flex gap-4 items-center'>
                    {imagesPreview?.map((item:any) => {
                        return (
                            <div key={item} className='relative w-[100px] h-[100px] '>
                                <img src={item} alt="preview" className=' w-[100px ] h-[100px]  object-cover rounded-md' />
                                <span
                                    title='Xóa'
                                    onClick={() => handleDeleteImage(item)}
                                    className='absolute top-0 right-0 p-2 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-full'
                                >
                                  <MdDelete />
                                </span>
                            </div>
                        )
                    })}
                  </div>
              </div>
              <div className="flex mt-[50px] items-center justify-center ">
                <button onClick={handleSubmit}  className='w-[100%] px-[40px] x-[20px] text-[30px] bg-green-600 text-white' >Tạo mới</button>
              </div>
            </div>
          </div>
          </div>
          <div className="w-1/3">
               map
          </div>

    
    </div>
  )
}

export default Posting