import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComedyService {
  constructor(private http:HttpClient) {
  }
  url="https://api.themoviedb.org/3/discover/movie?api_key=2d570c323ecb9eb740fc19b9a167b7eb&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=35"
  public getTop()
  {
    return this.http.get(this.url);
  }
}