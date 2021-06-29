import { Component, Input, OnInit } from '@angular/core';
import { ActionMoviesService } from './action-movies.service';

@Component({
  selector: 'app-action-movies',
  templateUrl: './action-movies.component.html',
  styleUrls: ['./action-movies.component.css']
})
export class ActionMoviesComponent implements OnInit {

  map = new Map<string, string>();
  posters=[]
  name=[]
  discription=[]
  ngOnInit(): void {
 }
@Input() value:number; 
 constructor(public user:ActionMoviesService) {
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
