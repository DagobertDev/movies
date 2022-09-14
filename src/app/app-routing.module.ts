import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component"
import { MovieComponent } from "./components/movie/movie.component"
import { MoviesComponent } from "./components/movies/movies.component"

const routes: Routes = [
  {path: 'movies/:id', component: MovieComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: MoviesComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
