"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductProps {
  _id: number;
  title: string;
  description: string;
  price: number;
  previousPrice: number;
  image: string;
  isNew: boolean;
  category: string;
  brand: string;
}

interface Props {
  products: ProductProps[];
}

const Products = ({ products }: Props) => {
  return (
    <div className="flex items-center justify-center gap-12 flex-wrap mx-auto my-0 py-5 w-full">
      {products.map((item) => (
        <Link
          href={{ pathname: "/singleproduct", query: { id: item?._id } }}
          key={item._id}
          className=""
        >
          <div className="bg-gray-50 rounded-lg ">
            <div className="flex items-center  justify-between flex-wrap ">
              <Image
                src={item?.image}
                alt="Product Image"
                width={250}
                height={250}
                className="rounded-lg w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-3 mx-2 flex gap-2 flex-col">
              <h1 className="font-semibold capitalize bg-red-100 p-3 rounded-3xl w-64 text-xl">
                {item?.title}
              </h1>
              <p className="font-normal capitalize bg-yellow-200 p-3 rounded-3xl w-28 text-xl">
                ${item?.price}
              </p>
              <p className="font-normal capitalize bg-yellow-100 p-3 rounded-3xl w-28 text-xl line-through">
                ${item?.previousPrice}
              </p>
              <p className="font-medium capitalize bg-green-100 p-3 rounded-3xl w-28 text-xl text-center">
                {item?.brand}
              </p>
            </div>
            <div className="p-1 mx-1 flex items-center justify-around gap-4 my-1">
              <button className="font-normal capitalize bg-cyan-50 p-3 rounded-3xl  text-lg text-center">
                Add to cart
              </button>
              <button className="font-semibold capitalize bg-purple-100 p-3 rounded-3xl  text-lg text-center hover:bg-purple-200 hover:text-slate-900">
                More Info
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
