import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs';

@Injectable()
export class BidsService {

  constructor(private _http: Http) { }
  getUser(){
    return this._http.get('/getuser').map(response=>response.json()).toPromise();
  }
  logoutService() {
    return this._http.get('/logout').map(response=>response).toPromise();
  }
  observedResults = new BehaviorSubject(null);
    updatedResults(results){
    this.observedResults.next(results);
  }
}
