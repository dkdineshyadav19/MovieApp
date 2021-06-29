import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanceService {

  constructor(private http:HttpClient) {
  }
  url="https://api.themoviedb.org/3/discover/movie?api_key=2d570c323ecb9eb740fc19b9a167b7eb&sort_by=popularity.desc&include_video=true&page=1&with_genres=10749"
  public getTop()
  {
    return this.http.get(this.url);
  }
}