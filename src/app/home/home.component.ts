import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // input;
  // movies: any = [];
  
  constructor(public _api: ApiService) { }

  ngOnInit() {
  }

  // onClick(){

  //   this._api.getMovieList(this.input).subscribe(res => {
  //     this.movies = res;
  //     console.log(this.movies);
  //   })
  // }

 



}
