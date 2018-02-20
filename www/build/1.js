webpackJsonp([1],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPayersPageModule", function() { return ModalPayersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_payers__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPayersPageModule = (function () {
    function ModalPayersPageModule() {
    }
    return ModalPayersPageModule;
}());
ModalPayersPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_payers__["a" /* ModalPayersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_payers__["a" /* ModalPayersPage */]),
        ],
    })
], ModalPayersPageModule);

//# sourceMappingURL=modal-payers.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPayersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Providers_globals__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Providers_methods_token_methods_token__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ModalPayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPayersPage = (function () {
    function ModalPayersPage(navCtrl, ptrGlobals, navParams, View, ptrSendMoney, cotizador, ptrNewWire, ptrMethodsTokenProvider) {
        this.navCtrl = navCtrl;
        this.ptrGlobals = ptrGlobals;
        this.navParams = navParams;
        this.View = View;
        this.ptrSendMoney = ptrSendMoney;
        this.cotizador = cotizador;
        this.ptrNewWire = ptrNewWire;
        this.ptrMethodsTokenProvider = ptrMethodsTokenProvider;
    }
    ModalPayersPage.prototype.onCloseModal = function () {
        var data = {
            Payer_code: ''
        };
        this.View.dismiss(data);
    };
    ModalPayersPage.prototype.onSave = function (Payer_code, Payer_name, Country_Code) {
        this.ptrSendMoney.id_Payer = Payer_code;
        this.ptrSendMoney.Name_Payer = Payer_name;
        //this.cotizador.Country_Code   = Country_Code;  
        this.ptrGlobals.Country_Code = Country_Code;
        this.ptrNewWire.AgPAyer_id = Payer_code;
        this.ptrNewWire.bankid = '0';
        this.ptrNewWire.payermethod = 'AGE';
        this.onCloseModal();
    };
    return ModalPayersPage;
}());
ModalPayersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal-payers',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/Branch/src/pages/modal-payers/modal-payers.html"*/'<!--\n  Generated template for the ModalCountriesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  </ion-header>\n  \n  <ion-content padding>\n\n      <ion-list>\n          <ion-item *ngFor="let name of this.ptrSendMoney.lstPayers[0]" (click)="onSave( name.AgPayer_ID ,name.AGP_Name,name.Country_Code)">\n              <ion-avatar item-left>\n                  <img src="http://www.prontoprontomoney.com/img/Payer/{{name.AgPayer_ID}}.png" width="60" height="38" class="avatar">\n              </ion-avatar>          \n              <h2> {{name.AGP_Name}} </h2>\n            </ion-item>                \n      </ion-list>\n  </ion-content>'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/Branch/src/pages/modal-payers/modal-payers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["c" /* Globals */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["f" /* SendMoney */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["b" /* Cotiza */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["e" /* NewWire */], __WEBPACK_IMPORTED_MODULE_3__Providers_methods_token_methods_token__["a" /* MethodsTokenProvider */]])
], ModalPayersPage);

//# sourceMappingURL=modal-payers.js.map

/***/ })

});
//# sourceMappingURL=1.js.map