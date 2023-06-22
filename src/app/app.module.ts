import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationComponent } from './Components/application/application.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import{MatSidenavModule} from '@angular/material/sidenav';
import{MatMenuModule} from '@angular/material/menu';
import{MatIconModule} from '@angular/material/icon';
import{MatDividerModule} from '@angular/material/divider';
import{MatListModule} from '@angular/material/list';
import{MatToolbarModule} from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './Components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
