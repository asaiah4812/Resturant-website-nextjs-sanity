import Link from 'next/link';
import React from 'react'
import { FiShoppingCart } from "react-icons/fi";

const Navbar:React.FC = () => {
  return (
    <div className="px-2 md:px-[10%] lg:px-[15%] py-6 flex items-center justify-between">
      <Link href={'/'} className="font-bold text-2xl">DRM SHOPPING</Link>
      <div className='p-1.5 relative '>
        <button type='button'>
        <FiShoppingCart className='text-2xl md:text-3xl' />
        <div className='absolute h-4 w-4 md:h-6 md:w-6 flex items-center justify-center -translate-y-1.5 translate-x-1 text-white bg-rose-700 rounded-full top-0 right-0'>
            2
        </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar