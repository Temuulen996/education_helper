"use client";
import Imagee from "next/image";
import { Image } from "antd";
import { useState } from "react";

const ProductDetailImage = ({ product }: ProductDetailImageProps) => {
  const [selectedImg, setSelectedImg] = useState<string>(product?.imgUrls[0]);
  const handleImageSelect = (image: string) => {
    console.log("🚀 ~ handleImageSelect ~ image:", image);

    setSelectedImg(image);
  };
  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {product?.imgUrls?.map?.((image: string, index: number) => {
          return (
            <div
              key={image + index}
              onClick={() => {
                handleImageSelect(image);
              }}
              className={`relative w-[80%] aspect-square rounded hover:scale-90 duration-200  ${
                image === selectedImg
                  ? "border-2 border-blue-400 "
                  : " border-none"
              }`}
            >
              <Imagee src={image} fill className="object-contain" alt="" />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square flex justify-center">
        <Image
          alt=""
          src={selectedImg}
          height={500}
          width={500}
          className="h-full w-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
        />
      </div>
    </div>
  );
};

export default ProductDetailImage;
