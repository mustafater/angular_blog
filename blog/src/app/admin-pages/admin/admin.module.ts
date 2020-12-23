import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule} from '../../app-routing.module';
import {MaterialModule} from '../../modules/material/material.module';
import {ComponentsModule} from '../../components/components.module';
import { AdminLayoutComponent } from '../../layout/admin-layout/admin-layout.component';
import { AdminNavComponent } from '../../nav/admin-nav/admin-nav.component';
import {MainModule} from '../../pages/main.module';



@NgModule({
  declarations: [AdminLayoutComponent,AdminNavComponent],
  imports: [
    CommonModule,AppRoutingModule,ComponentsModule,MaterialModule,MainModule
  ]
})
export class AdminModule { }
