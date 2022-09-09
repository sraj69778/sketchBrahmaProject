import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application';
  constructor(private router:Router) { }
  searchElement:any="";
  routesActive=true;

  onClickSearchButton(search:any){
    this.routesActive=false;
    
    console.log("Search",search);  
    this.router.navigate(['/search/'+search])
  }

  ngOnInit(): void {
    console.log("HELLOSeach element");
    
  }


}
