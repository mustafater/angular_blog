import { Component, OnInit } from '@angular/core';
import { Archive } from 'src/app/models/archive';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-menu-archive',
  templateUrl: './menu-archive.component.html',
  styleUrls: ['./menu-archive.component.css']
})
export class MenuArchiveComponent implements OnInit {
  archives:Archive[]=[];
  constructor(public articleServive:ArticleService) { }

  ngOnInit(): void {
    this.articleServive.getArticlesArchive().subscribe(
      data =>{
        this.archives =data;
      },
      error=>{
        console.log("bir hata meydana geldi"+error);
      }
    )
  }
}
