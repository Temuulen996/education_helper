import ProductCard from "./course-card";

interface ShopPageListProps {
  products: ProductType[];
}
const ShopPageList = ({ products }: ShopPageListProps) => {
  return (
    <div className=" w-full  grid grid-cols-1 md:grid-cols-4 gap-3 gap-y-6">
      {products?.map((product, index) => (
        <ProductCard key={product.id + index} product={product} />
      ))}
    </div>
  );
};

export default ShopPageList;
