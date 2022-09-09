import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  getMovieURL="https://api.themoviedb.org/3/movie/popular?api_key=8f432ccafe2f221dd9be9ab53b526e80&language=en-US&page="
  getMovieBySearchURL="https://api.themoviedb.org/3/search/movie?api_key=8f432ccafe2f221dd9be9ab53b526e80&language=en-US&page=1&include_adult=false&query="
  getMovieOnClickURL1="https://api.themoviedb.org/3/movie/";
  getMovieOnClickURL2 ="?language=en-US&api_key=8f432ccafe2f221dd9be9ab53b526e80"
  constructor(private http:HttpClient) { }

  getMovies(pageNumber:any){
    return this.http.get(this.getMovieURL+pageNumber);
  }
  getMoviesBySearch(movieName:any){
    console.log("Movie name in service",movieName);
    
    return this.http.get(this.getMovieBySearchURL+movieName.name);
  }
  getMovieByClick(movieId:any){
    return this.http.get(this.getMovieOnClickURL1+movieId+this.getMovieOnClickURL2);
  
  }
}
