import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  login(user) {
    return this._http.post('/login', user).map(response=>response.json()).toPromise();
  }
}
