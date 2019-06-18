import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VacinaComponent } from './vacina/vacina.component';
import {
  MatInputModule, MatButtonModule,
  MatTableModule, MatIconModule, MatMenuModule, MAT_DIALOG_DATA, MatDialogModule
} from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';
@NgModule({
  declarations: [
    AppComponent,
    VacinaComponent,
    ConfirmdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [HttpClient,{ provide: MAT_DIALOG_DATA, useValue: [] }],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmdialogComponent ]
})
export class AppModule { }
