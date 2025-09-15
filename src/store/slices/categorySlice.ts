import { createSlice } from "@reduxjs/toolkit";
import DrinkLogo from "../../assets/icon/drink.png";
import CoffeeLogo from "../../assets/icon/coffee.png";
import CakeLogo from "../../assets/icon/cake.png";
import BreadLogo from "../../assets/icon/bread.png";
const initialState: CategorySliceType = {
  categories: [
    {
      nameEn: "Bread",
      nameMn: "Талх",
      id: "1",
      icon: BreadLogo,
    },
    {
      nameEn: "Cake",
      nameMn: "Бялуу",
      id: "2",
      icon: CakeLogo,
    },
    {
      nameEn: "Drink",
      nameMn: "Уух зүйл",
      id: "3",
      icon: DrinkLogo,
    },
    {
      nameEn: "Coffee",
      nameMn: "Кофе",
      id: "4",
      icon: CoffeeLogo,
    },
    {
      nameEn: "Coffee",
      nameMn: "Кофе",
      id: "5",
      icon: CoffeeLogo,
    },
    {
      nameEn: "Coffee",
      nameMn: "Кофе",
      id: "6",
      icon: CoffeeLogo,
    },
    {
      nameEn: "Coffee",
      nameMn: "Кофе",
      id: "7",
      icon: CoffeeLogo,
    },
  ],
  isLoading: false,
  error: null,
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export const {} = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
