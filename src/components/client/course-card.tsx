import Image from "next/image";
import BText from "../general/text";
import { Button } from "antd";

import { OrderedListOutlined, TruckOutlined } from "@ant-design/icons";
import { useRouter } from "@/src/i18n/navigation";

interface CourseCardProps {
  product: ProductType;
}
const CourseCard = ({ product }: CourseCardProps) => {
  const router = useRouter();

  return (
    <div className="">
      <div className="h-2/3">
        <Image
          className="w-full h-full"
          src={product.imgUrls[0]}
          width={300}
          height={300}
          objectFit="contain"
          alt="product"
        />
      </div>
      <div className="h-1/3 flex flex-col justify-between ">
        <div>
          <div className="flex flex-row gap-4 items-center">
            <div className="text-green-500 font-bold text-sm md:text-md"></div>
          </div>
          <div className=" h-5 w-full text-wrap truncate overflow-hidden mb-2">
            {product.description}
          </div>
        </div>
        <div className="flex gap-2 w-full">
          <Button
            icon={<TruckOutlined />}
            className="w-1/2 text-balance"
            type="primary"
          >
            <BText en="Add" mn="Захиалах" />
          </Button>
          <Button
            icon={<OrderedListOutlined />}
            type="primary"
            className="w-1/2 text-balance"
            onClick={() => {
              router.push(`/product/${product.id}`);
            }}
          >
            <BText en="Description" mn="Дэлгэрэнгүй" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
