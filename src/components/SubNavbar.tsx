import Link from 'next/link'
import React from 'react'

const SubNavbar = () => {
  return (
    <div className='w-full h-[67px] border border-b-[#D1D1D1] flex justify-start items-center lg:px-24'>
        <Link href={'/'} className='text-[#DC4A2D] border-b-[1px] border-b-[#DC4A2D] h-[67px] flex justify-center items-center mx-5'>Job preview</Link>
        <Link href={'/'} className='mx-5'>Applicants</Link>
        <Link href={'/'} className='mx-5'>Match</Link>
        <Link href={'/'} className='mx-5'>Messages</Link>
    </div>
  )
}

export default SubNavbar