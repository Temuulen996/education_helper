"use client";

import BText from "../../components/general/text";
import BCarousel from "../../components/client/carousel";
import ProductList from "../../components/client/product-list";

import { useTranslations } from "next-intl";

import { useAppSelector } from "@/src/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { products } = useAppSelector((state) => state.product);
  const t = useTranslations("HomePage");
  const router = useRouter();
  useEffect(() => {
    router.replace("/sign-in");
  }, []);
  return <div></div>;
};

export default HomePage;
