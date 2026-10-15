import React from 'react'

const Card = (props) => {
  return (
    <div className="flex flex-col bg-white max-w-sm rounded overflow-hidden shadow-lg p-5 " >
        <div className=''>
            <h2 className='font-semibold text-[1.1em] mb-[6px] text-[#222]'>{props.title}</h2>
      <p className='text-[1.1em] mb-[10px] text-[#444] whitespace-pre-wrap break-words'>{props.content}</p>
     </div>
    </div>
  )
}

export default Card;
