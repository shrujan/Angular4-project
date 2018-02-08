import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
// imports: [BrowserModule, HttpModule]

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	name = 'shrujan'

	weather = [{
		name: "India",
		climate: "30"		
	} ,
	{
		name: "USA",
		climate: "humid"
	}
	]
}
