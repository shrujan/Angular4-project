import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core'; // this
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private router: Router) { }


  ngAfterViewInit() {
    // if you wnat to redirect to a particlar screen from the begining of the app
    // ALL the commented lines are required to redirect the user to new screen by default

    this.router.navigate(['/login']);

  }



  title = 'Angular';
}



