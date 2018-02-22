import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// ReactiveFormsModule - module based form
// FormsModule - template based form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CrudOperationsComponent } from './crud-operations/crud-operations.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';

// custom utlis
import { sortPipe } from './Utilities/custom-pipes';



@NgModule({
  declarations: [
    sortPipe,
    AppComponent,
    HomeScreenComponent,
    CrudOperationsComponent,
    TemplateDrivenFormsComponent,
    ModelDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    	{
    		path: 'weather',
    		component: HomeScreenComponent
    	},
      {
        path: 'crud',
        component: CrudOperationsComponent
      },
      {
        path: 'template-form',
        component: TemplateDrivenFormsComponent
      },
      {
        path: 'model-form',
        component: ModelDrivenFormsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
