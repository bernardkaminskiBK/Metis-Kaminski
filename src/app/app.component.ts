import {Component, OnInit} from '@angular/core';
import {Stock} from "./models/model-recursion/Stock";
import {LoaderService} from "./shared/services/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Metis-Kaminski';

  constructor(public loaderService: LoaderService) {

  }


  ngOnInit(): void {
    // Rekurzivne volania priklad
    // const stock = new Stock();
    //
    // console.log('Celkova hodnota skladu: ' + stock.getStockValue2());
    //
    // const productNames = stock.getAllProductName();
    // productNames.forEach((productName) => {
    //   console.log('Product names: ' + productName);
    // });
  }

}
