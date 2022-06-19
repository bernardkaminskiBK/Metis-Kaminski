import {Vendor} from "./Vendor";
import {Review} from "./Review";
import Utils from "../utils/Utils";

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

  constructor(obj?: any) {
    if(obj) {
      this.id= obj.id;
      if(obj) {
        this.uuid = obj.uuid;
      }else {
        this.uuid = Utils.generateUUID()
      }
      this.name = obj.name;
      this.price = obj.price;
      this.category = obj.category;
      this.description = obj.description;
      this.stockCount = obj.stockCount;
      this.sellCountOverall = obj.sellCountOverall;
      this.sellCountLastMonth = obj.sellCountLastMonth;
      this.vendors = obj.vendors;
      this.reviews = obj.reviews;
    }
  }
}
