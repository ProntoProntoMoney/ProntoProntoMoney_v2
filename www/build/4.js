webpackJsonp([4],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBanksPageModule", function() { return ModalBanksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_banks__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalBanksPageModule = (function () {
    function ModalBanksPageModule() {
    }
    return ModalBanksPageModule;
}());
ModalBanksPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_banks__["a" /* ModalBanksPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_banks__["a" /* ModalBanksPage */]),
        ],
    })
], ModalBanksPageModule);

//# sourceMappingURL=modal-banks.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBanksPage; });
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
 * Generated class for the ModalBanksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalBanksPage = (function () {
    function ModalBanksPage(navCtrl, ptrGlobals, navParams, View, ptrSendMoney, ptrNewWire, ptrMethodsTokenProvider, alertCtrl, ptrBeneficiaries, app, Modal) {
        this.navCtrl = navCtrl;
        this.ptrGlobals = ptrGlobals;
        this.navParams = navParams;
        this.View = View;
        this.ptrSendMoney = ptrSendMoney;
        this.ptrNewWire = ptrNewWire;
        this.ptrMethodsTokenProvider = ptrMethodsTokenProvider;
        this.alertCtrl = alertCtrl;
        this.ptrBeneficiaries = ptrBeneficiaries;
        this.app = app;
        this.Modal = Modal;
    }
    ModalBanksPage.prototype.onCloseModal = function () {
        var data = {
            Bank_code: ''
        };
        this.View.dismiss(data);
    };
    ModalBanksPage.prototype.onSave = function (Bank_code, Bank_name, agpayer) {
        this.ptrSendMoney.id_Bank = Bank_code;
        this.ptrSendMoney.Name_Bank = Bank_name;
        this.ptrNewWire.bankid = Bank_code;
        this.ptrNewWire.AgPAyer_id = agpayer;
        this.ptrNewWire.payermethod = 'DEP';
        //this.ptrNewWire.typeAcId    = 'SAV';
        //this.ptrNewWire.typeAcId    = 'SAV'; VA DENTRO DE PANTALLA DE SELECCION Y LLENADO DE CUENTA OJO POR DEFECTO
        if (this.ptrGlobals.IdentificacionObligatoria != '0') {
            this.ptrBeneficiaries.REC_IDNumber = this.ptrGlobals.IdentificacionObligatoria;
        }
        this.onOpenModal();
        this.onCloseModal();
        // this.app.getRootNav().setRoot(BankdepositaccountPage);
    };
    ModalBanksPage.prototype.onOpenModal = function () {
        var Senddata = { Country_Code: '' };
        var ModalBankaccount = this.Modal.create('ModalBankaccountPage', { data: Senddata });
        ModalBankaccount.present();
    };
    return ModalBanksPage;
}());
ModalBanksPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal-banks',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/Branch/src/pages/modal-banks/modal-banks.html"*/'<!--\n  Generated template for the ModalCountriesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  </ion-header>\n  \n  <ion-content padding>\n      <ion-list>\n          <ion-item  *ngFor="let name of this.ptrSendMoney.lstBanks[0]" (click)="onSave( name.Bank_id ,name.BNK_Name,name.AgPayer_ID)">\n              <ion-avatar item-left>\n                  <img src="http://www.prontoprontomoney.com/img/{{name.Bank_id}}.png" width="60" height="38" class="avatar">\n              </ion-avatar>          \n              <h2> {{name.BNK_Name}}   </h2>\n          </ion-item>      \n      </ion-list>\n  </ion-content>'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/Branch/src/pages/modal-banks/modal-banks.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["c" /* Globals */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["f" /* SendMoney */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["e" /* NewWire */], __WEBPACK_IMPORTED_MODULE_3__Providers_methods_token_methods_token__["a" /* MethodsTokenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["a" /* Beneficiaries */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], ModalBanksPage);

//# sourceMappingURL=modal-banks.js.map

/***/ })

});
//# sourceMappingURL=4.js.map