import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { FamilyComponent } from './family/family.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "popular", component: PopularComponent},
  {path: "family", component: FamilyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
