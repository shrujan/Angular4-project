import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-model-driven-forms',
  templateUrl: './model-driven-forms.component.html',
  styleUrls: ['./model-driven-forms.component.css']
})

export class ModelDrivenFormsComponent implements OnInit {


  form;

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('Shrujan'),
      lastName: new FormControl(''),
      selectedLang: new FormControl('')
    });
  }
  languagesList = ['English', 'Hindi', 'Konkani'];
  selectedLang = 'Select Now';

  onSubmit = function (user) {
    // user.selectedLang = this.selectedLang;

    console.log(user)
  }

}
