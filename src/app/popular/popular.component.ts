import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  movies: Array<Object>;

  constructor(private _api: ApiService){

  }
  // onClick(){

  //   this._api.getMovieList(this.input).subscribe(res => {
  //     this.movies = res;
  //     console.log(this.movies);
  //   })
  // }

  

  ngOnInit() {
    this._api.getPopular().subscribe((res: any) => {
      this.movies = res;
      console.log(this.movies);
    })
  }

}
