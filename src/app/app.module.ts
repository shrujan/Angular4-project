import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, Directive, ViewChild } from '@angular/core';

// ReactiveFormsModule - module based form
// FormsModule - template based form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CrudOperationsComponent } from './crud-operations/crud-operations.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';
import { BaseConverterComponent } from './base-converter/base-converter.component';
import { LogInComponent } from './log-in/log-in.component';

// services import
import { CommonServiceService } from './services/common-service.service';

// custom utlis
import { sortPipe } from './Utilities/custom-pipes';


@NgModule({
  declarations: [
    sortPipe,
    AppComponent,
    HomeScreenComponent,
    CrudOperationsComponent,
    TemplateDrivenFormsComponent,
    ModelDrivenFormsComponent,
    BaseConverterComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
      },
      {
        path: 'base-calc',
        component: BaseConverterComponent
      },
      {
        path: 'login',
        component: LogInComponent
      }
    ])
  ],
  providers: [CommonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
