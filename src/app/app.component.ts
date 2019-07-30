import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // sidenav: boolean;
 
  // showSideNavMenu (){
  //   this.sidenav = !this.sidenav;
  // }
  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  movies;

  constructor(config: NgbCarouselConfig, public _api: ApiService) {
    // customize default values of carousels used by this component tree
    config.interval = 2500;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.wrap = true;

    this._api.getUpcoming().subscribe(res =>{
      this.movies = res;
      console.log(this.movies);
    });
  }

  

 }
