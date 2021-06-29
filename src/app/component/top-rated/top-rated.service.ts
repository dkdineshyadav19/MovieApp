import { HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopRatedService {
  constructor(private http:HttpClient) {
  }
  url="https://api.themoviedb.org/3/movie/top_rated?api_key=2d570c323ecb9eb740fc19b9a167b7eb&language=en-US&page=1"
  public getTop()
  {
    return this.http.get(this.url);
  }
}
//https://api.themoviedb.org/3/movie/top_rated?api_key=2d570c323ecb9eb740fc19b9a167b7eb&language=en-US&page=1