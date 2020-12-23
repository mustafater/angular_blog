import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-category-articles',
  templateUrl: './category-articles.component.html',
  styleUrls: ['./category-articles.component.css']
})
export class CategoryArticlesComponent implements OnInit {
  page:number=1;
  pageSize:number=5;
  articles: Article[] | any;
  totalCount: number | any;
  loadingItem:number=5;
  ajax:any;
  categoryId:number | any;
  constructor(public route:ActivatedRoute,public articleService:ArticleService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
    if(this.ajax !=null) this.ajax.unsubscribe();
    this.articleService.loading=true;
    this.articles=[];
    this.totalCount=0;
    if(params.get("id")) this.categoryId=Number(params.get("id"));
    if(params.get("page")) this.page =Number(params.get("page"));
    this.ajax= this.articleService.getArticlesWithCategory(this.categoryId,this.page,this.pageSize)
    .subscribe(data =>{this.articles=data.articles;
      this.totalCount=data.totalCount;
     });

    });

  }

}
