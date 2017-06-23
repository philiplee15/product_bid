import { Component, OnInit } from '@angular/core';
import { BidsService } from './bids.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {
  product1bids:any = [];
  product2bids:any = [];
  product3bids:any = [];
  allLatestBids:any = {
    p1:0,
    p2:0,
    p3:0
  };
  product1hasbid:boolean = false;
  product2hasbid:boolean = false;
  product3hasbid:boolean = false;
  constructor(private _bidsService:BidsService, private _router: Router) {
    _bidsService.updatedResults(this.allLatestBids);
  }

  ngOnInit() {
  }
  receiveBidP1(event){
    console.log("We're in P1 event handler.");
    var newbid = {user:"",value:""};
    this._bidsService.getUser()
    .then(data=>{
      this.product1hasbid=true;
      newbid.user=data.username;
      newbid.value = event;
      this.allLatestBids.p1 = newbid;
      this.product1bids.push(newbid);
    })
    .catch(err=>{console.log(err)})
  }
  receiveBidP2(event){
    console.log("We're in P2 event handler.");
    var newbid = {user:"",value:""};
    this._bidsService.getUser()
    .then(data=>{
      this.product2hasbid=true;
      newbid.user=data.username;
      newbid.value = event;
      this.allLatestBids.p2 = newbid;
      this.product2bids.push(newbid);
    })
    .catch(err=>{console.log(err)})
  }
  receiveBidP3(event){
    console.log("We're in P3 event handler.");
    var newbid = {user:"",value:""};
    this._bidsService.getUser()
    .then(data=>{
      this.product3hasbid=true;
      newbid.user=data.username;
      newbid.value = event;
      this.allLatestBids.p3 = newbid;
      this.product3bids.push(newbid);
    })
    .catch(err=>{console.log(err)})
  }
  endBid() {
    if(!this.product1hasbid || !this.product2hasbid || !this.product3hasbid){
      alert("Cannot end the bid. One product does not have any bid yet.");
    } else {
      console.log("We can route to result page now.");
      this._router.navigate(['/results'])
    }
  }
  updatedResults(){
    this._bidsService.updatedResults(this.allLatestBids);
  }

  logout() {
    this._bidsService.logoutService()
    .then(data=>{
      console.log("Logging out to home page");
      this._router.navigate(['']);
    })
    .catch(err=>{console.log(err)});
  }
}
