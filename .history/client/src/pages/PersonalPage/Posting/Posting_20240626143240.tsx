import React from 'react'
import Address from './Adress.tsx'

const Posting = () => {
    const listOptionMap = [
        
    ]

  return (
    <div className="px-[20px] overflow-auto">
        <div className="flex">
          <div className="w2/3">
            <Address /> 
          </div>
          <div className="w-1/3"></div>
        </div>

    </div>
  )
}

export default Posting