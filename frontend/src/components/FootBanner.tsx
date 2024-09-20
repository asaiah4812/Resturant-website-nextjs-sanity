import BannerProp from '@/interFace/BannerInterface'
import { client } from '@/lib/sanity'
import Link from 'next/link';
import React from 'react'

async function getBanner(){
    const query = `*[_type == 'banner'][0]
    {
    _id,
    _createdAt,
    buttonText,
    product,
    desc,
    smallText,
    midText,
    largeText1,
    largeText2,
    discount,
    saleTime
    }
        `;
    const data = await client.fetch(query)
    return data
}

const FootBanner = async () => {
    const footBanner = await getBanner() as BannerProp
  return (
    <div className="min-h-[300px] mt-7 bg-red-600 p-3 rounded-md flex items-center justify-between flex-wrap lg:flex-nowrap">
      <div>
        <span className="text-white font-sans text-lg">
          {footBanner.discount}
        </span>
        <h1 className="text-7xl text-white font-extrabold">
          {footBanner.largeText1} <br /> {footBanner.largeText2}
        </h1>
        <span className="text-white">{footBanner.saleTime}</span>
      </div>
      <div className='flex flex-col items-end'>
        <span className='text-right text-white'>{footBanner.smallText}</span>
        <h2 className='font-extrabold text-4xl text-white text-right'>{footBanner.midText}</h2>
        <p className='text-white truncate text-xs w-72 md:text-sm'>{footBanner.desc}</p>
        <Link href={`/product/${footBanner.product}`}>
        <button type='button' className='text-white text-sm font-bold'>{footBanner.buttonText}</button>
        </Link>
      </div>
    </div>
  );
}

export default FootBanner