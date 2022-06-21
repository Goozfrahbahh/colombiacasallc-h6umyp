import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExtractionService {
  // Global Space Defined List => used for mini-table info

  bistecchicoList: any[] = [];
  bistecgrandeList: any[] = [];
  churrascoList: any[] = [];
  chicharronList: any[] = [];
  chorizoList: any[] = [];
  chuletaparrillaList: any[] = [];
  chuletavallunaList: any[] = [];
  camaronescatalanaList: any[] = [];
  salmonlimonList: any[] = [];
  pescadofritoList: any[] = [];
  pescadocilantroList: any[] = [];
  tamalList: any[] = [];
  brisketList: any[] = [];
  sopapataconesList: any[] = [];
  lomoderesList: any[] = [];
  pechugadepolloList: any[] = [];
  polloguisadoList: any[] = [];
  aborrajadoList: any[] = [];
  empanadaList: any[] = [];
  cevicheList: any[] = [];
  pandebonoList: any[] = [];
  bunueloList: any[] = [];
  tequenosList: any[] = [];
  picadaList: any[] = [];

  // Display table of Inventory Categories
  displayTable: any[][] = [
    ['Bistec Chico', 0],
    ['Bistec Grande', 0],
    ['Churrasco', 0],
    ['Chicharron', 0],
    ['Chorizo', 0],
    ['Chuleta a la Parrilla', 0],
    ['Chuleta Valluna', 0],
    ['Camarones', 0],
    ['Salmon', 0],
    ['Pescado Frito', 0],
    ['Tilapia', 0],
    ['Tamal', 0],
    ['Brisket', 0],
    ['Sopa de Patacones', 0],
    ['Lomo de Res a la Parrilla', 0],
    ['Pechuga', 0],
    ['Pechuga Empanizada', 0],
    ['Pollo Guisado Leg', 0],
    ['Pollo Guisado Pechuga', 0],
    ['Aborrajado', 0],
    ['Empanada Beef', 0],
    ['Empanada Chicken', 0],
    ['Empanada Vegetable', 0],
    ['Ceviche', 0],
    ['Pandebono', 0],
    ['Buneulos', 0],
    ['Tequenos', 0],
  ];

  // CSV breakdown into usuable form
  // @param csv

  arr1: [{ Entree: string; Sold: number }, { Entree: string; Sold: number }];
  masterList: any[] = [
    ['Aborrajado'],
    ['Arepa'],
    ['Bunuelos'],
    ['Ceviche Peruano'],
    ['Coctel de Camarones'],
    ['Empanadas'],
    ['Morcilla'],
    ['Pandebono'],
    ['Patacones Rellenos'],
    ['Picada Colombiana'],
    ['Tequenos'],
    ['Sopa de Patacones'],
    ['Sopa de Ajiaco'],
    ['Ensalada de la Casa'],
    ['Ensalada de Tomate y Aguate'],
    ['Ensalada de Pollo'],
    ['Ensalada de Salmon'],
    ['Ensalada de Pescado'],
    ['Ensalada de Camarones'],
    ['Arroz con Pollo'],
    ['Bandeja Paisa'],
    ['Bandeja Paisa Tipica Antioquena'],
    ['Bistec a Caballo'],
    ['Bistec Criollo'],
    ['Bistec Encebollado'],
    ['Camarones a la Catalana'],
    ['Chuleta a la Parrilla'],
    ['Chuleta Valluna'],
    ['Churrasco'],
    ['Lomo de Res a la Parrilla'],
    ['Pabellon'],
    ['Parillada Vegetariana'],
    ['Pechuga de Pollo'],
    ['Pechuga de Pollo Empanizada'],
    ['Pechuga Rellena'],
    ['Pescado en Cilantro y Mayonesa'],
    ['Pescado Frito'],
    ['Plato Vegetariano'],
    ['Pollo Empanizado Adultos'],
    ['Pollo Guisado'],
    ['Ropa Vieja'],
    ['Salmon en Limon y Mantequilla'],
    ['Tamal Valluno'],
    ['Pollo Empanizado'],
    ['Pollo Guisado'],
    ['Carne Asada'],
    ['Pechuga de Pollo Kids'],
    ["Bon Bon Bon's"],
    ['Brevas con Arequipe y Queso'],
    ['Cafe Sello Rojo'],
    ['Flan de Caramelo'],
    ['Flan de Coco'],
    ['Ice Cream'],
    ['Jumbo Bar'],
    ['Maduros Flameados'],
    ['Manjar Blanco'],
    ['Mousse'],
    ['Super Coco'],
    ['Tres Leches'],
    ['Whole Flan'],
    ['Whole Tres Leches'],
    ['Ice Cream'],
    ['Carrot Cake'],
    ['12 oz Aji'],
    ['16 oz Aji'],
    ['2 oz Salsa'],
    ['24 oz Aji'],
    ['32 oz Aji'],
    ['Avocado'],
    ['Papa Criolla'],
    ['French Fries'],
    ['Fried Egg'],
    ['Galletas Saladas'],
    ['Green Beans'],
    ['Habanero Cocidos'],
    ['Jalapenos Toreados'],
    ['Mashed Potatoes'],
    ['Mixed Vegetables'],
    ['Side Chicharron'],
    ['Side Chorizo'],
    ['Side Ensalada de la Casa'],
    ['Side Frijoles Negros'],
    ['Side Frijoles Pintos'],
    ['Side Maduros'],
    ['Side of Arroz con Pollo'],
    ['Side of Rice'],
    ['Side of Queso Rallado'],
    ['Side Tostones'],
    ['Side Yuca'],
    ['Only Bistec Grande'],
    ['Only Camarones(6 Count)'],
    ['Only Carne Desmechada'],
    ['Only Chuleta-a-la-Parilla'],
    ['Only Chuleta'],
    ['Only Churrasco'],
    ['Only Pechuga de Pollo'],
    ['Only Pechuga de Pollo Empanizado'],
    ['Only Pescado Frito'],
    ['Only Pollo Guisado'],
    ['Only Salmon'],
    ['Only Tilapia'],
    ['Only Tamal'],
    ['Solo Lomo De Res'],
    ['Only Pechuga Rellena'],
    ["Chef's Special"],
    ['Lechon Asado'],
    ['Pechuga de Pollo de Champineones'],
    ['Surf and Turf'],
    ['Cazuela De Mariscos'],
    ['Sancocho De Gallina'],
    ['Sudado De Res'],
  ];

  extractorPro(csvResult: any) {
    //masterlist of all entrees from the inventory
    for (let i = 0; i < csvResult.length; i++) {
      for (let z = 0; z < this.masterList.length; z++) {
        if (csvResult[i][0] === this.masterList.length[z]) {
          this.arr1.push({
            Entree: this.masterList[z],
            Sold: csvResult[i][1],
          });
          console.log(this.arr1);
        }
      }
    }

    //Entree Class Bistec Chico Constructor
    class bistecChico {
      entreeList: any[] = [
        { Entree: 'Bandeja Paisa', Portion: 1, Sold: 0 },
        { Entree: 'Bandeja Paisa Tipica Antioquena', Portion: 1, Sold: 0 },
        { Entree: 'Carne Asada', Portion: 1, Sold: 0 },
        { Entree: 'Picada Colombiana', Portion: 0.5, Sold: 0 },
      ];
      totalportion(): number {
        let a: number = 0;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const bistecC = new bistecChico();

    // Match Entrees with Values from the MenuBreakdown of the Daily Sales
    // We could use object method to reduce the repetitive values here
    //but since values always known this is not needed.

    var arr2: any[] = [];
    for (let i: number = 0; i < bistecC.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === bistecC.entreeList[i].Entree) {
          arr2.push([
            { Entree: bistecC.entreeList[i].Entree, Item: this.arr1[z][1] },
          ]);
        }
      }
    }
    console.log(arr2);

    // Fill the list of Inventory item with relevent info to fill informational display for each item
    // These tables are the primary set up to all the components of different dispalys of primary data
    // This takes place on initial upload of csv file after submitting

    for (let i = 0; i < bistecC.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (bistecC.entreeList[i].Entree === arr2[z][0]) {
          this.bistecchicoList.push({
            Entree: bistecC.entreeList[i].Entree,
            Portion: bistecC.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }
    console.log(this.bistecchicoList);

    class bistecGrande {
      entreeList: any[] = [
        { Entree: 'Bistec Criollo', Portion: 1 },
        { Entree: 'Bistec a Caballo', Portion: 1 },
        { Entree: 'Bistec Encebollado', Portion: 1 },
        { Entree: 'Only Bistec Grande', Portion: 1 },
      ];
      totalportion() {
        let a: number = 0;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const bistecG = new bistecGrande();
    var arr2: any[] = [];
    for (let i: number = 0; i < bistecG.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === bistecG.entreeList[i].Entree) {
          arr2.push([bistecG.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < bistecG.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (bistecG.entreeList[i].Entree === arr2[z][0]) {
          this.bistecgrandeList.push({
            Entree: bistecG.entreeList[i].Entree,
            Portion: bistecG.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }
    class Churrasco {
      entreeList: any[] = [
        { Entree: 'Churrasco', Portion: 1 },
        { Entree: 'Only Churrasco', Portion: 1 },
        { Entree: 'Churrasco æ', Portion: 1 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const churrasco = new Churrasco();

    var arr2: any[] = [];
    for (let i: number = 0; i < churrasco.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === churrasco.entreeList[i].Entree) {
          arr2.push([churrasco.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < churrasco.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (churrasco.entreeList[i].Entree === arr2[z][0]) {
          this.churrascoList.push({
            Entree: churrasco.entreeList[i].Entree,
            Portion: churrasco.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class Chicharron {
      entreeList: any[] = [
        { Entree: 'Bandeja Paisa', Portion: 1 },
        { Entree: 'Bandeja Paisa Tipica Antioquena', Portion: 1 },
        { Entree: 'Side Chicharron', Portion: 1 },
        { Entree: 'Chicharron & Cheese', Portion: 1.5 },
        { Entree: 'Chicharoon No Cheese', Portion: 1.5 },
        { Entree: 'Extra Chicharron æ', Portion: 1 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const chicharron = new Chicharron();

    var arr2: any[] = [];
    for (let i: number = 0; i < chicharron.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === chicharron.entreeList[i].Entree) {
          arr2.push([chicharron.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < chicharron.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (chicharron.entreeList[i].Entree === arr2[z][0]) {
          this.chicharronList.push({
            Entree: chicharron.entreeList[i].Entree,
            Portion: chicharron.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class Chorizo {
      entreeList: any[] = [
        { Entree: 'Side Chorizo', Portion: 1 },
        { Entree: 'Bandeja Paisa Tipica Antioquena', Portion: 0.5 },
        { Entree: 'Chorize No Cheese', Portion: 1 },
        { Entree: 'Chorizo & Cheese', Portion: 1 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const chorizo = new Chorizo();

    var arr2: any[] = [];
    for (let i: number = 0; i < chorizo.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === chorizo.entreeList[i].Entree) {
          arr2.push([chorizo.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < chorizo.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (chorizo.entreeList[i].Entree === arr2[z][0]) {
          this.chorizoList.push({
            Entree: chorizo.entreeList[i].Entree,
            Portion: chorizo.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class ChuletaParrilla {
      entreeList: any[] = [
        { Entree: 'Chuleta a la Parrilla', Portion: 1 },
        { Entree: 'Only Chuleta-a-la-Parrilla', Portion: 1 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const chuletaparrilla = new ChuletaParrilla();

    var arr2: any[] = [];
    for (let i: number = 0; i < chuletaparrilla.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === chuletaparrilla.entreeList[i].Entree) {
          arr2.push([chuletaparrilla.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < chuletaparrilla.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (chuletaparrilla.entreeList[i].Entree === arr2[z][0]) {
          this.chuletaparrillaList.push({
            Entree: chuletaparrilla.entreeList[i].Entree,
            Portion: chuletaparrilla.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class ChuletaValluna {
      entreeList: any[] = [
        { Entree: 'Chuleta Valuna', Portion: 1 },
        { Entree: 'Only Chuleta', Portion: 1 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const chuletavalluna = new ChuletaValluna();
    var arr2: any[] = [];
    for (let i: number = 0; i < chuletavalluna.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === chuletavalluna.entreeList[i].Entree) {
          arr2.push([chuletavalluna.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < chuletavalluna.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (chuletavalluna.entreeList[i].Entree === arr2[z][0]) {
          this.chuletavallunaList.push({
            Entree: chuletavalluna.entreeList[i].Entree,
            Portion: chuletavalluna.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class CamaronesCatalana {
      entreeList: any[] = [
        { Entree: 'Camarones a la Catalana', Portion: 6, Size: '' },
        { Entree: 'Only Camarones(6 Count)', Portion: 6, Size: '' },
        { Entree: 'Coctel de Camarones', Portion: 12, Size: 'Large' },
        { Entree: 'Coctel de Camraones', Portion: 6, Size: 'Small' },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const camarones = new CamaronesCatalana();
    var arr2: any[] = [];
    for (let i: number = 0; i < camarones.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === camarones.entreeList[i].Entree) {
          arr2.push([camarones.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < camarones.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (camarones.entreeList[i].Entree === arr2[z][0]) {
          this.camaronescatalanaList.push({
            Entree: camarones.entreeList[i].Entree,
            Portion: camarones.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class Salmon {
      entreeList: any[] = [
        { Entree: 'Salmon en Limon y Mantequilla', Portion: 1 },
        { Entree: 'Ensalada de Salmon', Portion: 1 },
        { Entree: 'Only Salmon', Portion: 1 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const salmon = new Salmon();
    var arr2: any[] = [];
    for (let i: number = 0; i < salmon.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === salmon.entreeList[i].Entree) {
          arr2.push([salmon.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < salmon.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (salmon.entreeList[i].Entree === arr2[z][0]) {
          this.salmonlimonList.push({
            Entree: salmon.entreeList[i].Entree,
            Portion: salmon.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class PescadoFrito {
      entreeList: any[] = [
        { Entree: 'Pescado Frito', Portion: 1 },
        { Entree: 'Only Pescado Frito', Portion: 1 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const pescadofrito = new PescadoFrito();
    var arr2: any[] = [];
    for (let i: number = 0; i < pescadofrito.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === pescadofrito.entreeList[i].Entree) {
          arr2.push([pescadofrito.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < pescadofrito.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (pescadofrito.entreeList[i].Entree === arr2[z][0]) {
          this.pescadofritoList.push({
            Entree: pescadofrito.entreeList[i].Entree,
            Portion: pescadofrito.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class PescadoCilantroMayonesa {
      entreeList: any[] = [
        { Entree: 'Pescado en Cilantro y Mayonesa', Portion: 1 },
        { Entree: 'Ensalada de Pescado', Portion: 1 },
        { Entree: 'Only Tilapia', Portion: 1 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const pescadocilantro = new PescadoCilantroMayonesa();
    var arr2: any[] = [];
    for (let i: number = 0; i < pescadocilantro.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === pescadocilantro.entreeList[i].Entree) {
          arr2.push([pescadocilantro.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < pescadocilantro.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (pescadocilantro.entreeList[i].Entree === arr2[z][0]) {
          this.pescadocilantroList.push({
            Entree: pescadocilantro.entreeList[i].Entree,
            Portion: pescadocilantro.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class Brisket {
      entreeList: any[] = [
        { Entree: 'Pabellon', Portion: 1, Kind: '' },
        { Entree: 'Ropa Vieja', Portion: 1, Kind: '' },
        { Entree: 'Arepa', Portion: 0.5, Kind: 'Beef' },
        { Entree: 'Patacones Rellenos', Portion: 0.25, Kind: 'Beef' },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const brisket = new Brisket();
    var arr2: any[] = [];
    for (let i: number = 0; i < brisket.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === brisket.entreeList[i].Entree) {
          arr2.push([brisket.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < brisket.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (brisket.entreeList[i].Entree === arr2[z][0]) {
          this.brisketList.push({
            Entree: brisket.entreeList[i].Entree,
            Portion: brisket.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class Tamal {
      entreeList: any[] = [
        { Entree: 'Tamal Valluno', Portion: 1 },
        { Entree: 'Only Tamal', Portion: 1 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const tamal = new Tamal();
    var arr2: any[] = [];
    for (let i: number = 0; i < tamal.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === tamal.entreeList[i].Entree) {
          arr2.push([tamal.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < tamal.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (tamal.entreeList[i].Entree === arr2[z][0]) {
          this.tamalList.push({
            Entree: tamal.entreeList[i].Entree,
            Portion: tamal.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class SopaPatacones {
      entreeList: any[] = [
        { Entree: 'Sopa de Patacones', Size: 'Small', Portion: 4 },
        { Entree: 'Sopa de Patacones', Size: 'Medium', Portion: 4 },
        { Entree: 'Sopa de Patacones', Size: 'Large', Portion: 4 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const sopapatacones = new SopaPatacones();
    var arr2: any[] = [];
    for (let i: number = 0; i < sopapatacones.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === sopapatacones.entreeList[i].Entree) {
          arr2.push([sopapatacones.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < sopapatacones.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (sopapatacones.entreeList[i].Entree === arr2[z][0]) {
          this.sopapataconesList.push({
            Entree: sopapatacones.entreeList[i].Entree,
            Portion: sopapatacones.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class LomoResParilla {
      entreeList: any[] = [
        { Entree: 'Lomo de Res a la Parilla', Portion: 1 },
        { Entree: 'Solo Lomo de Res', Portion: 1 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const lomo = new LomoResParilla();
    var arr2: any[] = [];
    for (let i: number = 0; i < lomo.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === lomo.entreeList[i].Entree) {
          arr2.push([lomo.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < lomo.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (lomo.entreeList[i].Entree === arr2[z][0]) {
          this.lomoderesList.push({
            Entree: lomo.entreeList[i].Entree,
            Portion: lomo.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class PechugaPollo {
      entreeList: any[] = [
        { Entree: 'Pechuga de Pollo', Portion: 1 },
        { Entree: 'Pechuga Rellena', Portion: 1 },
        { Entree: 'Pechuga de Pollo Empanizado', Portion: 1 },
        { Entree: 'Only Pechuga de Pollo', Portion: 1 },
        { Entree: 'Only Pechuga Rellena', Portion: 1 },
        { Entree: 'Only Pechuga de Pollo Empanizada', Portion: 1 },
        { Entree: 'Ensalada de Pechuga', Portion: 1 },
        { Entree: 'Pechuga de Pollo Kids', Portion: 1 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const pechugadepollo = new PechugaPollo();
    var arr2: any[] = [];
    for (let i: number = 0; i < pechugadepollo.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === pechugadepollo.entreeList[i].Entree) {
          arr2.push([pechugadepollo.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < pechugadepollo.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (pechugadepollo.entreeList[i].Entree === arr2[z][0]) {
          this.pechugadepolloList.push({
            Entree: pechugadepollo.entreeList[i].Entree,
            Portion: pechugadepollo.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class PolloGuisado {
      entreeList: any[] = [
        { Entree: 'Pollo Guisado', Portion: 1, Kind: 'Pierna' },
        { Entree: 'Pollo Guisado', Portion: 1, Kind: 'Pechuga' },
        { Entree: 'Only Pollo Guisado', Portion: 1, Kind: 'Pierna' },
        { Entree: 'Only Pollo Guisado', Portion: 1, Kind: 'Pechuga' },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const polloguisado = new PolloGuisado();
    var arr2: any[] = [];
    for (let i: number = 0; i < polloguisado.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === polloguisado.entreeList[i].Entree) {
          arr2.push([polloguisado.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < polloguisado.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (polloguisado.entreeList[i].Entree === arr2[z][0]) {
          this.polloguisadoList.push({
            Entree: polloguisado.entreeList[i].Entree,
            Portion: polloguisado.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class Aborrajado {
      entreeList: any[] = [
        { Entree: 'Aborrajado', Portion: 1 },
        { Entree: 'One Item', Portion: 0 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const aborrajado = new Aborrajado();
    var arr2: any[] = [];
    for (let i: number = 0; i < aborrajado.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === aborrajado.entreeList[i].Entree) {
          arr2.push([aborrajado.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < aborrajado.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (aborrajado.entreeList[i].Entree === arr2[z][0]) {
          this.aborrajadoList.push({
            Entree: aborrajado.entreeList[i].Entree,
            Portion: aborrajado.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class Empanada {
      entreeList: any[] = [
        { Entree: 'Empanada', Portion: 1, Kind: 'Beef' },
        { Entree: 'Empanada', Portion: 1, Kind: 'Chicken' },
        { Entree: 'Empanada', Portion: 1, Kind: 'Vegetable' },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const empanada = new Empanada();
    var arr2: any[] = [];
    for (let i: number = 0; i < empanada.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === empanada.entreeList[i].Entree) {
          arr2.push([empanada.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < empanada.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (empanada.entreeList[i].Entree === arr2[z][0]) {
          this.empanadaList.push({
            Entree: empanada.entreeList[i].Entree,
            Portion: empanada.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class Ceviche {
      entreeList: any[] = [
        { Entree: 'Ceviche', Portion: 1 },
        { Entree: 'One Item', Portion: 0 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const ceviche = new Ceviche();
    var arr2: any[] = [];
    for (let i: number = 0; i < ceviche.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === ceviche.entreeList[i].Entree) {
          arr2.push([ceviche.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < ceviche.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (ceviche.entreeList[i].Entree === arr2[z][0]) {
          this.cevicheList.push({
            Entree: ceviche.entreeList[i].Entree,
            Portion: ceviche.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class Pandebono {
      entreeList: any[] = [
        { Entree: 'Pandebono', Size: 'Single', Portion: 1 },
        { Entree: 'Pandebono', Size: 'Dozen', Portion: 12 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const pandebono = new Pandebono();
    var arr2: any[] = [];
    for (let i: number = 0; i < pandebono.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === pandebono.entreeList[i].Entree) {
          arr2.push([pandebono.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < pandebono.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (pandebono.entreeList[i].Entree === arr2[z][0]) {
          this.pandebonoList.push({
            Entree: pandebono.entreeList[i].Entree,
            Portion: pandebono.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class Bunuelo {
      entreeList: any[] = [
        { Entree: 'Bunuelo', Size: 'Single', Portion: 1 },
        { Entree: 'Bunuelo', Size: 'Dozen', Portion: 12 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const bunuelo = new Bunuelo();
    var arr2: any[] = [];
    for (let i: number = 0; i < bunuelo.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === bunuelo.entreeList[i].Entree) {
          arr2.push([bunuelo.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < bunuelo.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (bunuelo.entreeList[i].Entree === arr2[z][0]) {
          this.bunueloList.push({
            Entree: bunuelo.entreeList[i].Entree,
            Portion: bunuelo.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class Tequenos {
      entreeList: any[] = [
        { Entree: 'Tequenos', Portion: 5 },
        { Entree: 'Only Item', Portion: 0 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const tequenos = new Tequenos();
    var arr2: any[] = [];
    for (let i: number = 0; i < tequenos.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === tequenos.entreeList[i].Entree) {
          arr2.push([tequenos.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < tequenos.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (tequenos.entreeList[i].Entree === arr2[z][0]) {
          this.tequenosList.push({
            Entree: tequenos.entreeList[i].Entree,
            Portion: tequenos.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }

    class PicadaColombiana {
      entreeList: any[] = [
        { Entree: 'Picada Colombiana', Portion: 1 },
        { Entree: 'Only item', Portion: 1 },
      ];
      totalportion(): number {
        let a: number;
        for (let i = 0; i < this.entreeList.length; i++) {
          a = this.entreeList[i].Portion + a;
        }
        return a;
      }
      listE() {
        let list: any[] = [];
        for (let i = 0; i < this.entreeList.length; i++) {
          list.push([this.entreeList[i].Entree, this.entreeList[i].Portion]);
        }
        return list;
      }
    }
    const picada = new PicadaColombiana();
    var arr2: any[] = [];
    for (let i: number = 0; i < picada.entreeList.length; i++) {
      for (let z: number = 0; z < this.arr1.length; z++) {
        if (this.arr1[z][0] === picada.entreeList[i].Entree) {
          arr2.push([picada.entreeList[i].Entree, this.arr1[z][1]]);
        }
      }
    }
    console.log(arr2);
    for (let i = 0; i < picada.entreeList.length; i++) {
      for (let z = 0; z < arr2.length; z++) {
        if (picada.entreeList[i].Entree === arr2[z][0]) {
          this.picadaList.push({
            Entree: picada.entreeList[i].Entree,
            Portion: picada.entreeList[i].Portion,
            Sold: arr2[z][1],
          });
        }
      }
    }
    const inventoryMap: any = [
      ['Bistec Chico', bistecChico, this.bistecchicoList],
      ['Bistec Grande', bistecGrande, this.bistecgrandeList],
      ['Churrasco', Churrasco, this.churrascoList],
      ['Chicharron', Chicharron, this.chicharronList],
      ['Chorizo', Chorizo, this.chorizoList],
      ['Chuleta a la Parrilla', ChuletaParrilla, this.chuletaparrillaList],
      ['Chuleta Valluna', ChuletaValluna, this.chuletavallunaList],
      ['Camarones', CamaronesCatalana, this.camaronescatalanaList],
      ['Salmon', Salmon, this.salmonlimonList],
      ['Pescado Frito', PescadoFrito, this.pescadofritoList],
      ['Tilapia', PescadoCilantroMayonesa, this.pescadocilantroList],
      ['Tamal', Tamal, this.tamalList],
      ['Brisket', Brisket, this.brisketList],
      ['Sopa de Patacones', SopaPatacones, this.sopapataconesList],
      ['Lomo de Res a la Parrilla', LomoResParilla, this.lomoderesList],
      ['Pechuga', PechugaPollo, this.pechugadepolloList],
      ['Pollo Guisado', PolloGuisado, this.polloguisadoList],
      ['Aborrajado', Aborrajado, this.aborrajadoList],
      ['Empanada', Empanada, this.empanadaList],
      ['Ceviche', Ceviche, this.cevicheList],
      ['Pandebono', Pandebono, this.pandebonoList],
      ['Buneulos', Bunuelo, this.bunueloList],
      ['Tequenos', Tequenos, this.tequenosList],
    ];

    return inventoryMap;
  }
}
