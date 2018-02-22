import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.selectedLang = 'Select Lang';
  }

  languagesList = ['English', 'Hindi', 'Konkani'];
  selectedLang = '';

  saveData = function (formVal) {
    let userData = formVal;
    userData.selectedLang = this.selectedLang;
    console.log(userData);
  }
}
