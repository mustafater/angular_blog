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
import { ArchiveComponent } from './pages/archive/archive.component';
import { AdminHomeComponent } from './admin-pages/admin-home/admin-home.component';
import { AdminArticleComponent } from './admin-pages/article/admin-article/admin-article.component';
import { ArticleListComponent } from './admin-pages/article/article-list/article-list.component';
import { ArticleAddComponent } from './admin-pages/article/article-add/article-add.component';
import { ArticleUpdateComponent } from './admin-pages/article/article-update/article-update.component';




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
        path:"arsiv/:year/:month/",
        component:ArchiveComponent
      },
      {
        path:"arsiv/:year/:month/sayfa/:page",
        component:ArchiveComponent
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
    component:AdminLayoutComponent,
    children:[
      {
        path:"",
        component:AdminHomeComponent
      },
      {
        path:"anasayfa",
        component:AdminHomeComponent
      },
      {
        path:"makale",
        component:AdminArticleComponent,
        children:[
          {
            path:"liste",
            component:ArticleListComponent
          },
         {
           path:"ekle",
           component:ArticleAddComponent
         },
         {
           path:"güncelle/:id",
           component:ArticleUpdateComponent
         }

        ]
      }


    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
