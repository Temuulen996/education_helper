import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type filterProductType = {
  categories?: string[];
  name?: string;
  price?: number[];
};

const products: ProductType[] = [
  {
    id: "1",

    imgUrls: [
      "https://images.unsplash.com/photo-1458712197423-adcdc2a426ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "bread",
    category: "2",
    description: "bread",
    discountPercent: 10,
    price: 15000,
    review: 0,
    rating: 50,
  },
  {
    id: "2",

    imgUrls: [
      "https://images.unsplash.com/photo-1458712197423-adcdc2a426ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "bread",
    category: "bread",
    description:
      "asdsadsdasdadssdasdasdaasdsadsdasdadssdasdasda asdsadsdasdadssdasdasdaa sdsadsdasdadssdas dasdaasdsadsd  asdadssdasdas daasdsadsdasda dssda sdasdaasd sadsdasdads sdasdasdaasdsa dsdasdadssdasdasda",
    discountPercent: 0,
    price: 15000,
    review: 0,
    rating: 50,
  },
  {
    id: "3",

    imgUrls: [
      "https://images.unsplash.com/photo-1458712197423-adcdc2a426ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "bread",
    category: "1",
    description: "bread",
    discountPercent: 0,
    price: 15000,
    review: 0,
    rating: 50,
  },
  {
    id: "4",

    imgUrls: [
      "https://images.unsplash.com/photo-1458712197423-adcdc2a426ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "bread",
    category: "3",
    description: "bread",
    discountPercent: 0,
    price: 15000,
    review: 0,
    rating: 50,
  },
  {
    id: "5",
    imgUrls: [
      "https://images.unsplash.com/photo-1458712197423-adcdc2a426ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "bread",
    category: "2",
    description: "bread",
    discountPercent: 0,
    price: 15000,
    review: 0,
    rating: 50,
  },
  {
    id: "6",

    imgUrls: [
      "https://images.unsplash.com/photo-1458712197423-adcdc2a426ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "bread",
    category: "3",
    description: "bread",
    discountPercent: 0,
    price: 15000,
    review: 0,
    rating: 50,
  },
  {
    id: "7",

    imgUrls: [
      "https://images.unsplash.com/photo-1458712197423-adcdc2a426ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "bread",
    category: "1",
    description:
      "asdsadsdasdadssdasdasdaasdsadsdasdadssdasdasda asdsadsdasdadssdasdasdaa sdsadsdasdadssdas dasdaasdsadsd  asdadssdasdas daasdsadsdasda dssda sdasdaasd sadsdasdads sdasdasdaasdsa dsdasdadssdasdasda",
    discountPercent: 0,
    price: 15000,
    review: 0,
    rating: 50,
  },
  {
    id: "8",

    imgUrls: [
      "https://images.unsplash.com/photo-1458712197423-adcdc2a426ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "bread",
    category: "1",
    description:
      "asdsadsdasdadssdasdasdaasdsadsdasdadssdasdasda asdsadsdasdadssdasdasdaa sdsadsdasdadssdas dasdaasdsadsd  asdadssdasdas daasdsadsdasda dssda sdasdaasd sadsdasdads sdasdasdaasdsa dsdasdadssdasdasda",
    discountPercent: 0,
    price: 15000,
    review: 0,
    rating: 50,
  },
  {
    id: "9",

    imgUrls: [
      "https://images.unsplash.com/photo-1458712197423-adcdc2a426ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "bread",
    category: "4",
    description:
      "asdsadsdasdadssdasdasdaasdsadsdasdadssdasdasda asdsadsdasdadssdasdasdaa sdsadsdasdadssdas dasdaasdsadsd  asdadssdasdas daasdsadsdasda dssda sdasdaasd sadsdasdads sdasdasdaasdsa dsdasdadssdasdasda",
    discountPercent: 0,
    price: 15000,
    review: 0,
    rating: 50,
  },
  {
    id: "10",

    imgUrls: [
      "https://images.unsplash.com/photo-1458712197423-adcdc2a426ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    name: "bread",
    category: "4",
    description:
      "asdsadsdasdadssdasdasdaasdsadsdasdadssdasdasda asdsadsdasdadssdasdasdaa sdsadsdasdadssdas dasdaasdsadsd  asdadssdasdas daasdsadsdasda dssda sdasdaasd sadsdasdads sdasdasdaasdsa dsdasdadssdasdasda",
    discountPercent: 0,
    price: 15000,
    review: 0,
    rating: 50,
  },
];
const initialState: ProductSliceType = {
  filteredProducts: [...products],
  products: [...products],
  isLoading: false,
  error: null,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProduct: (
      state: ProductSliceType,
      action: PayloadAction<filterProductType>
    ) => {
      console.log(action.payload.categories);
      state.filteredProducts =
        action.payload.categories?.length === 0
          ? state.products
          : state.products.filter((product) => {
              if (action.payload.categories) {
                return action.payload.categories.includes(product.category);
              }
              // let isFiltered = true;
              // if (action.payload.categories) {
              //   isFiltered = action.payload.categories.includes(product.category);
              // }
              // if (action.payload.name) {
              //   isFiltered = isFiltered && product.name.includes(action.payload.name);
              // }
              // if (action.payload.price) {
              //   isFiltered =
              //     isFiltered &&
              //     product.price >= action.payload.price[0] &&
              //     product.price <= action.payload.price[1];
              // }
              // return isFiltered;
            });
    },
  },
});

export const { filterProduct } = productSlice.actions;

export const productReducer = productSlice.reducer;
