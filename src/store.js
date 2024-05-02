import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from "./slices/adoptedPetSlice";
import searchParams from "./slices/searchParamsSlice";

const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
  },
});

export default store;
