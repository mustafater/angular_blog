import { Component, Input, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators,AbstractControl } from '@angular/forms'
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup | any;
  loading:boolean | any;
  success:boolean | any;
  info:string | any=null;



  title:string="iletişim";
  constructor(public helper:HelperService) { }

  ngOnInit(): void {
    this.contactForm= new FormGroup({
      name:new FormControl("",Validators.required),
      email:new FormControl("",[Validators.required,Validators.email]),
      subject: new FormControl("", Validators.required),
      message:new FormControl("",[Validators.required,Validators.minLength(5)])


    });
  }
  GetValidationMessages({ f, name }: { f: AbstractControl; name: string; }):string | any {
    if (f.errors) {
      for (let errroName in f.errors) {
        if (errroName == "required") return `${name} alanı boş bırakılamaz`;
        else if (errroName == "email") return `email formatı yanlış`;
        else if (errroName == "minlength")
          return `${name} alanız en az 5 karakter olmalıdır.`;
      }
    }
  }

  get getControls() {
    return this.contactForm.controls;
  }

  onSubmit():false| any{
    if(this.contactForm.valid){
      this.loading=true;
      this.helper.sendContantMail(this.contactForm.value).subscribe(data =>{
        this.success=true;
        this.contactForm.reset();
        this.info="Mesajınız alınmıştır. Geri dönüş yapılacaktır"

      },error=>{
        this.loading=false;
        this.success=false;
        this.info="bir sorun ile karsılastık, lütfen yeniden deneyin."

      })
    }else{
      return false;
    }
  }
}
