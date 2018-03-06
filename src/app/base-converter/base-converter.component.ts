import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-base-converter',
  templateUrl: './base-converter.component.html',
  styleUrls: ['./base-converter.component.css']
})
export class BaseConverterComponent implements OnInit {

  form;
  triggered = '';


  ngOnInit() {
    this.form = new FormGroup({
      decimalNumber: new FormControl(""),
      binaryNumber: new FormControl(""),
      hexaNumber: new FormControl("")

    });
  }


  decimalChanged = function (oldValue, newVal, trigger) {

    if (newVal !== '') {
      this.form.patchValue({ binaryNumber: parseInt(newVal, 10).toString(2) });

    } else {
      this.form.patchValue({ binaryNumber: "" });

    }

  }

  b = 0;

  binaryChanged = function (oldVal, newVal, trigger) {
    this.b ++;

    if (this.b === 1) {
      if (newVal !== '') {
        this.form.patchValue({ decimalNumber: parseInt(newVal, 2).toString(10)});
      } else {
        // this.form.patchValue({ decimalNumber: "");
      }


      this.b = 0;
    }


  }







}
