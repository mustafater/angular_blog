import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule} from '../app-routing.module';
import {MaterialModule} from '../modules/material/material.module';
import {ComponentsModule} from '../components/components.module';
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { AdminNavComponent } from '../nav/admin-nav/admin-nav.component';
import {MainModule} from '../pages/main.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminArticleComponent } from './article/admin-article/admin-article.component';
import { ArticleAddComponent } from './article/article-add/article-add.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleUpdateComponent } from './article/article-update/article-update.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [AdminLayoutComponent,CKEditorModule,
    AdminNavComponent, AdminHomeComponent, AdminArticleComponent, ArticleAddComponent, ArticleListComponent, ArticleUpdateComponent],
  imports: [
    CommonModule,AppRoutingModule,ComponentsModule,MaterialModule,MainModule,CKEditorModule
  ]
})
export class AdminModule { }
