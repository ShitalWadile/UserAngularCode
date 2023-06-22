import { ApplicationService } from 'src/app/Shared/application.service';
import { Component, OnInit } from '@angular/core';
import { Application } from './application.module';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})



export class ApplicationComponent implements OnInit {
  allApplicationData:any;
  applicationObj : Application =new Application;

  constructor(private http:ApplicationService){
   
  }

  ngOnInit(): void {

      this.http.getApplicationData().subscribe(res=>{
        this.allApplicationData=res;
      })
    }
  }