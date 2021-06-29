import { Component, Input, OnInit } from '@angular/core';
import { WarService } from './war.service';

@Component({
  selector: 'app-war',
  templateUrl: './war.component.html',
  styleUrls: ['./war.component.css']
})
export class WarComponent implements OnInit {

  map = new Map<string, string>();
  posters=[]
  name=[]
  discription=[]
  ngOnInit(): void {
 }
@Input() value:number; 
 constructor(public user:WarService) {
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
