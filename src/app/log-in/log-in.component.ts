import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {


  form;


  constructor(private _commonService: CommonServiceService) {
    this.form = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit = (formData) => {
    // let fd = new FormData();
    // fd.append("username", this.username);
    // fd.append("password", this.password);

    console.log(formData);
    this._commonService.setName(formData.username);
  }
}
