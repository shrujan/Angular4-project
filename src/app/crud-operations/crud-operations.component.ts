import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.css']
})
export class CrudOperationsComponent  {

  languageName = '';
  LanguagesList = ['English', 'Hindi', 'Konkani'];

  pushLang = function () {
    console.log('hello', this.languageName);
    this.LanguagesList.push(this.languageName);
  };

  deleteLang = function (langObj) {
    this.LanguagesList.push(this.languageName);
  };
}
