import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd} from "@angular/router";
enum MainPagies{
  home=1,
  about_me=2,
  contact=3
}

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  pageActive: MainPagies = 1;
  constructor(private router: Router) {
    this.router.events.subscribe(x=>{
      if(x instanceof NavigationEnd)
      {
        if(x.url.indexOf("home")>0)
        {
          this.pageActive=MainPagies.home
        }
        else if(x.url.indexOf("hakkimda")>0)
        {
          this.pageActive=MainPagies.about_me
        }
        else if(x.url.indexOf("iletisim")>0)
        {
          this.pageActive=MainPagies.contact
        }
        else
        {
          this.pageActive=MainPagies.home
        }
      }

    })

  }

  ngOnInit(): void {
  }
    search(searchText:string) {
          if (searchText == "" || searchText == null || searchText == undefined) {
               return false;
            }

      return this.router.navigateByUrl(`/arama/sayfa/1?s=${searchText}`);

    }
}
