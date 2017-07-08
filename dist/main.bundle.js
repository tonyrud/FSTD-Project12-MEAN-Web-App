webpackJsonp([1,4],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(16);
/* harmony export (immutable) */ __webpack_exports__["a"] = slideIn;
/* unused harmony export slideInList */
// import the required animation functions from the angular animations module

function slideIn(duration, delay, timing, staggerDuration) {
    if (duration === void 0) { duration = 400; }
    if (delay === void 0) { delay = 0; }
    if (timing === void 0) { timing = 'ease-in-out'; }
    if (staggerDuration === void 0) { staggerDuration = 200; }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('slideIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])('* => *', [
            // starting item position
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["query"])('.slide-in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 0, transform: 'translateY(40px)' })),
            // final item position
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["query"])('.slide-in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["stagger"])(staggerDuration.toString() + "ms", [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])(duration.toString() + "ms " + delay.toString() + "ms " + timing, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 1, transform: 'translateY(0)' })),
            ])),
            // Reset the state of item
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["query"])('.slide-in', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])('*'))
            ])
        ])
    ]);
}
function slideInList() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('listAnimation', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])('* => *', [
            // starting item position
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["query"])(':enter', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 0, transform: 'translateY(40px)' }), { optional: true }),
            // final item position
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["query"])(':enter', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["stagger"])('200ms', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('800ms .1s ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 1, transform: 'translateY(0)' })),
            ]), { optional: true }),
        ])
    ]);
}
//# sourceMappingURL=slideInOut.animation.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var user = localStorage.getItem('currentUser');
        if (user) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=_auth.guard.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__requests_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(http, router, _request) {
        this.http = http;
        this.router = router;
        this._request = _request;
    }
    AuthenticationService.prototype.login = function (user) {
        return this._request.apiPost('login', user)
            .map(function (response) {
            // login successful if there's an auth token in the response
            var user = response.user;
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.notAuthenticated = function () {
        this.router.navigate(['/login']);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__requests_service__["a" /* RequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__requests_service__["a" /* RequestsService */]) === "function" && _c || Object])
], AuthenticationService);

var _a, _b, _c;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_trails_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_locations_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_router_animations__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_alert_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LocationsComponent = (function () {
    function LocationsComponent(_trailsService, _locationsService, _usersService, router, _alertService) {
        this._trailsService = _trailsService;
        this._locationsService = _locationsService;
        this._usersService = _usersService;
        this.router = router;
        this._alertService = _alertService;
        this.selectedDistance = '25';
        this.selectedLimit = '5';
        this.searchValue = '';
        this.distances = [
            { value: '10', viewValue: '10' },
            { value: '25', viewValue: '25' },
            { value: '50', viewValue: '50' },
            { value: '100', viewValue: '100' }
        ];
        this.resultsLimits = [
            { value: '5', viewValue: '5' },
            { value: '25', viewValue: '25' },
            { value: '50', viewValue: '50' }
        ];
    }
    LocationsComponent.prototype.ngOnInit = function () {
        this.user = this._usersService.getSignedUser();
    };
    LocationsComponent.prototype.onSearchChange = function () {
        var _this = this;
        this._trailsService.searchTrails("?limit=" + this.selectedLimit + "&q[activities_activity_type_name_eq]=hiking&q[city_cont]=" + this.searchValue + "&radius=" + this.selectedDistance).subscribe(function (trails) {
            _this.locations = trails.places;
        });
    };
    LocationsComponent.prototype.onInput = function (value) {
        this.searchValue = value;
        this.onSearchChange();
    };
    LocationsComponent.prototype.onRange = function (value) {
        this.selectedDistance = value;
        this.onSearchChange();
    };
    LocationsComponent.prototype.onTotalResults = function (value) {
        this.selectedLimit = value;
        this.onSearchChange();
    };
    LocationsComponent.prototype.saveLocation = function (location) {
        var _this = this;
        this._locationsService.saveLocation(location)
            .subscribe(function (savedLocation) {
            _this._alertService.showMessage('success', 'Success', 'Location saved to your profile');
        }, function (error) {
            _this._alertService.showMessage('error', 'Error', 'There was an issue saving location');
        });
    };
    LocationsComponent.prototype.locationClicked = function (location) {
        var query = this._locationsService.createLocationQuery(location);
        query.prevSearch = this.searchValue;
        this.router.navigate(['/view-location'], {
            queryParams: query
        });
    };
    LocationsComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        // this._locationsService.unsubscribe();
    };
    return LocationsComponent;
}());
LocationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'locations',
        template: __webpack_require__(343),
        styles: [__webpack_require__(265)],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__animations_router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_trails_service__["a" /* TrailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_trails_service__["a" /* TrailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_locations_service__["a" /* LocationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_locations_service__["a" /* LocationsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_alert_service__["a" /* AlertService */]) === "function" && _e || Object])
], LocationsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=locations.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_locations_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_router_animations__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_slideInOut_animation__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLocationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserLocationsComponent = (function () {
    function UserLocationsComponent(_locationsService, router, _alertService) {
        this._locationsService = _locationsService;
        this.router = router;
        this._alertService = _alertService;
        this.items = [];
        this.msgs = [];
    }
    UserLocationsComponent.prototype.ngOnInit = function () {
        // this.items = ['hey', 'there', 'this is animated']
        this.loadUserLocations();
    };
    UserLocationsComponent.prototype.showSuccess = function () {
        this._alertService.showMessage('error', 'Error message', 'Order submitted');
    };
    UserLocationsComponent.prototype.removeLocation = function (location, event) {
        var _this = this;
        event.stopPropagation();
        this._locationsService.deleteUserLocation(location).subscribe(function (savedLocation) {
            _this.loadUserLocations();
            _this._alertService.showMessage('success', 'Success', 'Location removed from your profile');
        }, function (error) {
            _this._alertService.showMessage('error', 'Error', 'There was an issue removing a location');
        });
    };
    UserLocationsComponent.prototype.locationClicked = function (location) {
        var query = this._locationsService.createLocationQuery(location);
        this.router.navigate(['/view-location'], {
            queryParams: query
        });
    };
    UserLocationsComponent.prototype.loadUserLocations = function () {
        var _this = this;
        this._locationsService.getUserLocations()
            .subscribe(function (data) {
            _this.userLocations = data.locations;
        });
    };
    return UserLocationsComponent;
}());
UserLocationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-locations',
        template: __webpack_require__(348),
        styles: [__webpack_require__(270)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__animations_router_animations__["a" /* routerTransition */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__animations_slideInOut_animation__["a" /* slideIn */])(700, 100, 'ease-out', 200)
        ],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_locations_service__["a" /* LocationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_locations_service__["a" /* LocationsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], UserLocationsComponent);

var _a, _b, _c;
//# sourceMappingURL=user-locations.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trails_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_router_animations__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_slideInOut_animation__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewLocationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewLocationComponent = (function () {
    function ViewLocationComponent(route, _trailsService) {
        this.route = route;
        this._trailsService = _trailsService;
    }
    ViewLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            _this._trailsService.searchTrails("?lat=" + params.lat + "&limit=5&lon=" + params.lon + "&q[activities_activity_type_name_eq]=hiking&radius=1").subscribe(function (location) {
                _this.location = location.places[0];
                _this.location.image = params.image;
                console.log(_this.location);
            });
        });
    };
    return ViewLocationComponent;
}());
ViewLocationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'view-component',
        template: __webpack_require__(349),
        styles: [__webpack_require__(271)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__animations_router_animations__["a" /* routerTransition */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__animations_slideInOut_animation__["a" /* slideIn */])(1000, 100, 'ease-out', 300)
        ],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_trails_service__["a" /* TrailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_trails_service__["a" /* TrailsService */]) === "function" && _b || Object])
], ViewLocationComponent);

var _a, _b;
//# sourceMappingURL=view-location.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 176;


/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(79);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
var APP_CONFIG = {
    loggedIn: false,
    appName: 'Hiking Application',
    sassVariablesPath: '~styles/styles.scss',
    devServerPort: 4200,
    googleSearchKey: 'AIzaSyB5DDZRmFPZj-3cOvg01TtaTh19RsMl-Yw'
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GuardsModule = (function () {
    function GuardsModule() {
    }
    return GuardsModule;
}());
GuardsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__auth_guard__["a" /* AuthGuard */]
        ],
        declarations: []
    })
], GuardsModule);

//# sourceMappingURL=guards.module.js.map

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

//# sourceMappingURL=location.interface.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requests_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trails_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__locations_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alert_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ServicesModule = (function () {
    function ServicesModule() {
    }
    return ServicesModule;
}());
ServicesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__requests_service__["a" /* RequestsService */],
            __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__trails_service__["a" /* TrailsService */],
            __WEBPACK_IMPORTED_MODULE_5__locations_service__["a" /* LocationsService */],
            __WEBPACK_IMPORTED_MODULE_6__alert_service__["a" /* AlertService */]
        ]
    })
], ServicesModule);

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(338),
        styles: [__webpack_require__(260)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_services_module__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_shared_shared_module__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_material_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_guards_module__ = __webpack_require__(187);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// my modules






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* routedComponents */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__components_shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__services_services_module__["a" /* ServicesModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["b" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__material_material_module__["a" /* MyMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_11__guards_guards_module__["a" /* GuardsModule */]
        ],
        providers: [],
        exports: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_locations_locations_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_forgotpassword_forgotpassword_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_resetpassword_resetpassword_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_view_location_view_location_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_locations_user_locations_component__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routedComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'search-locations', component: __WEBPACK_IMPORTED_MODULE_6__components_locations_locations_component__["a" /* LocationsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'view-location', component: __WEBPACK_IMPORTED_MODULE_9__components_view_location_view_location_component__["a" /* ViewLocationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'forgot-password', component: __WEBPACK_IMPORTED_MODULE_7__components_forgotpassword_forgotpassword_component__["a" /* ForgotpasswordComponent */] },
    { path: 'account/reset/:token', component: __WEBPACK_IMPORTED_MODULE_8__components_resetpassword_resetpassword_component__["a" /* ResetpasswordComponent */] },
    { path: 'account/saved-locations', component: __WEBPACK_IMPORTED_MODULE_10__components_user_locations_user_locations_component__["a" /* UserLocationsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // if no paths match, redirect to home
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
    })
], AppRoutingModule);

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */],
    __WEBPACK_IMPORTED_MODULE_7__components_forgotpassword_forgotpassword_component__["a" /* ForgotpasswordComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components_resetpassword_resetpassword_component__["a" /* ResetpasswordComponent */]
];
//# sourceMappingURL=app.routing.module.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.message = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to message service subject
        this.alertService.getMessage().subscribe(function (message) {
            // clear previous message data
            _this.message = [];
            // check if message data exists
            if (message) {
                _this.message.push(message);
            }
        });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'alert',
        template: "<p-growl [(value)]=\"message\"></p-growl>",
        styles: ['']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_material_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_form_card_form_card_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locations_locations_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__locations_location_location_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_location_view_location_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_locations_user_locations_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__alert_alert_component__ = __webpack_require__(193);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__material_material_module__["a" /* MyMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["RouterModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["GrowlModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__forms_form_card_form_card_component__["a" /* FormCardComponent */],
            __WEBPACK_IMPORTED_MODULE_4__locations_locations_component__["a" /* LocationsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__locations_location_location_component__["a" /* LocationComponent */],
            __WEBPACK_IMPORTED_MODULE_8__view_location_view_location_component__["a" /* ViewLocationComponent */],
            __WEBPACK_IMPORTED_MODULE_9__user_locations_user_locations_component__["a" /* UserLocationsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__alert_alert_component__["a" /* AlertComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__forms_form_card_form_card_component__["a" /* FormCardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__locations_location_location_component__["a" /* LocationComponent */],
            __WEBPACK_IMPORTED_MODULE_11__alert_alert_component__["a" /* AlertComponent */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotpasswordComponent = (function () {
    function ForgotpasswordComponent(_formBuilder, _user) {
        this._formBuilder = _formBuilder;
        this._user = _user;
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
        this.form = this._formBuilder.group({
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]]
        });
    };
    ForgotpasswordComponent.prototype.forgotSubmit = function (form, event) {
        this._user.forgotPassword(this.form.value).subscribe(function (msg) {
            console.log(msg);
        }, function (error) {
            console.log('error in reset', error);
        });
    };
    return ForgotpasswordComponent;
}());
ForgotpasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(339),
        styles: [__webpack_require__(261)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _b || Object])
], ForgotpasswordComponent);

var _a, _b;
//# sourceMappingURL=forgotpassword.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormCardComponent = (function () {
    function FormCardComponent() {
        this.primaryClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.secondaryClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showSecondaryBtn = true;
    }
    FormCardComponent.prototype.ngOnInit = function () {
        // turn off secondary button if there is not input
        if (!this.btnSecondary) {
            this.showSecondaryBtn = false;
        }
    };
    FormCardComponent.prototype.submitPrimary = function () {
        this.primaryClicked.emit('primary submitted');
    };
    FormCardComponent.prototype.submitSecondary = function () {
        this.secondaryClicked.emit('secondary submitted');
    };
    return FormCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FormCardComponent.prototype, "formTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FormCardComponent.prototype, "btnPrimary", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FormCardComponent.prototype, "btnSecondary", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FormCardComponent.prototype, "primaryClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FormCardComponent.prototype, "secondaryClicked", void 0);
FormCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'form-card',
        template: __webpack_require__(340),
        styles: [__webpack_require__(262)]
    }),
    __metadata("design:paramtypes", [])
], FormCardComponent);

//# sourceMappingURL=form-card.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_router_animations__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(_usersService) {
        this._usersService = _usersService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.user = this._usersService.getSignedUser();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(341),
        styles: [__webpack_require__(263)],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_location_interface__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_location_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_location_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_locations_service__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationComponent = (function () {
    function LocationComponent(_locationService) {
        this._locationService = _locationService;
        this.saveLocation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._locationService.getLocationImage(this.location.name)
            .subscribe(function (data) {
            // check if images returned
            if (Object.keys(data).length) {
                // check if any items in returned images
                if (data.images.length) {
                    // map over images and return image string
                    _this.location.images = data.images.map(function (image) { return image.media.m; });
                    // set imageLink to first element
                    _this.location.imageLink = _this.location.images[0];
                }
                else {
                    _this.location.imageLink = '';
                }
            }
            else {
                _this.location.imageLink = '';
            }
        });
    };
    LocationComponent.prototype.submitSaveLocation = function (location, event) {
        event.stopPropagation();
        this.saveLocation.emit(location);
    };
    return LocationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_location_interface__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_location_interface__["Location"]) === "function" && _a || Object)
], LocationComponent.prototype, "location", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LocationComponent.prototype, "saveLocation", void 0);
LocationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'location',
        template: __webpack_require__(342),
        styles: [__webpack_require__(264)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_locations_service__["a" /* LocationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_locations_service__["a" /* LocationsService */]) === "function" && _b || Object])
], LocationComponent);

var _a, _b;
//# sourceMappingURL=location.component.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__(40);
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
    function LoginComponent(_formBuilder, _auth, router, _user, _alertService) {
        this._formBuilder = _formBuilder;
        this._auth = _auth;
        this.router = router;
        this._user = _user;
        this._alertService = _alertService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this._auth.logout();
        // send empty user to reset header observable
        this._user.sendUser();
        this.loginForm = this._formBuilder.group({
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            password: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]]
        });
    };
    LoginComponent.prototype.loginSubmit = function (form, event) {
        var _this = this;
        this._auth.login(this.loginForm.value).subscribe(function (user) {
            _this._user.sendUser();
            _this.router.navigate(['home']);
        }, function (error) {
            _this._alertService.showMessage('error', 'Error', error.message);
        });
    };
    LoginComponent.prototype.forgotPassword = function (event) {
        this.router.navigate(['forgot-password']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(344),
        styles: [__webpack_require__(266)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(_fb, _users, router, route, _alertService) {
        this._fb = _fb;
        this._users = _users;
        this.router = router;
        this.route = route;
        this._alertService = _alertService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.registerForm = this._fb.group({
            firstName: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            lastName: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            password: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            confirmPassword: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
        });
    };
    RegisterComponent.prototype.registerSubmit = function (event) {
        var _this = this;
        this._users.registerUser(this.registerForm.value).subscribe(function (res) {
            _this._alertService.showMessage('success', 'Success', "You're now registered");
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this._alertService.showMessage('error', 'Error', error.message);
        });
    };
    RegisterComponent.prototype.cancelRegister = function (event) {
        this.router.navigate(['login']);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register',
        template: __webpack_require__(345),
        styles: [__webpack_require__(267)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetpasswordComponent = (function () {
    function ResetpasswordComponent(_formBuilder, _user, _route) {
        this._formBuilder = _formBuilder;
        this._user = _user;
        this._route = _route;
    }
    ResetpasswordComponent.prototype.ngOnInit = function () {
        this.form = this._formBuilder.group({
            password: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            confirmPassword: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]]
        });
    };
    ResetpasswordComponent.prototype.resetPassSubmit = function (form, event) {
        var token = this._route.snapshot.params['token'];
        this._user.resetPassword(this.form.value, token).subscribe(function (msg) {
            console.log(msg);
        }, function (error) {
            console.log('error in reset', error);
        });
    };
    return ResetpasswordComponent;
}());
ResetpasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'resetpassword',
        template: __webpack_require__(346),
        styles: [__webpack_require__(268)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _c || Object])
], ResetpasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=resetpassword.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(_user) {
        this._user = _user;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_config.appName;
        // get signed in user, sets header variable to switch login/logout buttons
        this.user = this._user.getSignedUser();
        // watcher for sign in / signout
        this._user.getUser().subscribe(function (user) {
            // set template user to return user parameter
            _this.user = user;
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shared-header',
        template: __webpack_require__(347),
        styles: [__webpack_require__(269)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_material_module__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__material_material_module__["a" /* MyMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "h1 {\n  color: #333; }\n\n.example-card {\n  width: 400px; }\n\n.example-header-image {\n  background-image: url(\"https://placeholdit.co//i/150x150\");\n  background-size: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".form-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 80%; }\n\n.mat-card-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 390px; }\n\n.mat-card-header .mat-card-title {\n  font-weight: 700;\n  font-size: 1.2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "md-card {\n  transition: .2s ease-in-out;\n  -webkit-transform: scale(1) translateY(0);\n          transform: scale(1) translateY(0);\n  -webkit-transform-origin: center bottom;\n          transform-origin: center bottom;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05); }\n  md-card:hover {\n    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.15), 0 5px 17px 11px rgba(0, 0, 0, 0.05);\n    -webkit-transform: scale(1.01) translateY(-5px);\n            transform: scale(1.01) translateY(-5px); }\n\n.mat-card-content {\n  height: 45px;\n  overflow: hidden; }\n\n.card-image-container {\n  overflow: hidden;\n  height: 195px;\n  margin-bottom: 1em;\n  width: calc(100% + 48px);\n  margin: 0 -24px 16px -24px; }\n  .card-image-container img {\n    margin: auto;\n    width: 100%; }\n\n.mat-card-title {\n  min-height: 56px;\n  font-weight: bold;\n  color: #666;\n  font-size: 1.7em; }\n\n.card-image-container__no-image {\n  width: 100%;\n  height: 100%;\n  background: #eee;\n  font-weight: bold;\n  color: #777;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".mat-input-container {\n  display: block;\n  width: 50%; }\n\n.search-container {\n  margin: 3em auto 2.5em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n.locations {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n\n.location {\n  background: white;\n  margin: 10px 0;\n  width: 32%;\n  cursor: pointer; }\n  .location--wide {\n    width: 100%; }\n  .location__details {\n    padding: 2rem; }\n    .location__details p {\n      line-height: 1.2;\n      margin-bottom: 0; }\n  @media all and (max-width: 850px) {\n    .location {\n      width: 48%; } }\n  @media all and (max-width: 550px) {\n    .location {\n      width: 100%; } }\n\n.no-locations {\n  margin: 3em auto;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".fill-remaining-space {\n  /*This fills the remaining space, by using flexbox.  \r\n  Every toolbar row uses a flexbox row layout. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.active {\n  border-bottom: 2px white solid; }\n\nbutton {\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 1em auto; }\n\n.container__list-items {\n  padding: 1em 0; }\n\n.list-item {\n  position: relative;\n  cursor: pointer;\n  overflow: hidden;\n  border-bottom: 1px rgba(0, 0, 0, 0.15) solid;\n  padding: 1em;\n  transition: .5s ease-in-out;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transform-origin: center bottom;\n          transform-origin: center bottom; }\n  .list-item h4 {\n    color: #333;\n    margin-bottom: .3em; }\n  .list-item:hover {\n    transition: .2s ease-in-out;\n    -webkit-transform: scale(1.01);\n            transform: scale(1.01);\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05); }\n  .list-item:hover .location-button {\n    transition: .2s ease-in-out;\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n\n.location-button {\n  background: #cd4040;\n  color: white;\n  font-weight: bold;\n  transition: .4s ease-in-out;\n  -webkit-transform: translateX(150px);\n          transform: translateX(150px);\n  opacity: 0;\n  position: absolute;\n  right: 27px;\n  top: 50%;\n  margin-top: -17px; }\n  .location-button:hover {\n    background: #9d2727; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".single__hero {\n  height: 600px;\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% calc(100% - 2vw), 0% 100%);\n          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 2vw), 0% 100%); }\n  .single__hero:before {\n    display: block;\n    content: '';\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    right: 0;\n    background: linear-gradient(45deg, #05b3d6 0%, rgba(5, 179, 214, 0) 70%), linear-gradient(135deg, #0958ec 10%, rgba(9, 88, 236, 0) 80%);\n    opacity: 0.6;\n    z-index: 1;\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% calc(100% - 2vw), 0% 100%);\n            clip-path: polygon(0 0, 100% 0, 100% calc(100% - 2vw), 0% 100%); }\n\n.single__image {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute; }\n\n.single__details {\n  background: white;\n  position: relative;\n  padding: 3rem;\n  margin-top: -10rem;\n  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.15); }\n\n.single__map {\n  width: calc(100% + 6rem);\n  max-width: none;\n  margin-top: -3rem;\n  margin-left: -3rem; }\n\n.single__location {\n  margin: 1em 0;\n  background: #111;\n  color: white;\n  display: inline-block;\n  position: relative;\n  padding: 1rem; }\n  @media all and (max-width: 850px) {\n    .single__location {\n      margin-right: 0; } }\n\n.title {\n  word-wrap: break-word;\n  position: relative;\n  z-index: 2;\n  margin: 0;\n  font-size: 40px;\n  z-index: 2;\n  line-height: 1.1;\n  -webkit-transform: skew(0, -3deg);\n          transform: skew(0, -3deg);\n  line-height: 1.1;\n  border-bottom: 0;\n  background-image: linear-gradient(to right, rgba(255, 196, 14, 0.8) 100%, rgba(255, 196, 14, 0.8) 50%); }\n  .title--long {\n    font-size: 30px; }\n  .title:before {\n    content: '';\n    width: 50px;\n    left: 0;\n    top: 0;\n    height: 100%;\n    display: block;\n    position: absolute;\n    z-index: -1;\n    -webkit-transform: skew(-5deg);\n            transform: skew(-5deg); }\n\n.title--single {\n  max-width: 600px;\n  margin-top: -9rem;\n  font-size: 5rem;\n  text-align: center;\n  color: #222;\n  padding: 0.4em; }\n\n.activities-container {\n  color: #333;\n  margin: 4em auto 3em;\n  max-width: 1100px; }\n  .activities-container h5 {\n    font-size: 2em; }\n\n.list-item {\n  margin: 1em auto; }\n  .list-item__name {\n    font-weight: bold;\n    font-size: 1.2em;\n    margin-bottom: 1em;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .list-item__name a {\n      margin-left: .5em;\n      color: #999; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requests_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = (function () {
    function UsersService(_reqService) {
        this._reqService = _reqService;
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    UsersService.prototype.getUsers = function () {
        return this._reqService.apiGet("users");
    };
    UsersService.prototype.registerUser = function (user) {
        return this._reqService.apiPost("register", user);
    };
    UsersService.prototype.forgotPassword = function (email) {
        return this._reqService.apiPost("forgot", email);
    };
    UsersService.prototype.resetPassword = function (password, token) {
        return this._reqService.apiPost("resetPassword", { password: password, token: token });
    };
    // get the currently signed in user from local storage
    UsersService.prototype.getSignedUser = function () {
        return JSON.parse(localStorage.getItem('currentUser'));
    };
    // recieve obs from other components to update user subject
    UsersService.prototype.sendUser = function () {
        this.subject.next(this.getSignedUser());
    };
    // get user subject in any component
    UsersService.prototype.getUser = function () {
        return this.subject.asObservable();
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__requests_service__["a" /* RequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__requests_service__["a" /* RequestsService */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

module.exports = "<alert class=\"alert-containter\"></alert>\r\n<shared-header></shared-header>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-form\">\r\n  <form [formGroup]='form' class=\"card-form__form\" novalidate>\r\n    <form-card \r\n    [formTitle]='\"Forgot Password\"'\r\n    [btnPrimary]='\"Send Email\"'\r\n    (primaryClicked)=\"forgotSubmit(f, $event)\">\r\n      <md-input-container>\r\n        <input name=\"email\" #email formControlName=\"email\" mdInput placeholder=\"email\" type=\"email\" autocomplete=\"off\">\r\n      </md-input-container>\r\n      <div class=\"card-form__form--error error\">\r\n        <div *ngIf=\"form.controls['email'].hasError('required') && form.get('email').touched\">\r\n          Email is required\r\n        </div>\r\n      </div>\r\n    </form-card>\r\n  </form>\r\n</div>"

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-card\">\r\n  <md-card>\r\n      <md-card-header>\r\n        <md-card-title>{{ formTitle }}</md-card-title>\r\n      </md-card-header>\r\n\r\n      <md-card-content>\r\n        <!-- project inputs here -->\r\n        <ng-content class=\"form-card__inputs\"></ng-content>\r\n      </md-card-content>\r\n      <md-card-actions>\r\n        <button (click)=\"submitPrimary()\" md-button>{{ btnPrimary }}</button>\r\n        <button *ngIf=\"showSecondaryBtn\" (click)=\"submitSecondary()\" md-button>{{ btnSecondary }}</button>\r\n      </md-card-actions>\r\n    </md-card>\r\n  </div>"

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "<div class=\"inner\">\r\n  <div *ngIf=\"!user; else loggedIn\">\r\n    <h3 class=\"section-header\">Welcome!</h3>\r\n    <p class=\"section-sub\">Create an account or login and save your searched hiking locations!</p>\r\n  </div>\r\n  <ng-template #loggedIn>\r\n    <h3 class=\"section-header\">Welcome, {{user.firstName}}!</h3>\r\n    <p class=\"section-sub\">You're logged in! Search for locations that interest you, or check the ones you've already saved!</p>\r\n  </ng-template>\r\n</div>"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-header>\r\n    <md-card-title>{{ location.name }}</md-card-title>\r\n    <md-card-subtitle>{{ location.city }}, {{ location.state }}</md-card-subtitle>\r\n  </md-card-header>\r\n  <figure class=\"card-image-container\">\r\n    <img *ngIf=\"location?.imageLink; else noImage\" md-card-image src=\"{{ location?.imageLink }}\">\r\n    <ng-template #noImage>\r\n      <div class=\"card-image-container__no-image\">\r\n        <p>No image found for this location</p>\r\n      </div>\r\n      </ng-template>\r\n  </figure>\r\n  <!--{{ location?.images[0] | json }}-->\r\n  <md-card-content>\r\n    <p *ngIf=\"location.description; else noDesc\">\r\n      {{ location.description.split(' ').slice(0, 15).join(' ') + '...' }}\r\n    </p>\r\n    <ng-template #noDesc>No description</ng-template>\r\n  </md-card-content>\r\n  <md-card-actions>\r\n    <button md-button (click)=\"submitSaveLocation(location, $event)\">LIKE</button>\r\n  </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<div class=\"inner\">\r\n  <h3 class=\"section-header\">Hiking Locations</h3>\r\n  <p class=\"section-sub\">You can search and save locations, as well as filter total results, and distance.</p>\r\n  <div class=\"search-container\">\r\n    <md-input-container class=\"example-full-width\">\r\n      <input [(ngModel)]=\"searchValue\" (input)=\"onInput($event.target.value)\" mdInput placeholder=\"Search for hiking locations\">\r\n    </md-input-container>\r\n    <md-select placeholder=\"Total Results\" (change)=\"onTotalResults($event.value)\" name=\"result\" [(ngModel)]=\"selectedLimit\">\r\n      <md-option *ngFor=\"let result of resultsLimits\" [value]=\"result.value\">\r\n        {{result.viewValue}}\r\n      </md-option>\r\n    </md-select>\r\n    <md-select placeholder=\"Range(miles)\" (change)=\"onRange($event.value)\" name=\"distance\" [(ngModel)]=\"selectedDistance\">\r\n      <md-option *ngFor=\"let distance of distances\" [value]=\"distance.value\">\r\n        {{distance.viewValue}}\r\n      </md-option>\r\n    </md-select>\r\n  </div>\r\n  <div *ngIf=\"locations?.length; else noLocations\" class=\"locations\">\r\n    <location *ngFor=\"let location of locations; index as i;\" class=\"location\" [location]=\"location\" (saveLocation)=\"saveLocation($event)\" (click)=\"locationClicked(location)\"></location>\r\n  </div>\r\n  <ng-template #noLocations><p class=\"no-locations\">No Locations Found</p></ng-template>\r\n</div>"

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-form\">\r\n  <form [formGroup]='loginForm' class=\"card-form__form\" novalidate>\r\n    <form-card [formTitle]='\"Login\"' [btnPrimary]='\"Login\"' (primaryClicked)=\"loginSubmit(f, $event)\" (secondaryClicked)=\"forgotPassword($event)\">\r\n      <md-input-container>\r\n        <input name=\"email\" #email formControlName=\"email\" mdInput placeholder=\"email\" type=\"email\" autocomplete=\"off\">\r\n      </md-input-container>\r\n      <div class=\"card-form__form--error error\">\r\n        <div *ngIf=\"loginForm.controls['email'].hasError('required') && loginForm.get('email').touched\">\r\n          Email is required\r\n        </div>\r\n      </div>\r\n      <md-input-container>\r\n        <input name=\"password\" formControlName=\"password\" mdInput placeholder=\"password\" type=\"password\" autocomplete=\"off\">\r\n      </md-input-container>\r\n      <div class=\"card-form__form--error error\">\r\n        <div *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.get('password').touched\">\r\n          Password is required\r\n        </div>\r\n      </div>\r\n    </form-card>\r\n  </form>\r\n</div>"

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-form\">\r\n  <form [formGroup]='registerForm' class=\"card-form__form\" novalidate>\r\n    <form-card [formTitle]='\"Register an Account\"' [btnPrimary]='\"Signup\"' [btnSecondary]='\"Cancel\"' (primaryClicked)=\"registerSubmit($event)\"\r\n      (secondaryClicked)=\"cancelRegister($event)\">\r\n      <md-input-container>\r\n        <input name=\"firstName\" formControlName=\"firstName\" mdInput placeholder=\"first name\" type=\"text\" autocomplete=\"off\">\r\n      </md-input-container>\r\n      <div class=\"card-form__form--error error\">\r\n        <div *ngIf=\"registerForm.controls['firstName'].hasError('required') && registerForm.get('firstName').touched\">\r\n          First name is required\r\n        </div>\r\n      </div>\r\n      <md-input-container>\r\n        <input formControlName=\"lastName\" mdInput placeholder=\"last name\" type=\"text\" autocomplete=\"off\">\r\n      </md-input-container>\r\n      <md-input-container>\r\n        <input formControlName=\"email\" mdInput placeholder=\"email\" type=\"email\" autocomplete=\"off\">\r\n      </md-input-container>\r\n      <md-input-container>\r\n        <input formControlName=\"password\" mdInput placeholder=\"password\" type=\"password\" autocomplete=\"off\">\r\n      </md-input-container>\r\n      <md-input-container>\r\n        <input formControlName=\"confirmPassword\" mdInput placeholder=\"confrim password\" type=\"password\" autocomplete=\"off\">\r\n      </md-input-container>\r\n    </form-card>\r\n  </form>\r\n</div>"

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-form\">\r\n  <form [formGroup]='form' class=\"card-form__form\" novalidate>\r\n    <form-card \r\n    [formTitle]='\"Reset Your Password\"'\r\n    [btnPrimary]='\"Send Reset\"'\r\n    (primaryClicked)=\"resetPassSubmit(f, $event)\">\r\n      <md-input-container>\r\n        <input name=\"password\" #email formControlName=\"password\" mdInput placeholder=\"password\" type=\"password\" autocomplete=\"off\">\r\n      </md-input-container>\r\n      <div class=\"card-form__form--error error\">\r\n        <div *ngIf=\"form.controls['password'].hasError('required') && form.get('password').touched\">\r\n          Password is required\r\n        </div>\r\n      </div>\r\n      <md-input-container>\r\n        <input name=\"confirm-password\" #email formControlName=\"confirmPassword\" mdInput placeholder=\"confirm password\" type=\"password\" autocomplete=\"off\">\r\n      </md-input-container>\r\n      <div class=\"card-form__form--error error\">\r\n        <div *ngIf=\"form.controls['confirmPassword'].hasError('required') && form.get('confirmPassword').touched\">\r\n          Password is required\r\n        </div>\r\n      </div>\r\n    </form-card>\r\n  </form>\r\n</div>"

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\r\n  <h4 class=\"pointer\" routerLink=\"home\">{{ title }}</h4>\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <div *ngIf=\"!user; else loggedin\" fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm>\r\n    <button md-button routerLink=\"register\" routerLinkActive=\"active\">Register</button>\r\n    <button md-button routerLink=\"login\" routerLinkActive=\"active\">Login</button>\r\n  </div>\r\n  <ng-template #loggedin>\r\n    <button md-button routerLink=\"search-locations\" routerLinkActive=\"active\">Search</button>\r\n    <button md-button routerLink=\"account/saved-locations\" routerLinkActive=\"active\">Saved</button>\r\n    <button md-button [md-menu-trigger-for]=\"menu\" fxHide=\"false\" fxHide.gt-sm>Account</button>\r\n  </ng-template>\r\n</md-toolbar>\r\n<md-menu x-position=\"before\" #menu=\"mdMenu\">\r\n  <button md-menu-item routerLink=\"login\">Logout</button>\r\n</md-menu>"

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = "<!--<p-growl [(value)]=\"msgs\"></p-growl>-->\r\n<div @slideIn class=\"inner\">\r\n  <h3  class=\"section-header slide-in\">Saved Locations</h3>\r\n  <p class=\"section-sub slide-in\">Locations you've saved. Click any to get more details, or delete from your list.</p>\r\n  <div *ngIf=\"userLocations?.length; else noSavedLocations\" class=\"container\">\r\n    <ul class=\"container__list-items\">\r\n      <li  class=\"list-item\" *ngFor=\"let location of userLocations\" (click)=\"locationClicked(location)\">\r\n        <h4>\r\n          {{location.name}}\r\n        </h4>\r\n        <p class=\"location-\">{{location.city}}, {{location.state}}</p>\r\n        <button md-raised-button class=\"location-button\" (click)=\"removeLocation(location, $event)\">Remove</button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <ng-template #noSavedLocations>\r\n    <p class=\"no-locations\">You have no saved locations</p>\r\n  </ng-template>\r\n\r\n</div>"

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports = "<div @slideIn class=\"single\">\r\n  <div class=\"single__hero\">\r\n    <!--<img *ngIf=\"location?.image; else noImage\" src=\"{{location?.image}}\" class=\"single__image\" />-->\r\n      <img src=\"./../../../assets/img/hiking-in-east-greenland-1.jpg\" class=\"single__image\" />\r\n    <!--<ng-template #noImage>\r\n      <img src=\"./../../../assets/img/hiking-in-east-greenland-1.jpg\" class=\"single__image\" />\r\n    </ng-template>-->\r\n    <h2 class=\"title title--single slide-in\">{{ location?.name }}</h2>\r\n  </div>\r\n</div>\r\n<div class=\"single__details inner\">\r\n  <p class=\"single__location\">{{location?.city}}, {{location?.state}} </p>\r\n  <p> {{location?.description}} </p>\r\n</div>\r\n<div class=\"activities-container\">\r\n  <h5>Activities</h5>\r\n  <ul *ngIf=\"location?.activities\" class=\"activities-container__list-items\">\r\n    <li class=\"list-item\" *ngFor=\"let activity of location.activities\">\r\n      <p class=\"list-item__name\">\r\n        {{activity?.name}}\r\n        <a href=\"{{activity.url}}\" target=\"_blank\">\r\n          <md-icon>link</md-icon>\r\n        </a>\r\n\r\n      </p>\r\n      <p class=\"location-\">{{activity?.description}}</p>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    AlertService.prototype.showMessage = function (severity, messageSummary, message) {
        /*
        Possible error message severity:
          - success
          - info
          - warn
          - error
        */
        this.subject.next({ severity: severity, summary: messageSummary, detail: message });
    };
    // creates subject observable for template views
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestsService = (function () {
    function RequestsService(http) {
        this.http = http;
    }
    RequestsService.prototype.apiGet = function (endpoint) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + endpoint, this.apiHeader())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RequestsService.prototype.apiPost = function (endpoint, body) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + endpoint, body, this.apiHeader())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RequestsService.prototype.apiPut = function (endpoint, body) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + endpoint, body, this.apiHeader())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RequestsService.prototype.apiPatch = function (endpoint, body) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + endpoint, body, this.apiHeader())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RequestsService.prototype.apiDelete = function (endpoint) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + endpoint, this.apiHeader())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Trail API Methods
    RequestsService.prototype.trailApiGet = function (endpoint) {
        return this.http.get('https://trailapi-trailapi.p.mashape.com/' + endpoint, this.trailHeader())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RequestsService.prototype.trailHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('X-Mashape-Key', 'BI4KvoJEXxmshqjI2TbFLM34KLqzp15xyvujsng1tHZBTzfDLv');
        headers.append('Accept', 'text/plain');
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    // Basic auth header
    RequestsService.prototype.apiHeader = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser)
            return;
        var encodedUser = btoa(currentUser.email + ":" + currentUser.password);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + encodedUser);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    // request error handler
    RequestsService.prototype.handleError = function (error) {
        // error message returned as observable
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = {
                message: err.message,
                status: error.status,
                statusText: error.statusText,
                stackHighlighted: err.stackHighlighted
                // }
            };
        }
        else {
            errMsg = {
                message: error.message ? error.message : error.toString()
            };
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return RequestsService;
}());
RequestsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RequestsService);

var _a;
//# sourceMappingURL=requests.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(16);
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;

function routerTransition() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ position: 'absolute', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ position: 'initial', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.3s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 1 }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 1 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.1s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 0 }))
        ])
    ]);
}
//# sourceMappingURL=router.animations.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requests_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationsService = (function () {
    function LocationsService(_reqService) {
        this._reqService = _reqService;
    }
    LocationsService.prototype.saveLocation = function (location) {
        return this._reqService.apiPost("locations/" + location.unique_id, location);
    };
    LocationsService.prototype.getUserLocations = function () {
        return this._reqService.apiGet("locations/account");
    };
    LocationsService.prototype.deleteUserLocation = function (locationId) {
        return this._reqService.apiDelete("locations/" + locationId.unique_id);
    };
    LocationsService.prototype.getLocationImage = function (locationName) {
        // using node server for api call due to local dev CORS
        return this._reqService.apiGet("locations/image/" + locationName);
    };
    LocationsService.prototype.createLocationQuery = function (locationData) {
        var parsedActivites = this.parseLocationActivities(locationData);
        return {
            lat: locationData.lat,
            lon: locationData.lon,
            image: locationData.imageLink,
        };
    };
    LocationsService.prototype.parseLocationActivities = function (location) {
        return {
            names: location.activities.map(function (item) { return item.name; }),
            url: location.activities.map(function (item) { return item.url; }),
            description: location.activities.map(function (item) { return item.description; })
        };
    };
    return LocationsService;
}());
LocationsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__requests_service__["a" /* RequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__requests_service__["a" /* RequestsService */]) === "function" && _a || Object])
], LocationsService);

var _a;
//# sourceMappingURL=locations.service.js.map

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(177);


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requests_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrailsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrailsService = (function () {
    function TrailsService(_req) {
        this._req = _req;
    }
    TrailsService.prototype.searchTrails = function (searchParams) {
        return this._req.trailApiGet(searchParams);
    };
    return TrailsService;
}());
TrailsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__requests_service__["a" /* RequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__requests_service__["a" /* RequestsService */]) === "function" && _a || Object])
], TrailsService);

var _a;
//# sourceMappingURL=trails.service.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(183);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyMaterialModule = (function () {
    function MyMaterialModule() {
    }
    return MyMaterialModule;
}());
MyMaterialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdSelectModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdSelectModule */]
        ],
        declarations: []
    })
], MyMaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__(186);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });

var environment = {
    production: true,
    apiUrl: 'https://hiking-app.herokuapp.com/api/',
    app_config: __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* APP_CONFIG */]
};
//# sourceMappingURL=environment.js.map

/***/ })

},[612]);
//# sourceMappingURL=main.bundle.js.map