import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';

import { UploaderService } from './uploader.service';
import { MessageService } from '../message.service';

import { ExtractionService } from './extraction.service';

@Component({
  selector: 'app-inventoryextractor',
  templateUrl: './inventoryextractor.component.html',
  styleUrls: ['./inventoryextractor.component.css'],
})
export class InventoryExtractorComponent {
  csvRecords: any;
  header: boolean = false;
  message = '';
  csvResult: any[] = [];
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

  constructor(
    private ngxCsvParser: NgxCsvParser,
    private uploaderService: UploaderService,
    private messageService: MessageService,
    private extractionService: ExtractionService
  ) {}

  

  @ViewChild('fileImportInput', { static: false }) fileImportInput: ElementRef;

  fileChangeListener($event: any): void {
    const files = $event.srcElement.files;
    const uploadFile = files[0];
    this.header =
      (this.header as unknown as string) === 'true' || this.header === true;
    console.log(this.header);
    this.uploaderService.upload(uploadFile).subscribe((msg) => {
      this.message = msg;
    });
    this.ngxCsvParser
      .parse(files[0], { header: this.header, delimiter: ',' })
      .pipe()
      .subscribe({
        next: (result): void => {
          console.log('Result', result);
          this.csvRecords = result;
          console.log(this.csvRecords);
          return this.csvRecords;
        },
        error: (error: NgxCSVParserError): void => {
          console.log('Error', error);
        },
      });
  }

  // Adjust Files to be Categories for Inventory ExtractionService
  csvTrim() {
    if (!this.csvRecords) {
      this.message = 'No Csv file found';
      this.statusCheck(this.message);
    }

    console.log(this.csvRecords);

    for (let i = 0; i < this.csvRecords.length; i++) {
      if (this.csvRecords[i][2] !== '' && this.csvRecords[i][6] > 0) {
        this.csvResult.push({
          Entree: this.csvRecords[i][2],
          Sold: this.csvRecords[i][5],
        });
      }
    }

    console.log(this.csvResult);
    this.extractionService.extractorPro(this.csvResult)
  }
  private statusCheck(message: string) {
    this.messageService.add(this.message);
  }
}
