import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Icategories } from './icategories';
import { Users } from './users';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  icategories: Icategories[];
  users: Users[];
  createDb() {
    const icategories = [
      {
        id: 12,
        name: 'Bistec Chico',
        entreeLists: [
          { Entree: 'Bandeja Paisa', Portion: 1 },
          { Entree: 'Bandeja Paisa Tipica Antioquena', Portion: 1 },
          { Entree: 'Carne Asada', Portion: 1 },
          { Entree: 'Solo Bistec Chico', Portion: 1 },
        ],
      },
      {
        id: 13,
        name: 'Bistec Grande',
        entreeLists: [
          { Entree: 'Bistec Encebollado', Portion: 1 },
          { Entree: 'Bistec a Caballlo', Portion: 1 },
          { Entree: 'Bistec Criollo', Portion: 1 },
          { Entree: 'Solo Bistec Grande', Portion: 1 },
        ],
      },
      {
        id: 14,
        name: 'Churrasco',
        entreeLists: [
          { Entree: 'Churrasco', Portion: 1 },
          { Entree: 'Solo Churrasco', Portion: 1 },
        ],
      },
      {
        id: 15,
        name: 'Chicharron',
        entreeLists: [
          { Entree: 'Bandeja Paisa Tipica Antioquena', Portion: 1 },
          { Entree: 'Bandeja Paisa Tipica Antioquena', Portion: 1 },
          { Entree: 'Solo Chicharron', Portion: 1 },
          { Entree: 'Arepa with Chicharron', Portion: 1 },
          { Entree: 'Picada Colombiana', Portion: 1 },
        ],
      },
    ];
    const users = [
      { id: 1001, username: 'A', password: '1', accounttype: 'Admin' },
      { id: 1002, username: 'B', password: '2', accounttype: 'Level 1' },
      { id: 1003, username: 'C', password: '3', accounttype: 'Mid-Tier' },
    ];
    return { icategories };
  }
  d;

  genId<T extends Icategories | Users>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map((t) => t.id)) + 1 : 11;
  }
}
