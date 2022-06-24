import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {ProductService} from "../../shared/services/product.service";
import {Product} from "../../models/Product";
import {Vendor} from "../../models/Vendor";
import {StatisticsService} from "../../shared/services/statistics.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  displayedColumnsFirst: string[] =
    ['id', 'name', 'price', 'stockCount', 'quantitySoldLastMonth', 'quantitySoldWholePeriod'];

  displayedColumnsSecond: string[] =
    ['id', 'name', 'price', 'stockCount', 'cashFlowLastMonth', 'cashFlowWholePeriod'];

  displayedColumnsThird: string[] =
    ['id', 'name', 'stockCount'];

  displayedColumnsFourth: string[] =
    ['vendor', 'stockCount'];

  tableSourceFirst: MatTableDataSource<Product>;
  tableSourceSecond: MatTableDataSource<Product>;
  tableSourceThird: MatTableDataSource<Product>;
  tableSourceFourth: MatTableDataSource<Vendor>;

  @ViewChild('firstTableMatSort') sortFirst: MatSort;
  @ViewChild('secondTableMatSort') sortSecond: MatSort;
  @ViewChild('thirdTableMatSort') sortThird: MatSort;
  @ViewChild('fourthTableMatSort') sortFourth: MatSort;

  @ViewChild('paginatorFirst') paginatorFirst: MatPaginator;
  @ViewChild('paginatorSecond') paginatorSecond: MatPaginator;
  @ViewChild('paginatorThird') paginatorThird: MatPaginator;
  @ViewChild('paginatorFourth') paginatorFourth: MatPaginator;

  totalCashFlowByLastMonth: number;
  totalCashFlowByWholePeriod: number;
  avgPriceSoldProducts: number;
  mostSoldProductName: string;

  products: Product[];
  selected: any;

  constructor(private router: Router, private productService: ProductService, private statisticsService: StatisticsService) {
  }

  ngOnInit(): void {
    this.productService.getProductList().then((products) => {
      this.products = products;
      this.statisticsService.addData(this.products);
      this.setTables();
      this.setTablesFilters();
    }).catch(() => {
    });
  }

  private setTables(): void {
    this.tableSourceFirst = new MatTableDataSource<Product>(this.products);
    this.tableSourceSecond = new MatTableDataSource<Product>(this.statisticsService.getProductCashFlowStates());
    this.tableSourceThird = new MatTableDataSource<Product>(this.statisticsService.getProductsNotInStock());
    this.tableSourceFourth = new MatTableDataSource<Vendor>(this.statisticsService.getFirstVendorList());

    this.totalCashFlowByLastMonth = this.statisticsService.getTotalCashFlowByLastMonth();
    this.totalCashFlowByWholePeriod = this.statisticsService.getTotalCashFlowByWholePeriod();
    this.avgPriceSoldProducts = this.statisticsService.getAveragePriceSoldProducts();
    this.mostSoldProductName = this.statisticsService.getMostSoldProductName();

    this.selected = this.products[0].name;
  }

  private setTablesFilters(): void {
    this.tableSourceFirst.sort = this.sortFirst;
    this.tableSourceFirst.paginator = this.paginatorFirst;

    this.tableSourceSecond.sort = this.sortSecond;
    this.tableSourceSecond.paginator = this.paginatorSecond;

    this.tableSourceThird.sort = this.sortThird;
    this.tableSourceThird.paginator = this.paginatorThird;

    this.tableSourceFourth.sort = this.sortFourth;
    this.tableSourceFourth.paginator = this.paginatorFourth;
  }

  logData(row) {
    console.log(row);
  }

  applyFilterFirstTable(filterValue: any): void {
    this.tableSourceFirst.filter = filterValue.target.value.trim().toLocaleLowerCase();
  }

  applyFilterSecondTable(filterValue: any): void {
    this.tableSourceSecond.filter = filterValue.target.value.trim().toLocaleLowerCase();
  }

  applyFilterThirdTable(filterValue: any): void {
    this.tableSourceThird.filter = filterValue.target.value.trim().toLocaleLowerCase();
  }

  applyFilterFourthTable(filterValue: any): void {
    this.tableSourceFourth.filter = filterValue.target.value.trim().toLocaleLowerCase();
  }

  fillFourthTableWithContent(): void {
    this.tableSourceFourth =
      new MatTableDataSource<Vendor>(this.statisticsService.getVendorsByProductName(this.selected.name));
    this.selected = this.selected.name;

    this.tableSourceFourth.sort = this.sortFourth;
    this.tableSourceFourth.paginator = this.paginatorFourth;
  }

  goToFragment(fragment: string): void {
    this.router.navigateByUrl('statistics#' + fragment);
  }
}
