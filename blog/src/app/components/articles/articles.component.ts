import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.css"]
})
export class ArticlesComponent implements OnInit {
  @Input() totalCount:number | any;
  @Input()  articles:Article[] | any;
  @Input()  page:number | any;
  @Input()  pageSize:number | any;
  @Input()  loadingItem: boolean| any;
  @Input()  typeList:string | any;
  default_article: string = "assets/article_empty.jpg";
  constructor(public router:Router,private route:ActivatedRoute,public  articleService:ArticleService) { }

  createRange(){
    var item:number[]=[];
    for(var i=1;i<=this.loadingItem;i++){
      item.push(i)
    }
    return item;
  }

  ngOnInit(): void {
    this.articleService.loading=true;
  }
  pageChanged(event: any){
    this.articleService.loading=true;
    this.page=event;
    switch (this.typeList) {
      case "home":
        this.router.navigateByUrl(`/sayfa/${this.page}`);
        break;
      case "category":
      let categoryName =this.route.snapshot.paramMap.get("name");
      let categoryId =this.route.snapshot.paramMap.get("id");
      this.router.navigateByUrl(`/kategori/${categoryName}/${categoryId}/sayfa/${this.page}`);

      break;
      case "search":
        let searchText= this.route.snapshot.queryParamMap.get("s");
        this.router.navigateByUrl(`/arama/sayfa/${this.page}?s=${searchText}`);

        break;
      default:
        break;
    }
  }
}
