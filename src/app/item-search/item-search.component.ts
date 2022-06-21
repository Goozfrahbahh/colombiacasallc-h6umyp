import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Icategories } from '../icategories';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css'],
})
export class ItemSearchComponent implements OnInit {
  icategories$!: Observable<Icategories[]>;
  private searchTerms = new Subject<string>();

  constructor(private itemService: ItemService) {}

  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.icategories$ = this.searchTerms.pipe(
      //wait 300ms after each keystroke before considering the term
      debounceTime(300),

      //ignore new term if same as previous term
      distinctUntilChanged(),

      //switch to new searc obervable each time the term changes
      switchMap((term: string) => this.itemService.searchIcategories(term))
    );
  }
}
