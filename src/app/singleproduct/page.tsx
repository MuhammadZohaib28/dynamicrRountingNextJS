import { getSingleProduct } from "@/helpers";
import Image from "next/image";
import React from "react";
type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const SingleProduct = async ({ searchParams }: Props) => {
  const idString = searchParams?.id;
  const id = Number(idString);
  const product = await getSingleProduct(id);

  console.log(product);
  return (
    <div className="flex items-center justify-around gap-5 h-[calc(100vh-6rem)]">
      <div className=" flex-1">
        <Image
          src={product?.image}
          alt={product?.name}
          width={500}
          height={500}
        />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl font-bold">{product?.title}</h1>
        <p className="text-2xl font-semibold">{product?.price}</p>
        <p className="text-xl font-semibold">{product?.description}</p>
        <p className="text-xl font-semibold">
          {product?.isNew && "NEW SELLING"}
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
