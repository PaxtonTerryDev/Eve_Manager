import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./characterSlice";

const store = configureStore({
  reducer: {
    character: characterSlice,
  },
});

export default store;
