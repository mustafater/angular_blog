import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  page:number=1;
  pageSize:number=5;
  articles: Article[] | any;
  totalCount: number | any;
  loadingItem:number=5;
  ajax:any;
  constructor(private articleServices:ArticleService, private router:Router, private route:ActivatedRoute, ) { }
  ngOnDestroy(): void {
    if(this.ajax!=null) this.ajax.unsubscribe();
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      if(params.get("page")){
        this.page =Number(params.get("page"));
      }
    if(Number(this.totalCount)>0){
       if(Number(this.totalCount)>this.page*this.pageSize){
        this.loadingItem=5;

       }else{
        this.loadingItem=Number(this.totalCount)-(this.page-1)*this.pageSize;
       }

      }
      this.articles=[];
      this.totalCount=0;
      this.ajax= this.articleServices.getArticles(this.page,this.pageSize).subscribe(data =>{

        this.articles=data.articles;
        this.totalCount=data.totalCount
      })
    });


  }
}
