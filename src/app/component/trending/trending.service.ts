import { HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http:HttpClient) {
  }
  url="https://api.themoviedb.org/3/trending/all/week?api_key=2d570c323ecb9eb740fc19b9a167b7eb"
  public getTrending()
  {
    return this.http.get(this.url);
  }
}