webpackJsonp([0],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalStatesPageModule", function() { return ModalStatesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_states__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalStatesPageModule = (function () {
    function ModalStatesPageModule() {
    }
    return ModalStatesPageModule;
}());
ModalStatesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_states__["a" /* ModalStatesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_states__["a" /* ModalStatesPage */]),
        ],
    })
], ModalStatesPageModule);

//# sourceMappingURL=modal-states.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalStatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Providers_globals__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Providers_client_methods_client_methods__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModalStatesPage = (function () {
    function ModalStatesPage(navCtrl, translateService, navParams, View, ptrGlobals, ClientMethods) {
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.navParams = navParams;
        this.View = View;
        this.ptrGlobals = ptrGlobals;
        this.ClientMethods = ClientMethods;
        //this.ClientMethods.onListStates('CA');   
    }
    ModalStatesPage.prototype.onCloseModal = function () {
        var data = {
            State_Code: ''
        };
        this.View.dismiss(data);
    };
    ModalStatesPage.prototype.ionViewWillLoad = function () {
        var data = this.navParams.get('data');
        this.ClientMethods.onAnadeLog(data.State_Code, 'INFO');
        this.ClientMethods.onListStates(data.State_Code);
    };
    ModalStatesPage.prototype.onSave = function (State_Name, State_Code) {
        this.ptrGlobals.State_Name = State_Name;
        this.ptrGlobals.State_Code = State_Name;
        this.onCloseModal();
    };
    return ModalStatesPage;
}());
ModalStatesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal-states',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/Branch/src/pages/modal-states/modal-states.html"*/' \n  <ion-content padding>\n      <ion-list>\n          <ion-item *ngFor="let name of this.ptrGlobals.lstStates" (click)="onSave(name.St_Name,name.State_ID )"> \n              <h2>{{name.St_Name}}  </h2>\n          </ion-item>      \n      </ion-list>\n  </ion-content>'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/Branch/src/pages/modal-states/modal-states.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["c" /* Globals */], __WEBPACK_IMPORTED_MODULE_3__Providers_client_methods_client_methods__["a" /* ClientMethodsProvider */]])
], ModalStatesPage);

//# sourceMappingURL=modal-states.js.map

/***/ })

});
//# sourceMappingURL=0.js.map