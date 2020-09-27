import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EditableTableComponent } from './editable-table/editable-table.component';
import { SharedModule } from './shared.module';
@NgModule({
  declarations: [
    AppComponent,
    EditableTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
