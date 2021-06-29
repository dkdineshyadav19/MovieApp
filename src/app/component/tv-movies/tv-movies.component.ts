import { Component, Input, OnInit } from '@angular/core';
import { TvMoviesService } from './tv-movies.service';

@Component({
  selector: 'app-tv-movies',
  templateUrl: './tv-movies.component.html',
  styleUrls: ['./tv-movies.component.css']
})
export class TvMoviesComponent implements OnInit {

  map = new Map<string, string>();
  posters=[]
  name=[]
  discription=[]
  ngOnInit(): void {
 }
@Input() value:number; 
 constructor(public user:TvMoviesService) {
   this.passuser(this.user);
  
  }
  
  passdata(data)
  {
    for(let i=0;i<20;i++)
    {
      this.map.set(data.results[i].backdrop_path,data.results[i].name );
      //console.log(this.map)
    }
  }
  passuser(user)
  {
   this.user.getTop().subscribe(data=>{
    //console.warn(data)
     this.passdata(data)
   })
  }
}
