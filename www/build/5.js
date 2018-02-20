webpackJsonp([5],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBankaccountPageModule", function() { return ModalBankaccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_bankaccount__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModalBankaccountPageModule = (function () {
    function ModalBankaccountPageModule() {
    }
    return ModalBankaccountPageModule;
}());
ModalBankaccountPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_bankaccount__["a" /* ModalBankaccountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_bankaccount__["a" /* ModalBankaccountPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__modal_bankaccount__["a" /* ModalBankaccountPage */]
        ]
    })
], ModalBankaccountPageModule);

//# sourceMappingURL=modal-bankaccount.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBankaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Providers_globals__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
/**
 * Generated class for the ModalBankaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalBankaccountPage = (function () {
    function ModalBankaccountPage(navCtrl, navParams, ptrNewWire, alertCtrl, app, ptrSendMoney, View, translateService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ptrNewWire = ptrNewWire;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.ptrSendMoney = ptrSendMoney;
        this.View = View;
        this.translateService = translateService;
    }
    ModalBankaccountPage.prototype.ionViewWillLoad = function () {
        this.ptrNewWire.typeAcId = 'SAV';
    };
    ModalBankaccountPage.prototype.onClose = function () {
        var data = {
            Bank_code: ''
        };
        this.View.dismiss(data);
    };
    ModalBankaccountPage.prototype.onSaveChecked = function (typeAccount) {
        if (typeAccount == '') {
            var alert_1 = this.alertCtrl.create({
                title: 'datos obligatorios',
                subTitle: 'datos de typoe account obligatorios',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.ptrNewWire.typeAcId = typeAccount;
        }
    };
    ModalBankaccountPage.prototype.onSave = function (accountNumber) {
        if (accountNumber == '') {
            var alert_2 = this.alertCtrl.create({
                title: 'datos obligatorios',
                subTitle: 'datos de account number y typoe account obligatorios',
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            this.ptrNewWire.payermethod = 'DEP';
            this.ptrNewWire.BankAcNumber = accountNumber;
            this.onClose();
        }
    };
    return ModalBankaccountPage;
}());
ModalBankaccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal-bankaccount',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/Branch/src/pages/modal-bankaccount/modal-bankaccount.html"*/'<ion-content>\n  <ion-grid style="background-color:#c6c3e1;"><!-- style="background-color:#CED8F6;"-->\n    <ion-row > \n      <ion-col col-2>\n            <img  src="./assets/imgs/logo.png"  (click)="onClose()" width="60" height="40"  />\n      </ion-col>\n      <ion-col col-8 style="font-size: 20px;text-align: center; color: #003399; font-family: \'Myriad Pro\'; line-height: 39px;" >\n            <span > {{"BaTitle" | translate }}</span>\n      </ion-col>\n      <ion-col col-2>\n        <img  src="./assets/imgs/arrow_back.png"  (click)="onClose()" width="60" height="40"/>      \n      </ion-col>      \n    </ion-row>\n  </ion-grid>\n\n\n  <ion-list radio-group>\n    <ion-item>\n      <ion-label>{{"BaSaving" | translate }}</ion-label>\n      <ion-radio checked="true" value="SAV" (click)="onSaveChecked(\'SAV\',\'\')" ></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>{{"BaChecking" | translate }} </ion-label>\n      <ion-radio value="CHK" (click)="onSaveChecked(\'CHK\',\'\')"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>{{"BaOther" | translate }}</ion-label>\n      <ion-radio value="OTH" (click)="onSaveChecked(\'OTH\',\'\')"></ion-radio>\n    </ion-item>\n  </ion-list>\n  \n  <br/>\n  <ion-row >   \n    <ion-col col-12>\n      <ion-item >\n          <ion-label  style="font-size: 20px;color: rgba(0, 0, 255, 0.645); text-align: center; " >{{"BaNumberAccount" | translate }}</ion-label>\n          <ion-input type="number" style="font-size: 20px;color: black; text-align-last: right; font-weight: bold"  [(ngModel)]="this.ptrNewWire.BankAcNumber"></ion-input>       \n      </ion-item >  \n    </ion-col>\n</ion-row>      \n\n<br/>\n  <ion-row >   \n    <ion-col col-12>\n      <button ion-button round icon-right block  class="btn-Continue center"  (click)="onSave(this.ptrNewWire.BankAcNumber)">\n        {{"BabtnContinue" | translate }}\n      </button>    \n    </ion-col>\n  </ion-row>     \n\n</ion-content>\n'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/Branch/src/pages/modal-bankaccount/modal-bankaccount.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["e" /* NewWire */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["f" /* SendMoney */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], ModalBankaccountPage);

//# sourceMappingURL=modal-bankaccount.js.map

/***/ })

});
//# sourceMappingURL=5.js.map