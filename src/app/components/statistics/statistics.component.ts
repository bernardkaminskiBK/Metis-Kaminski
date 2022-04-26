import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, AfterViewInit {

  displayedColumnsFirst: string[] =
    ['id', 'name', 'price', 'stockCount', 'quantitySoldLastMonth', 'quantitySoldWholePeriod'];

  displayedColumnsSecond: string[] =
    ['id', 'name', 'price', 'stockCount', 'cashFlowLastMonth', 'cashFlowWholePeriod'];

  displayedColumnsThird: string[] =
    ['id', 'name', 'stockCount'];

  displayedColumnsFourth: string[] =
    ['vendor', 'stockCount'];

  tableSourceFirst: MatTableDataSource<any>;
  tableSourceSecond: MatTableDataSource<any>;
  tableSourceThird: MatTableDataSource<any>;
  tableSourceFourth: MatTableDataSource<any>;

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
  avgPriceSoldProducts: string;
  mostSoldProductName: string;

  products: any[];
  selected: any;

  constructor(private router: Router, private data: ProductService) {
  }

  ngOnInit(): void {
    this.tableSourceFirst = new MatTableDataSource<any>(this.data.getProductList());
    this.tableSourceSecond = new MatTableDataSource<any>(this.data.getProductCashFlowStates());
    this.tableSourceThird = new MatTableDataSource<any>(this.data.getProductsNotInStock());
    this.tableSourceFourth = new MatTableDataSource<any>(this.data.getFirstVendorList());

    this.totalCashFlowByLastMonth = this.data.getTotalCashFlowByLastMonth();
    this.totalCashFlowByWholePeriod = this.data.getTotalCashFlowByWholePeriod();
    this.avgPriceSoldProducts = this.data.getAveragePriceSoldProducts();
    this.mostSoldProductName = this.data.getMostSoldProductName();

    this.products = this.data.getProductList();
    this.selected = this.products[0].name;
  }

  ngAfterViewInit(): void {
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
      new MatTableDataSource<any>(this.data.getVendorsByProductName(this.selected.name));
    this.selected = this.selected.name;

    this.tableSourceFourth.sort = this.sortFourth;
    this.tableSourceFourth.paginator = this.paginatorFourth;
  }

  goToFragment(fragment: string) : void {
    this.router.navigateByUrl('statistics#' + fragment);
  }
}
