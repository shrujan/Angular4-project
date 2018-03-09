import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';


@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  constructor(private _commonService: CommonServiceService) { }

  ngOnInit() {
    this.selectedLang = 'Select Lang';
  }

  languagesList = ['English', 'Hindi', 'Konkani'];
  selectedLang = '';
  name = this._commonService.getName();

  saveData = function (formVal) {
    let userData = formVal;
    userData.selectedLang = this.selectedLang;
    console.log(userData);
  }
}
