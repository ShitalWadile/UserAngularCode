import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './Components/application/application.component';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';

const routes: Routes = [
  {path:'application', component:ApplicationComponent},
  {path:'sidebar', component:SidebarComponent},
  {path:'home', component:HomeComponent},
  {path:'',redirectTo:'sidebar',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
