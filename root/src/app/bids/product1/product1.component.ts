import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  @Input() bidsArray;
  @Input() latest;
  @Output() sendBidEvent = new EventEmitter();
  bid:any = { value: ""}
  errors = "";
  searchVal;
  searchList = [];
  constructor() { }

  ngOnInit() {
  }
  sendBid(){
    var greatest = 0;
    for(var i=0; i<this.bidsArray.length; i++){
      if(this.bidsArray[i].value>greatest){
        greatest = this.bidsArray[i].value;
      }
    }
    if(this.bid.value> greatest){
      this.errors = "";
      this.sendBidEvent.emit(this.bid.value);
    } else {
      this.errors="Value must be greater than highest bid.";
    }

  }
  search(){
    var arr = [];
    for(var i = 0; i<this.bidsArray.length; i++){
      if(this.bidsArray[i].value==this.searchVal){
        arr.push(this.bidsArray[i]);
      }
    }
    this.searchList = arr;
  }
}
