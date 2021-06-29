import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NEtflixOriginalsComponent } from './component/netflix-originals/netflix-originals.component';



const routes: Routes = [

  {
    path:'Originals',component:NEtflixOriginalsComponent
  }, 
  {
    path:'',component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
