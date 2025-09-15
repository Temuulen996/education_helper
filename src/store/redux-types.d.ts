interface GlobalSliceType {
  isProd: boolean;
  token?: string;
  lang: string;
  cartCount: number;
  theme: string;
  loginModal: boolean;
  userInfo?: UserType | null;
  userToken?: string | null;
  visibleCartDrawer: boolean;
}
interface ProductSliceType {
  filteredProducts?: ProductType[];
  products: ProductType[];
  isLoading: boolean;
  error: Error | null;
}
interface CategorySliceType {
  isLoading: boolean;
  categories: CategoryType[];
  error: Error | null;
}
