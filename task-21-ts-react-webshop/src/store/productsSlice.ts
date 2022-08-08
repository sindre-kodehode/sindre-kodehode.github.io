import { createSlice } from "@reduxjs/toolkit";
import data            from "./products.json";

type ProductType = {
  "id"          : number,
  "title"       : string,
  "price"       : number,
  "description" : string,
  "category"    : string,
  "image"       : string,
  "rating" : {
    "rate"      : number,
    "count"     : number,
  }
};

type ProductState = {
  products : ProductType[];
};

const initialState: ProductState = {
  products : data,
};

const ProductSlice = createSlice({
  name : "products",
  initialState,
  reducers : {},
});

export type { ProductType };

export default ProductSlice.reducer;
