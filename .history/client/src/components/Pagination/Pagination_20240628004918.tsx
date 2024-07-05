import React, { useEffect, useState, useRef, memo } from "react";
import ItemDetail from '../../pages/HomePage/components/HomeItem/ItemDetail.tsx';
import Button from "../Button/Button.tsx";
import { useSelector} from "react-redux"
import icons from '../../ultils/icons.js'

const {FaArrowLeft, FaArrowRight} = icons
const Pagination = ({ data = []}) => {
  const {area,minPrice,maxPrice,minAcreage,maxAcreage} = useSelector((state:any) => state.search)
  console.log(area,minPrice,maxPrice,minAcreage,maxAcreage);
  const activeItem = useSelector((state: any) => state.main1.activeItem); 
  const [newData , setNewData] = useState([])
  const [isLoading, setIsLoading] = useState(true); 
  const check = (arr:any)=>{
    // console.log(arr);
      arr?.filter((item:any)=>{
        const price = getNumberFromString( item?.attributes?.price)
        
        // console.log(price);
        if( price !== null && minPrice < price && price < maxPrice ){
          // console.log(item);
          return item
        }
      })
  }
  const checkSearch = (arr:any)=>{
    switch (area) {
        case "all":
          check(arr)
          // const newListData = check(arr)
          // console.log(check(arr));
          
          return arr;
        case "hcm":
          const listdata = arr.filter((item:any)=>{
            if (item?.address.includes("Hồ Chí Minh")) {
              return item
            }
          })

          return  listdata;
        case "hn" : 
        const listdata2 = arr.filter((item:any)=>{
          if (item?.address.includes("Hà Nội")) {
            return item
          }
        })
        return listdata2
        case "dn" : 
        const listdata3 = arr.filter((item:any)=>{
          if (item?.address.includes("Đà Nẵng")) {
            return item
          }
        })
        return listdata3
          default:
            break;
        }
  }
    useEffect(() => {
        const loadData = async () => {
          setIsLoading(true);
          let filteredData = [];
          switch (activeItem) {
            case 1:
              filteredData =  checkSearch(data) 
              break;
            case 2:
              const listCTPT = data.filter((item:any) =>{
                if ( item.categoryCode === 'ChoThuePhongtro') {
                  return item
                }
              }
            );
            filteredData = checkSearch(listCTPT)
                break;
              case 3:
                const listNCT = data.filter((item:any) => {
                  if(item.categoryCode === 'NhaChoThue') {
                    return item
                  }
                })
                filteredData = checkSearch(listNCT)
                break;
              case 4:
                const listCTCH = data.filter((item:any) => {
                  if(item.categoryCode === 'ChoThueCanHo') {
                    return item
                  }
                })
                filteredData = checkSearch(listCTCH)
                break;
            default:
              filteredData = data;
              break;
          }
          setNewData(filteredData);
          setIsLoading(false);
        };
    loadData();
    }, [activeItem, data, area]);
    // console.log(newData);
    
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(perPage);
  const headerPostingLish = useRef()
  // Ensure data is defined before calling slice
  const record = newData.slice(start, end);
  const total = Math.ceil(newData.length / perPage);
  const number = [...Array(total + 1).keys()].slice(1);

  useEffect(() => {
    setStart((currentPage - 1) * perPage);
    setEnd(currentPage * perPage);
  }, [currentPage, perPage]);

  // console.log(newData);
  const getNumberFromString = (string) => {
    const match = string.match(/\d+(\.\d+)?/);
    return match ? +match[0] : null;
  };
  const showPage = newData?.length > 0 && newData.map((item:any, index:any) => {
    // console.log( getNumberFromString( item?.attributes?.price));
    
    if (index >= start && index < end) {
      return (
          <div key={index}>
            <ItemDetail
              key={item?.id} 
              images={JSON.parse(item?.images?.image)} 
              address={item?.address} 
              attributes={item?.attributes}   
              description={JSON.parse(item?.description)}
              star={+item?.star}
              title={item?.title}
              users={item?.users}
              id={item?.id}
            />
        </div>
      );
    }
    return null;
  });

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, total));
  };

  const handleChange = (page:any) => {
    setCurrentPage(page);
  };

  return (
    <div className="">
      {isLoading ? (
        <div>Loading...</div> // Hiển thị thông báo loading
      ) : (
        <>
          <div className="box">{showPage}</div>
          <div className="box-btn flex">
            <Button text={''} onClick={handlePrev} className={"m-[5px] p-[5px] border-[2px]"} icon={<FaArrowLeft />} bgColor={undefined} textColor={undefined} px={undefined} />
            {number.map((it, index) => (
              <Button key={index} text={it} onClick={() => handleChange(it)} className={`m-[5px] p-[5px] border-[2px] text-center ${currentPage === it ? "bg-red-700 text-white" : ""}`} icon={undefined} bgColor={undefined} textColor={undefined} px={undefined} />
            ))}
            <Button text={''} onClick={handleNext} className={'m-[5px] p-[5px] border-[2px] text-center'} icon={<FaArrowRight />} bgColor={undefined} textColor={undefined} px={undefined} />
          </div>
        </>
      )}
    </div>
  );
};

export default memo(Pagination);
