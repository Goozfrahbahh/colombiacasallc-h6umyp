import { Component, OnInit } from '@angular/core';

import { Icategories } from '../icategories';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  icategories: Icategories[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.getIcategories();
  }

  getIcategories(): void {
    this.itemService
      .getIcategories()
      .subscribe((icategories) => (this.icategories = icategories));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.itemService
      .addIcategory({ name } as Icategories)
      .subscribe((icategory) => {
        this.icategories.push(icategory);
      });
  }

  delete(icategory: Icategories): void {
    this.icategories = this.icategories.filter((c) => c !== icategory);
    this.itemService.deleteIcategory(icategory.id).subscribe();
  }
}
