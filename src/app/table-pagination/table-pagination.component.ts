
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent implements AfterViewInit {
  displayedColumns: string[] = ['menutype', 'name', 'inventorycategory', 'vendors'];
  datasource = new MatTableDataSource<MenuItem>(ITEM_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }
}

export interface MenuItem {
  menutype: string;
  name: string;
  inventorycategory: string;
  vendors: string[];
}

const ITEM_DATA: MenuItem[] = [
  { menutype: 'Entree', name: 'Bandeja Paisa Tipica Antioquena', inventorycategory: 'Bistec Chico | Chicharron| Chorizo', vendors: ['US Foods', 'Restaurant Depot']  },
  { menutype: 'Entree', name: 'Bistec Encebollado', inventorycategory: 'Bistec Grande', vendors: ['US Foods', 'Restaurant Depot']  },
  { menutype: 'Entree', name: 'Salmon en Limon y Mantequilla', inventorycategory: 'Salmon', vendors: ['US Foods', 'Restaurant Depot', 'Labatt']  },
  { menutype: 'Appetizer', name: 'Picada Colombiana', inventorycategory: 'Top Butt Extra | Chicharron Extra| Chorizo', vendors: ['US Foods', 'Restaurant Depot', 'Labatt']  },
  { menutype: 'Appetizer', name: 'Patacones Rellenos', inventorycategory: 'Brisket | Patacones Cups | Shredded Cheese', vendors: ['Labatt', 'Restaurant Depot']  },
  { menutype: 'Dessert', name: 'Maduros Flameados', inventorycategory: 'Ice Cream | Maduros | Liqour', vendors: ['US Foods', 'Restaurant Depot']  },
  { menutype: 'Special', name: "Chef's Special", inventorycategory: 'Churrasco | Camarones | Papa Criolla', vendors: ['US Foods', 'Restaurant Depot', 'Del Valle Vendor']  },
]
