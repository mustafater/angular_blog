import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ArticleComponent } from './pages/article/article.component';
import { CategoryArticlesComponent } from './pages/category-articles/category-articles.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SearchComponent } from './pages/search/search.component';



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
        path:"sayfa/:page",
        component:HomeComponent
      },
      {
        path:"makale/:id",
        component:ArticleComponent
      },
      {
        path:"kategori/:name/:id",
        component:CategoryArticlesComponent
      },
      {
        path:"kategori/:name/:id/sayfa/:page",
        component:CategoryArticlesComponent
      },
      {
        path:"hakkimda",
        component:AboutMeComponent
      },
      {
        path:"makale/:title/:id",
        component:ArticlesComponent
      },
      {
        path:"arama/search/:page",
        component:SearchComponent
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
