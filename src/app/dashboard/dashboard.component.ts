import { Component, OnInit } from '@angular/core';
import { Icategories } from '../icategories';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  icategories: Icategories[] = [];
  icategory: Icategories['entreeLists'];
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.getIcategories();
  }

  getIcategories(): void {
    this.itemService
      .getIcategories()
      .subscribe((icategories) => (this.icategories = icategories.slice(0, 4)));

    this.itemService
      .getIcategories()
      .subscribe((icategory) => (this.icategory = icategory['entreeLists']));
  }

  title = 'Inventory Spending Trend Watcher';
  type = 'LineChart';
  data = [
    ['May', 52000],
    ['June', 48000],
  ];
  options = {
    color: ['#0000FF', '#009900', '#CC0000', '#DD9900'],
    isStacked: true,
    fill: 20,
  };
}
