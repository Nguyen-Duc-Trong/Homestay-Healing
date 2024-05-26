import React from 'react'

const Input = ({label, id, value ,setValue}) => {
  return (
    <div className='mb-[20px]'>
        <label htmlFor={id} className='text-[13px] font-normal'>{label}</label>
        <input
         type="text"
         id={id} 
         value={value} 
         onChange={(e) => setValue(prev => ({...prev, [type]: e.target.value}))} 
         className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full mt-[5px]' />
    </div>
  )
}

export default Input