import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  movies;


  // onClick(){

  //   this._api.getMovieList(this.input).subscribe(res => {
  //     this.movies = res;
  //     console.log(this.movies);
  //   })
  // }

  constructor(private _api: ApiService) { 
    this._api.getPopular().subscribe(res =>{
      this.movies = res;
      console.log(this.movies);
    });
  }

  ngOnInit() {

  }

}
