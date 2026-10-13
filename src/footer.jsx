import React from 'react'

const footer = () => {
    const date = new Date();
    const formatedDate = date.getFullYear();
  return (
    < footer className='position:absolute  bottom:0 text-center w-full h-10' >
      <p className='text-[#ccc]'>© Copyright:{formatedDate}</p>
    </footer>
  )
}

export default footer
