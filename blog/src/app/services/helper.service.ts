import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(public httpClient:HttpClient) {  }
   apiUrl:string="https://localhost:44360/api/helper";
   sendContantMail(contact:Contact){
    return this.httpClient.post(`${this.apiUrl}/sendContantMail`,contact);
   }

}
