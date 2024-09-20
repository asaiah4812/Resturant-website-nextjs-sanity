import Props from '@/interFace/interface';
import { client } from '@/lib/sanity';
import React from 'react'

async function getData(slug : string){
  const query = `*[_type == "product" && slug.current == "${slug}" ]{
    title,
    content,
    _createdAt,
    "mainImage": mainImage.asset->url
  }[0]`;
  const data = await client.fetch(query);
  return data;
} 

const ProductSinglePage = async ({params}: {params: {slug:string}}) => {
  const product = await getData(params.slug) as Props
  return (
    <div>
      <h1>{product.name}</h1>
      {product.price}
    </div>
  );
}

export default ProductSinglePage