import { combineReducers } from "@reduxjs/toolkit";
import { globalReducer } from "./slices/globalSlice";
import { productReducer } from "./slices/productSlice";
import { categoryReducer } from "./slices/categorySlice";

const rootReducer = combineReducers({
  global: globalReducer,
  product: productReducer,
  category: categoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
