import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesServiceService } from 'src/app/service/movies-service.service';

@Component({
  selector: 'app-selcted-movie',
  templateUrl: './selcted-movie.component.html',
  styleUrls: ['./selcted-movie.component.css']
})
export class SelctedMovieComponent implements OnInit {

  constructor( private activatedRoute:ActivatedRoute , private movieService:MoviesServiceService ,private route:Router) { }
  searchElement:any="";
  movieID:any;
  movieDetails:any;
  public imgUrlHost = 'https://image.tmdb.org/t/p/original/'

  ngOnInit(): void {
    console.log(" Insearch element11",this.activatedRoute.snapshot.params);
    this.movieID =this.activatedRoute.snapshot.params;
    console.log(" Insearch element",this.movieID.id);
    this.getMovieByID(this.movieID.id)
  }

  getMovieByID(id: any) {
    this.movieService.getMovieByClick(id).subscribe(data => {
      console.log("Data movie", data);
      this.movieDetails=data
    })

  }
  onClickArrow(){
    this.route.navigate(['/']);
  }

}
