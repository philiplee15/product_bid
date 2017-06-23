import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpService } from './../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {username:""};
  errors: string[] = [];
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this._httpService.login(this.user)
    .then(data=> {
      var arr = [];
      if(data.errors) {
        for(var key in data.errors){
          arr.push(data.errors[key].message);
          this.errors = arr;
        }
      }else {
        console.log("login success");
        this._router.navigate(['/bids']);
      }
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
