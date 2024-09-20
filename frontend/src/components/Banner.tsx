import Image from "next/image";
import Link from "next/link";
import React from "react";
import cover from '/public/delicious.png'
import { client } from "@/lib/sanity";
import BannerProp from "@/interFace/BannerInterface";


async function getBanner(){
  const query = `*[_type == 'banner'][0]
  {
    "image": image.asset->url,
    buttonText,
    product,
    desc,
    smallText,
    midText,
    largeText1,
    discount,
    saleTime
  }
  `;
  const data = await client.fetch(query)
  return data
}

const Banner: React.FC = async () => {
  const banner = await getBanner() as BannerProp
  return (
    <div className="bg-slate-200 rounded-md p-4 flex flex-wrap lg:flex-nowrap items-center">
      <div className="flex flex-col items-baseline gap-2">
        <p className="text-xl font-sans">Recipes</p>
        <h3 className="font-bold text-lg">Home Deals</h3>
        <h1 className="font-extrabold text-4xl md:text-6xl lg:text-9xl text-transparent border text-stroke hover:text-black transition-colors duration-150 ease-out outline-black indent-0">
          DELICIOUS MEAL
        </h1>
        <Link
          href={"/"}
          className="py-2 px-4 rounded-md bg-gradient-to-tl hover:bg-gradient-to-tr from-rose-600 via-orange-600 to-purple-500 text-white"
        >
          Make Order
        </Link>
      </div>
      <div className="w-[500px] self-end">
        <div className="relative md:w-[90%] w-[95%]  h-[200px] md:h-[300px]">
          {
            banner.image ? (
              <Image src={banner.image} className="object-cover" objectFit="cover" fill alt={banner.product}/>
              
            ) : (
              
              <Image src={cover} fill alt='cover'/>
            )
          }
        </div>
        <div className="text-right">
        <h2 className="font-bold text-lg">Description</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          aut exercitationem pariatur mollitia praesentium voluptatem quos
          aspernatur quibusdam ea assumenda?
        </p>

        </div>
      </div>
    </div>
  );
};

export default Banner;
