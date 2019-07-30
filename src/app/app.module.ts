import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { SlideshowModule } from 'ng-simple-slideshow';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './api.service';
import { PopularComponent } from './popular/popular.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FamilyComponent } from './family/family.component';
import { HeaderComponent } from './header/header.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { HighratedComponent } from './highrated/highrated.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopularComponent,
    FamilyComponent,
    HeaderComponent,
    UpcomingComponent,
    HighratedComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    SlideshowModule,
    Ng2CarouselamosModule,
    NgbModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
