import {Vendor} from "./Vendor";

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
  reviews: string [];

  img_url: string = '';
  display: number = 0;
  ram: number = 0;
  memory: number = 0;

}
