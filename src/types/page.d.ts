interface ProductPageProps {
  product: ProductType;
}
interface AdminPageProps {
  params: Promise<{ pageId: string; locale: string }>;
}
