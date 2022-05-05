import {Vendor} from "./Vendor";
import {Review} from "./Review";

export class Product {
  id: number = 0;
  name: string = '';
  img_url: string = '';
  category: string = '';
  price: number = 0;
  stockCount: number = 0;
  quantitySoldWholePeriod: number = 0;
  quantitySoldLastMonth: number = 0;
  cashFlowLastMonth: number = 0;
  cashFlowWholePeriod: number = 0;
  display: number = 0;
  ram: number = 0;
  memory: number = 0;
  description: string = '';
  vendors: Vendor [];
  reviews: Review [];
}
