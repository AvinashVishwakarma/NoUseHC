webpackJsonp(["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/CommonComponent/AppContainer/FullLayout/full-layout.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.widthMax {\r\n    width: 95%;\r\n}\r\n\r\n.mat-form-field-underline {\r\n    background-color: #FF0000; /* replace this color with your accent color hex code */\r\n}\r\n\r\n.example-icon {\r\n    padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n}\r\n\r\nh1.example-app-name {\r\n    margin-left: 8px;\r\n}\r\n\r\n.example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/CommonComponent/AppContainer/FullLayout/full-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-3'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-9 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>-->\r\n\r\n<div class=\"example-container\" [ngClass]=\"{'unicorn-dark-theme': false}\" [class.example-is-mobile]=\"mobileQuery.matches\">\r\n    <mat-toolbar color=\"primary\" class=\"example-toolbar\">\r\n        <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\r\n        <mat-toolbar color=\"primary\">\r\n            <mat-toolbar-row>\r\n                <div fxLayout=\"row\" fxFlex=\"100%\" fxLayoutAlign=\"start center\">\r\n                    <div fxFlex fxHide.xs>\r\n                        <span>Matrial line</span>\r\n                        <span class=\"example-spacer\"></span>\r\n                    </div>\r\n                    <!--<div fxFlex fxHide.xs fxHide.lg fxHide.md>\r\n                        <span>ML</span>\r\n                        <span class=\"example-spacer\"></span>\r\n                    </div>-->\r\n                    <div fxFlex=\"90\">\r\n                        <div fxLayout=\"row\" fxFlex=\"100%\" fxLayoutAlign=\"end center\">\r\n                            <button mat-icon-button>\r\n                                <mat-icon aria-label=\"search icon\">search</mat-icon>\r\n                            </button>\r\n                            <mat-form-field color=\"accent\" [ngClass]=\"{'widthMax' : searchExpanded }\">\r\n                                <input matInput type=\"text\" [(ngModel)]=\"value\" (blur)=\"toggleSearchWidth($event)\"\r\n                                       (focus)=\"searchExpanded = true;\" autocomplete=\"off\" />\r\n                                <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''; searchExpanded = false; return ;\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div fxFlex>\r\n                        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                            <mat-icon aria-label=\"search icon\">more_vert</mat-icon>\r\n                        </button>\r\n                        <mat-menu #menu=\"matMenu\">\r\n                            <button mat-menu-item>Account</button>\r\n                            <button mat-menu-item (click)=\"SignOutUser($event)\">Sign out</button>\r\n                        </mat-menu>\r\n                    </div>\r\n                </div>\r\n            </mat-toolbar-row>\r\n        </mat-toolbar>\r\n    </mat-toolbar>\r\n\r\n    <mat-sidenav-container class=\"example-sidenav-container\"\r\n                           [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\r\n        <mat-sidenav #snav [opened]=\"mobileQuery.matches ? 'false' : 'true'\" class=\"mat-elevation-z20\"\r\n                     [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\r\n                     [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\" style=\"overflow: hidden;\">\r\n            <div style=\"height: 100%;\"><!--slimScroll [options]=\"opts2\"-->\r\n                <!--<mat-nav-list>\r\n                    <a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a>\r\n                    <nav-menu></nav-menu>\r\n                </mat-nav-list>-->\r\n                <!--<mat-nav-list>\r\n                    <a mat-list-item routerLink=\".\">somete</a>\r\n                    <nav-menu></nav-menu>\r\n                </mat-nav-list>-->\r\n                <nav-menu></nav-menu>\r\n            </div>\r\n        </mat-sidenav>\r\n\r\n        <mat-sidenav-content style=\"padding-left: 10px;\"><!--slimScroll [options]=\"opts\"--> \r\n            <router-outlet (activate)=\"changeOfRoutes()\"></router-outlet>\r\n            <!--<p *ngFor=\"let content of fillerContent\" class=\"accentColorBG angular-material\">{{content}}</p>-->\r\n        </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/CommonComponent/AppContainer/FullLayout/full-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_slimscroll__ = __webpack_require__("./node_modules/ngx-slimscroll/dist/bundles/ngx-slimscroll.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_slimscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_slimscroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_AccountService__ = __webpack_require__("./ClientApp/app/Services/AccountService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(changeDetectorRef, media, renderFactory, accountService, baseUrl, router, cookie) {
        this.accountService = accountService;
        this.baseUrl = baseUrl;
        this.router = router;
        this.cookie = cookie;
        this.value = '';
        this.searchExpanded = false;
        this.fillerNav = Array(50).fill(0).map(function (_, i) { return "Nav Item avinash " + (i + 1); });
        this.fillerContent = Array(50).fill(0).map(function () {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.searchExpanded = false;
    }
    FullLayoutComponent.prototype.SignOutUser = function (event) {
        var _this = this;
        debugger;
        this.accountService.Logout()
            .subscribe(function (result) {
            if (result) {
                //CookieAppAuthencticated
                _this.cookie.delete('CookieAppAuthencticated');
                _this.router.navigate(['']);
            }
            else {
                alert('failed');
            }
        }, function (error) {
            console.log(error);
        });
    };
    FullLayoutComponent.prototype.changeOfRoutes = function () {
        //alert('rote changes');
        var authCookie = this.cookie.get('CookieAppAuthencticated');
        if (authCookie == null || authCookie.length == 0) {
            this.router.navigate(['']);
        }
    };
    FullLayoutComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    FullLayoutComponent.prototype.toggleSearchWidth = function (event) {
        debugger;
        if (this.value == '')
            this.searchExpanded = false;
    };
    FullLayoutComponent.prototype.ngOnInit = function () {
        this.scrollEvents = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // this.opts = {
        //   position?: string,// left | right
        //   barBackground?: string, // #C9C9C9
        //   barOpacity?: string; // 0.8
        //   barWidth?: string; // 10
        //   barBorderRadius?: string; // 20
        //   barMargin?: string; // 0
        //   gridBackground?: string; // #D9D9D9
        //   gridOpacity?: string; // 1
        //   gridWidth?: string; // 2
        //   gridBorderRadius?: string; // 20
        //   gridMargin?: string; // 0
        //   alwaysVisible?: boolean; // true
        //   visibleTimeout?: number; // 1000
        //   scrollSensitivity?: number; // 1
        // }
        this.opts = {
            barBackground: '#2C3E50',
            gridBackground: '#f8f8f8',
            barBorderRadius: '10',
            barWidth: '6',
            gridWidth: '2',
            alwaysVisible: true,
            barOpacity: '0.5',
            gridOpacity: '0'
        };
        this.opts2 = {
            barBackground: '#2C3E50',
            gridBackground: '#2C3E50',
            barBorderRadius: '3',
            barWidth: '5',
            gridWidth: '1',
            alwaysVisible: true,
            barOpacity: '0.5',
            gridOpacity: '0'
        };
        this.play();
    };
    FullLayoutComponent.prototype.play = function () {
        var _this = this;
        var event = null;
        Promise.resolve()
            .then(function () { return _this.timeout(3000); })
            .then(function () {
            event = new __WEBPACK_IMPORTED_MODULE_2_ngx_slimscroll__["SlimScrollEvent"]({
                type: 'scrollToBottom',
                duration: 2000,
                easing: 'inOutQuad'
            });
            _this.scrollEvents.emit(event);
        })
            .then(function () { return _this.timeout(3000); })
            .then(function () {
            event = new __WEBPACK_IMPORTED_MODULE_2_ngx_slimscroll__["SlimScrollEvent"]({
                type: 'scrollToTop',
                duration: 3000,
                easing: 'outCubic'
            });
            _this.scrollEvents.emit(event);
        })
            .then(function () { return _this.timeout(4000); })
            .then(function () {
            event = new __WEBPACK_IMPORTED_MODULE_2_ngx_slimscroll__["SlimScrollEvent"]({
                type: 'scrollToPercent',
                percent: 80,
                duration: 1000,
                easing: 'linear'
            });
            _this.scrollEvents.emit(event);
        })
            .then(function () { return _this.timeout(2000); })
            .then(function () {
            event = new __WEBPACK_IMPORTED_MODULE_2_ngx_slimscroll__["SlimScrollEvent"]({
                type: 'scrollTo',
                y: 200,
                duration: 4000,
                easing: 'inOutQuint'
            });
            _this.scrollEvents.emit(event);
        });
    };
    FullLayoutComponent.prototype.timeout = function (ms) {
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); });
    };
    FullLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app',
            template: __webpack_require__("./ClientApp/app/CommonComponent/AppContainer/FullLayout/full-layout.component.html"),
            styles: [__webpack_require__("./ClientApp/app/CommonComponent/AppContainer/FullLayout/full-layout.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["d" /* MediaMatcher */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"], __WEBPACK_IMPORTED_MODULE_3__Services_AccountService__["a" /* AccountServicce */], String, __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./ClientApp/app/CommonComponent/AppContainer/SimpleLayout/simple-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SimpleLayoutComponent = /** @class */ (function () {
    function SimpleLayoutComponent() {
    }
    SimpleLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app',
            template: '<router-outlet></router-outlet>',
        })
    ], SimpleLayoutComponent);
    return SimpleLayoutComponent;
}());



/***/ }),

/***/ "./ClientApp/app/CommonComponent/AppContainer/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FullLayout_full_layout_component__ = __webpack_require__("./ClientApp/app/CommonComponent/AppContainer/FullLayout/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SimpleLayout_simple_layout_component__ = __webpack_require__("./ClientApp/app/CommonComponent/AppContainer/SimpleLayout/simple-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Account_login_login_component__ = __webpack_require__("./ClientApp/app/components/Account/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("./ClientApp/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_counter_counter_component__ = __webpack_require__("./ClientApp/app/components/counter/counter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_fetchdata_fetchdata_component__ = __webpack_require__("./ClientApp/app/components/fetchdata/fetchdata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Account_register_register_component__ = __webpack_require__("./ClientApp/app/components/Account/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Import Containers
var routes = [
    {
        path: '',
        //redirectTo: 'dashboard',
        redirectTo: 'account/login',
        pathMatch: 'full',
    },
    {
        path: 'index',
        //redirectTo: 'dashboard',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'account',
        component: __WEBPACK_IMPORTED_MODULE_3__SimpleLayout_simple_layout_component__["a" /* SimpleLayoutComponent */],
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_4__components_Account_login_login_component__["a" /* LoginComponent */]
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_8__components_Account_register_register_component__["a" /* RegisterComponent */]
            }
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__FullLayout_full_layout_component__["a" /* FullLayoutComponent */],
        data: {
            title: 'Home'
        },
        children: [
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */] },
            { path: 'counter', component: __WEBPACK_IMPORTED_MODULE_6__components_counter_counter_component__["a" /* CounterComponent */] },
            { path: 'fetch-data', component: __WEBPACK_IMPORTED_MODULE_7__components_fetchdata_fetchdata_component__["a" /* FetchDataComponent */] },
            { path: 'app-login', component: __WEBPACK_IMPORTED_MODULE_4__components_Account_login_login_component__["a" /* LoginComponent */] },
            { path: '**', redirectTo: 'home' }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterLinkActive */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./ClientApp/app/CommonComponent/Validation/control-messageComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation_service__ = __webpack_require__("./ClientApp/app/CommonComponent/Validation/validation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlMessagesComponent = /** @class */ (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            if (this.control && this.control.errors)
                for (var propertyName in this.control.errors) {
                    if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                        return __WEBPACK_IMPORTED_MODULE_2__validation_service__["a" /* ValidationService */].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                    }
                }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */])
    ], ControlMessagesComponent.prototype, "control", void 0);
    ControlMessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'control-messages',
            template: "<div *ngIf=\"errorMessage !== null\">{{errorMessage}}</div>"
        }),
        __metadata("design:paramtypes", [])
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
}());



/***/ }),

/***/ "./ClientApp/app/CommonComponent/Validation/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        //debugger;
        var config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Password must be at least 6 characters long, and contain a number.',
            'MatchPassword': "Password didn't match",
            'minlength': "Minimum length should be " + validatorValue.requiredLength,
            'maxlength': "Maximum length should be " + validatorValue.requiredLength,
            'invalidMobileNumber': 'Mobile number is not valid',
            'invalidAlphabets': 'Field has invalid character',
            'invalidFirstname': 'Firstname is not valid',
            'invalidLastname': 'Lastname is not valid'
        };
        return config[validatorName];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.mobileValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.length == 10) {
            return null;
        }
        else {
            return { 'invalidMobileNumber': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    ValidationService.MatchPassword = function (control) {
        var password1 = control.get('password');
        var confirmPassword1 = control.get('confirmPassword');
        if (password1 && confirmPassword1 && password1.status == "VALID") {
            var password = password1.value; // to get value in input tag
            var confirmPassword = confirmPassword1.value; // to get value in input tag
            if (password != confirmPassword) {
                console.log('false');
                confirmPassword1.setErrors({ MatchPassword: true });
            }
            else {
                console.log('true');
                //confirmPassword1.setErrors({});
                return null;
            }
        }
    };
    ValidationService.alphabetValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/^[a-zA-Z]*$/)) {
            return null;
        }
        else {
            return { 'invalidAlphabets': true };
        }
    };
    ValidationService.lastnameValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/^[a-zA-Z]*$/)) {
            return null;
        }
        else {
            return { 'invalidLastname': true };
        }
    };
    ValidationService.firstnameValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/^[a-zA-Z ]*$/)) {
            return null;
        }
        else {
            return { 'invalidFirstname': true };
        }
    };
    return ValidationService;
}());



/***/ }),

/***/ "./ClientApp/app/CommonComponent/Widget/CommonHelper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NotifyDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ProgressDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


/**
 * @title Dialog Overview
 */
var DialogHelper = /** @class */ (function () {
    function DialogHelper(dialog, snackBar) {
        this.dialog = dialog;
        this.snackBar = snackBar;
    }
    DialogHelper.prototype.openDialog = function (type, message) {
        var dialogRef = this.dialog.open(NotifyDialog, {
            //autoFocus: true,
            panelClass: "app-full-bleed-dialog",
            disableClose: true,
            //height: '30%',
            //width: '30%',
            data: { notifyType: type, notifyMessage: message }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            //this.animal = result;
        });
    };
    DialogHelper.prototype.openProgressDialog = function (msg) {
        var dialogRef = this.dialog.open(ProgressDialog, {
            //autoFocus: true,
            panelClass: "app-full-bleed-dialog",
            disableClose: false,
            //height: '30%',
            //width: '30%',
            data: { message: msg }
        });
        return dialogRef;
        //dialogRef.afterClosed().subscribe(result => {
        //    console.log('The dialog was closed');
        //    console.log(result);
        //    //this.animal = result;
        //});
    };
    DialogHelper.prototype.closeDialog = function (dialogRef) {
        if (dialogRef && !dialogRef._locationChanges.closed)
            dialogRef.close();
    };
    DialogHelper.prototype.success = function (message) {
        this.openDialog("success", message);
    };
    DialogHelper.prototype.error = function (message) {
        this.openDialog("error", message);
    };
    DialogHelper.prototype.warn = function (message) {
        this.openDialog("warn", message);
    };
    DialogHelper.prototype.confirm = function (message) {
        this.openDialog("confirm", message);
    };
    DialogHelper.prototype.inform = function (message) {
        this.openDialog("info", message);
    };
    DialogHelper.prototype.showProgressMessage = function (message) {
        return this.openProgressDialog(message && message.length > 0 ? message : 'Loading...');
    };
    DialogHelper.prototype.showProgress = function () {
        return this.openProgressDialog('Loading...');
    };
    DialogHelper.prototype.openSnackBar = function (message, action) {
        var snackBar = this.snackBar.open(message, action, {
            horizontalPosition: "right",
            verticalPosition: "top",
            duration: 5000,
        });
        return snackBar;
    };
    DialogHelper.prototype.onSnackBarAction = function (snackBarRef, callBack) {
        debugger;
        snackBarRef.onAction().subscribe(function () { return callBack(); });
    };
    DialogHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatSnackBar */]])
    ], DialogHelper);
    return DialogHelper;
}());

var NotifyDialog = /** @class */ (function () {
    function NotifyDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.callBackReturnData = "hello";
        this.type = data.notifyType;
        this.__NotifyMessage = data.notifyMessage;
        this.getNotificationColor();
        this.getNotificationIcon();
        this.getNotificationText();
        this.getNotificationButton();
    }
    //to hide the dialog
    NotifyDialog.prototype.hide = function () {
        this.dialogRef.close();
    };
    NotifyDialog.prototype.getNotificationIcon = function () {
        if (this.type == 'success') {
            this.__NotifyIcon = 'done_all'; // 'cloud_done';
        }
        else if (this.type == 'confirm') {
            this.__NotifyIcon = 'help_outline';
        }
        else if (this.type == 'warn') {
            this.__NotifyIcon = 'warning';
        }
        else if (this.type == 'error') {
            this.__NotifyIcon = 'error_outline';
        }
        else if (this.type == 'info') {
            this.__NotifyIcon = 'info_outline';
        }
    };
    NotifyDialog.prototype.getNotificationText = function () {
        if (this.type == 'success') {
            this.__NotifyTitle = 'SUCCESS!';
        }
        else if (this.type == 'confirm' || this.type == 'warn') {
            this.__NotifyTitle = this.type == 'confirm' ? 'CONFIRMATION' : 'WARNING!';
        }
        else if (this.type == 'error') {
            this.__NotifyTitle = 'ERROR!';
        }
        else if (this.type == 'info') {
            this.__NotifyTitle = 'INFORMATION!';
        }
    };
    NotifyDialog.prototype.getNotificationColor = function () {
        if (this.type == 'success') {
            this.__NotifyColor = '#4BAE4F';
        }
        else if (this.type == 'warn') {
            this.__NotifyColor = '#FB9500';
        }
        else if (this.type == 'confirm') {
            this.__NotifyColor = '#ffc107';
        }
        else if (this.type == 'error') {
            this.__NotifyColor = '#ED4034';
        }
        else if (this.type == 'info') {
            this.__NotifyColor = '#0177d6';
        }
    };
    NotifyDialog.prototype.getNotificationMessage = function () {
        return this.__NotifyMessage;
    };
    NotifyDialog.prototype.getNotificationButton = function () {
        if (this.type == 'success' || this.type == 'error' || this.type == 'info') {
            this.__NotificationButtonList = [{ buttonText: 'OK', cdkFocusInitial: false, returnData: false }];
        }
        else if (this.type == 'confirm' || this.type == 'warn') {
            this.__NotificationButtonList = [
                { buttonText: 'YES', cdkFocusInitial: false, returnData: true },
                { buttonText: 'NO', cdkFocusInitial: true, returnData: false }
            ];
        }
    };
    NotifyDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'notify-dialog',
            template: __webpack_require__("./ClientApp/app/CommonComponent/Widget/view/Notify/notifySWE.html"),
            styles: [__webpack_require__("./ClientApp/app/CommonComponent/Widget/view/Notify/notifySWE.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object])
    ], NotifyDialog);
    return NotifyDialog;
}());

var ProgressDialog = /** @class */ (function () {
    function ProgressDialog(data) {
        this.data = data;
        this._LoadingMessage = '';
        this._LoadingMessage = data.message;
    }
    ProgressDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'progress-dialog',
            template: __webpack_require__("./ClientApp/app/CommonComponent/Widget/view/Progress/progress.html"),
            styles: [__webpack_require__("./ClientApp/app/CommonComponent/Widget/view/Progress/progress.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], ProgressDialog);
    return ProgressDialog;
}());



/***/ }),

/***/ "./ClientApp/app/CommonComponent/Widget/view/Notify/notifySWE.css":
/***/ (function(module, exports) {

module.exports = ".notify {\r\n    /*min-width: 400px;*/\r\n    max-width: 450px;\r\n    /*font-family: 'Noto Sans', sans-serif;*/\r\n    /*min-height: 200px;*/\r\n    /*margin: -24px -24px -24px -24px !important;*/\r\n    /*padding: -24px -24px -24px -24px !important;*/\r\n    /*border: 1px solid red;*/\r\n}\r\n\r\n.notify-icon{\r\n    font-size:50px;\r\n}\r\n\r\n.notify-iconBG {\r\n    display: inline-block;\r\n    font-size: 120px;\r\n    /*direction: rtl;*/\r\n    position: absolute;\r\n    opacity: 0.2;\r\n    top: -12px;\r\n    right: 60px;\r\n}\r\n\r\n.notify-iconBG-xs {\r\n    display: inline-block;\r\n    font-size: 120px;\r\n    /*direction: rtl;*/\r\n    position: absolute;\r\n    opacity: 0.2;\r\n    top: 0px !important;\r\n    right: 60px !important;\r\n}\r\n\r\n.notify-title h2 {\r\n    margin-top: -10px;\r\n    margin-bottom: 0px;\r\n    font-weight:lighter;\r\n    /*padding-left: 30px;*/\r\n}\r\n\r\n.notify-title {\r\n    position: relative;\r\n    padding: 20px;\r\n    color: white;\r\n}\r\n\r\n.notify-content {\r\n    /*text-align:center;*/\r\n    /*margin: 0px 5px;*/\r\n    padding: 2px 15px;\r\n}\r\n\r\n.notify-actions {\r\n    margin: 0px 10px 0px 0px;\r\n}\r\n\r\n/*.example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n}*/\r\n"

/***/ }),

/***/ "./ClientApp/app/CommonComponent/Widget/view/Notify/notifySWE.html":
/***/ (function(module, exports) {

module.exports = "<!--<h1 mat-dialog-title>Hi {{data.name}}</h1>\r\n<div mat-dialog-content>\r\n    <p>What's your favorite animal?</p>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"data.animal\">\r\n    </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n    <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\r\n</div>-->\r\n<!--<mat-card class=\"example-card\">\r\n    <mat-card-header [style.background-color]=\"__NotifyColor\" [style.color]=\"'white'\" [style.margin]=\"'0px -24px'\">\r\n        <div mat-card-avatar class=\"example-header-image\">\r\n            <mat-icon class=\"example-icon\">{{__NotifyIcon}}</mat-icon>\r\n        </div>\r\n        {{__NotifyTitle}}\r\n    </mat-card-header>\r\n    <mat-card-content [style.margin]=\"'40px'\">\r\n        <p style=\"padding-top:10px;\">\r\n            {{__NotifyMessage}}\r\n        </p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-button color=\"primary\" *ngFor=\"let btn of __NotificationButtonList\" (click)=\"btn.callBackFunction(this)\">\r\n            {{btn.buttonText}}\r\n        </button>\r\n    </mat-card-actions>\r\n</mat-card>-->\r\n\r\n<div fxLayout=\"column wrap\" class=\"notify\">\r\n    <div mat-dialog-title fxLayout=\"row wrap\" fxLayoutAlign=\"center start\" [style.background]=\"__NotifyColor\" class=\"notify-title\">\r\n        <div fxLayout.xs=\"column wrap\" fxLayout=\"row wrap\">\r\n            <div fxFlexAlign=\"center\" style=\"margin-right:30px;\">\r\n                <mat-icon class=\"notify-icon\">{{__NotifyIcon}}</mat-icon>\r\n            </div>\r\n            <h2 fxFlexAlign=\"center\">\r\n                {{__NotifyTitle}}\r\n            </h2>\r\n        </div>\r\n        <mat-icon ngClass.xs=\"notify-iconBG-xs\" ngClass=\"notify-iconBG\">{{__NotifyIcon}}</mat-icon>\r\n    </div>\r\n    <div class=\"notify-content\">\r\n        <p>{{__NotifyMessage}}jlkasjdlka sjdklajs dklajsd kaldj adl kdjadkl sajdsa lkdsajdask dlajdaskld sadjl;jal; sjdlas d </p>\r\n    </div>\r\n    <div mat-dialog-actions fxLayoutAlign=\"end\" class=\"notify-actions\">\r\n        <button mat-button color=\"primary\" *ngFor=\"let btn of __NotificationButtonList\" cdkFocusInitial [mat-dialog-close]=\"btn.returnData\">\r\n            {{btn.buttonText}}\r\n        </button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/CommonComponent/Widget/view/Progress/progress.css":
/***/ (function(module, exports) {

module.exports = ".progressContent {\r\n    padding:15px;\r\n    /*min-width: 250px;*/\r\n    /*max-width: 300px;*/\r\n    /*min-height:90px;*/\r\n}\r\n\r\ndiv h4 {\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n}\r\n\r\n.progress-content {\r\n    /*margin-left:50px;*/\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/CommonComponent/Widget/view/Progress/progress.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxFlex=\"grow\" class=\"progressContent\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\r\n    <div>\r\n        <mat-spinner diameter=\"50\" strokeWidth=\"3\"></mat-spinner>\r\n    </div>\r\n    <div>\r\n        <h4>{{_LoadingMessage}}</h4>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/Directives/Common/AlphabetOnlyDirective.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlphabetsOnlyDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlphabetsOnlyDirective = /** @class */ (function () {
    //DIGITS_REGEXP = new RegExp(/[^0-9\.]/g);
    function AlphabetsOnlyDirective(el) {
        var _this = this;
        this.el = el;
        this.CHARACTER_REGEXP = new RegExp(/^[a-zA-Z]*$/);
        // Sanatize clipboard by removing any non-numeric input after pasting
        this.el.nativeElement.onpaste = function (e) {
            debugger;
            e.preventDefault();
            var text;
            var clp = (e.originalEvent || e).clipboardData;
            if (clp === undefined || clp === null) {
                text = window.clipboardData.getData('text') || '';
                if (text !== '') {
                    text = text.replace(_this.CHARACTER_REGEXP, '');
                    if (window.getSelection) {
                        var newNode = document.createElement('span');
                        newNode.innerHTML = text;
                        window.getSelection().getRangeAt(0).insertNode(newNode);
                    }
                    else {
                        window.selection.createRange().pasteHTML(text);
                    }
                }
            }
            else {
                text = clp.getData('text/plain') || '';
                if (text !== '') {
                    text = text.replace(_this.CHARACTER_REGEXP, '');
                    document.execCommand('insertText', false, text);
                }
            }
        };
    }
    AlphabetsOnlyDirective.prototype.onKeyDown = function (event) {
        //debugger;
        var e = event;
        //console.log(e.keyCode);
        if ([46, 8, 9, 27, 13, 32].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        //if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        //    e.preventDefault();
        //}
        if ((e.keyCode > 64 && e.keyCode < 91))
            return true;
        else
            e.preventDefault();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AlphabetsOnlyDirective.prototype, "onKeyDown", null);
    AlphabetsOnlyDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[AlphabetsOnly]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], AlphabetsOnlyDirective);
    return AlphabetsOnlyDirective;
}());



/***/ }),

/***/ "./ClientApp/app/Directives/Common/NumberOnlyDirective.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumbersOnlyDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumbersOnlyDirective = /** @class */ (function () {
    //DIGITS_REGEXP = new RegExp(/[^0-9\.]/g);
    function NumbersOnlyDirective(el) {
        var _this = this;
        this.el = el;
        this.DIGITS_REGEXP = new RegExp(/\D/g);
        // Sanatize clipboard by removing any non-numeric input after pasting
        this.el.nativeElement.onpaste = function (e) {
            e.preventDefault();
            var text;
            var clp = (e.originalEvent || e).clipboardData;
            if (clp === undefined || clp === null) {
                text = window.clipboardData.getData('text') || '';
                if (text !== '') {
                    text = text.replace(_this.DIGITS_REGEXP, '');
                    if (window.getSelection) {
                        var newNode = document.createElement('span');
                        newNode.innerHTML = text;
                        window.getSelection().getRangeAt(0).insertNode(newNode);
                    }
                    else {
                        window.selection.createRange().pasteHTML(text);
                    }
                }
            }
            else {
                text = clp.getData('text/plain') || '';
                if (text !== '') {
                    text = text.replace(_this.DIGITS_REGEXP, '');
                    document.execCommand('insertText', false, text);
                }
            }
        };
    }
    NumbersOnlyDirective.prototype.onKeyDown = function (event) {
        var e = event;
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NumbersOnlyDirective.prototype, "onKeyDown", null);
    NumbersOnlyDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[NumbersOnly]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], NumbersOnlyDirective);
    return NumbersOnlyDirective;
}());



/***/ }),

/***/ "./ClientApp/app/Services/AccountService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountServicce; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var AccountServicce = /** @class */ (function () {
    function AccountServicce(_http, baseUrl) {
        this._http = _http;
        this.baseUrl = baseUrl;
        this.NoData = null;
    }
    AccountServicce.prototype.Register = function (userData) {
        return this.doPostCall('Account/SignUp', userData);
    };
    AccountServicce.prototype.Login = function (userData) {
        return this.doPostCall('Account/Login2', userData);
    };
    AccountServicce.prototype.Logout = function () {
        return this.doPostCall('Account/SignOut', this.NoData);
    };
    AccountServicce.prototype.ChangePassword = function (data) {
        return this.doPostCall('Account/ChangePassword', data);
    };
    AccountServicce.prototype.doPostCall = function (serviceUrl, data) {
        return this._http.post(this.baseUrl + serviceUrl, data, httpOptions) //, { observe: 'response' }
            .map(function (response) { return response; })
            .catch(this.errorHandler);
    };
    AccountServicce.prototype.doGetCall = function (serviceUrl) {
        return this._http.get(this.baseUrl + serviceUrl, httpOptions)
            .map(function (response) { return response; })
            .catch(this.errorHandler);
    };
    //Error handle function
    AccountServicce.prototype.errorHandler = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    AccountServicce = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], String])
    ], AccountServicce);
    return AccountServicce;
}());



/***/ }),

/***/ "./ClientApp/app/Services/AppHttpInterceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHttpInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppHttpInterceptor = /** @class */ (function () {
    function AppHttpInterceptor(cookie) {
        this.cookie = cookie;
    }
    AppHttpInterceptor.prototype.intercept = function (request, next) {
        //debugger;
        request = request.clone({
            setHeaders: {
                //"X-XSRF-TOKEN": request.body.__RequestVerificationToken,
                //"Content-Type": "application/json",
                "X-XSRF-TOKEN": this.cookie.get("XSRF-TOKEN")
            }
            //setHeaders: {
            //    Authorization: `Bearer aadasds`
            //}
        });
        //request.body = JSON.stringify(request.body);
        //let a: any;
        //response = response.clone({
        //    headers
        //});
        return next.handle(request);
    };
    AppHttpInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]])
    ], AppHttpInterceptor);
    return AppHttpInterceptor;
}());



/***/ }),

/***/ "./ClientApp/app/Services/FileUploadService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["e" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var FileUploadService = /** @class */ (function () {
    function FileUploadService(_http, baseUrl) {
        this._http = _http;
        this.baseUrl = baseUrl;
        this.NoData = null;
    }
    FileUploadService.prototype.UploadFiles = function (serviceUrl, files) {
        debugger;
        var formData = new FormData();
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            formData.append(file.name, file);
        }
        var uploadReq = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["g" /* HttpRequest */]('POST', this.baseUrl + "Account/UploadFile2", formData, {
            reportProgress: true,
        });
        return this._http.request(uploadReq);
    };
    FileUploadService.prototype.Register = function (userData) {
        return this.doPostCall('Account/SignUp', userData);
    };
    FileUploadService.prototype.doPostCall = function (serviceUrl, data) {
        return this._http.post(this.baseUrl + serviceUrl, data, httpOptions) //, { observe: 'response' }
            .map(function (response) { return response; })
            .catch(this.errorHandler);
    };
    FileUploadService.prototype.doGetCall = function (serviceUrl) {
        return this._http.get(this.baseUrl + serviceUrl, httpOptions)
            .map(function (response) { return response; })
            .catch(this.errorHandler);
    };
    //Error handle function
    FileUploadService.prototype.errorHandler = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    FileUploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */], String])
    ], FileUploadService);
    return FileUploadService;
}());



/***/ }),

/***/ "./ClientApp/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n\r\n.mat-dialog-container {\r\n  padding: 0 !important;\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul>-->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(cookie, router) {
        this.cookie = cookie;
        this.router = router;
        //debugger;
        //cookie.set("customCookie", 'Avinash');
        var authCookie = cookie.get('CookieAppAuthencticated');
        if (authCookie && authCookie.length > 0) {
            //alert('scucces');
            this.router.navigate(['/home']);
        }
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./ClientApp/app/app.component.html"),
            styles: [__webpack_require__("./ClientApp/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export getBaseUrl */
/* unused harmony export getAntiForgeryToken */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_shared_module__ = __webpack_require__("./ClientApp/app/app.shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__app_shared_module__["a" /* AppModuleShared */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */]
            ],
            providers: [
                {
                    provide: 'BASE_URL',
                    useFactory: getBaseUrl,
                },
                {
                    provide: 'AntiForgeryToken',
                    useFactory: getAntiForgeryToken,
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());

function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
function getAntiForgeryToken() {
    return document.getElementsByName('__RequestVerificationToken')[0].value;
}


/***/ }),

/***/ "./ClientApp/app/app.shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleShared; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navmenu_navmenu_component__ = __webpack_require__("./ClientApp/app/components/navmenu/navmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("./ClientApp/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_fetchdata_fetchdata_component__ = __webpack_require__("./ClientApp/app/components/fetchdata/fetchdata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_counter_counter_component__ = __webpack_require__("./ClientApp/app/components/counter/counter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Account_login_login_component__ = __webpack_require__("./ClientApp/app/components/Account/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_module__ = __webpack_require__("./ClientApp/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__CommonComponent_Validation_control_messageComponent__ = __webpack_require__("./ClientApp/app/CommonComponent/Validation/control-messageComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__CommonComponent_AppContainer_FullLayout_full_layout_component__ = __webpack_require__("./ClientApp/app/CommonComponent/AppContainer/FullLayout/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__CommonComponent_AppContainer_SimpleLayout_simple_layout_component__ = __webpack_require__("./ClientApp/app/CommonComponent/AppContainer/SimpleLayout/simple-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__CommonComponent_AppContainer_app_routing__ = __webpack_require__("./ClientApp/app/CommonComponent/AppContainer/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_slimscroll__ = __webpack_require__("./node_modules/ngx-slimscroll/dist/bundles/ngx-slimscroll.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_slimscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ngx_slimscroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_Account_register_register_component__ = __webpack_require__("./ClientApp/app/components/Account/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Services_AppHttpInterceptor__ = __webpack_require__("./ClientApp/app/Services/AppHttpInterceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Directives_Common_NumberOnlyDirective__ = __webpack_require__("./ClientApp/app/Directives/Common/NumberOnlyDirective.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Services_AccountService__ = __webpack_require__("./ClientApp/app/Services/AccountService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__CommonComponent_Widget_CommonHelper__ = __webpack_require__("./ClientApp/app/CommonComponent/Widget/CommonHelper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular_material_fileupload__ = __webpack_require__("./node_modules/angular-material-fileupload/matFileUpload.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Services_FileUploadService__ = __webpack_require__("./ClientApp/app/Services/FileUploadService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Directives_Common_AlphabetOnlyDirective__ = __webpack_require__("./ClientApp/app/Directives/Common/AlphabetOnlyDirective.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppContainers = [__WEBPACK_IMPORTED_MODULE_12__CommonComponent_AppContainer_FullLayout_full_layout_component__["a" /* FullLayoutComponent */], __WEBPACK_IMPORTED_MODULE_13__CommonComponent_AppContainer_SimpleLayout_simple_layout_component__["a" /* SimpleLayoutComponent */]];
var AppModuleShared = /** @class */ (function () {
    function AppModuleShared() {
    }
    AppModuleShared = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navmenu_navmenu_component__["a" /* NavMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_counter_counter_component__["a" /* CounterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_fetchdata_fetchdata_component__["a" /* FetchDataComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_Account_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_Account_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__CommonComponent_Validation_control_messageComponent__["a" /* ControlMessagesComponent */],
                AppContainers,
                __WEBPACK_IMPORTED_MODULE_20__Directives_Common_NumberOnlyDirective__["a" /* NumbersOnlyDirective */],
                __WEBPACK_IMPORTED_MODULE_26__Directives_Common_AlphabetOnlyDirective__["a" /* AlphabetsOnlyDirective */],
                __WEBPACK_IMPORTED_MODULE_23__CommonComponent_Widget_CommonHelper__["b" /* NotifyDialog */],
                __WEBPACK_IMPORTED_MODULE_23__CommonComponent_Widget_CommonHelper__["c" /* ProgressDialog */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_14__CommonComponent_AppContainer_app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_slimscroll__["NgSlimScrollModule"],
                __WEBPACK_IMPORTED_MODULE_24_angular_material_fileupload__["a" /* MatFileUploadModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_23__CommonComponent_Widget_CommonHelper__["b" /* NotifyDialog */],
                __WEBPACK_IMPORTED_MODULE_23__CommonComponent_Widget_CommonHelper__["c" /* ProgressDialog */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_16__angular_cdk_layout__["d" /* MediaMatcher */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_15_ngx_slimscroll__["SLIMSCROLL_DEFAULTS"],
                    useValue: {
                        alwaysVisible: false
                    }
                },
                __WEBPACK_IMPORTED_MODULE_19__Services_AppHttpInterceptor__["a" /* AppHttpInterceptor */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_19__Services_AppHttpInterceptor__["a" /* AppHttpInterceptor */],
                    multi: true,
                },
                __WEBPACK_IMPORTED_MODULE_21__Services_AccountService__["a" /* AccountServicce */],
                __WEBPACK_IMPORTED_MODULE_25__Services_FileUploadService__["a" /* FileUploadService */],
                __WEBPACK_IMPORTED_MODULE_23__CommonComponent_Widget_CommonHelper__["a" /* DialogHelper */]
            ],
        })
    ], AppModuleShared);
    return AppModuleShared;
}());



/***/ }),

/***/ "./ClientApp/app/components/Account/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.full-width {\r\n    min-width: 300px;\r\n    min-height:400px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/components/Account/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height:100%;\" class=\"backgroungImage\">\r\n    <mat-card>\r\n        <mat-card-content>\r\n            <h3>Sign in with your account</h3>\r\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" class=\"full-width\" style=\"margin-top:4em;\" (keydown.enter)=\"$event.preventDefault()\">\r\n                <input type=\"hidden\" name=\"returnUrl\" value=\"\" />\r\n                <input type=\"hidden\" name=\"RememberMe\" value=\"false\" />\r\n                <div fxLayout=\"row wrap\">\r\n                    <mat-input-container fxFlex>\r\n                        <input matInput placeholder=\"Email\" maxlength=\"100\"\r\n                               formControlName=\"Email\" required>\r\n                        <mat-error>\r\n                            <control-messages [control]=\"form.controls.userName\"></control-messages>\r\n                        </mat-error>\r\n                    </mat-input-container>\r\n                </div>\r\n                <div fxLayout=\"row wrap\">\r\n                    <mat-input-container fxFlex>\r\n                        <input matInput type=\"password\" placeholder=\"Password\"\r\n                               formControlName=\"Password\" required>\r\n                        <mat-error>\r\n                            <control-messages [control]=\"form.controls.password\"></control-messages>\r\n                        </mat-error>\r\n                    </mat-input-container>\r\n                </div>\r\n                <div fxLayout=\"row\" style=\"margin:1em 1em 2em 0em;\">\r\n                    <button mat-button color=\"primary\" (click)=\"router.navigate(['/account/register'])\" style=\"line-height:0em;color:blue;\">\r\n                        Forgot password?\r\n                    </button>\r\n                    <!--<a fxFlex href=\"#\">Forgot password?</a>-->\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"min-height:20px;margin:1em 1em;\">\r\n                    <mat-error *ngIf=\"ErrorMessages && ErrorMessages.length > 0\">\r\n                        {{ErrorMessages[0]}}\r\n                    </mat-error>\r\n                </div>\r\n                <!--ErrorMessages-->\r\n                <!--<p>Form value: {{ form.value | json }}</p>\r\n    <p>{{isFieldInvalid('required')}}</p>\r\n    <p>Form value: {{ form.status | json }}</p>-->\r\n                <div fxLayout=\"row wrap\">\r\n                    <div fxLayoutAlign=\"start center\">\r\n\r\n                        <!--<a mat-list-item [routerLink]=\"['/account/register']\">Create account</a>-->\r\n                        <button mat-button color=\"primary\" (click)=\"router.navigate(['/account/register'])\">\r\n                            Create account\r\n                        </button>\r\n                    </div>\r\n                    <div fxFlex>\r\n                    </div>\r\n                    <div fxLayoutAlign=\"end center\">\r\n                        <button mat-raised-button color=\"primary\" [disabled]=\"!form.valid && form.dirty\" type=\"submit\">Login</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/Account/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_AccountService__ = __webpack_require__("./ClientApp/app/Services/AccountService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, fb, http, baseUrl, anti, accountService) {
        this.router = router;
        this.fb = fb;
        this.http = http;
        this.anti = anti;
        this.accountService = accountService;
        this.baseURL = baseUrl;
        //this.http = Http;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            Email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(100)])],
            Password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required])],
            RememberMe: ['false'],
            returnUrl: [''],
            __RequestVerificationToken: [this.anti]
        });
    };
    LoginComponent.prototype.isFieldInvalid = function (field) {
        //console.log(field);
        //console.log(this.form.get(field));
        var a = this.form.get(field);
        if (a != null)
            return ((a.valid && a.touched) ||
                (a.untouched && this.formSubmitAttempt));
        return true;
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formSubmitAttempt = true;
        this.ErrorMessages = [];
        //debugger;
        if (this.form.valid) {
            this.accountService.Login(this.form.value)
                .subscribe(function (result) {
                if (result.isSuccess) {
                    location.href = _this.baseURL;
                    //location.reload();
                }
                else {
                    _this.ErrorMessages.push(result.errormessage[0]);
                }
            }, function (errorResponse) {
                console.log(errorResponse);
                if (errorResponse.status = 422) {
                    _this.ErrorMessages.push(errorResponse.error.errors[0].message);
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./ClientApp/app/components/Account/login/login.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/Account/login/login.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BASE_URL')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AntiForgeryToken')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */], String, String, __WEBPACK_IMPORTED_MODULE_3__Services_AccountService__["a" /* AccountServicce */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/Account/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.signin-content {\r\n    padding: 60px 1rem;\r\n}\r\n\r\n.full-width {\r\n    min-width: 300px;\r\n    min-height: 400px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n}\r\n\r\nmat-form-field{\r\n    margin-right:1em;\r\n}"

/***/ }),

/***/ "./ClientApp/app/components/Account/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" style=\"height:100%;\">\r\n  <mat-card>\r\n    <mat-card-content>\r\n\r\n      <h3>Create your account</h3>\r\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" class=\"full-width\" style=\"margin-top:4em;\" (keydown.enter)=\"$event.preventDefault()\">\r\n        <div fxLayout=\"row wrap\">\r\n          <mat-form-field fxFlex>\r\n            <input matInput placeholder=\"Firstname\" maxlength=\"100\"\r\n                   formControlName=\"firstname\" required AlphabetsOnly=\"true\">\r\n            <mat-error>\r\n              <control-messages [control]=\"form.controls.firstname\"></control-messages>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field fxFlex>\r\n            <input matInput placeholder=\"Lastname\" maxlength=\"100\"\r\n                   formControlName=\"lastname\" AlphabetsOnly=\"true\">\r\n            <mat-error>\r\n              <control-messages [control]=\"form.controls.lastname\"></control-messages>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row wrap\">\r\n          <mat-form-field fxFlex>\r\n            <input matInput placeholder=\"email\" maxlength=\"100\"\r\n                   formControlName=\"email\" required>\r\n            <mat-error>\r\n              <control-messages [control]=\"form.controls.email\"></control-messages>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field fxFlex>\r\n            <input matInput placeholder=\"Mobile number\" maxlength=\"10\" NumbersOnly=\"true\"\r\n                   formControlName=\"MobileNumber\" required>\r\n            <mat-error>\r\n              <control-messages [control]=\"form.controls.MobileNumber\"></control-messages>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row wrap\">\r\n          <mat-form-field fxFlex>\r\n            <input matInput type=\"password\" placeholder=\"Password\"\r\n                   formControlName=\"password\" required>\r\n            <mat-error>\r\n              <control-messages [control]=\"form.controls.password\"></control-messages>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field fxFlex>\r\n            <input matInput type=\"password\" placeholder=\"Confirm Password\"\r\n                   formControlName=\"confirmPassword\" required>\r\n            <mat-error>\r\n              <control-messages [control]=\"form.controls.confirmPassword\"></control-messages>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <!--<p>Form value: {{ form.value | json }}</p>\r\n        <p>{{isFieldInvalid('required')}}</p>\r\n        <p>Form value: {{ form.status | json }}</p>-->\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"min-height:20px;margin:1em 1em;\">\r\n          <mat-error *ngIf=\"ErrorMessages && ErrorMessages.length > 0\">\r\n            {{ErrorMessages[0]}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"showPasswordReset\"><span>Email already registered <a href=\"#\">Click Here</a> to reset password </span>  </mat-error>\r\n        </div>\r\n        <div fxLayout=\"row wrap\">\r\n          <div fxLayoutAlign=\"start center\">\r\n            <button mat-button color=\"primary\" (click)=\"router.navigate(['/account/login'])\">\r\n              Sign in instead\r\n            </button>\r\n          </div>\r\n          <div fxFlex>\r\n          </div>\r\n          <div fxLayout=\"row wrap\" fxLayoutAlign=\"end center\">\r\n            <!--[disabled]=\"!form.valid && form.dirty\"-->\r\n            <button mat-raised-button color=\"primary\" type=\"submit\">Create Account</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onSubmit2(1)\">success</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onSubmit2(2)\">error</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onSubmit2(3)\">warn</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onSubmit2(4)\">confirm</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onSubmit2(5)\">inform</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onSubmit2(6)\">load</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onSubmit2(7)\">loadmessd</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onSubmit2(8)\">load8</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onSubmit2(7)\">load9</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onSubmit2(7)\">loadm10</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n      <div fxLayout=\"column wrap\" *ngIf=\"false\">\r\n        <div>\r\n          <br />\r\n          <h1>File Upload Using Angular 5 and ASP.NET Core 2.1</h1>\r\n          <input #file type=\"file\" multiple (change)=\"upload(file.files)\" />\r\n          <br />\r\n          <span style=\"font-weight:bold;color:green;\" *ngIf=\"progress > 0 && progress < 100\">\r\n            {{progress}}%\r\n          </span>\r\n          <span style=\"font-weight:bold;color:green;\" *ngIf=\"message\">\r\n            {{message}}\r\n          </span>\r\n        </div>\r\n\r\n        <div>\r\n\r\n\r\n          <label for=\"singleFile\">Upload file</label>\r\n          <input id=\"singleFile\" type=\"file\" [fileUploadInputFor]=\"fileUploadQueue\" />\r\n          <br>\r\n\r\n          <mat-file-upload-queue #fileUploadQueue\r\n                                 [fileAlias]=\"'file'\"\r\n                                 [httpUrl]=\"'http://localhost:52112/Account/UploadFile2'\">\r\n\r\n            <mat-file-upload [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\r\n          </mat-file-upload-queue>\r\n        </div>\r\n\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/components/Account/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CommonComponent_Validation_validation_service__ = __webpack_require__("./ClientApp/app/CommonComponent/Validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_AccountService__ = __webpack_require__("./ClientApp/app/Services/AccountService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CommonComponent_Widget_CommonHelper__ = __webpack_require__("./ClientApp/app/CommonComponent/Widget/CommonHelper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Services_FileUploadService__ = __webpack_require__("./ClientApp/app/Services/FileUploadService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, fb, accountService, fileUploadService, anti, dh, http) {
        this.router = router;
        this.fb = fb;
        this.accountService = accountService;
        this.fileUploadService = fileUploadService;
        this.anti = anti;
        this.dh = dh;
        this.http = http;
    }
    RegisterComponent.prototype.upload = function (files) {
        var _this = this;
        debugger;
        if (files.length === 0)
            return;
        //const formData = new FormData();
        //for (let file of files)
        //    formData.append(file.name, file);
        //const uploadReq = new HttpRequest('POST', `http://localhost:52112/Account/UploadFile2`, formData, {
        //    reportProgress: true,
        //});
        //this.http.request(uploadReq).subscribe(event => {
        //    if (event.type === HttpEventType.UploadProgress)
        //        this.progress = Math.round(100 * event.loaded / (event.total ? event.total : 1));
        //    else if (event.type === HttpEventType.Response)
        //        this.message = (event.body ? event.body : 'No message found ').toString();
        //});
        this.fileUploadService.UploadFiles('Account/UploadFile2', files).subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpEventType */].UploadProgress)
                _this.progress = Math.round(100 * event.loaded / (event.total ? event.total : 1));
            else if (event.type === __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpEventType */].Response)
                _this.message = (event.body ? event.body : 'No message found ').toString();
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__CommonComponent_Validation_validation_service__["a" /* ValidationService */].firstnameValidator])],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__CommonComponent_Validation_validation_service__["a" /* ValidationService */].lastnameValidator])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__CommonComponent_Validation_validation_service__["a" /* ValidationService */].emailValidator])],
            MobileNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__CommonComponent_Validation_validation_service__["a" /* ValidationService */].mobileValidator])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__CommonComponent_Validation_validation_service__["a" /* ValidationService */].passwordValidator])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required])]
        }, {
            validator: [__WEBPACK_IMPORTED_MODULE_2__CommonComponent_Validation_validation_service__["a" /* ValidationService */].MatchPassword]
        });
    };
    RegisterComponent.prototype.isFieldInvalid = function (field) {
        var a = this.form.get(field);
        if (a != null)
            return ((a.valid && a.touched) ||
                (a.untouched && this.formSubmitAttempt));
        return true;
    };
    RegisterComponent.prototype.onSubmit2 = function (data) {
        var _this = this;
        if (data == 1)
            this.dh.success("process saved successfully");
        else if (data == 2)
            this.dh.error("Error occurred during process of your request");
        else if (data == 3)
            this.dh.warn("success fully saved");
        else if (data == 5)
            this.dh.inform("success fully saved");
        else if (data == 4)
            this.dh.confirm("do u relally want to success fully saved");
        else if (data == 6) {
            //let progressDialog2 = this.dh.showProgressMessage("hello ahsjkdhaskjd hasjkhdas jds ahdjkh kh kh kjhjh kjh k, alsdalshd klad dhakdajdklasd jasldkas jdaskldjas lasjd salkdjsa kdlsaj aslkj aslkdas dlkasd sakldjas dlkas jdad somehing is going on!");
            //setTimeout(() => {
            //    this.dh.closeDialog(progressDialog2);
            //}, 500);
            var progressDialog_1 = this.dh.showProgress();
            setTimeout(function () {
                _this.dh.closeDialog(progressDialog_1);
            }, 3000);
        }
        else if (data == 7) {
            var progressDialog_2 = this.dh.showProgressMessage("hello ahsjkdhaskjd hasjkhdas jds ahdjkh kh kh kjhjh kjh k, alsdalshd klad dhakdajdklasd jasldkas jdaskldjas lasjd salkdjsa kdlsaj aslkj aslkdas dlkasd sakldjas dlkas jdad somehing is going on!");
            setTimeout(function () {
                _this.dh.closeDialog(progressDialog_2);
            }, 10000);
        }
        else if (data == 8) {
            var snackbar = this.dh.openSnackBar("askdljasd", "undo");
            this.dh.onSnackBarAction(snackbar, function () {
                var progressDialog = _this.dh.showProgressMessage("You took action Undo");
                setTimeout(function () {
                    progressDialog.close();
                    //this.dh.closeDialog(progressDialog);
                }, 5000);
            });
            //snackbar.onAction().subscribe(() => {
            //    let progressDialog = this.dh.showProgressMessage("You took action Undo");
            //    setTimeout(() => {
            //        progressDialog.close();
            //        //this.dh.closeDialog(progressDialog);
            //    }, 5000);
            //});
            //setTimeout(() => {
            //    this.dh.closeDialog(progressDialog);
            //}, 10000);
        }
    };
    RegisterComponent.prototype.onSubmit = function () {
        //this.dh.success("success fully saved");
        var _this = this;
        console.log(this.showPasswordReset);
        this.showPasswordReset = false;
        if (this.form.valid) {
            //this.form.value.__RequestVerificationToken = this.anti;
            this.accountService.Register(this.form.value)
                .subscribe(function (response) {
                console.log(response);
                if (response <= 0) {
                    if (response == -1)
                        _this.showPasswordReset = true;
                    else
                        _this.ErrorMessages.push("Error occured during process of request.");
                }
                else {
                }
            }, function (errorResponse) {
                console.log(errorResponse);
                if (errorResponse.status = 422) {
                    _this.ErrorMessages.push(errorResponse.error.errors[0].message);
                }
            });
        }
        this.formSubmitAttempt = true;
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./ClientApp/app/components/Account/register/register.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/Account/register/register.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AntiForgeryToken')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__Services_AccountService__["a" /* AccountServicce */],
            __WEBPACK_IMPORTED_MODULE_7__Services_FileUploadService__["a" /* FileUploadService */], String, __WEBPACK_IMPORTED_MODULE_5__CommonComponent_Widget_CommonHelper__["a" /* DialogHelper */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/counter/counter.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p>Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button (click)=\"incrementCounter()\">Increment</button>\r\n"

/***/ }),

/***/ "./ClientApp/app/components/counter/counter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
        this.currentCount = 0;
    }
    CounterComponent.prototype.incrementCounter = function () {
        this.currentCount++;
    };
    CounterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'counter',
            template: __webpack_require__("./ClientApp/app/components/counter/counter.component.html")
        })
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/fetchdata/fetchdata.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table' *ngIf=\"forecasts\">\r\n    <thead>\r\n        <tr>\r\n            <th>Date</th>\r\n            <th>Temp. (C)</th>\r\n            <th>Temp. (F)</th>\r\n            <th>Summary</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let forecast of forecasts\">\r\n            <td>{{ forecast.dateFormatted }}</td>\r\n            <td>{{ forecast.temperatureC }}</td>\r\n            <td>{{ forecast.temperatureF }}</td>\r\n            <td>{{ forecast.summary }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./ClientApp/app/components/fetchdata/fetchdata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FetchDataComponent = /** @class */ (function () {
    function FetchDataComponent(http, baseUrl) {
        var _this = this;
        http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(function (result) {
            _this.forecasts = result.json();
        }, function (error) { return console.error(error); });
    }
    FetchDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fetchdata',
            template: __webpack_require__("./ClientApp/app/components/fetchdata/fetchdata.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], String])
    ], FetchDataComponent);
    return FetchDataComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column wrap\">\r\n    <h3>Basic Buttons</h3>\r\n    <div class=\"button-row\">\r\n        <button mat-button>Basic</button>\r\n        <button mat-button color=\"primary\">Primary</button>\r\n        <button mat-button color=\"accent\">Accent</button>\r\n        <button mat-button color=\"warn\">Warn</button>\r\n        <button mat-button disabled>Disabled</button>\r\n        <a mat-button routerLink=\".\">Link</a>\r\n    </div>\r\n    <h3>Raised Buttons</h3>\r\n    <div class=\"button-row\">\r\n        <button mat-raised-button>Basic</button>\r\n        <button mat-raised-button color=\"primary\">Primary</button>\r\n        <button mat-raised-button color=\"accent\">Accent</button>\r\n        <button mat-raised-button color=\"warn\">Warn</button>\r\n        <button mat-raised-button disabled>Disabled</button>\r\n        <a mat-raised-button routerLink=\".\">Link</a>\r\n    </div>\r\n    <h3>Icon Buttons</h3>\r\n    <div class=\"button-row\">\r\n        <button mat-icon-button>\r\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"primary\">\r\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"accent\">\r\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"warn\">\r\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n        </button>\r\n        <button mat-icon-button disabled>\r\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n        </button>\r\n    </div>\r\n    <h1>Hello, world!</h1>\r\n    <p>Welcome to your new single-page application, built with:</p>\r\n    <ul>\r\n        <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n        <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n        <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\r\n        <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n    </ul>\r\n    <p>To help you get started, we've also set up:</p>\r\n    <ul>\r\n        <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n        <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\r\n        <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\r\n        <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular app will be rebuilt and a new instance injected into the page.</li>\r\n        <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__("./ClientApp/app/components/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/navmenu/navmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a>-->\r\n<!--<a mat-list-item [routerLink]=\"['/home']\" routerLinkActive=\"active-link\">\r\n    <mat-icon class=\"example-icon\">dashboard</mat-icon> Home\r\n</a>\r\n<a mat-list-item [routerLink]=\"['/counter']\" routerLinkActive=\"active-link\">\r\n    <mat-icon class=\"example-icon\">favorite_outline</mat-icon> Counter\r\n</a>\r\n<a mat-list-item [routerLink]=\"['/fetch-data']\" routerLinkActive=\"active-link\">\r\n    <mat-icon class=\"example-icon\">list</mat-icon> Fetch data\r\n</a>\r\n<a mat-list-item [routerLink]=\"['/app-login']\" routerLinkActive=\"active-link\">\r\n    <mat-icon class=\"example-icon\">lock_outline</mat-icon> Login\r\n</a>\r\n<a mat-list-item [routerLink]=\"['/']\">\r\n    <mat-icon class=\"example-icon\">lock_outline</mat-icon>Pure Login\r\n</a>\r\n<a mat-list-item [routerLink]=\"['/account/register']\">\r\n    <mat-icon class=\"example-icon\">lock_outline</mat-icon>Pure Register\r\n</a>-->\r\n<!--<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">-->\r\n<!-- Our Custom CSS -->\r\n<!--<link rel=\"stylesheet\" href=\"style.css\">-->\r\n<!-- Sidebar Holder -->\r\n<nav id=\"sidebar\" [style.background.color]=\"primary\">\r\n    <!--<div class=\"sidebar-header\">\r\n        <h3>Bootstrap Sidebar</h3>\r\n    </div>-->\r\n\r\n    <ul class=\"list-unstyled components\">\r\n        <li routerLinkActive=\"active\">\r\n            <a [routerLink]=\"['/home']\" fxLayout=\"row\">\r\n                <mat-icon fxFlexAlign=\"center\" class=\"menuIcon\">home</mat-icon>\r\n                <span fxFlexAlign=\"center\">Home</span>\r\n            </a>\r\n        </li>\r\n        <li routerLinkActive=\"active\">\r\n            <a [routerLink]=\"['/counter']\" fxLayout=\"row\">\r\n                <mat-icon fxFlexAlign=\"center\" class=\"menuIcon\">home</mat-icon>\r\n                <span fxFlexAlign=\"center\">Counter</span>\r\n            </a>\r\n        </li>\r\n        <!--<li routerLinkActive=\"active\">\r\n            <a [routerLink]=\"['/fetch-data']\">\r\n                <i class=\"glyphicon glyphicon-briefcase\"></i>\r\n                Fetch data\r\n            </a>\r\n        </li>-->\r\n        <li routerLinkActive=\"active\">\r\n            <a [routerLink]=\"['/app-login']\" fxLayout=\"row\">\r\n                <mat-icon fxFlexAlign=\"center\" class=\"menuIcon\">home</mat-icon>\r\n                <span fxFlexAlign=\"center\">Login</span>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a routerLinkActive=\"active\" href=\"#Pure\" data-toggle=\"collapse\" aria-expanded='false' fxLayout=\"row\">\r\n                <mat-icon fxFlexAlign=\"center\" class=\"menuIcon\">home</mat-icon>\r\n                <span fxFlexAlign=\"center\">Pure</span>\r\n            </a>\r\n            <ul class=\"collapse list-unstyled\" id=\"Pure\">\r\n                <li routerLinkActive=\"active\"><a [routerLink]=\"['/account/register']\">Register</a></li>\r\n                <li routerLinkActive=\"active\"><a [routerLink]=\"['/ajshd']\">Login</a></li>\r\n                <li routerLinkActive=\"active\"><a [routerLink]=\"['/fetch-data']\">Page 3</a></li>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n\r\n    <ul class=\"list-unstyled components\">\r\n        <li>\r\n            <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\">\r\n                <i class=\"glyphicon glyphicon-home\"></i>\r\n                Home\r\n            </a>\r\n            <ul class=\"collapse list-unstyled\" id=\"homeSubmenu\">\r\n                <li><a href=\"#\">Home 1</a></li>\r\n                <li><a href=\"#\">Home 2</a></li>\r\n                <li><a href=\"#\">Home 3</a></li>\r\n                <li>\r\n                    <a mat-list-item [routerLink]=\"['/counter']\">\r\n                        <mat-icon class=\"example-icon\">lock_outline</mat-icon>Pure Register\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\">\r\n                <i class=\"glyphicon glyphicon-briefcase\"></i>\r\n                About\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#pageSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\">\r\n                <i class=\"glyphicon glyphicon-duplicate\"></i>\r\n                Pages\r\n            </a>\r\n            <ul class=\"collapse list-unstyled\" id=\"pageSubmenu\">\r\n                <li><a href=\"#\">Page 1</a></li>\r\n                <li><a href=\"#\">Page 2</a></li>\r\n                <li><a href=\"#\">Page 3</a></li>\r\n            </ul>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\">\r\n                <i class=\"glyphicon glyphicon-link\"></i>\r\n                Portfolio\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\">\r\n                <i class=\"glyphicon glyphicon-paperclip\"></i>\r\n                FAQ\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\">\r\n                <i class=\"glyphicon glyphicon-send\"></i>\r\n                Contact\r\n            </a>\r\n        </li>\r\n    </ul>\r\n\r\n    <ul class=\"list-unstyled CTAs\">\r\n        <li><a href=\"https://bootstrapious.com/tutorial/files/sidebar.zip\" class=\"download\">Download source</a></li>\r\n        <li><a href=\"https://bootstrapious.com/p/bootstrap-sidebar\" class=\"article\">Back to article</a></li>\r\n    </ul>\r\n</nav>\r\n<!--<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">HappyClasses</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/home']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/counter']\">\r\n                        <span class='glyphicon glyphicon-education'></span> Counter\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/fetch-data']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/app-login']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Login\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>-->\r\n"

/***/ }),

/***/ "./ClientApp/app/components/navmenu/navmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nav-menu',
            template: __webpack_require__("./ClientApp/app/components/navmenu/navmenu.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/navmenu/navmenu.component3.css")]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/navmenu/navmenu.component3.css":
/***/ (function(module, exports) {

module.exports = "\r\n@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\n/*\r\n    DEMO STYLE\r\n*/\n/*body {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: #fafafa;\r\n}\r\n\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: #999;\r\n}*/\n.menuIcon{\r\n    margin-right:5px;\r\n    font-size:20px;\r\n}\na, a:hover, a:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n}\n/*.navbar {\r\n    padding: 15px 10px;\r\n    background: #fff;\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}*/\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\n/*i, span {\r\n    display: inline-block;\r\n}*/\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\n.wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: stretch;\r\n        -ms-flex-align: stretch;\r\n            align-items: stretch;\r\n}\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    /*background: #fafafa;*/\r\n    /*background: #7386D5;\r\n    color: #fff;*/\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n}\n#sidebar.active {\r\n        min-width: 80px;\r\n        max-width: 80px;\r\n        text-align: center;\r\n    }\n#sidebar.active .sidebar-header h3, #sidebar.active .CTAs {\r\n            display: none;\r\n        }\n#sidebar.active .sidebar-header strong {\r\n            display: block;\r\n        }\n#sidebar ul li a {\r\n        text-align: left;\r\n    }\n#sidebar.active ul li a {\r\n        padding: 20px 10px;\r\n        text-align: center;\r\n        font-size: 0.85em;\r\n    }\n#sidebar.active ul li a i {\r\n            margin-right: 0;\r\n            display: block;\r\n            font-size: 1.8em;\r\n            margin-bottom: 5px;\r\n        }\n#sidebar.active ul ul a {\r\n        padding: 10px !important;\r\n    }\n#sidebar.active a[aria-expanded=\"false\"]::before, #sidebar.active a[aria-expanded=\"true\"]::before {\r\n        top: auto;\r\n        bottom: 5px;\r\n        right: 50%;\r\n        -webkit-transform: translateX(50%);\r\n        transform: translateX(50%);\r\n    }\n#sidebar .sidebar-header {\r\n        padding: 20px;\r\n        background: #e0dfdf;\r\n    }\n#sidebar .sidebar-header strong {\r\n            display: none;\r\n            font-size: 1.8em;\r\n        }\n#sidebar ul.components {\r\n        padding: 20px 0;\r\n        border-bottom: 1px solid #47748b;\r\n    }\n#sidebar ul li a {\r\n        padding: 10px;\r\n        font-size: 1.1em;\r\n        display: block;\r\n    }\n#sidebar ul li a:hover {\r\n            /*color: #7386D5;\r\n            background: #fff;*/\r\n            background: #e0dfdf;\r\n            /*color: #fff;*/\r\n        }\n#sidebar ul li a i {\r\n            margin-right: 10px;\r\n        }\n#sidebar a[aria-expanded=\"true\"] {\r\n        /*color: #fff;*/\r\n        background: #f5f5f5;\r\n        /*background: #6d7fcc;*/\r\n    }\n#sidebar ul li.active > a {\r\n    background: #e0dfdf !important;\r\n}\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\na[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\r\n    content: '\\e259';\r\n    display: block;\r\n    position: absolute;\r\n    right: 20px;\r\n    font-family: 'Glyphicons Halflings';\r\n    font-size: 0.6em;\r\n}\na[aria-expanded=\"true\"]::before {\r\n    content: '\\e260';\r\n}\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #f5f5f5;\r\n}\n/*ul.CTAs {\r\n    padding: 20px;\r\n}\r\n\r\n    ul.CTAs a {\r\n        text-align: center;\r\n        font-size: 0.9em !important;\r\n        display: block;\r\n        border-radius: 5px;\r\n        margin-bottom: 5px;\r\n    }\r\n\r\na.download {\r\n    background: #fff;\r\n    color: #7386D5;\r\n}\r\n\r\na.article, a.article:hover {\r\n    background: #6d7fcc !important;\r\n    color: #fff !important;\r\n}*/\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\n#content {\r\n    padding: 20px;\r\n    min-height: 100vh;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n}\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\n/*@media (max-width: 768px) {\r\n    #sidebar {\r\n        min-width: 80px;\r\n        max-width: 80px;\r\n        text-align: center;\r\n        margin-left: -80px !important;\r\n    }\r\n\r\n    a[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\r\n        top: auto;\r\n        bottom: 5px;\r\n        right: 50%;\r\n        -webkit-transform: translateX(50%);\r\n        -ms-transform: translateX(50%);\r\n        transform: translateX(50%);\r\n    }\r\n\r\n    #sidebar.active {\r\n        margin-left: 0 !important;\r\n    }\r\n\r\n    #sidebar .sidebar-header h3, #sidebar .CTAs {\r\n        display: none;\r\n    }\r\n\r\n    #sidebar .sidebar-header strong {\r\n        display: block;\r\n    }\r\n\r\n    #sidebar ul li a {\r\n        padding: 20px 10px;\r\n    }\r\n\r\n        #sidebar ul li a span {\r\n            font-size: 0.85em;\r\n        }\r\n\r\n        #sidebar ul li a i {\r\n            margin-right: 0;\r\n            display: block;\r\n        }\r\n\r\n    #sidebar ul ul a {\r\n        padding: 10px !important;\r\n    }\r\n\r\n    #sidebar ul li a i {\r\n        font-size: 1.3em;\r\n    }\r\n\r\n    #sidebar {\r\n        margin-left: 0;\r\n    }\r\n\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}*/\r\n"

/***/ }),

/***/ "./ClientApp/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./ClientApp/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./ClientApp/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./ClientApp/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map