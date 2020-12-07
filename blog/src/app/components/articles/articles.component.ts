import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input() totalCount:number | undefined;
  @Input()  articles:Article[] | undefined;
  @Input()  page:number | undefined;
  @Input()  pageSize:number | undefined;
  @Input()  loadingItem:number | undefined;
  defult_article:string="assets/article_empty.jpg"
  constructor(private router:Router,private route:ActivatedRoute,private articleService:ArticleService) { }

  createRange(){
    var item:number[]=[];
    for(var i=1;i<=Number(this.loadingItem);i++){
      item.push(i)
    }
    return item;
  }

  ngOnInit(): void {
  }
  pageChanged(event: any){
    this.articleService.loading=true;
    this.page=event;
    this.router.navigateByUrl(`/sayfa/${this.page}`);
  }
}
