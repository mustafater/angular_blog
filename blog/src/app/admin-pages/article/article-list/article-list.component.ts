import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  displayedColumns: string[] = ["picture","title","commentCount","category","publishDate","viewCount"];
  dataSorce: any;
  articles:Article[] | any ;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  constructor(public articleService:ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticleswithoutPg().subscribe(data=>{

      this.articles=data;
      this.dataSorce= new MatTableDataSource<Article>(data);
      this.dataSorce.paginator=this.paginator;

    });

  }
  deleteArticle(id:number) {
    this.articleService.deleteArticle(id).subscribe(data => {
      let article = this.articles.filter((x: { id: number; }) => x.id == id)[0];
      let index = this.articles.indexOf(article);

      this.articles.splice(index, 1);
      this.dataSorce = new MatTableDataSource<Article>(this.articles);

      this.dataSorce.paginator = this.paginator;
    });
  }


}
