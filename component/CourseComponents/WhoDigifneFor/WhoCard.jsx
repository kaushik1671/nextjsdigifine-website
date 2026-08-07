import React from 'react'

function WhoCard({imagesrc = "/images/Icons/DGHI-01.svg" , title ="title" , paragraph="paragraphs"}) {
  return (
    <div className='flex flex-row space-x-4'>
        <div>
        <span><img src={imagesrc} className='w-9'/></span>
        </div>
        <div className='w-56 space-y-3'>
            <h3 className='text-white'>{title}</h3>
            <p className='text-white'>{paragraph}</p>
        </div>
    </div>
  )
}

export default WhoCard