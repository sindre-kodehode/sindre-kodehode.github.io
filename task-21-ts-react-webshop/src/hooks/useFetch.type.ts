import { ProductType } from "../store/store";

export type useFetchType = {
  products: ProductType[],
  isLoading: boolean,
  errorMsg: string,
};
