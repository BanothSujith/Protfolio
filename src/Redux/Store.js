import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./slice.js";
export default configureStore({
  reducer: {storeSlice},
});
