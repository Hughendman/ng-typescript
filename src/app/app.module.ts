import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule } from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { Typescript1Component } from './typescript1/typescript1.component';
import { Es6Component } from './es6/es6.component';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ts' },
  { path: 'ts', component: Typescript1Component},
  { path: 'es6', component: Es6Component}
];

@NgModule({
  declarations: [
    AppComponent,
    Typescript1Component,
    Es6Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
