import { Divider } from "antd";
import CourseCard from "./course-card";

const ProductList = ({ label, listData }: ProductListProps) => {
  return (
    <div className="my-4 2xl:pb-0 pb-3 ">
      <p className="font-bold  text-lg">{label}</p>
      <div className="grid grid-cols-2 xl:grid-cols-6 sm:grid-cols-3 gap-x-3 gap-y-12">
        {listData.map((product, index) => (
          <CourseCard key={product.id + index} product={product} />
        ))}
      </div>
      <Divider />
    </div>
  );
};

export default ProductList;
