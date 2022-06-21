import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Users } from '../users';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  user: Users[];
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  //Get Username Password Info//
  getUser(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.itemService.getUser().subscribe((user) => (this.user = user));
  }

  checkPW(getUser: Users[], autheticated: boolean): void {
      this.getUser.((this.user? (this.getUser()['password'] = this.user['password'])
    }
  }

}
