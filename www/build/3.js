webpackJsonp([3],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBeneficiariesPageModule", function() { return ModalBeneficiariesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_beneficiaries__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalBeneficiariesPageModule = (function () {
    function ModalBeneficiariesPageModule() {
    }
    return ModalBeneficiariesPageModule;
}());
ModalBeneficiariesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_beneficiaries__["a" /* ModalBeneficiariesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_beneficiaries__["a" /* ModalBeneficiariesPage */]),
        ],
    })
], ModalBeneficiariesPageModule);

//# sourceMappingURL=modal-beneficiaries.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBeneficiariesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Providers_globals__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_beneficiaries_edit_beneficiaries_edit__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Providers_methods_token_methods_token__ = __webpack_require__(35);
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
 * Generated class for the ModalCountriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalBeneficiariesPage = (function () {
    function ModalBeneficiariesPage(navCtrl, ptrGlobals, navParams, View, ptrSendMoney, ptrBeneficiario, app, MethodsToken, cotizador, ptrNewWire) {
        this.navCtrl = navCtrl;
        this.ptrGlobals = ptrGlobals;
        this.navParams = navParams;
        this.View = View;
        this.ptrSendMoney = ptrSendMoney;
        this.ptrBeneficiario = ptrBeneficiario;
        this.app = app;
        this.MethodsToken = MethodsToken;
        this.cotizador = cotizador;
        this.ptrNewWire = ptrNewWire;
    }
    ModalBeneficiariesPage.prototype.onCloseModal = function () {
        this.ptrSendMoney.booSelectEdit = '1';
        var data = {
            Country_Code: ''
        };
        this.View.dismiss(data);
    };
    ModalBeneficiariesPage.prototype.onSave = function (Country_Code, Beneficiario, Receiverid, defaultBrach, banknumber) {
        this.ptrSendMoney.LastCountry_Code = Country_Code;
        this.cotizador.Country_Code = Country_Code;
        this.ptrSendMoney.Name_Beneficiario = Beneficiario;
        this.ptrSendMoney.id_Beneficiario = Receiverid;
        this.ptrSendMoney.Name_Bank = '';
        this.ptrSendMoney.Name_Payer = '';
        this.ptrNewWire.receiverId = Receiverid;
        this.ptrNewWire.BNK_DefaultBranchDeposit = defaultBrach;
        this.ptrNewWire.BankAcNumber = banknumber;
        this.ptrNewWire.Country_Code = Country_Code;
        this.MethodsToken.onCotiza();
        this.onCloseModal();
    };
    ModalBeneficiariesPage.prototype.onEdit = function (objBene) {
        this.ptrSendMoney.booSelectEdit = '1';
        this.ptrSendMoney.LastCountry_Code = objBene.Country_Code;
        this.ptrSendMoney.Name_Beneficiario = objBene.REC_FirstName + ' ' + objBene.REC_LastName1 + ' ' + objBene.REC_LastName2;
        this.ptrSendMoney.id_Beneficiario = objBene.Receiver_id;
        this.ptrSendMoney.Name_Bank = objBene.BAN_Name;
        this.ptrBeneficiario.AccountType = objBene.AccountType;
        this.ptrBeneficiario.AGP_Name = objBene.AGP_Name;
        this.ptrBeneficiario.AccountType = objBene.AccountType;
        this.ptrBeneficiario.Agpayer_ID = objBene.Agpayer_ID;
        this.ptrBeneficiario.BAN_AccNumber = objBene.BAN_AccNumber;
        this.ptrBeneficiario.BAN_Name = objBene.BAN_Name;
        this.ptrBeneficiario.BNK_DefaultBranchDeposit = objBene.BNK_DefaultBranchDeposit;
        this.ptrBeneficiario.Bank_id = objBene.Bank_id;
        this.ptrBeneficiario.CTR_Name = objBene.CTR_Name;
        this.ptrBeneficiario.Country_Code = objBene.Country_Code;
        this.ptrBeneficiario.PaymentMethodo = objBene.PaymentMethodo;
        this.ptrBeneficiario.PaymentType = objBene.PaymentType;
        this.ptrBeneficiario.REC_Address = objBene.REC_Address;
        this.ptrBeneficiario.REC_City = objBene.REC_City;
        this.ptrBeneficiario.REC_Email = objBene.REC_Email;
        this.ptrBeneficiario.REC_FirstName = objBene.REC_FirstName;
        this.ptrBeneficiario.REC_IDNumber = objBene.REC_IDNumber;
        this.ptrBeneficiario.REC_LastName1 = objBene.REC_LastName1;
        this.ptrBeneficiario.REC_LastName2 = objBene.REC_LastName2;
        this.ptrBeneficiario.REC_Phone1 = objBene.REC_Phone1;
        this.ptrBeneficiario.REC_State = objBene.REC_State;
        this.ptrBeneficiario.REC_ZipCode = objBene.REC_ZipCode;
        this.ptrBeneficiario.Receiver_id = objBene.Receiver_id;
        this.cotizador.Amount = '1';
        this.ptrBeneficiario.VG_New = false;
        this.onCloseModal();
        this.onOpenEdit();
    };
    ModalBeneficiariesPage.prototype.onOpenEdit = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_beneficiaries_edit_beneficiaries_edit__["a" /* BeneficiariesEditPage */]);
    };
    return ModalBeneficiariesPage;
}());
ModalBeneficiariesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal-beneficiaries',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/modal-beneficiaries/modal-beneficiaries.html"*/'<!--\n  Generated template for the ModalCountriesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n     \n        <ion-item>\n            <ion-row  *ngFor="let name of this.ptrSendMoney.lstBeneficiaries" >\n                <ion-col col-2 (click)="onSave( name.Country_Code,name.REC_FirstName+\' \'+name.REC_LastName1+\' \'+name.REC_LastName2,name.Receiver_id,name.BNK_DefaultBranchDeposit,name.BAN_AccNumber)">\n                    <ion-avatar item-left>\n                        <img src="http://www.prontoprontomoney.com/img/{{name.Country_Code}}.png">\n                    </ion-avatar>\n                </ion-col>\n                <ion-col col-8 (click)="onSave( name.Country_Code,name.REC_FirstName+\' \'+name.REC_LastName1+\' \'+name.REC_LastName2,name.Receiver_id,name.BNK_DefaultBranchDeposit,name.BAN_AccNumber)">\n                    <br/>\n                    <h2> {{name.REC_FirstName}} {{name.REC_LastName1}} {{name.REC_LastName2}}  </h2>\n                </ion-col>\n                <ion-col col-2  (click)="onEdit(name)">\n                                     \n                    <img src="http://www.prontoprontomoney.com/img/icons/edit.png" width="60" height="40" >\n                    \n                </ion-col>    \n\n            </ion-row>\n        </ion-item>     \n     \n     \n     <!--   <ion-item *ngFor="let name of this.ptrSendMoney.lstBeneficiaries" (click)="onSave( name.Country_Code,name.REC_FirstName+\' \'+name.REC_LastName1+\' \'+name.REC_LastName2,name.Receiver_id)">\n        <ion-avatar item-left>\n            <img src="http://www.prontoprontomoney.com/img/{{name.Country_Code}}.png">\n       </ion-avatar>          \n            <h2> {{name.REC_FirstName}} {{name.REC_LastName1}} {{name.REC_LastName2}}  </h2>\n        </ion-item>      -->\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/modal-beneficiaries/modal-beneficiaries.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["c" /* Globals */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["f" /* SendMoney */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["a" /* Beneficiaries */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__Providers_methods_token_methods_token__["a" /* MethodsTokenProvider */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["b" /* Cotiza */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["e" /* NewWire */]])
], ModalBeneficiariesPage);

//# sourceMappingURL=modal-beneficiaries.js.map

/***/ })

});
//# sourceMappingURL=3.js.map