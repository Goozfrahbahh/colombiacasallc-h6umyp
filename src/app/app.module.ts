import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { GoogleChartsModule } from 'angular-google-charts'

import { AppRoutingModule } from './app-routing.module';
import { IconComponent } from './icon.component';
import { MaterialModule } from '../material.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { ItemSearchComponent } from './item-search/item-search.component';
import { TableComponent } from './table/table.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { InventoryExtractorComponent } from './inventoryextractor/inventoryextractor.component';
import { InputFormComponent } from './input-form/input-form.component';
import { LineChartComponent } from './linegraph/linegraph.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    DashboardComponent,
    InventoryComponent,
    ItemDetailComponent,
    MessagesComponent,
    ItemSearchComponent,
    TableComponent,
    TablePaginationComponent,
    InventoryExtractorComponent,
    InputFormComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxCsvParserModule,
    GoogleChartsModule,
    MaterialFileInputModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
