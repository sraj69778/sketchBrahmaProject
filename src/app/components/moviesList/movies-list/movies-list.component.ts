import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesServiceService } from 'src/app/service/movies-service.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(private movieService: MoviesServiceService,private route:Router) { }
  public movieData: any;
  public imgUrlHost = 'https://image.tmdb.org/t/p/original/'
  results: any = [];
  p = 1;
  moviePage=true;
  searchElement:any="";
  routesActive=true;
  ngOnInit(): void {
    this.getMoviesPageWise();
  }


  onClickSearchButton(name:any){
    this.moviePage=false;
    
    console.log("Search",name);  
    this.route.navigate(['/search/'+name])
  }
  getMoviesPageWise() {

    for (let i = 1; i < 100; i++) {
      this.movieService.getMovies(i).subscribe(data => {
        //console.log("Data movie", data);
        this.movieData = data
        this.movieData.results.forEach((element: any) => {
          this.results.push(element)
        })
        console.log("Data movie", this.movieData.results.forEach((element: any) => {
          console.log(element);

        }));

      })
    }
    console.log("Results", this.results);

  }


  getMovieByID(id: any) {
    this.movieService.getMovieByClick(id).subscribe(data => {
      console.log("Data movie", data);

    })

  }
  onImageClick(data: any) {
    console.log("Data movie", data);
    this.moviePage=false;
    this.route.navigate(['/getmovies/'+data])
  }


}
