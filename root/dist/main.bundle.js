webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bids_bids_component__ = __webpack_require__("../../../../../src/app/bids/bids.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bids_results_results_component__ = __webpack_require__("../../../../../src/app/bids/results/results.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        pathMatch: 'full',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] // ==> <<app-login></app-login>
    },
    {
        path: 'bids',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_3__bids_bids_component__["a" /* BidsComponent */]
    },
    {
        path: 'results',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_4__bids_results_results_component__["a" /* ResultsComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bids_bids_component__ = __webpack_require__("../../../../../src/app/bids/bids.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bids_product1_product1_component__ = __webpack_require__("../../../../../src/app/bids/product1/product1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bids_product2_product2_component__ = __webpack_require__("../../../../../src/app/bids/product2/product2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bids_product3_product3_component__ = __webpack_require__("../../../../../src/app/bids/product3/product3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bids_results_results_component__ = __webpack_require__("../../../../../src/app/bids/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bids_bids_service__ = __webpack_require__("../../../../../src/app/bids/bids.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__bids_bids_component__["a" /* BidsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__bids_product1_product1_component__["a" /* Product1Component */],
            __WEBPACK_IMPORTED_MODULE_9__bids_product2_product2_component__["a" /* Product2Component */],
            __WEBPACK_IMPORTED_MODULE_10__bids_product3_product3_component__["a" /* Product3Component */],
            __WEBPACK_IMPORTED_MODULE_11__bids_results_results_component__["a" /* ResultsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_13__bids_bids_service__["a" /* BidsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bids/bids.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n  height:200px;\r\n  width: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bids/bids.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Bid Now!</h1><button (click)=\"logout()\" style=\"float:right;\">Logout</button>\n\n<app-product1\n(sendBidEvent)=\"receiveBidP1($event)\"\n[bidsArray]=\"product1bids\"\n[latest]=\"allLatestBids\"></app-product1>\n\n<app-product2\n(sendBidEvent)=\"receiveBidP2($event)\"\n[bidsArray]=\"product2bids\"\n[latest]=\"allLatestBids\"></app-product2>\n\n<app-product3\n(sendBidEvent)=\"receiveBidP3($event)\"\n[bidsArray]=\"product3bids\"\n[latest]=\"allLatestBids\"></app-product3>\n\n<button type=\"button\" (click)=\"endBid()\" style=\"position:absolute; bottom: 300px;\">End Bid</button>\n"

/***/ }),

/***/ "../../../../../src/app/bids/bids.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bids_service__ = __webpack_require__("../../../../../src/app/bids/bids.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BidsComponent = (function () {
    function BidsComponent(_bidsService, _router) {
        this._bidsService = _bidsService;
        this._router = _router;
        this.product1bids = [];
        this.product2bids = [];
        this.product3bids = [];
        this.allLatestBids = {
            p1: 0,
            p2: 0,
            p3: 0
        };
        this.product1hasbid = false;
        this.product2hasbid = false;
        this.product3hasbid = false;
        _bidsService.updatedResults(this.allLatestBids);
    }
    BidsComponent.prototype.ngOnInit = function () {
    };
    BidsComponent.prototype.receiveBidP1 = function (event) {
        var _this = this;
        console.log("We're in P1 event handler.");
        var newbid = { user: "", value: "" };
        this._bidsService.getUser()
            .then(function (data) {
            _this.product1hasbid = true;
            newbid.user = data.username;
            newbid.value = event;
            _this.allLatestBids.p1 = newbid;
            _this.product1bids.push(newbid);
        })
            .catch(function (err) { console.log(err); });
    };
    BidsComponent.prototype.receiveBidP2 = function (event) {
        var _this = this;
        console.log("We're in P2 event handler.");
        var newbid = { user: "", value: "" };
        this._bidsService.getUser()
            .then(function (data) {
            _this.product2hasbid = true;
            newbid.user = data.username;
            newbid.value = event;
            _this.allLatestBids.p2 = newbid;
            _this.product2bids.push(newbid);
        })
            .catch(function (err) { console.log(err); });
    };
    BidsComponent.prototype.receiveBidP3 = function (event) {
        var _this = this;
        console.log("We're in P3 event handler.");
        var newbid = { user: "", value: "" };
        this._bidsService.getUser()
            .then(function (data) {
            _this.product3hasbid = true;
            newbid.user = data.username;
            newbid.value = event;
            _this.allLatestBids.p3 = newbid;
            _this.product3bids.push(newbid);
        })
            .catch(function (err) { console.log(err); });
    };
    BidsComponent.prototype.endBid = function () {
        if (!this.product1hasbid || !this.product2hasbid || !this.product3hasbid) {
            alert("Cannot end the bid. One product does not have any bid yet.");
        }
        else {
            console.log("We can route to result page now.");
            this._router.navigate(['/results']);
        }
    };
    BidsComponent.prototype.updatedResults = function () {
        this._bidsService.updatedResults(this.allLatestBids);
    };
    BidsComponent.prototype.logout = function () {
        var _this = this;
        this._bidsService.logoutService()
            .then(function (data) {
            console.log("Logging out to home page");
            _this._router.navigate(['']);
        })
            .catch(function (err) { console.log(err); });
    };
    return BidsComponent;
}());
BidsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-bids',
        template: __webpack_require__("../../../../../src/app/bids/bids.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bids/bids.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bids_service__["a" /* BidsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bids_service__["a" /* BidsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], BidsComponent);

var _a, _b;
//# sourceMappingURL=bids.component.js.map

/***/ }),

/***/ "../../../../../src/app/bids/bids.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BidsService = (function () {
    function BidsService(_http) {
        this._http = _http;
        this.observedResults = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    BidsService.prototype.getUser = function () {
        return this._http.get('/getuser').map(function (response) { return response.json(); }).toPromise();
    };
    BidsService.prototype.logoutService = function () {
        return this._http.get('/logout').map(function (response) { return response; }).toPromise();
    };
    BidsService.prototype.updatedResults = function (results) {
        this.observedResults.next(results);
    };
    return BidsService;
}());
BidsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BidsService);

var _a;
//# sourceMappingURL=bids.service.js.map

/***/ }),

/***/ "../../../../../src/app/bids/product1/product1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bids/product1/product1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col\" style=\"float:left; width: 30%;\">\n  <div class=\"product\">\n    <img src=\"https://angular.io/assets/images/logos/angular/angular.png\" alt=\"#\" style=\"height: 200px; width: auto;\">\n    <form (submit)=\"sendBid()\">\n      <input\n          required\n          type=\"number\"\n          name=\"bid\"\n          min=\"{{latest.p1.value}}\"\n          [(ngModel)]=\"bid.value\">\n      <span *ngIf=\"bid.invalid && bid.touched\">Please input valid quote.</span>\n      <input type=\"submit\" value=\"Bid\">\n      <div *ngIf=\"errors!==null\">\n        <p>{{errors}}</p>\n      </div>\n    </form>\n  </div>\n  <p>Current Bids: </p>\n  <div class=\"bid\" style=\"border: 1px solid black; width: 80%; margin-top: 25px;\">\n    <div *ngFor=\"let bid of bidsArray\">\n      <p>\n        <span>{{bid.user}}: </span>\n        <span>{{bid.value}}</span>\n      </p>\n    </div>\n  </div>\n  <br>\n  <div>\n    <form (change)=\"search()\">\n      <input type=\"number\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"searchVal\">\n    </form>\n    <ul>\n      <li *ngFor=\"let result of searchList\">\n        {{result.user}}: {{result.value}}\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bids/product1/product1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Product1Component = (function () {
    function Product1Component() {
        this.sendBidEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.bid = { value: "" };
        this.errors = "";
        this.searchList = [];
    }
    Product1Component.prototype.ngOnInit = function () {
    };
    Product1Component.prototype.sendBid = function () {
        var greatest = 0;
        for (var i = 0; i < this.bidsArray.length; i++) {
            if (this.bidsArray[i].value > greatest) {
                greatest = this.bidsArray[i].value;
            }
        }
        if (this.bid.value > greatest) {
            this.errors = "";
            this.sendBidEvent.emit(this.bid.value);
        }
        else {
            this.errors = "Value must be greater than highest bid.";
        }
    };
    Product1Component.prototype.search = function () {
        var arr = [];
        for (var i = 0; i < this.bidsArray.length; i++) {
            if (this.bidsArray[i].value == this.searchVal) {
                arr.push(this.bidsArray[i]);
            }
        }
        this.searchList = arr;
    };
    return Product1Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], Product1Component.prototype, "bidsArray", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], Product1Component.prototype, "latest", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], Product1Component.prototype, "sendBidEvent", void 0);
Product1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-product1',
        template: __webpack_require__("../../../../../src/app/bids/product1/product1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bids/product1/product1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Product1Component);

//# sourceMappingURL=product1.component.js.map

/***/ }),

/***/ "../../../../../src/app/bids/product2/product2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bids/product2/product2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col\" style=\"float:left; width: 30%;\">\n  <div class=\"product\">\n    <img src=\"https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png\" alt=\"#\" style=\"height: 200px; width: auto;\">\n    <form (submit)=\"sendBid()\">\n      <input\n      required\n      type=\"number\"\n      name=\"value\"\n      min=\"0\"\n      [(ngModel)]=\"bid.value\"\n      #value=\"ngModel\">\n      <input type=\"submit\" value=\"Bid\">\n      <div *ngIf=\"errors!==null\">\n        <p>{{errors}}</p>\n      </div>\n    </form>\n  </div>\n  <p>Current Bids: </p>\n  <div class=\"bid\" style=\"border: 1px solid black; width: 80%; margin-top: 25px;\">\n    <div *ngFor=\"let bid of bidsArray\">\n      <p>\n        <span>{{bid.user}}: </span>\n        <span>{{bid.value}}</span>\n      </p>\n    </div>\n  </div>\n  <br>\n  <div>\n    <form (change)=\"search()\">\n      <input type=\"number\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"searchVal\">\n    </form>\n    <ul>\n      <li *ngFor=\"let result of searchList\">\n        {{result.user}}: {{result.value}}\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bids/product2/product2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Product2Component = (function () {
    function Product2Component() {
        this.sendBidEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.bid = { value: "" };
        this.errors = "";
        this.searchList = [];
    }
    Product2Component.prototype.ngOnInit = function () {
    };
    Product2Component.prototype.sendBid = function () {
        var greatest = 0;
        for (var i = 0; i < this.bidsArray.length; i++) {
            if (this.bidsArray[i].value > greatest) {
                greatest = this.bidsArray[i].value;
            }
        }
        if (this.bid.value > greatest) {
            this.errors = "";
            this.sendBidEvent.emit(this.bid.value);
        }
        else {
            this.errors = "Value must be greater than highest bid.";
        }
    };
    Product2Component.prototype.search = function () {
        var arr = [];
        for (var i = 0; i < this.bidsArray.length; i++) {
            if (this.bidsArray[i].value == this.searchVal) {
                arr.push(this.bidsArray[i]);
            }
        }
        this.searchList = arr;
    };
    return Product2Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], Product2Component.prototype, "bidsArray", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], Product2Component.prototype, "latest", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], Product2Component.prototype, "sendBidEvent", void 0);
Product2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-product2',
        template: __webpack_require__("../../../../../src/app/bids/product2/product2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bids/product2/product2.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Product2Component);

//# sourceMappingURL=product2.component.js.map

/***/ }),

/***/ "../../../../../src/app/bids/product3/product3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bids/product3/product3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col\" style=\"float:left; width: 30%;\">\n  <div class=\"product\">\n    <img src=\"https://vuejs.org/images/logo.png\" alt=\"#\" style=\"height: 200px; width: auto;\">\n    <form (submit)=\"sendBid()\">\n      <input\n      required\n      type=\"number\"\n      name=\"bid\"\n      min=\"{{latest.p3.value}}\"\n      [(ngModel)]=\"bid.value\">\n      <input type=\"submit\" value=\"Bid\">\n      <div *ngIf=\"errors!==null\">\n        <p>{{errors}}</p>\n      </div>\n    </form>\n  </div>\n  <p>Current Bids: </p>\n  <div class=\"bid\" style=\"border: 1px solid black; width: 80%; margin-top: 25px;\">\n    <div *ngFor=\"let bid of bidsArray\">\n      <p>\n        <span>{{bid.user}}: </span>\n        <span>{{bid.value}}</span>\n      </p>\n    </div>\n  </div>\n  <br>\n  <div>\n    <form (change)=\"search()\">\n      <input type=\"number\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"searchVal\">\n    </form>\n    <ul>\n      <li *ngFor=\"let result of searchList\">\n        {{result.user}}: {{result.value}}\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bids/product3/product3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Product3Component = (function () {
    function Product3Component() {
        this.sendBidEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.errors = "";
        this.bid = { value: "" };
        this.searchList = [];
    }
    Product3Component.prototype.ngOnInit = function () {
    };
    Product3Component.prototype.sendBid = function () {
        var greatest = 0;
        for (var i = 0; i < this.bidsArray.length; i++) {
            if (this.bidsArray[i].value > greatest) {
                greatest = this.bidsArray[i].value;
            }
        }
        if (this.bid.value > greatest) {
            this.errors = "";
            this.sendBidEvent.emit(this.bid.value);
        }
        else {
            this.errors = "Value must be greater than highest bid.";
        }
    };
    Product3Component.prototype.search = function () {
        var arr = [];
        for (var i = 0; i < this.bidsArray.length; i++) {
            if (this.bidsArray[i].value == this.searchVal) {
                arr.push(this.bidsArray[i]);
            }
        }
        this.searchList = arr;
    };
    return Product3Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], Product3Component.prototype, "bidsArray", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], Product3Component.prototype, "latest", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], Product3Component.prototype, "sendBidEvent", void 0);
Product3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-product3',
        template: __webpack_require__("../../../../../src/app/bids/product3/product3.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bids/product3/product3.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Product3Component);

//# sourceMappingURL=product3.component.js.map

/***/ }),

/***/ "../../../../../src/app/bids/results/results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bids/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>User ended the Bid.</h1>\n  <button style=\"float:right\" type=\"button\" (click)=\"logout()\">Logout</button>\n  <p>Highest Bidder per Product:</p>\n</div>\n<div class=\"\" style=\"display:block;\">\n  <img src=\"https://angular.io/assets/images/logos/angular/angular.png\" alt=\"#\" style=\"float: left; height: 200px; width: 200px; text-align: center;\">\n  <span> {{results.p1.user}} <br> {{results.p1.value}} </span>\n</div>\n\n<div class=\"\" style=\"display:block;\">\n  <img src=\"https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png\" alt=\"#\" style=\"float: left; height: 200px; width: 200px; text-align: center;\">\n  <span> {{results.p2.user}} <br> {{results.p2.value}} </span>\n</div>\n\n<div class=\"\" style=\"display:block;\">\n  <img style=\"display: inline-block\" src=\"https://vuejs.org/images/logo.png\" alt=\"#\" style=\"float: left; height: 200px; width: 200px; text-align: center;\">\n  <span> {{results.p3.user}} <br> {{results.p3.value}} </span>\n</div>\n\n<button (click)=\"startBid()\" style=\"position:absolute; bottom: 300px;\">Start Bid</button>\n"

/***/ }),

/***/ "../../../../../src/app/bids/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bids_service__ = __webpack_require__("../../../../../src/app/bids/bids.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultsComponent = (function () {
    function ResultsComponent(_bidsService, _router) {
        var _this = this;
        this._bidsService = _bidsService;
        this._router = _router;
        this.results = {};
        this.allLatestBids = {
            p1: "",
            p2: "",
            p3: ""
        };
        _bidsService.observedResults.subscribe(function (results) { _this.results = results; }, function (err) { }, function () { });
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent.prototype.logout = function () {
        var _this = this;
        this._bidsService.logoutService()
            .then(function (data) {
            _this._router.navigate(['']);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ResultsComponent.prototype.updatedResults = function () {
        this._bidsService.updatedResults(this.allLatestBids);
    };
    ResultsComponent.prototype.startBid = function () {
        this.allLatestBids.p1 = "";
        this.allLatestBids.p2 = "";
        this.allLatestBids.p3 = "";
        this.updatedResults();
        this._router.navigate(['/bids']);
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-results',
        template: __webpack_require__("../../../../../src/app/bids/results/results.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bids/results/results.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bids_service__["a" /* BidsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bids_service__["a" /* BidsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ResultsComponent);

var _a, _b;
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.login = function (user) {
        return this._http.post('/login', user).map(function (response) { return response.json(); }).toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 0 auto;\">\n  <form (submit)=\"onSubmit()\">\n    <span>Your name:</span>\n    <input\n      type=\"text\"\n      name=\"name\"\n      [(ngModel)]=\"user.username\"\n      #name = \"ngModel\"\n    ><br>\n    <input type=\"submit\" value=\"Enter\">\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.user = { username: "" };
        this.errors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._httpService.login(this.user)
            .then(function (data) {
            var arr = [];
            if (data.errors) {
                for (var key in data.errors) {
                    arr.push(data.errors[key].message);
                    _this.errors = arr;
                }
            }
            else {
                console.log("login success");
                _this._router.navigate(['/bids']);
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map