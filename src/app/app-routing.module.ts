import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchMoviesComponent } from './components/searchMovies/search-movies/search-movies.component';
import { SelctedMovieComponent } from './components/selcted-movie/selcted-movie.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'search/:name',
    component:SearchMoviesComponent
  },
  {
    path:'getmovies/:id',
    component:SelctedMovieComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
