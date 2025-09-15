import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "../thunks/globalThunks";

const initialState: GlobalSliceType = {
  lang: "mn",
  theme: "light",
  isProd: false,
  token: "",
  cartCount: 0,
  loginModal: true,
  userInfo: null,
  userToken: null,
  visibleCartDrawer: false,
};
const globalSlice = createSlice({
  initialState: initialState,
  name: "global",
  reducers: {
    changeIsProd: (state: GlobalSliceType, action: PayloadAction<boolean>) => {
      state.isProd = action.payload;
    },
    changeLanguage: (state: GlobalSliceType, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
    changeTheme: (state: GlobalSliceType, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    toggleCartDrawer: (
      state: GlobalSliceType,
      action: PayloadAction<boolean>
    ) => {
      state.visibleCartDrawer = action.payload;
    },
    toggleLoginModal: (
      state: GlobalSliceType,
      action: PayloadAction<boolean>
    ) => {
      state.loginModal = action.payload;
    },
    logOut: (state: GlobalSliceType, action: PayloadAction<any>) => {
      state.userInfo = null;
      state.userToken = null;
    },
    addToCart: (state: GlobalSliceType, action: PayloadAction<number>) => {
      state.cartCount += action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      login.pending,
      (state: GlobalSliceType, action: PayloadAction<any>) => {
        console.log(action.payload);
      }
    );
    builder.addCase(
      login.fulfilled,
      (
        state: GlobalSliceType,
        action: PayloadAction<{ userInfo: UserType; userToken: string }>
      ) => {
        state.userInfo = action.payload.userInfo;
        state.userToken = action.payload.userToken;
        state.loginModal = false;
      }
    );
    builder.addCase(login.rejected, (state: GlobalSliceType, action) => {});
  },
});

export const {
  changeIsProd,
  changeLanguage,
  changeTheme,
  toggleLoginModal,
  toggleCartDrawer,
  logOut,
  addToCart,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
