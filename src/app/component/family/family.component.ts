import { Component, Input, OnInit } from '@angular/core';
import { FamilyService } from "./family.service";

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  map = new Map<string, string>();
  posters=[]
  name=[]
  discription=[]
  ngOnInit(): void {
 }
@Input() value:number; 
 constructor(public user:FamilyService) {
   this.passuser(this.user);
  }
  passdata(data)
  {
    for(let i=0;i<20;i++)
    {
      this.map.set(data.results[i].poster_path,data.results[i].name );
     // console.log(this.map)
    //this.posters.push(data.results[i].poster_path);
    //this.name.push(data.results[i].name);
    //this.discription.push(data.results[i].overview);
    }
    //console.log(this.posters);
  }
  passuser(user)
  {
   this.user.getTrending().subscribe(data=>{
   // console.warn(data)
     this.passdata(data)
   })
  }
}
