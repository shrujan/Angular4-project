import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CrudOperationsComponent } from './crud-operations/crud-operations.component';

// custom utlis
import { sortPipe } from './Utilities/custom-pipes';



@NgModule({
  declarations: [
    sortPipe,
    AppComponent,
    HomeScreenComponent,
    CrudOperationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    	{
    		path: 'weather',
    		component: HomeScreenComponent
    	},
      {
        path: 'crud',
        component: CrudOperationsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
