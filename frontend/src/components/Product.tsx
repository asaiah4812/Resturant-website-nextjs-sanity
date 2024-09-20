import Props from "@/interFace/interface";
import { client } from "@/lib/sanity";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";

async function getProduct() {
  const query = `*[_type == "product"]
  {
    _id,
    "image": image.asset->url,
    name,
    price,
    rate,
    slug,
    createdAt
  }
  `;
  const data = await client.fetch(query);
  return data;
}
const ProductCard = async () => {
    const meals = await getProduct() as Props[]
  return (
    <> 
    {meals.map(meal => (
        <div key={meal._id} className="bg-white shadow-xl hover:scale-110 transition-all ease duration-150">
          <div className="relative w-full h-48 md:h-72">
            <Image src={meal.image} fill alt="" />
          </div>
          <Link href={`/product/${meal.slug.current}`} className="py-5 px-3 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-sm md:text-lg">{meal.name}</h2>
              <span className="flex items-center gap-1">
                <span>{meal.rate}.00</span> <CiStar />
              </span>
            </div>
            <p className="text-sm truncate">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque impedit rem aliquid. Dicta, nulla vero?
            </p>
            <span className="text-green-600 font-medium text-lg ">N{meal.price}</span>
          </Link>
        </div>

    ))}
        </>
      
        )}

export default ProductCard;
