import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ItemService } from '../item.service';
import { Icategories } from '../icategories';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  icategory: Icategories | undefined;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getIcategory();
  }

  getIcategory(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.itemService
      .getIcategory(id)
      .subscribe((icategory) => (this.icategory = icategory));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.icategory) {
      this.itemService
        .updateIcategory(this.icategory)
        .subscribe(() => this.goBack());
    }
  }
}
