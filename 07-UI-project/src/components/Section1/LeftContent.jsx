import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
        <div className='p-6'>
            <h3 className='mb-7 text-6xl font-bold'>Prospective <br /><span >customer</span> <br />segmentation</h3>
            <p className='text-lg font-medium text-gray-600'>Depending on customer satisfaction and access to banking products, poential target audience can be divided into three groups</p>
        </div>
        <div>
            <ArrowUpRight size={80} strokeWidth={1.9} />
        </div>
    </div>
  )
}

export default LeftContent