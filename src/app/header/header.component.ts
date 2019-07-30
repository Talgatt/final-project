import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  input;
  movies: any = [];
  sidenav: boolean;

  constructor(public _api: ApiService) { }

  ngOnInit() {
  }
  onClick(){

    this._api.getMovieList(this.input).subscribe(res => {
      this.movies = res;
      console.log(this.movies);
    })
  }
  
 
  showSideNavMenu (){
    this.sidenav = !this.sidenav;
  }


}
