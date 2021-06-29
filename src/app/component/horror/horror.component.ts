import { Component, Input, OnInit } from '@angular/core';
import { HorrorService } from './horror.service';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.css']
})
export class HorrorComponent implements OnInit {

  map = new Map<string, string>();
  posters=[]
  name=[]
  discription=[]
  ngOnInit(): void {
 }
@Input() value:number; 
 constructor(public user:HorrorService) {
   this.passuser(this.user);
  
  }
  
  passdata(data)
  {
    for(let i=0;i<20;i++)
    {
      this.map.set(data.results[i].backdrop_path,data.results[i].name );
     // console.log(this.map)
    }
  }
  passuser(user)
  {
   this.user.getTop().subscribe(data=>{
   // console.warn(data)
     this.passdata(data)
   })
  }
}
