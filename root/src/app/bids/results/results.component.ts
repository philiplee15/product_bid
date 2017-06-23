import { Component, OnInit } from '@angular/core';
import { BidsService } from './../bids.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results:any = {};
  allLatestBids:any = {
    p1:"",
    p2:"",
    p3:""
  };

  constructor(private _bidsService:BidsService, private _router:Router) {
    _bidsService.observedResults.subscribe(
      (results)=>{this.results=results},
      (err)=>{},
      ()=>{}
    )
  }

  ngOnInit() {
  }
  logout(){
    this._bidsService.logoutService()
    .then(data=>{
      this._router.navigate(['']);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  updatedResults(){
    this._bidsService.updatedResults(this.allLatestBids);
  }
  startBid(){
    this.allLatestBids.p1 = "";
    this.allLatestBids.p2 = "";
    this.allLatestBids.p3 = "";
    this.updatedResults();
    this._router.navigate(['/bids']);
  }

}
