import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  movies;

  constructor(private _api: ApiService) { 
    this._api.getUpcoming().subscribe(res =>{
      this.movies = res;
      console.log(this.movies);
    });
  }

  ngOnInit() {
  }

}
