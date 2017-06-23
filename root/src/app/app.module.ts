import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BidsComponent } from './bids/bids.component';
import { Product1Component } from './bids/product1/product1.component';
import { Product2Component } from './bids/product2/product2.component';
import { Product3Component } from './bids/product3/product3.component';
import { ResultsComponent } from './bids/results/results.component';

import { HttpService } from './http.service';
import { BidsService } from './bids/bids.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BidsComponent,
    Product1Component,
    Product2Component,
    Product3Component,
    ResultsComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [HttpService, BidsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
