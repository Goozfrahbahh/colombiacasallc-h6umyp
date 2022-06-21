import { Component } from '@angular/core';

const USER_DATA = [
  {
    entree: 'Bistec Encebollado',
    inventorycategory: 'Bistec Grande',
  },
  {
    entree: 'Churrasco',
    inventorycategory: 'Churrasco',
  },
  {
    entree: 'Salmon',
    inventorycategory: 'Salmon',
  },
  {
    entree: 'Bandeja Paisa',
    inventorycategory: 'Bistec Chico | Chicharron',
  },
  {
    entree: 'Bandeja Paisa Tipica Antioquena',
    inventorycategory: 'Bistec Chico | Chicharron | Chorizo',
  },
];

const COLUMNS_SCHEMA = [
  {
    key: 'entree',
    type: 'text',
    label: 'Menu Entree',
  },
  {
    key: 'inventorycategory',
    type: 'text',
    label: 'Inventory Category',
  },
  {
    key: 'dateOfBirth',
    type: 'date',
    label: 'Date',
  },
  {
    key: 'amountsold',
    type: 'number',
    label: "Sale's",
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;
}
