import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux'
import ItemDetail from "../ItemDetail/ItemDetail";
import Button from "../Button/Button";

// const Pagination =() => {
//     const { posts } = useSelector((state: any) => state.post)
//     console.log(posts);
//     ////////////////////////////////////////////////
//     const [currentPage, setCurrentPage] = useState(1);
//     const [perpage, setPerpage] = useState(3);
//     const [start, setStart] = useState(0);
//     const [end, setEnd] = useState(perpage);
//     const record = posts.slice(start, end);
//     const total = Math.ceil(posts.length / perpage);
//     const number = [...Array(total + 1).keys()].slice(1);
//     useEffect(() => {
//         setStart((currentPage - 1) * perpage);
//         setEnd(currentPage * perpage);
//     }, [currentPage]);
//     const showPage = posts?.length > 0 && posts.map((item:any, index:any) => {
        
//         // if (index >= start && index < end) {
//         //     return (
//         //         <ItemDetail
//         //         key={item?.id} 
//         //         images={JSON.parse(item?.images?.image)} 
//         //         address={item?.address} 
//         //         attributes={item?.attributes}   
//         //         description={JSON.parse(item?.description)}
//         //         star={+item?.star}
//         //         title={item?.title}
//         //         users={item?.users}
//         //       />
//         //     );
//         // }
//     });
//     const handlePrev = () => {
//         if (currentPage <= 1) {
//             setCurrentPage(1);
//         } else {
//             setCurrentPage(currentPage - 1);
//         }
//     };
//     const handleNext = () => {
//         if (currentPage >= total) {
//             setCurrentPage(total);
//         } else {
//             setCurrentPage(currentPage + 1);
//         }
//     };
//     const hanldeChange = (currentPage) => {
//         setCurrentPage(currentPage);
//     };
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <div>
//         {/* <div className="box">{showPage}</div> */}
//         <div className=" box-btn">
//             {/* <Button text={'previos'} onClick={handlePrev} className={undefined} icon={undefined}/>
//             {number.map((it) => {
//                 return (
//                     <span key={it}>
//                         <Button text={it} onClick={() => hanldeChange(it)} className={undefined} icon={undefined}/>
//                     </span>
//                 );
//             })}
//             <Button text={'next'} onClick={handleNext} className={undefined} icon={undefined}/> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Pagination
 
const Pagination = (payload ) => {
    const {data } = payload 
    ////////////////////////////////////////////////
    const [currentPage, setCurrentPage] = useState(1);
    const [perpage, setPerpage] = useState(3);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(perpage);
    const record = data.slice(start, end);
    const total = Math.ceil(data.length / perpage);
    const number = [...Array(total + 1).keys()].slice(1);
    useEffect(() => {
      setStart((currentPage - 1) * perpage);
      setEnd(currentPage * perpage);
    }, [currentPage]);
    const showPage = data.map((it, index) => {
      if (index >= start && index < end) {
        return (
          <div key={index} className="box-item">
            <h2>{it.id}</h2>
            <p>{it.content}</p>
            <h5>{it.title}</h5>
          </div>
        );
      }
    });
    const handlePrev = () => {
      if (currentPage <= 1) {
        setCurrentPage(1);
      } else {
        setCurrentPage(currentPage - 1);
      }
    };
    const handleNext = () => {
      if (currentPage >= total) {
        setCurrentPage(total);
      } else {
        setCurrentPage(currentPage + 1);
      }
    };
    const hanldeChange = (currentPage) => {
      setCurrentPage(currentPage);
    };


  return (
   <div className="">
      <div>
        <div className="box">{showPage}</div>
        <div className=" box-btn">
          <button onClick={handlePrev}> previos </button>
          {number.map((it ) => {
            return (
              <button key={it } onClick={() => hanldeChange(it)}>
                {it}
              </button>
            );
          })}
          <button onClick={handleNext}>next</button>
        </div>
      </div>
   </div>
  )
}

export default Pagination