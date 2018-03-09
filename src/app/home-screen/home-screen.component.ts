import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import * as RecordRTC from 'recordrtc';
import { AfterViewInit, Directive, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})

export class HomeScreenComponent implements OnInit {

  @ViewChild('video') video: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // this.videoElement = document.querySelector('video');
    // navigator.mediaDevices.getUserMedia({ video: true } );
    //
    // navigator.mediaDevices.getUserMedia({}).
    // then(stream).catch(()=>{});
  }

  ngAfterViewInit() {
    // set the initial state of the video
    let video:HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = false;
    video.autoplay = false;
  }

  videoElement;
	name = 'INDIA';
  stream ;
  recordRTC;

	weather = [{
      name: "India",
      climate: "30"
    } ,
    {
      name: "USA",
      climate: "humid"
    }
	]



  // let stream = (sream) => {
  //   window.stream = stream; // make stream available to console
  //   this.videoElement.srcObject = stream;
  // }

  startRecording = () => {
      let mediaConstraints = {
        'video': {
          // 'mandatory': {
          //   'minWidth': 1280,
          //   'minHeight': 720
          // }
        },
        'audio': true
      }

      navigator.mediaDevices
        .getUserMedia(mediaConstraints)
        .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }


  stopRecording() {
    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());
  }


  successCallback(stream: MediaStream) {
      var options = {
        mimeType: 'video/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 128000,
        bitsPerSecond: 128000 // if this line is provided, skip above two
      };
      this.stream = stream;
      this.recordRTC = RecordRTC(stream, options);
      this.recordRTC.startRecording();
      let video: HTMLVideoElement = this.video.nativeElement;
      video.src = window.URL.createObjectURL(stream);
      this.toggleControls();
  }

  toggleControls() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = false;
    video.autoplay = !video.autoplay;
  }

  errorCallback = (err) => {

  }

  processVideo(audioVideoWebMURL) {
    let video: HTMLVideoElement = this.video.nativeElement;
    let recordRTC = this.recordRTC;
    video.src = audioVideoWebMURL;
    this.toggleControls();
    var recordedBlob = recordRTC.getBlob();
    recordRTC.getDataURL(function (dataURL) { });
  }

  download() {
    // this.recordRTC.save('video.webm');
    console.log(this.recordRTC);

    let fd = new FormData();
    fd.append("file", this.recordRTC.blob, 'shrujan.webm');


    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'video/webm');
    headers = headers.set('Accept', 'video/webm');


    this.http.post('/custom-url', fd, { headers: headers }).subscribe(() => {
        console.log('yo');
    })

    // custom redirection
    this.router.navigate(['/model-form']);
  }
}
