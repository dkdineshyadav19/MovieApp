import { HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OriginalsService {

  constructor(private http:HttpClient) {
  }
  url="https://api.themoviedb.org/3/discover/tv?api_key=2d570c323ecb9eb740fc19b9a167b7eb&with_networks=213"
  getdata()
  {
    return this.http.get(this.url)
  }
}
