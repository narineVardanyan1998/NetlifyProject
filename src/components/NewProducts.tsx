import React from 'react'
import ProductCard from './ProductCard';
import Image from 'next/image';
const productsData=[
  {
    img:"/jacket-1.jpg",
    title:"Jacket",
    desc:" New Yarn Fleece FullZip Jacket",
    rating:1,
    price:"45.00",
  },
  {
    img:"/skirt-1.jpg",
    title:"Skirt",
    desc:"Black Floral Wrap Midi Skirt",
    rating:5,
    price:"55.00",
  },
  {
    img:"/Party-wear-1.jpg",
    title:"Party Wear",
    desc:"Women's Party Wear Shoes",
    rating:3,
    price:"25.00"
  },
  {
    img:"/shirt-1.jpg",
    title:"Shirt",
    desc:" Pure Garment Dyed Cottom Shirt",
    rating:4,
    price:"45.00",
  },
  {
    img:"/shoes.webp",
    title:"Sports",
    desc:" Trekking & Running Shoes",
    rating:3,
    price:"58.00",
  },
  {
    img:"/smart.webp",
    title:"Watches-1",
    desc:"Smart Watches Vital Plus",
    rating:5,
    price:"100.00",
  },
  {
    img:"/watch-2.webp",
    title:"Watches",
    desc:"Pocket Watch Leather",
    rating:4,
    price:"45.00",
  },
  {
    img:"/Slippers.webp",
    title:"Summer Slippers",
    desc:"Women's Summer Slippers",
    rating:2,
    price:"15.00",
  },
  {
    img:"/dress.jpg",
    title:"Dress",
    desc:"Summer dress",
    rating:4,
    price:"28.00",
  },
  {
    img:"/glasses.jpg",
    title:"Glasses",
    desc:"Glasses",
    rating:3,
    price:"40.00",
  },
  {
    img:"/short.jpg",
    title:"Short",
    desc:"Men's summer short",
    rating:3,
    price:"29.00",
  },
  {
    img:"/bag.webp",
    title:"Bag",
    desc:"Women's summer Bag",
    rating:2,
    price:"36.00",
  },
];
const NewProducts = () => {
  return (
    <div >
      <div className='container pt-16'>
        <h2 className='font-medium text-2xl pb-4'>New Products</h2>
        <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
        lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>

          {productsData.map((item,index)=>(
            <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            rating={item.rating}
            price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts
