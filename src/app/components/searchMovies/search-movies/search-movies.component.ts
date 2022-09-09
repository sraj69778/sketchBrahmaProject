import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesServiceService } from 'src/app/service/movies-service.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  constructor( private activatedRoute:ActivatedRoute , private movieService:MoviesServiceService ,private route:Router) { }
  searchElement:any="";
  movieName:any;
  movieResults:any;
  public imgUrlHost = 'https://image.tmdb.org/t/p/original/'


  ngOnInit(): void {
    console.log(" Insearch element11",this.activatedRoute.snapshot.params);
    this.movieName =this.activatedRoute.snapshot.params;
    console.log(" Insearch element",this.movieName);
    this.getMovieDetailsOnSearch(this.movieName)
  }

  getMovieDetailsOnSearch(movieName:any){
    console.log("Movie",movieName);
    
    this.movieService.getMoviesBySearch(movieName).subscribe(data=>{
      console.log("Movie detaisl",data);
      this.movieResults=data
      
    })
  }
  onClickArrow(){
    this.route.navigate(['/']);
  }

}
