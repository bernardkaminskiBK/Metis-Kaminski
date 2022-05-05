import {Product} from "./Product";

export class Category {
  name: string;
  subCategory: Category[] | undefined;
  products: Product[] | undefined;

  constructor() {}
}
