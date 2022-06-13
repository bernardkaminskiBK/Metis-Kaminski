import {Vendor} from "./Vendor";
import {Review} from "./Review";

export class Product {
  id: number = 0;
  uuid: string = '';
  name: string = '';
  price: number = 0;
  category: string = '';
  description: string = '';
  stockCount: number = 0;
  sellCountOverall: number = 0;
  sellCountLastMonth: number = 0;
  cashFlowLastMonth: number = 0;
  cashFlowWholePeriod: number = 0;
  editPermission: boolean = false;
  ownerName: string = '';
  ownerUsername: string = '';
  vendors: Vendor [];
  reviews: Review [];

  img_url: string = '';
  display: number = 0;
  ram: number = 0;
  memory: number = 0;

  // id: number = 0;
  // uuid: string = '';
  // name: string = '';
  // img_url: string = '';
  // category: string = '';
  // price: number = 0;
  // stockCount: number = 0;
  // sellCountOverall: number = 0;
  // sellCountLastMonth: number = 0;
  // cashFlowLastMonth: number = 0;
  // cashFlowWholePeriod: number = 0;
  // display: number = 0;
  // ram: number = 0;
  // memory: number = 0;
  // description: string = '';
  // vendors: Vendor [];
  // reviews: Review [];
}
