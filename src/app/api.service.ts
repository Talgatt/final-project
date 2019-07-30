import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  search: any;

  constructor(public _http : HttpClient) { }
  
  getMovieList(query){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=6261ea3e117e2656a18f191409e668d9&language=en-US&query=${this.search}&page=1&include_adult=false`
    console.log(url)
    return this._http.get(url)
    
  }

  getPopular(){
    const urlpop = 'https://api.themoviedb.org/3/movie/upcoming?api_key=6261ea3e117e2656a18f191409e668d9&language=en-US';
    console.log(urlpop);
    return this._http.get(urlpop); 
  }


}
