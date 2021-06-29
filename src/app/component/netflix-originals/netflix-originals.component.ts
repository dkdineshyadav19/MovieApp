
import { Component, Input, OnInit } from '@angular/core';
import { OriginalsService } from "./originals.service";
@Component({
  selector: 'app-netflix-originals',
  templateUrl: './netflix-originals.component.html',
  styleUrls: ['./netflix-originals.component.css']
})
export class NEtflixOriginalsComponent implements OnInit {
  map = new Map<string, string>();
  posters=[]
  name=[]
  discription=[]
  ngOnInit(): void {
 }
@Input() value:number; 
 constructor(public user:OriginalsService) {
   this.passuser(this.user);
  }
  passdata(data)
  {
    for(let i=0;i<20;i++)
    {
      this.map.set(data.results[i].poster_path,data.results[i].name );
     //console.log(this.map)
    //this.posters.push(data.results[i].poster_path);
    //this.name.push(data.results[i].name);
    //this.discription.push(data.results[i].overview);
    }
    //console.log(this.posters);
  }
  public passuser(user)
  {
   this.user.getdata().subscribe(data=>{
   // console.warn(data)
     this.passdata(data)
   })
  }
}
