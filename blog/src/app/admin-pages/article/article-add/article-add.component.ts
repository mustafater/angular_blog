import { Component, OnInit,} from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import {FormControl,FormGroup,Validator,AbstractControl, Validators } from '@angular/forms'
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { MyvalidationService } from 'src/app/services/myvalidation.service';
import { Router } from '@angular/router';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {
  fileData:File | any=null;
  picture:string | any=null;
  articleForm:FormGroup | any;
  success:boolean | any ;
  loading:boolean | any;
  info:string | unknown;
  categoies:Category[] |any;
  public onReady( editor: { ui: { getEditableElement: () => { (): any; new(): any; parentElement: { (): any; new(): any; insertBefore: { (arg0: any, arg1: any): void; new(): any; }; }; }; view: { toolbar: { element: any; }; }; }; } ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
}


  constructor(public articleService:ArticleService,
     public categoryService:CategoryService,private router:Router,
     public myvalitador:MyvalidationService) { }

  ngOnInit(): void {
    this.getCategory();
    this.articleForm= new FormGroup({
      title:new FormControl("makale 1", Validators.required),
      contentSummary:new FormControl("makale özet 1", Validators.required),
      contentMain:new FormControl("" , Validators.required),
      category:new FormControl("",Validators.required),
      Picture: new FormControl("")
    });
  }
  onSubmit(){
    if(this.articleForm.valid){
       this.loading=true;
       this.articleService.addArticle(this.articleForm.value).subscribe(data =>{
        this.success=true;
        this.router.navigateByUrl("/admin/makale/liste")

       },error=>{
        this.success=false;
        this.info="bir hata meydana geldi"+JSON.stringify(error.message);
       });

    }
  }
  get getControls(){
    return this.articleForm.controls;
  }
  displayCategoryName(category:Category){
    return category.name;
  }
  upload(files:File){
    this.fileData=files.target.files[0];
    var formData:any= new formData();
    formData.uppend("picture", this.fileData)
    this.articleService.saveArticlePicture(formData).subscribe(data=>{

      console.log( data.path);
      this.picture=data.path;
      this.articleForm.controls.picture.setValue(this.picture)
    });
  }
 getCategory(){
   this.categoryService.getCategories().subscribe(data =>{
    this.categoies=data;
   })
 }

}
