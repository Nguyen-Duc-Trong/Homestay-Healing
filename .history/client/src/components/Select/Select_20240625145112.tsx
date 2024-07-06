import React from 'react'

const SelectOption = ({arrOption}) => {
  return (
    <div className="">
        <select>
            {
                // eslint-disable-next-line array-callback-return
                arrOption?.map((item:any)=>{
                    return (
                        <option value={item?.value}>{item?.value} </option>
                    )
                })
            }
        </select>
    </div>
  )
}

export default SelectOption