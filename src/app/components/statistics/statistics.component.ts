import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import TestData from "../../utils/TestData";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, AfterViewInit {

  displayedColumnsFirst: string[] =
    ['id', 'name', 'price', 'stockCount', 'quantitySoldWholePeriod', 'quantitySoldLastMonth', 'cashFlow'];

  displayedColumnsSecond: string[] =
    ['id', 'name', 'price', 'stockCount', 'CashFlowLastMonth'];

  displayedColumnsThird: string[] =
    ['id', 'name', 'stockCount'];

  tableSourceFirst: MatTableDataSource<any>;
  tableSourceSecond: MatTableDataSource<any>;
  tableSourceThird: MatTableDataSource<any>;

  @ViewChild('firstTableMatSort') sortFirst: MatSort;
  @ViewChild('secondTableMatSort') sortSecond: MatSort;
  @ViewChild('thirdTableMatSort') sortThird: MatSort;

  @ViewChild('paginatorFirst') paginatorFirst: MatPaginator;
  @ViewChild('paginatorSecond') paginatorSecond: MatPaginator;
  @ViewChild('paginatorThird') paginatorThird: MatPaginator;

  ngOnInit(): void {
    this.tableSourceFirst = new MatTableDataSource<any>(TestData.getTestData());
    this.tableSourceSecond = new MatTableDataSource<any>(TestData.getTestData());
    this.tableSourceThird = new MatTableDataSource<any>(TestData.getProductsNotInStock());
  }

  ngAfterViewInit(): void {
    this.tableSourceFirst.sort = this.sortFirst;
    this.tableSourceFirst.paginator = this.paginatorFirst;

    this.tableSourceSecond.sort = this.sortSecond;
    this.tableSourceSecond.paginator = this.paginatorSecond;

    this.tableSourceThird.sort = this.sortThird;
    this.tableSourceThird.paginator = this.paginatorThird;
  }

  logData(row) {
    console.log(row);
  }

  applyFilterFirst(filterValue: any) {
    this.tableSourceFirst.filter = filterValue.target.value.trim().toLocaleLowerCase();
  }

  applyFilterSecond(filterValue: any) {
    this.tableSourceSecond.filter = filterValue.target.value.trim().toLocaleLowerCase();
  }

  applyFilterThird(filterValue: any) {
    this.tableSourceThird.filter = filterValue.target.value.trim().toLocaleLowerCase();
  }

}
