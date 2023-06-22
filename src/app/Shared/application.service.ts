import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
 allApplicationData:any;
  constructor(private http:HttpClient) { }

  baseServerUrl="https://localhost:5001/api/Application" ;

  getApplicationData(){
    return this.http.get("https://localhost:5001/api/Application");
  }
}
