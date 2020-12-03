import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';



const routes: Routes = [
  // main route
  {
    path:"",
    component:MainLayoutComponent,
    children:[
      {
        path:"",
        component:HomeComponent
      },
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"hakkimda",
        component:AboutMeComponent
      },
      {
        //www.domain.com/iletisim
        path:"iletisim",
        component:ContactComponent
      }

    ]
  },
  {
    path:"admin",
    component:AdminLayoutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
