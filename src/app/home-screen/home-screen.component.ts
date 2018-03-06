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
    this.videoElement = document.querySelector('video');
    navigator.mediaDevices.getUserMedia({ video: true } );

    navigator.mediaDevices.getUserMedia({}).
    then(stream).catch(()=>{});
  }

  videoElement;
	name = 'INDIA';

	weather = [{
      name: "India",
      climate: "30"
    } ,
    {
      name: "USA",
      climate: "humid"
    }
	]



  let stream = (sream) => {
    window.stream = stream; // make stream available to console
    this.videoElement.srcObject = stream;
  }

}
