"use client";

import BText from "../../components/general/text";
import BCarousel from "../../components/client/carousel";
import ProductList from "../../components/client/product-list";

import { useTranslations } from "next-intl";

import { useAppSelector } from "@/src/store";

const HomePage = () => {
  const { products } = useAppSelector((state) => state.product);
  const t = useTranslations("HomePage");

  return (
    <div>
      <BCarousel />
      <ProductList
        label={<BText en="For you" mn="Зөвхөн танд" />}
        listData={products}
      />

      {/* <CardSlider label="asd" /> */}
    </div>
  );
};

export default HomePage;
