import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,BrowserAnimationsModule,
    ReactiveFormsModule,MatButtonModule,MatInputModule,
    MatTableDataSource,MatPaginator,MatAutocompleteModule
  ],
  exports:[ CommonModule,MatTableDataSource,
    MatPaginator,BrowserAnimationsModule,ReactiveFormsModule,MatAutocompleteModule,
    MatButtonModule,MatInputModule]
})
export class MaterialModule { }
