import { createAsyncThunk } from "@reduxjs/toolkit";

interface LoginData {
  username: string;
  password: string;
}

const login = createAsyncThunk("global/login", async (data: LoginData) => {
  console.log("login");

  const response = {
    userInfo: {
      id: "1",
      email: "temuulenuuree@getMaxListeners.com",
      phoneNumber: "99639229",
      role: "client",
      firstname: "Temuulen",
      lastname: "Uuriinbayar",
    },

    userToken: "asddsaadsasdsdadsadsadsasd",
  };
  // Add your login logic here
  return response; // Adjust the return type as needed
});

export { login };
