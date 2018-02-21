import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.css']
  // host: {
  //   '(document:click)': 'closeDropdowns($event)',
  // }
})
export class CrudOperationsComponent  {

  languageName = '';
  selectedOrder = 'Ascending';
  showDropdown = false;
  languagesList = ['English', 'Hindi', 'Konkani'];


  pushLang = function () {
    console.log('hello', this.languageName);
    if (this.languageName !== '') {
      this.languagesList.push(this.languageName);
      this.languageName = '';
      // detect changes on the current component
      // this.cd is an injected ChangeDetector instance
      // this.cd.detectChanges();
    }

  };

  deleteLang = function (langObj) {
    let index = _.findIndex(this.languagesList, (obj) => {
        return obj === langObj;
    });

    if (index !== -1) {
        this.languagesList.splice(index, 1);
    }
    console.log(this.languagesList);
  };

  userSelectedOrder = function (order) {
    this.selectedOrder = order;
    this.showDropdown = false;
  }
}
