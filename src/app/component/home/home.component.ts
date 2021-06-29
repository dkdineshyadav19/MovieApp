import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  posters=[];
  name =[];
  discription=[];
  myindex:number=0;

  ngOnInit(): void {
 }
@Input() value:number; 
 constructor(public user:HomeService) {
   this.passuser(this.user);
   this.myindex =Math.floor(Math.random()*20);
    //console.log(this.myindex)
  }
  passdata(data)
  {
    for(let i=0;i<20;i++)
    {
      
    this.posters.push(data.results[i].backdrop_path);
    this.name.push(data.results[i].name);
    this.discription.push(data.results[i].overview);
    
    }
    
    
  }
  passuser(user)
  {
   this.user.getPopular().subscribe(data=>{
    //console.warn(data)
     this.passdata(data)
   })
  }
}
