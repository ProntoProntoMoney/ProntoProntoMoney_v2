webpackJsonp([17],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeneficiariesEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Providers_globals__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Providers_methods_token_methods_token__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_system_tabs_system__ = __webpack_require__(42);
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
 * Generated class for the BeneficiariesEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BeneficiariesEditPage = (function () {
    function BeneficiariesEditPage(navCtrl, navParams, ptrGlobals, app, formBuilder, Modal, MethodsToken, prtBeneficiaries, alertCtrl, ptrSendMoney, cotizador, ptrNewWire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ptrGlobals = ptrGlobals;
        this.app = app;
        this.formBuilder = formBuilder;
        this.Modal = Modal;
        this.MethodsToken = MethodsToken;
        this.prtBeneficiaries = prtBeneficiaries;
        this.alertCtrl = alertCtrl;
        this.ptrSendMoney = ptrSendMoney;
        this.cotizador = cotizador;
        this.ptrNewWire = ptrNewWire;
        this.edit = true;
        this.ptrGlobals.country_name = this.prtBeneficiaries.CTR_Name;
        this.ptrGlobals.Country_Code = this.prtBeneficiaries.Country_Code;
        this.ptrGlobals.State_Name = this.prtBeneficiaries.REC_State;
        this.ptrGlobals.State_Code = this.prtBeneficiaries.REC_State;
        this.MethodsToken.onAnadeLog(this.ptrGlobals.Country_Code + ' ' + this.ptrGlobals.State_Name, 'INFO');
        this.addDataForm = formBuilder.group({
            REC_FirstName: [this.prtBeneficiaries.REC_FirstName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            REC_LastName1: [this.prtBeneficiaries.REC_LastName1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            REC_LastName2: [this.prtBeneficiaries.REC_LastName2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            Country_Code: [this.prtBeneficiaries.Country_Code, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, this.onStates(this.ptrGlobals.Country_Code)])],
            REC_Address: [this.prtBeneficiaries.REC_Address, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            REC_City: [this.prtBeneficiaries.REC_City, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            REC_State: [this.prtBeneficiaries.REC_State, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, this.onStates(this.ptrGlobals.State_Code)])],
            REC_ZipCode: [this.prtBeneficiaries.REC_ZipCode, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])],
            REC_Phone1: [this.prtBeneficiaries.REC_Phone1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10)])],
            REC_Email: [this.prtBeneficiaries.REC_Email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
            REC_IDNumber: [this.prtBeneficiaries.REC_IDNumber, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([this.onAsignaid(this.prtBeneficiaries.REC_IDNumber)])],
            REC_WirePropuse: [this.prtBeneficiaries.REC_WirePropuse, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([this.onAsignapro(this.prtBeneficiaries.REC_WirePropuse)])]
        });
    }
    BeneficiariesEditPage.prototype.onAsignaid = function (asigna) {
        var _this = this;
        return function (control) {
            _this.prtBeneficiaries.REC_IDNumber = control.value;
            var isValid = true;
            if (!isValid)
                return { 'onAsignaid': { isValid: isValid } };
            else
                return null;
        };
    };
    BeneficiariesEditPage.prototype.onAsignapro = function (asigna) {
        var _this = this;
        return function (control) {
            _this.prtBeneficiaries.REC_WirePropuse = control.value;
            var isValid = true;
            if (!isValid)
                return { 'onAsignapro': { isValid: isValid } };
            else
                return null;
        };
    };
    BeneficiariesEditPage.prototype.onStates = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = input != '';
            if (!isValid)
                return { 'onStates': { isValid: isValid } };
            else
                return null;
        };
    };
    BeneficiariesEditPage.prototype.onOpenModal = function () {
        var Senddata = { Country_Code: '' };
        var ModalCountries = this.Modal.create('ModalCountriesPage', { data: Senddata });
        ModalCountries.present();
    };
    BeneficiariesEditPage.prototype.onOpenModalStates = function () {
        var Senddata = { State_Code: this.ptrGlobals.Country_Code };
        var ModalStates = this.Modal.create('ModalStatesPage', { data: Senddata });
        ModalStates.present();
    };
    BeneficiariesEditPage.prototype.onClose = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_tabs_system_tabs_system__["a" /* TabsSystemPage */]);
    };
    BeneficiariesEditPage.prototype.onsave = function () {
        if (this.ptrGlobals.Country_Code == 'BR' || this.ptrGlobals.Country_Code == 'VE') {
            if (this.prtBeneficiaries.REC_IDNumber == '' || this.prtBeneficiaries.REC_WirePropuse == '') {
                var alert_1 = this.alertCtrl.create({
                    title: 'datos obligatorios',
                    subTitle: 'datos de id numer y propuse obligatorios',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                this.prtBeneficiaries.REC_FirstName = this.addDataForm.value.REC_FirstName;
                this.prtBeneficiaries.REC_LastName1 = this.addDataForm.value.REC_LastName1;
                this.prtBeneficiaries.REC_LastName2 = this.addDataForm.value.REC_LastName2;
                this.prtBeneficiaries.Country_Code = this.ptrGlobals.Country_Code;
                this.prtBeneficiaries.REC_State = this.ptrGlobals.State_Code;
                this.prtBeneficiaries.REC_City = this.addDataForm.value.REC_City;
                this.prtBeneficiaries.REC_Address = this.addDataForm.value.REC_Address;
                this.prtBeneficiaries.REC_Phone1 = this.addDataForm.value.REC_Phone1;
                this.prtBeneficiaries.REC_ZipCode = this.addDataForm.value.REC_ZipCode;
                this.prtBeneficiaries.REC_Email = this.addDataForm.value.REC_Email;
                this.prtBeneficiaries.REC_IDNumber = this.addDataForm.value.REC_IDNumber;
                this.prtBeneficiaries.REC_WirePropuse = this.addDataForm.value.REC_WirePropuse;
                this.ptrSendMoney.LastCountry_Code = this.prtBeneficiaries.Country_Code;
                this.cotizador.Country_Code = this.prtBeneficiaries.Country_Code;
                this.ptrSendMoney.Name_Beneficiario = this.addDataForm.value.REC_FirstName + ' ' + this.addDataForm.value.REC_LastName1 + ' ' + this.addDataForm.value.REC_LastName2;
                this.ptrSendMoney.id_Beneficiario = this.addDataForm.value.REC_IDNumber;
                this.ptrSendMoney.Name_Bank = '';
                this.ptrSendMoney.Name_Payer = '';
                this.ptrNewWire.receiverId = this.prtBeneficiaries.Receiver_id;
                this.ptrNewWire.BNK_DefaultBranchDeposit = this.addDataForm.value.BNK_DefaultBranchDeposit;
                this.ptrNewWire.BankAcNumber = this.addDataForm.value.BankAcNumber;
                this.ptrNewWire.Country_Code = this.prtBeneficiaries.Country_Code;
                console.log(this.prtBeneficiaries.VG_New);
                if (this.prtBeneficiaries.VG_New == false) {
                    this.MethodsToken.onUpdateBeneficiaries();
                }
                else {
                    this.MethodsToken.onRegBeneficiaries();
                }
                this.MethodsToken.onCotiza();
                this.onClose();
            }
        }
        else {
            this.prtBeneficiaries.REC_FirstName = this.addDataForm.value.REC_FirstName;
            this.prtBeneficiaries.REC_LastName1 = this.addDataForm.value.REC_LastName1;
            this.prtBeneficiaries.REC_LastName2 = this.addDataForm.value.REC_LastName2;
            this.prtBeneficiaries.Country_Code = this.ptrGlobals.Country_Code;
            this.prtBeneficiaries.REC_State = this.ptrGlobals.State_Code;
            this.prtBeneficiaries.REC_City = this.addDataForm.value.REC_City;
            this.prtBeneficiaries.REC_Address = this.addDataForm.value.REC_Address;
            this.prtBeneficiaries.REC_Phone1 = this.addDataForm.value.REC_Phone1;
            this.prtBeneficiaries.REC_ZipCode = this.addDataForm.value.REC_ZipCode;
            this.prtBeneficiaries.REC_Email = this.addDataForm.value.REC_Email;
            this.prtBeneficiaries.REC_IDNumber = this.addDataForm.value.REC_IDNumber;
            this.prtBeneficiaries.REC_WirePropuse = this.addDataForm.value.REC_WirePropuse;
            this.ptrSendMoney.LastCountry_Code = this.prtBeneficiaries.Country_Code;
            this.cotizador.Country_Code = this.prtBeneficiaries.Country_Code;
            this.ptrSendMoney.Name_Beneficiario = this.addDataForm.value.REC_FirstName + ' ' + this.addDataForm.value.REC_LastName1 + ' ' + this.addDataForm.value.REC_LastName2;
            this.ptrSendMoney.id_Beneficiario = this.addDataForm.value.REC_IDNumber;
            this.ptrSendMoney.Name_Bank = '';
            this.ptrSendMoney.Name_Payer = '';
            this.ptrNewWire.receiverId = this.prtBeneficiaries.Receiver_id;
            this.ptrNewWire.BNK_DefaultBranchDeposit = this.addDataForm.value.BNK_DefaultBranchDeposit;
            this.ptrNewWire.BankAcNumber = this.addDataForm.value.BankAcNumber;
            this.ptrNewWire.Country_Code = this.prtBeneficiaries.Country_Code;
            console.log(this.prtBeneficiaries.VG_New);
            if (this.prtBeneficiaries.VG_New == false) {
                this.MethodsToken.onUpdateBeneficiaries();
            }
            else {
                this.MethodsToken.onRegBeneficiaries();
            }
            this.MethodsToken.onCotiza();
            this.onClose();
        }
    };
    return BeneficiariesEditPage;
}());
BeneficiariesEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-beneficiaries-edit',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/beneficiaries-edit/beneficiaries-edit.html"*/'<ion-content >\n  <ion-grid style="background-color:#c6c3e1;">\n    <ion-row > \n      <ion-col col-2>\n            <img  src="./assets/imgs/logo.png"  (click)="onClose()" width="60" height="40"  />\n      </ion-col>\n      <ion-col col-8 style="font-size: 20px; text-align: center; color: #003399; font-family: \'Myriad Pro\'; line-height: 39px;" >\n            <span >{{"EbTitle" | translate }} </span>\n      </ion-col>\n      <ion-col col-2>\n        <img  src="./assets/imgs/arrow_back.png"  (click)="onClose()" width="60" height="40"/>             \n      </ion-col>      \n    </ion-row>\n  </ion-grid>\n\n <form [formGroup]="addDataForm" (submit)="onsave()" novalidate>\n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"Edname" | translate }}</ion-label>\n            <ion-input formControlName="REC_FirstName" type="text" placeholder="{{\'Edname\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.REC_FirstName.valid && addDataForm.controls.REC_FirstName.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.REC_FirstName.valid && addDataForm.controls.REC_FirstName.dirty">\n          <p> {{"EdnameErr" | translate }}</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"EdLastname" | translate }}</ion-label>\n            <ion-input formControlName="REC_LastName1" type="text" placeholder="{{\'EdLastname\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.REC_LastName1.valid && addDataForm.controls.REC_LastName1.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.REC_LastName1.valid && addDataForm.controls.REC_LastName1.dirty">\n          <p> {{"EdLastnameErr" | translate }}</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"Edseclastname" | translate }}</ion-label>\n            <ion-input formControlName="REC_LastName2" type="text" placeholder="{{\'Edseclastname\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.REC_LastName2.valid && addDataForm.controls.REC_LastName2.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.REC_LastName2.valid && addDataForm.controls.REC_LastName2.dirty">\n          <p> {{"EdseclastnameErr" | translate }}</p>\n        </ion-item>        \n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"EdCountrycode" | translate }}</ion-label>\n            <ion-input type="button" formControlName="Country_Code" [(ngModel)]="this.ptrGlobals.country_name" value="{{this.ptrGlobals.country_name}}"  \n                  [class.invalid]="!addDataForm.controls.Country_Code.valid && addDataForm.controls.Country_Code.dirty"  (click)="onOpenModal()">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.Country_Code.valid && addDataForm.controls.Country_Code.dirty">\n          <p> {{"EdCountrycodeErr" | translate }}</p>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"EdAddress" | translate }}</ion-label>\n            <ion-input formControlName="REC_Address" type="text" placeholder="{{\'EdAddress\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.REC_Address.valid && addDataForm.controls.REC_Address.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.REC_Address.valid && addDataForm.controls.REC_Address.dirty">\n          <p> {{"EdAddressErr" | translate }}</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"EdCity" | translate }}</ion-label>\n            <ion-input formControlName="REC_City" type="text" placeholder="{{\'EdCity\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.REC_City.valid && addDataForm.controls.REC_City.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.REC_City.valid && addDataForm.controls.REC_City.dirty">\n          <p> {{"EdCityErr" | translate }}</p>\n        </ion-item>\n        \n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"EdState" | translate }}</ion-label>\n            <ion-input type="button" formControlName="REC_State" [(ngModel)]="this.ptrGlobals.State_Name" value="{{this.ptrGlobals.State_Name}}"  \n                  [class.invalid]="!addDataForm.controls.REC_State.valid && addDataForm.controls.REC_State.dirty"  (click)="onOpenModalStates()">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.REC_State.valid && addDataForm.controls.REC_State.dirty">\n          <p> {{"EdStateErr" | translate }}</p>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"EdZipcode" | translate }}</ion-label>\n            <ion-input formControlName="REC_ZipCode" type="text" placeholder="{{\'EdZipcode\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.REC_ZipCode.valid && addDataForm.controls.REC_ZipCode.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.REC_ZipCode.valid && addDataForm.controls.REC_ZipCode.dirty">\n          <p> {{"EdZipcodeErr" | translate }}</p>\n        </ion-item>                \n\n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"EdPhoneNumber" | translate }}</ion-label>\n            <ion-input formControlName="REC_Phone1" type="number" placeholder="{{\'EdPhoneNumber\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.REC_Phone1.valid && addDataForm.controls.REC_Phone1.dirty && addDataForm.controls.REC_Phone1.touched">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.REC_Phone1.valid && addDataForm.controls.REC_Phone1.dirty">\n          <p> {{"EdPhoneNumberErr" | translate }}</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"EdEmai" | translate }}</ion-label>\n            <ion-input formControlName="REC_Email" type="email" placeholder="{{\'EdEmai\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.REC_Email.valid && addDataForm.controls.REC_Email.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.REC_Email.valid && addDataForm.controls.REC_Email.dirty">\n          <p> {{"EdEmaiErr" | translate }}</p>\n        </ion-item>        \n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"EdIdnumber" | translate }}</ion-label>\n            <ion-input formControlName="REC_IDNumber" type="text" placeholder="{{\'EdIdnumber\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.REC_IDNumber.valid && addDataForm.controls.REC_IDNumber.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.REC_IDNumber.valid && addDataForm.controls.REC_IDNumber.dirty">\n          <p> {{"EdIdnumberErr" | translate }}</p>\n        </ion-item>        \n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"EdPropuse" | translate }}</ion-label>\n            <ion-input formControlName="REC_WirePropuse" type="text" placeholder="{{\'EdPropuse\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.REC_WirePropuse.valid && addDataForm.controls.REC_WirePropuse.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.REC_WirePropuse.valid && addDataForm.controls.REC_WirePropuse.dirty">\n          <p> {{"EdPropuseErr" | translate }}</p>\n        </ion-item>           \n           \n   \n        <button ion-button round icon-right block type="submit" [disabled]="!addDataForm.valid" class="btn-Account center" ><!--(click)="onSave()"-->\n          {{"EdbtnUpdate" | translate }}\n        </button>    \n            \n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/beneficiaries-edit/beneficiaries-edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__Providers_globals__["c" /* Globals */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__Providers_methods_token_methods_token__["a" /* MethodsTokenProvider */],
        __WEBPACK_IMPORTED_MODULE_3__Providers_globals__["a" /* Beneficiaries */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__Providers_globals__["f" /* SendMoney */],
        __WEBPACK_IMPORTED_MODULE_3__Providers_globals__["b" /* Cotiza */], __WEBPACK_IMPORTED_MODULE_3__Providers_globals__["e" /* NewWire */]])
], BeneficiariesEditPage);

//# sourceMappingURL=beneficiaries-edit.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Providers_methods_token_methods_token__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Providers_globals__ = __webpack_require__(3);
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
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = (function () {
    function HelpPage(navCtrl, navParams, MethodsToken, alertCtrl, ptrHelp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.MethodsToken = MethodsToken;
        this.alertCtrl = alertCtrl;
        this.ptrHelp = ptrHelp;
    }
    HelpPage.prototype.onSave = function () {
        if (this.ptrHelp.textHelp != '' && this.ptrHelp.typehelp != '') {
            this.MethodsToken.onHelpSend();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Help!',
                subTitle: 'completar data',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    return HelpPage;
}());
HelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-help',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/help/help.html"*/'<ion-content>\n  <ion-grid style="background-color:#c6c3e1;"><!-- style="background-color:#CED8F6;"-->\n      <ion-row > \n      <ion-col col-2>\n              <img  src="./assets/imgs/logo.png"  width="60" height="40"  />\n      </ion-col>\n      <ion-col col-8 style="font-size: 20px; text-align: center; color: #003399; font-family: \'Myriad Pro\'; line-height: 39px;" >\n              <span >{{"HeTitle" | translate }}</span>\n      </ion-col>\n      <ion-col col-2>\n      </ion-col>\n      </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n        <ion-col col-12  text-center> \n          <span style="color: blue; font-size: 18px; align-items: center;">{{"HeTitle2" | translate }}</span>\n        </ion-col>\n    </ion-row>\n    <ion-row >   \n      <ion-col col-12>\n        <ion-item >\n            <ion-label stacked style="font-size: 18px;color: rgba(0, 0, 255, 0.645); text-align: center; " >{{"HeContactname" | translate }}</ion-label>\n            <ion-input type=text ></ion-input> \n        </ion-item >  \n      </ion-col>\n    </ion-row>\n\n    <ion-row >   \n      <ion-col col-12>\n        <ion-item > \n          <ion-label>{{"HeTypeofmessage" | translate }} </ion-label>\n          <ion-select [(ngModel)]="this.ptrHelp.typehelp">\n            <ion-option checked="true" value="Question">{{"HeQuestion" | translate }}</ion-option>\n            <ion-option value="Incident">{{"HeIncident" | translate }}</ion-option>\n            <ion-option value="Problem">{{"HeProblem" | translate }}</ion-option>\n            <ion-option value="Other">{{"HeOther" | translate }}</ion-option>\n          </ion-select>        \n        </ion-item >  \n      </ion-col>\n    </ion-row>    \n\n    <ion-row >   \n      <ion-col col-12>\n        <ion-item >\n            <ion-label stacked style="font-size: 18px;color: rgba(0, 0, 255, 0.645); text-align: center; " >{{"HeHowcanihelp" | translate }}</ion-label> \n            <ion-textarea maxlength="1000" rows="10" [(ngModel)]="this.ptrHelp.textHelp">\n            </ion-textarea>\n        </ion-item >  \n      </ion-col>\n    </ion-row>\n    <ion-row >   \n      <ion-col col-12>\n          <button ion-button round icon-right  class="btn-Account center" (click)="onSave()" ><!--(click)="onSave()"-->\n            {{"HebtnSend" | translate }}\n          </button>   \n      </ion-col>\n    </ion-row>\n\n    \n  </ion-grid> \n\n\n</ion-content>\n  '/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/help/help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__Providers_methods_token_methods_token__["a" /* MethodsTokenProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__Providers_globals__["d" /* Help */]])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendMoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Providers_globals__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Providers_methods_token_methods_token__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__send_wire_send_wire__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_throttleTime__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_throttleTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_throttleTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var SendMoneyPage = (function () {
    function SendMoneyPage(navCtrl, ptrGlobals, ptrSendMoney, translateService, Modal, cotizador, MethodsToken, app, alertCtrl, Beneficiaries, ptrNewWire) {
        this.navCtrl = navCtrl;
        this.ptrGlobals = ptrGlobals;
        this.ptrSendMoney = ptrSendMoney;
        this.translateService = translateService;
        this.Modal = Modal;
        this.cotizador = cotizador;
        this.MethodsToken = MethodsToken;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.Beneficiaries = Beneficiaries;
        this.ptrNewWire = ptrNewWire;
        this.promocode = '';
        this.valorold = '';
        this.inicial = '0';
        this.inicial2 = '0';
        this.firstName = '1';
        this.firstName2 = '1';
        this.totaltopay = '1';
        this.firstNameControl = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]();
        this.firstNameControl2 = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]();
        this.promocodeControl = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]();
        this.buttonColor = '#eaeaf0'; //Default Color
        if (this.ptrSendMoney.booSelectEdit == '0') {
            this.ptrGlobals.booIniciaToken = '0';
            this.MethodsToken.onLastWireSend();
            this.ptrSendMoney.booSelectEdit = '0';
        }
        if (this.ptrGlobals.booIniciaToken != '0') {
            this.MethodsToken.onListReceivers();
            this.MethodsToken.onListBanks();
            this.MethodsToken.onListPayers();
        }
    }
    SendMoneyPage.prototype.ngOnInit = function () {
        var _this = this;
        this.promocodeControl.valueChanges
            .debounceTime(3500)
            .subscribe(function (newValue) {
            _this.promocode = newValue;
            _this.cotizador.PromotionCode = _this.promocode;
            _this.MethodsToken.onCotiza();
        });
        this.firstNameControl.valueChanges
            .debounceTime(2000)
            .subscribe(function (newValue) {
            if (newValue != _this.firstName) {
                _this.cotizador.Amount = newValue;
                _this.MethodsToken.onCotiza();
                _this.firstName = newValue;
                _this.firstName2 = _this.cotizador.Received;
            }
        });
        this.firstNameControl2.valueChanges
            .debounceTime(2000)
            .subscribe(function (newValue) {
            if (newValue != _this.firstName2) {
                for (var i = 0; i < (newValue.length); i++) {
                    newValue = newValue.replace(",", "");
                }
                _this.cotizador.Received = newValue;
                console.log(_this.cotizador.Received);
                _this.cotizador.ErrorPromo = '0';
                _this.MethodsToken.onCotizaInv();
                //this.firstName2 = newValue
                _this.firstName = _this.cotizador.Amount;
            }
        });
        __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].fromEvent(window, 'resize')
            .throttleTime(200)
            .subscribe(function (e) {
            _this.firstName += '*'; // change something to show it worked
        });
    };
    SendMoneyPage.prototype.ngDoCheck = function () {
        if (this.firstName != this.cotizador.Amount) {
            this.firstName = this.MethodsToken.format(this.cotizador.Amount);
        }
        if (this.firstName2 != this.cotizador.Received) {
            this.firstName2 = this.MethodsToken.format(this.cotizador.Received);
            this.totaltopay = this.MethodsToken.format(this.cotizador.TotalCadINTER);
        }
    };
    SendMoneyPage.prototype.onOpenModal = function () {
        this.MethodsToken.onListReceivers();
        var Senddata = { Country_Code: '' };
        var ModalBeneficiaries = this.Modal.create('ModalBeneficiariesPage', { data: Senddata });
        ModalBeneficiaries.present();
    };
    SendMoneyPage.prototype.onOpenModalBanks = function () {
        var _this = this;
        this.buttonColor = '#E5E7E9';
        this.ptrNewWire.payermethod == 'DEP';
        if (this.ptrNewWire.Country_Code == 'EC') {
            var alert_1 = this.alertCtrl.create({
                title: this.translateService.instant('IEtitulo'),
                inputs: [
                    {
                        name: this.translateService.instant('IE'),
                        placeholder: this.translateService.instant('IEtitulo')
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function (data) {
                        }
                    },
                    {
                        text: 'Add',
                        handler: function (data) {
                            if (data.identifica != '') {
                                _this.ptrGlobals.IdentificacionObligatoria = data.identifica;
                                _this.MethodsToken.onListBanks();
                                _this.ptrSendMoney.Name_Bank = '';
                                _this.ptrSendMoney.Name_Payer = '';
                                _this.Beneficiaries.Country_Code = _this.ptrNewWire.Country_Code;
                                var Senddata = { Bank_code: '' };
                                var ModalBanks = _this.Modal.create('ModalBanksPage', { data: Senddata });
                                ModalBanks.present();
                            }
                            else {
                                return false;
                            }
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this.ptrGlobals.IdentificacionObligatoria = '0';
            this.MethodsToken.onListBanks();
            this.ptrSendMoney.Name_Bank = '';
            this.ptrSendMoney.Name_Payer = '';
            var Senddata = { Bank_code: '' };
            var ModalBanks = this.Modal.create('ModalBanksPage', { data: Senddata });
            ModalBanks.present();
        }
    };
    SendMoneyPage.prototype.onOpenModalPayers = function () {
        this.buttonColor = '#E5E7E9';
        this.MethodsToken.onListPayers();
        this.ptrSendMoney.Name_Bank = '';
        this.ptrSendMoney.Name_Payer = '';
        var Senddata = { Payer_code: '' };
        var ModalPayer = this.Modal.create('ModalPayersPage', { data: Senddata });
        ModalPayer.present();
    };
    SendMoneyPage.prototype.onSave = function () {
        console.log(this.cotizador.Amount);
        if (this.ptrSendMoney.Name_Bank != '' || this.ptrSendMoney.Name_Payer != '' && this.cotizador.Amount != '1') {
            this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__send_wire_send_wire__["a" /* SendWirePage */]);
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: this.translateService.instant('ErrorBanksTitle'),
                subTitle: this.translateService.instant('ErrorBanksText'),
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    return SendMoneyPage;
}());
SendMoneyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-send-money',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/send-money/send-money.html"*/'<ion-content>\n    <ion-grid style="background-color:#c6c3e1;" no-padding><!-- style="background-color:#CED8F6;"-->\n      <ion-row > \n        <ion-col col-2>\n              <img  src="./assets/imgs/logo.png"  width="60" height="40"  />\n        </ion-col>\n        <ion-col col-8 style="font-size: 20px;text-align: center; color: #003399; font-family: \'Myriad Pro\'; line-height: 39px;" >\n              <span >{{"SmTitle" | translate }}</span>\n        </ion-col>\n        <ion-col col-2>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid no-padding >\n        <ion-row > \n          <ion-col col-12>\n            <ion-item (click)="onOpenModal()" style="text-align: center ; font-size: 18px;" >\n                {{this.ptrSendMoney.Name_Beneficiario}}  \n                <ion-avatar item-left>                  \n                    <img  src="http://www.prontoprontomoney.com/img/{{this.ptrSendMoney.LastCountry_Code}}.png" width="80" height="60" class="avatar" />  \n                </ion-avatar>\n           </ion-item>                 \n          </ion-col>     \n        </ion-row>  \n\n        <ion-row >   \n          <ion-col col-12>\n            <ion-item >\n                <ion-label  style="font-size: 18px;color: rgba(0, 0, 255, 0.645); " >Send CAD</ion-label>\n                <ion-input type=text [value]="firstName"   style="font-size: 25px; text-align-last: right; color:#52658C; " [formControl]="firstNameControl"></ion-input> \n            </ion-item >  \n          </ion-col>\n   \n          <ion-col col-12>\n            <ion-item >                      \n                <ion-label  style="font-size: 18px;color: rgba(0, 0, 255, 0.645); " >Receive {{this.cotizador.Currency_Payment}}</ion-label>\n                <ion-input type=text [value]="firstName2" (input)="budget = format(budget)"  style="font-size: 25px; text-align-last: right;color:#52658C" [formControl]="firstNameControl2" ></ion-input> \n            </ion-item >  \n          </ion-col>          \n        </ion-row>               \n\n        <ion-row >         \n            <ion-label stacked style="font-size: 18px;color: rgba(0, 0, 255, 0.645); text-align: center; font-weight: bold;" >{{"nwtitle" | translate }}</ion-label>          \n        </ion-row>  \n       \n        <ion-row >         \n        <ion-col col-12  (click)="onOpenModalBanks()">\n            <ion-item >                      \n                <ion-label  style="font-size: 20px;color: rgba(0, 0, 255, 0.645); " > {{"SmBankDeposit" | translate }} </ion-label>   \n                <ion-label  style="font-size: 18px;color: #52658C;  font-weight: bold;  text-align-last: right; " >{{this.ptrSendMoney.Name_Bank}} </ion-label>\n            </ion-item >  \n          </ion-col>          \n        </ion-row>  \n\n        <ion-row >         \n            <ion-col col-12  (click)="onOpenModalPayers()"> \n                <ion-item >                      \n                    <ion-label  style="font-size: 20px;color: rgba(0, 0, 255, 0.645);  " > {{"SmCashpickup" | translate }} </ion-label>   \n                    <ion-label  style="font-size: 18px;color: #52658C;  font-weight: bold;  text-align-last: right;" > {{this.ptrSendMoney.Name_Payer}} </ion-label>\n                </ion-item >  \n            </ion-col>          \n        </ion-row>  \n\n               \n        <ion-row >   \n            <ion-col col-12>\n              <ion-item>\n                  <ion-label style="font-size: 20px;color: rgba(0, 0, 255, 0.645); text-align: center; " >    {{"SmPromotionalcode" | translate }}</ion-label>\n                  <ion-input  style="font-size: 20px;color: #52658C;  font-weight: bold;  text-align-last: right;" type=text [value]="promocode"  [formControl]="promocodeControl"  ></ion-input> \n              </ion-item >  \n             </ion-col>\n        </ion-row>      \n                  \n        \n        <ion-row >   \n            <ion-col col-12>\n              <ion-item no-lines >\n                  <ion-label  style="font-size: 18px;color: rgba(0, 0, 255, 0.645); text-align: center; " > {{"SmFee" | translate }}</ion-label>\n                  <ion-input style="font-size: 25px;color: black; text-align-last: right; font-weight: bold" disabled="true" [(ngModel)]="this.cotizador.FeeINTER" ></ion-input>       \n              </ion-item >  \n            </ion-col>\n        </ion-row>                 \n        \n        <ion-row>   \n            <ion-col col-12>\n              <ion-item >\n                  <ion-label style="font-size: 18px;color: rgba(0, 0, 255, 0.645);  width: 100%; font-weight: bold;" floating > {{"SmTotaltopay" | translate }}</ion-label>\n                  <ion-input style="font-size: 50px;color: black; text-align-last: center; font-weight: bold ;  "  disabled="true" [value]="totaltopay" ></ion-input> \n              </ion-item >  \n            </ion-col>\n        </ion-row>      \n      \n        <button ion-button round icon-right block [disabled]="this.cotizador.ErrorPromo == 1 " class="btn-Continue center"  (click)="onSave()">\n          {{"SmbtnContinue" | translate }}\n        </button>       \n\n    </ion-grid>    \n</ion-content>\n'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/send-money/send-money.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["c" /* Globals */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["f" /* SendMoney */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["b" /* Cotiza */],
        __WEBPACK_IMPORTED_MODULE_4__Providers_methods_token_methods_token__["a" /* MethodsTokenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["a" /* Beneficiaries */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["e" /* NewWire */]])
], SendMoneyPage);

//# sourceMappingURL=send-money.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendWirePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Providers_globals__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Providers_methods_token_methods_token__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_system_tabs_system__ = __webpack_require__(42);
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
 * Generated class for the BeneficiariesEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendWirePage = (function () {
    function SendWirePage(navCtrl, navParams, ptrGlobals, app, formBuilder, MethodsToken, prtBeneficiaries, cotizador, ptrNewWire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ptrGlobals = ptrGlobals;
        this.app = app;
        this.formBuilder = formBuilder;
        this.MethodsToken = MethodsToken;
        this.prtBeneficiaries = prtBeneficiaries;
        this.cotizador = cotizador;
        this.ptrNewWire = ptrNewWire;
        this.totaltopay = '1';
        this.totaltopay = this.MethodsToken.format(this.cotizador.TotalCadINTER);
    }
    SendWirePage.prototype.onClose = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_tabs_system_tabs_system__["a" /* TabsSystemPage */]);
    };
    SendWirePage.prototype.onSendWireEmail = function () {
        this.ptrNewWire.paymentMethod = 'EMAIL';
        this.MethodsToken.onSendWire();
    };
    SendWirePage.prototype.onSendWireInter = function () {
        this.ptrNewWire.paymentMethod = 'INTER';
        this.MethodsToken.onSendWire();
    };
    return SendWirePage;
}());
SendWirePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-send-wire',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/send-wire/send-wire.html"*/'<ion-content >\n    <ion-grid style="background-color:#c6c3e1;">\n      <ion-row > \n        <ion-col col-2>\n              <img  src="./assets/imgs/logo.png"  (click)="onClose()" width="60" height="40"  />\n        </ion-col>\n        <ion-col col-8 style="font-size: 20px;text-align: center; color: #003399; font-family: \'Myriad Pro\'; line-height: 39px;" >\n                <span >{{"nwtitle" | translate }}</span>\n        </ion-col>\n        <ion-col col-2>\n            <img  src="./assets/imgs/arrow_back.png"  (click)="onClose()" width="60" height="40"/>\n        </ion-col>      \n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n          <ion-col col-12>\n            <span class="dates-pronto">INTERAC</span>\n          </ion-col>\n      </ion-row>\n\n      <ion-row>\n          <ion-col col-12>\n              <span > If you have a bank account with RBC, BMO, TD or\n                  Scotiabank, please select the <a class="assertive">INTERAC </a>payment option  </span>\n          </ion-col>\n      </ion-row>   \n\n      <ion-row>\n          <ion-col col-12>\n            <span class="dates-pronto">EMAIL TRANSFER</span>\n          </ion-col>\n      </ion-row>\n\n      <ion-row>\n          <ion-col col-12>\n              <span > \n                  To make your payment via <a class="assertive"> EMAIL TRANSFER</a>, you will need to do the next three steps:                \n                  <br/> 1. Login your account bank\n                  <br/> 2. Select Interact + e-transfer\n                  <br/> 3. Add destinatary with the following information  </span>\n          </ion-col>\n      </ion-row>        \n\n      <ion-row>\n          <ion-col col-12>\n              <span style="color: blue;font-size:20px;"> \n                  Name: PRONTOMONEY\n                  <br/>Email: ppm@prontoprontomoney.com\n                  <br/>Security Question: What is this\n                  <br/>Answer: PRONTOMONEY\n            </span>           \n          </ion-col>\n      </ion-row>        \n                   \n      <ion-row>           \n        <ion-col col-12 style="font-family: \'Arial Narrow\'; text-align: center; font-size: 30px;color: red;">\n                              \n              <span > TOTAL TO PAY </span>\n        </ion-col>\n      </ion-row>           \n      <ion-row>\n            <ion-col col-12 style="font-family: \'Arial\'; text-align: center; font-size: 60px;color: #003399; font-weight: bold;">\n\n              <span style="font-size: 60px;">$ {{this.totaltopay}}  CAD </span>\n          </ion-col>\n      </ion-row>  \n      \n      <ion-row>\n          <ion-col col-6>\n              <button ion-button round icon-right block class="btn-Continue center" (click)="onSendWireEmail()">E-MAIL TRANSFER</button>\n          </ion-col>\n          <ion-col col-6>\n              <button ion-button round class="btn-Continue center" (click)="onSendWireInter()" >INTERAC</button>\n          </ion-col>          \n      </ion-row>            \n          \n    </ion-grid>\n\n   \n\n</ion-content>\n'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/send-wire/send-wire.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__Providers_globals__["c" /* Globals */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__Providers_methods_token_methods_token__["a" /* MethodsTokenProvider */],
        __WEBPACK_IMPORTED_MODULE_3__Providers_globals__["a" /* Beneficiaries */], __WEBPACK_IMPORTED_MODULE_3__Providers_globals__["b" /* Cotiza */], __WEBPACK_IMPORTED_MODULE_3__Providers_globals__["e" /* NewWire */]])
], SendWirePage);

//# sourceMappingURL=send-wire.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeneficiariesPage; });
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
var BeneficiariesPage = (function () {
    function BeneficiariesPage(navCtrl, ptrGlobals, navParams, View, ptrSendMoney, ptrBeneficiario, app, MethodsToken, cotizador, ptrNewWire) {
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
    BeneficiariesPage.prototype.ionViewWillLoad = function () {
        this.MethodsToken.onListReceivers();
    };
    BeneficiariesPage.prototype.onCloseModal = function () {
        this.ptrSendMoney.booSelectEdit = '1';
        var data = {
            Country_Code: ''
        };
        this.View.dismiss(data);
    };
    BeneficiariesPage.prototype.onSave = function (Country_Code, Beneficiario, Receiverid, defaultBrach, banknumber) {
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
    };
    BeneficiariesPage.prototype.onEdit = function (objBene) {
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
        this.onOpenEdit();
    };
    BeneficiariesPage.prototype.onOpenEdit = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_beneficiaries_edit_beneficiaries_edit__["a" /* BeneficiariesEditPage */]);
    };
    BeneficiariesPage.prototype.onOpenNew = function () {
        this.ptrBeneficiario.AccountType = '';
        this.ptrBeneficiario.AGP_Name = '';
        this.ptrBeneficiario.AccountType = '';
        this.ptrBeneficiario.Agpayer_ID = '';
        this.ptrBeneficiario.BAN_AccNumber = '';
        this.ptrBeneficiario.BAN_Name = '';
        this.ptrBeneficiario.BNK_DefaultBranchDeposit = '';
        this.ptrBeneficiario.Bank_id = '';
        this.ptrBeneficiario.CTR_Name = '';
        this.ptrBeneficiario.Country_Code = '';
        this.ptrBeneficiario.PaymentMethodo = '';
        this.ptrBeneficiario.PaymentType = '';
        this.ptrBeneficiario.REC_Address = '';
        this.ptrBeneficiario.REC_City = '';
        this.ptrBeneficiario.REC_Email = '';
        this.ptrBeneficiario.REC_FirstName = '';
        this.ptrBeneficiario.REC_IDNumber = '';
        this.ptrBeneficiario.REC_LastName1 = '';
        this.ptrBeneficiario.REC_LastName2 = '';
        this.ptrBeneficiario.REC_Phone1 = '';
        this.ptrBeneficiario.REC_State = '';
        this.ptrBeneficiario.REC_ZipCode = '';
        this.ptrBeneficiario.Receiver_id = '';
        this.ptrBeneficiario.VG_New = true;
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_beneficiaries_edit_beneficiaries_edit__["a" /* BeneficiariesEditPage */]);
    };
    return BeneficiariesPage;
}());
BeneficiariesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-beneficiaries',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/beneficiaries/beneficiaries.html"*/'<ion-content>\n    <ion-grid style="background-color:#c6c3e1; ">\n        <ion-row > \n        <ion-col col-2>\n                <img  src="./assets/imgs/logo.png"  width="60" height="40"  />\n        </ion-col>\n        <ion-col col-8 style="font-size: 20px; text-align: center; color: #003399; font-family: \'Myriad Pro\'; line-height: 39px;" >\n                <span >{{"BeTitle" | translate }}</span>\n        </ion-col>\n        <ion-col col-2>\n        </ion-col>\n  \n        </ion-row>\n    </ion-grid>\n    <ion-list>\n            <ion-item>    \n                <ion-row>\n                    <button ion-button round icon-right  class="btn-Continue center"  (click)="onOpenNew()">\n                        {{"BebtnNew" | translate }}\n                    </button> \n                </ion-row>   \n            </ion-item>    \n        <ion-item>\n            <ion-row  *ngFor="let name of this.ptrSendMoney.lstBeneficiaries" >\n                <ion-col col-2 (click)="onEdit(name)">\n                    <ion-avatar item-left>\n                        <img src="http://www.prontoprontomoney.com/img/{{name.Country_Code}}.png">\n                    </ion-avatar>\n                </ion-col>\n                <ion-col col-8 (click)="onEdit(name)">\n                    <br/>\n                    <h2> {{name.REC_FirstName}} {{name.REC_LastName1}} {{name.REC_LastName2}}  </h2>\n                </ion-col>\n                <ion-col col-2  (click)="onEdit(name)">\n                                     \n                    <img src="http://www.prontoprontomoney.com/img/icons/edit.png" width="60" height="40" >\n                    \n                </ion-col>    \n\n            </ion-row>\n        </ion-item>     \n     \n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/beneficiaries/beneficiaries.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["c" /* Globals */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["f" /* SendMoney */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["a" /* Beneficiaries */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__Providers_methods_token_methods_token__["a" /* MethodsTokenProvider */],
        __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["b" /* Cotiza */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["e" /* NewWire */]])
], BeneficiariesPage);

//# sourceMappingURL=beneficiaries.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabLogin_TabLogin__ = __webpack_require__(25);
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
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    MenuPage.prototype.openPage = function (page) {
        this.navCtrl.push(page);
    };
    MenuPage.prototype.onClose = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__TabLogin_TabLogin__["a" /* tabLogin */]);
    };
    return MenuPage;
}());
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/menu/menu.html"*/'<ion-content>\n    <ion-grid style="background-color:#c6c3e1;"><!-- style="background-color:#CED8F6;"-->\n      <ion-row > \n        <ion-col col-4>\n              <img  src="./assets/imgs/logo.png"   width="60" height="40"  />\n        </ion-col>\n        <ion-col col-6>\n              <span class="title-center">Others </span>\n        </ion-col>\n        <ion-col col-2>\n        </ion-col>      \n      </ion-row>\n    </ion-grid>\n\n\n    <ion-list radio-group>\n        <ion-item>\n          <ion-label>Log Out</ion-label>\n          <ion-radio value="Close" (click)="onClose()" ></ion-radio>\n        </ion-item>\n      \n      </ion-list>\n    \n    </ion-content>\n        '/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/menu/menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Providers_globals__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Providers_client_methods_client_methods__ = __webpack_require__(43);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, ptrGlobals, formBuilder, Modal, ptrUserData, ClientMethods) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ptrGlobals = ptrGlobals;
        this.formBuilder = formBuilder;
        this.Modal = Modal;
        this.ptrUserData = ptrUserData;
        this.ClientMethods = ClientMethods;
        this.ptrGlobals.State_Code = 'QC';
        this.ptrGlobals.State_Name = 'QUEBEC';
        this.addDataForm = formBuilder.group({
            Name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            LastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            SecondLastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            Profession: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            Address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            City: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            State: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, this.onStates(this.ptrGlobals.State_Code)])],
            ZipCode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])],
            PhoneNumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10)])],
            DateofBirth: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            Email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])],
            re_password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, this.equalto('password')])]
        });
    }
    RegisterPage.prototype.onSave = function () {
        this.ptrUserData.Name = this.addDataForm.value.Name;
        this.ptrUserData.LastName = this.addDataForm.value.LastName;
        this.ptrUserData.SecondLastName = this.addDataForm.value.SecondLastName;
        this.ptrUserData.Profession = this.addDataForm.value.Profession;
        this.ptrUserData.Address = this.addDataForm.value.Address;
        this.ptrUserData.City = this.addDataForm.value.City;
        this.ptrUserData.State = this.ptrGlobals.State_Code;
        this.ptrUserData.ZipCode = this.addDataForm.value.ZipCode;
        this.ptrUserData.PhoneNumber = this.addDataForm.value.PhoneNumber;
        this.ptrUserData.DateofBirth = this.addDataForm.value.DateofBirth;
        this.ptrUserData.Email = this.addDataForm.value.Email;
        this.ptrUserData.password = this.addDataForm.value.password;
        this.ClientMethods.onRegUser();
        this.addDataForm.reset();
    };
    RegisterPage.prototype.onClear = function () {
        this.addDataForm.value.Name = '';
        this.addDataForm.value.LastName = '';
        this.addDataForm.value.SecondLastName = '';
        this.addDataForm.value.Profession = '';
        this.addDataForm.value.Address = '';
        this.addDataForm.value.City = '';
        this.addDataForm.value.State = '';
        this.addDataForm.value.ZipCode = '';
        this.addDataForm.value.PhoneNumber = '';
        this.addDataForm.value.DateofBirth = '';
        this.addDataForm.value.Email = '';
        this.addDataForm.value.password = '';
        this.addDataForm.value.re_password = '';
    };
    RegisterPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid)
                return { 'equalTo': { isValid: isValid } };
            else
                return null;
        };
    };
    RegisterPage.prototype.onStates = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = input != '';
            if (!isValid)
                return { 'onStates': { isValid: isValid } };
            else
                return null;
        };
    };
    RegisterPage.prototype.onOpenModal = function () {
        var Senddata = { State_Code: 'CA' };
        var ModalStates = this.Modal.create('ModalStatesPage', { data: Senddata });
        ModalStates.present();
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/register/register.html"*/'<ion-content>\n    <ion-grid style="background-color:#c6c3e1;"><!-- style="background-color:#CED8F6;"-->\n      <ion-row > \n        <ion-col col-4>\n              <img  src="./assets/imgs/logo.png"  width="60" height="40"  />\n        </ion-col>\n        <ion-col col-8>\n              <span class="title-center">{{"ReTitle2" | translate }}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n    <form [formGroup]="addDataForm" (submit)="onSave()" novalidate>\n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"ReName" | translate }}</ion-label>\n            <ion-input formControlName="Name" type="text" placeholder="{{\'ReName\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.Name.valid && addDataForm.controls.Name.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.Name.valid && addDataForm.controls.Name.dirty">\n          <p> {{"ReNameErr" | translate }}</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"ReLastname" | translate }}</ion-label>\n            <ion-input formControlName="LastName" type="text" placeholder="{{\'ReLastname\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.LastName.valid && addDataForm.controls.LastName.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.LastName.valid && addDataForm.controls.LastName.dirty">\n          <p> {{"ReLastnameErr" | translate }}</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"ReSeclastname" | translate }}</ion-label>\n            <ion-input formControlName="SecondLastName" type="text" placeholder="{{\'ReSeclastname\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.SecondLastName.valid && addDataForm.controls.SecondLastName.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.SecondLastName.valid && addDataForm.controls.SecondLastName.dirty">\n          <p> {{"ReSeclastnameErr" | translate }}</p>\n        </ion-item>        \n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"ReProffesion" | translate }}</ion-label>\n            <ion-input formControlName="Profession" type="text" placeholder="{{\'ReProffesion\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.Profession.valid && addDataForm.controls.Profession.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.Profession.valid && addDataForm.controls.Profession.dirty">\n          <p> {{"ReProffesionErr" | translate }}</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"ReAddress" | translate }}</ion-label>\n            <ion-input formControlName="Address" type="text" placeholder="{{\'ReAddress\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.Address.valid && addDataForm.controls.Address.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.Address.valid && addDataForm.controls.Address.dirty">\n          <p> {{"ReAddressErr" | translate }}</p>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"ReCity" | translate }}</ion-label>\n            <ion-input formControlName="City" type="text" placeholder="{{\'ReCity\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.City.valid && addDataForm.controls.City.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.City.valid && addDataForm.controls.City.dirty">\n          <p> {{"ReCityErr" | translate }}</p>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"ReState" | translate }}</ion-label>\n            <ion-input type="button" formControlName="State" [(ngModel)]="this.ptrGlobals.State_Name" value="QUEBEC"  \n                  [class.invalid]="!addDataForm.controls.State.valid && addDataForm.controls.State.dirty"  (click)="onOpenModal()">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.State.valid && addDataForm.controls.State.dirty">\n          <p> {{"ReStateErr" | translate }}</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"ReZipcode" | translate }}</ion-label>\n            <ion-input formControlName="ZipCode" type="text" placeholder="{{\'ReZipcode\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.ZipCode.valid && addDataForm.controls.ZipCode.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.ZipCode.valid && addDataForm.controls.ZipCode.dirty">\n          <p> {{"ReZipcodeErr" | translate }}</p>\n        </ion-item>                \n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"RePhoneNumber" | translate }}</ion-label>\n            <ion-input formControlName="PhoneNumber" type="number" placeholder="{{\'RePhoneNumber\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.PhoneNumber.valid && addDataForm.controls.PhoneNumber.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.PhoneNumber.valid && addDataForm.controls.PhoneNumber.dirty">\n          <p> {{"RePhoneNumberErr" | translate }}</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"ReDateofbirth" | translate }}</ion-label>\n            <ion-datetime displayFormat="MM/DD/YYYY" formControlName="DateofBirth" placeholder="{{\'ReDateofbirth\' | translate }}"  \n            [class.invalid]="!addDataForm.controls.DateofBirth.valid && addDataForm.controls.DateofBirth.dirty"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"ReEmail2" | translate }}</ion-label>\n            <ion-input formControlName="Email" type="email" placeholder="{{\'ReEmail2\' | translate }}"  \n                  [class.invalid]="!addDataForm.controls.Email.valid && addDataForm.controls.Email.dirty">\n            </ion-input>>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!addDataForm.controls.Email.valid && addDataForm.controls.Email.dirty">\n          <p> {{"ReEmail2Err" | translate }}</p>\n        </ion-item>        \n\n        \n        \n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"RePassword" | translate }}</ion-label>\n            <ion-input type="password" value="" formControlName="password" placeholder="{{\'RePassword\' | translate }}" \n                  [class.invalid]="!addDataForm.controls.password.valid && addDataForm.controls.password.dirty">\n            </ion-input>    \n        </ion-item>\n            \n        <ion-item class="error-message" *ngIf="( addDataForm.get(\'password\').hasError(\'required\') ) && addDataForm.get(\'password\').touched">\n          <p> {{"RePasswordErr" | translate }}</p>\n        </ion-item>\n            \n        <ion-item>\n            <ion-label color="primary" style="font-size: 18px;" stacked>{{"ReRepeatpass" | translate }}</ion-label>\n            <ion-input type="password" value="" formControlName="re_password" placeholder="{{\'ReRepeatpass\' | translate }}" \n                  [class.invalid]="!addDataForm.controls.re_password.valid && addDataForm.controls.re_password.dirty">\n            </ion-input>    \n        </ion-item>\n\n        <ion-item no-lines *ngIf="( addDataForm.get(\'re_password\').hasError(\'equalTo\') || addDataForm.get(\'re_password\').hasError(\'required\') ) && addDataForm.get(\'re_password\').touched">\n            <p class="error-message" *ngIf="addDataForm.get(\'re_password\').hasError(\'required\') && addDataForm.get(\'re_password\').touched">\n                {{"RePasswordErrReq" | translate }}\n            </p>\n            <p class="error-message" *ngIf="addDataForm.get(\'re_password\').hasError(\'equalTo\') && addDataForm.get(\'re_password\').touched">\n                {{"RePasswordErrMitmach" | translate }}\n            </p>\n        </ion-item>        \n        \n        <button ion-button round icon-right block type="submit" [disabled]="!addDataForm.valid" class="btn-Account center" ><!--(click)="onSave()"-->\n          {{"RebtnCreateorUpdate" | translate }}\n        </button>    \n            \n    </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__Providers_globals__["c" /* Globals */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__Providers_globals__["g" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_4__Providers_client_methods_client_methods__["a" /* ClientMethodsProvider */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndEmailtransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_system_tabs_system__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Providers_globals__ = __webpack_require__(3);
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
 * Generated class for the EndEmailtransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EndEmailtransferPage = (function () {
    function EndEmailtransferPage(app, translateService, iab, navCtrl, navParams, ptrGlobals) {
        this.app = app;
        this.translateService = translateService;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ptrGlobals = ptrGlobals;
    }
    EndEmailtransferPage.prototype.onUrlOpen = function (url) {
        var browser = this.iab.create(url, '_blank', 'location=yes');
        browser.show();
    };
    EndEmailtransferPage.prototype.onClose = function () {
        this.ptrGlobals.booIniciaToken = '0';
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_tabs_system_tabs_system__["a" /* TabsSystemPage */]);
    };
    return EndEmailtransferPage;
}());
EndEmailtransferPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-end-emailtransfer',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/end-emailtransfer/end-emailtransfer.html"*/'<ion-content>\n  <ion-grid style="background-color:#c6c3e1;"><!-- style="background-color:#CED8F6;"-->\n    <ion-row > \n      <ion-col col-2>\n            <img  src="./assets/imgs/logo.png"  (click)="onClose()" width="60" height="40"  />\n      </ion-col>\n      <ion-col col-8 style="font-size: 20px;text-align: center; color: #003399; font-family: \'Myriad Pro\'; line-height: 39px;" >\n            <span >{{"Recovery" | translate }}</span>\n      </ion-col>\n      <ion-col col-2>\n        <img  src="./assets/imgs/arrow_back.png"  (click)="onClose()" width="60" height="40"/>\n          \n      </ion-col>      \n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 class="alert-positive-yellow" style="text-align: justify; font-size: 15px">\n          <span >waiting for e-mail transfer pin: you\'ll receive your pin, after you send the email transfer  \n          </span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row >\n      <ion-col  col-12 (click)="onUrlOpen(\'https://www.tdcanadatrust.com/products-services/banking/electronic-banking/easyweb.jsp\')">\n        <img style="max-height:40px; " src="http://www.prontoprontomoney.com/img/bancotd.png" >\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'http://www.rbcroyalbank.com/personal.html\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/bancorbc.png" >\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'https://bvi.bnc.ca/\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/banconbc.png" >\n      </ion-col>\n    </ion-row>    \n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'https://www1.scotiaonline.scotiabank.com/online/authentication/authentication.bns\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/bancoscotia.png" >\n      </ion-col>\n    </ion-row>        \n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'https://www1.bmo.com/onlinebanking/cgi-bin/netbnx/NBmain\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/bancomontreal.png" >\n      </ion-col>\n    </ion-row>        \n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'https://www.hsbc.ca/1/2/!ut/p/c5/04_SB8K8xLLM9MSSzPy8xBz9CP0os3gzD0tHQ69gAw8DnzADA0-f4GCD4CAjAwMDY6B8pFm8s7ujh4m5D1AgzNPVwNPEycTA1NfN0MDTmIBuP4_83FT9gtyIcgAwipCh/\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/bancohsbc.png" >\n      </ion-col>\n    </ion-row>     \n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'https://blcweb.banquelaurentienne.ca/lang/en/BLCDirect/\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/bancolaurentine.png" >\n      </ion-col>\n    </ion-row>   \n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'https://accweb.mouv.desjardins.com/identifiantunique/identification?domaineVirtuel=desjardins&langueCible=fr\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/bancodesjardines.png" >\n      </ion-col>\n    </ion-row>   \n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'https://www.fnbc.ca/Personal/\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/bancofnb.png" >\n      </ion-col>\n    </ion-row>   \n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'https://www.alterna.ca/OnlineBanking/\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/bancoalterna.png" >\n      </ion-col>\n    </ion-row>     \n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'https://customer.ctfs.com/MyOnlineAccount/\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/bancoctfs.png" >\n      </ion-col>\n    </ion-row>         \n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'https://www6.memberdirect.net/brand/ab_cwbank/OnlineBanking/Accounts/\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/bancocw.png" >\n      </ion-col>\n    </ion-row>        \n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'https://secure.tangerine.ca/web/InitialTangerine.html?command=displayLogin&device=web&locale=en_CA\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/bancotan.png" >\n      </ion-col>\n    </ion-row>          \n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'https://client.banquemanuvie.com/MBCClientUI/\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/bancomanuvi.png" >\n      </ion-col>\n    </ion-row>          \n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'https://www.atbonline.com/ATB/login.aspx\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/bancoatb.png" >\n      </ion-col>\n    </ion-row>          \n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'https://www.txn.banking.pcfinancial.ca/ebm-resources/public/client/web/index.html#/signon\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/bancofinan.png" >\n      </ion-col>\n    </ion-row>          \n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'https://www.cibc.com/en/personal-banking.html\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/bancocibc.png" >\n      </ion-col>\n    </ion-row>       \n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'https://www.mybwbcard.ca/BWB_Consumer/Login.do\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/bancobg.png" >\n      </ion-col>\n    </ion-row>       \n\n    <ion-row>\n      <ion-col col-12 (click)="onUrlOpen(\'https://www.ksbankinc.com/\')">\n        <img style="max-height:40px;" src="http://www.prontoprontomoney.com/img/bancoks.png" >\n      </ion-col>\n    </ion-row>          \n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/end-emailtransfer/end-emailtransfer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__Providers_globals__["c" /* Globals */]])
], EndEmailtransferPage);

//# sourceMappingURL=end-emailtransfer.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndInteracPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_system_tabs_system__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Providers_globals__ = __webpack_require__(3);
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
 * Generated class for the EndInteracPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EndInteracPage = (function () {
    function EndInteracPage(navCtrl, navParams, app, ptrGlobals, translateService, ptrSendMoney, cotizador) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.ptrGlobals = ptrGlobals;
        this.translateService = translateService;
        this.ptrSendMoney = ptrSendMoney;
        this.cotizador = cotizador;
    }
    EndInteracPage.prototype.onClose = function () {
        this.ptrGlobals.booIniciaToken = '0';
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_tabs_system_tabs_system__["a" /* TabsSystemPage */]);
    };
    return EndInteracPage;
}());
EndInteracPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-end-interac',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/end-interac/end-interac.html"*/'<ion-content >\n        <ion-grid style="background-color:#c6c3e1;">\n          <ion-row > \n            <ion-col col-3>\n                  <img  src="./assets/imgs/logo.png"  (click)="onClose()" width="60" height="40"  />\n            </ion-col>\n            <ion-col col-6 style="font-size: 20px;text-align: center; color: #003399; font-family: \'Myriad Pro\'; line-height: 39px;" >\n                    <span >{{"nwtitle" | translate }}</span>\n            </ion-col>\n            <ion-col col-3>\n                <img  src="./assets/imgs/arrow_back.png"  (click)="onClose()" width="60" height="40"/>\n            </ion-col>      \n          </ion-row>\n        </ion-grid>\n    \n        <ion-grid>\n          <ion-row>\n              <ion-col col-12>\n                <span class="dates-pronto">INTERAC</span>\n              </ion-col>\n          </ion-row>\n    \n          <ion-row>\n              <ion-col col-12>\n                  <span > Thank you for using our service, your payment was received. </span>\n              </ion-col>\n          </ion-row>   \n    \n          <ion-row >   \n                <ion-item style="font-size: 20px;color: rgba(0, 0, 255, 0.645); text-align: center; border-bottom: none;" >\n                  {{this.ptrSendMoney.Name_Bank}}  {{this.ptrSendMoney.Name_Payer}}\n                </ion-item >  \n          </ion-row>            \n  \n         \n          \n          <ion-row >   \n              <ion-col col-12>\n                <ion-item >\n                    <ion-label  style="font-size: 28px;color: rgba(0, 0, 255, 0.645); text-align: center; " >{{"SmTotaltopay" | translate }}</ion-label>                    \n                    <ion-input style="font-size: 25px;color: blue; text-align-last: right; font-weight: bold"  disabled="true" [(ngModel)]="this.cotizador.TotalCadINTER" >CAD</ion-input>                                           \n                </ion-item >  \n              </ion-col>\n          </ion-row>          \n        </ion-grid>\n    \n    </ion-content>\n    \n'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/end-interac/end-interac.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__Providers_globals__["c" /* Globals */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__Providers_globals__["f" /* SendMoney */],
        __WEBPACK_IMPORTED_MODULE_4__Providers_globals__["b" /* Cotiza */]])
], EndInteracPage);

//# sourceMappingURL=end-interac.js.map

/***/ }),

/***/ 140:
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
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/beneficiaries-edit/beneficiaries-edit.module": [
		323,
		16
	],
	"../pages/beneficiaries/beneficiaries.module": [
		325,
		15
	],
	"../pages/end-emailtransfer/end-emailtransfer.module": [
		324,
		14
	],
	"../pages/end-interac/end-interac.module": [
		326,
		13
	],
	"../pages/help/help.module": [
		327,
		12
	],
	"../pages/menu/menu.module": [
		328,
		11
	],
	"../pages/modal-bankaccount/modal-bankaccount.module": [
		329,
		5
	],
	"../pages/modal-banks/modal-banks.module": [
		330,
		4
	],
	"../pages/modal-beneficiaries/modal-beneficiaries.module": [
		331,
		3
	],
	"../pages/modal-countries/modal-countries.module": [
		332,
		2
	],
	"../pages/modal-payers/modal-payers.module": [
		333,
		1
	],
	"../pages/modal-states/modal-states.module": [
		334,
		0
	],
	"../pages/profile/profile.module": [
		335,
		10
	],
	"../pages/register/register.module": [
		336,
		9
	],
	"../pages/send-money/send-money.module": [
		337,
		8
	],
	"../pages/send-wire/send-wire.module": [
		338,
		7
	],
	"../pages/wire-history/wire-history.module": [
		339,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 181;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TabLogin_TabLogin__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LanguagePage = (function () {
    function LanguagePage(navCtrl, viewCtrl, translateService, app) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.translateService = translateService;
        this.app = app;
    }
    LanguagePage.prototype.closeModal = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__TabLogin_TabLogin__["a" /* tabLogin */]);
    };
    LanguagePage.prototype.changeLanguage = function (langauge) {
        this.translateService.use(langauge);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__TabLogin_TabLogin__["a" /* tabLogin */]);
        //  this.navCtrl.push(LoginPage);
        window.localStorage.setItem('langauge', langauge);
    };
    return LanguagePage;
}());
LanguagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-language',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/Language/Language.html"*/'<ion-content>\n    <ion-grid style="background-color:#c6c3e1;"><!-- style="background-color:#CED8F6;"-->\n      <ion-row > \n        <ion-col col-4>\n              <img  src="./assets/imgs/logo.png"  width="50" height="40"  />\n        </ion-col>\n        <ion-col col-8>\n              <span class="title-center"> {{"language" | translate }}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-list radio-group>\n        <ion-item>\n          <ion-label>English</ion-label>\n          <ion-radio checked="true" (click)="changeLanguage(\'en\')" value="English"></ion-radio>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Français </ion-label>\n          <ion-radio value="Français" (click)="changeLanguage(\'fr\')"></ion-radio>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Spanish</ion-label>\n          <ion-radio value="Spanish" (click)="changeLanguage(\'es\')"></ion-radio>\n        </ion-item>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/Language/Language.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], LanguagePage);

//# sourceMappingURL=Languaje.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RecoveryPass_RecoveryPass__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Providers_globals__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Providers_client_methods_client_methods__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__QuickQuote_QuickQuote__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(navCtrl, translateService, ptrGlobals, app, cotizador, ClientMethods) {
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.ptrGlobals = ptrGlobals;
        this.app = app;
        this.cotizador = cotizador;
        this.ClientMethods = ClientMethods;
        if (window.localStorage.getItem('Country_Code') == null) { }
        else {
            this.cotizador.Country_Code = window.localStorage.getItem('Country_Code');
            //this.cotizador.Amount       =  window.localStorage.getItem('Amount');
        }
        this.ClientMethods.onCotiza();
        this.ptrGlobals.user = 'ricaurte.trivino.r@gmail.com';
        this.ptrGlobals.password = '123456';
    }
    LoginPage.prototype.onRecoveryPass = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__RecoveryPass_RecoveryPass__["a" /* RecoveryPassPage */]);
    };
    LoginPage.prototype.onclick2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__QuickQuote_QuickQuote__["a" /* QuickQuotePage */]);
    };
    LoginPage.prototype.onchange = function () {
        console.log(this.cotizador.ExchageRateCADvsLOC);
        console.log(this.cotizador.Currency_Payment);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-Login',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/Login/Login.html"*/'<ion-content padding >\n    \n  <img  src="./assets/imgs/logo.png"  width="238" height="150" class="center" />\n    <ion-item>\n        <ion-label color="primary" style="font-size: 18px;"  floating>{{"logUsername" | translate }}</ion-label>\n        <ion-input  [(ngModel)]="this.ptrGlobals.user"></ion-input>\n    </ion-item>\n   \n    <ion-item >\n        <ion-label color="primary" style="font-size: 18px;" floating>{{"LogPassword" | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="this.ptrGlobals.password"></ion-input>\n    </ion-item>\n\n    <!--{{this.ptrGlobals.token}}-->\n\n    <button ion-button round icon-right (click)="this.ClientMethods.onlogin()" class="btn-Login center">\n        {{"LogBtnLogin" | translate }}\n         <ion-icon ios="ios-key" md="md-key"></ion-icon>\n    </button>\n\n    <button ion-button round icon-right clear (click)="onRecoveryPass()" class="center" style="top: 50px;">\n        {{"LogForgot" | translate }}\n    </button>    \n\n    <button ion-button round icon-right clear  class="center" style="top: 50px; font-size: 20px;">\n        {{"TaRegister" | translate}}\n    </button>    \n\n    \n    <button ion-button round icon-right clear  class="center" style="top: 60px;font-size: 25px;" (click)="onclick2()">\n        {{this.cotizador.ExchageRateCADvsLOC}}  {{this.cotizador.Currency_Payment}}         \n        {{this.ExchageRateCADvsLOC}}  {{this.Currency_Payment}}                 \n        <img src="http://www.prontoprontomoney.com/img/{{this.cotizador.Country_Code}}.png" width="30px" > \n    </button>    \n        \n</ion-content>'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/Login/Login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_5__Providers_globals__["c" /* Globals */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_5__Providers_globals__["b" /* Cotiza */], __WEBPACK_IMPORTED_MODULE_6__Providers_client_methods_client_methods__["a" /* ClientMethodsProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Providers_globals__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TabLogin_TabLogin__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Providers_client_methods_client_methods__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecoveryPassPage = (function () {
    function RecoveryPassPage(navCtrl, ptrGlobals, viewCtrl, ClientMethods, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.ptrGlobals = ptrGlobals;
        this.viewCtrl = viewCtrl;
        this.ClientMethods = ClientMethods;
        this.alertCtrl = alertCtrl;
        this.app = app;
    }
    RecoveryPassPage.prototype.closeModal = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__TabLogin_TabLogin__["a" /* tabLogin */]);
    };
    return RecoveryPassPage;
}());
RecoveryPassPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-RecoveryPass',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/RecoveryPass/RecoveryPass.html"*/'<ion-content>\n  <ion-grid style="background-color:#c6c3e1;"><!-- style="background-color:#CED8F6;"-->\n    <ion-row > \n      <ion-col col-2>\n            <img  src="./assets/imgs/logo.png"  (click)="closeModal()" width="60" height="40"  />\n      </ion-col>\n      <ion-col col-8 style="font-size: 20px;text-align: center; color: #003399; font-family: \'Myriad Pro\'; line-height: 39px;" >\n            <span  >{{"ReTitle" | translate }}</span>\n      </ion-col>\n      <ion-col col-2>\n        <img  src="./assets/imgs/arrow_back.png"  (click)="closeModal()" width="60" height="40"/>\n      </ion-col>      \n    </ion-row>\n  </ion-grid>\n\n  <ion-grid >\n    <ion-row > \n      <ion-col col-12>\n          <ion-item >\n              <ion-label color="primary" style=" font-size: 20px;"  floating>{{"ReEmail" | translate }}</ion-label>\n              <ion-input type="email" [(ngModel)]="this.ptrGlobals.emailRecovery"  ></ion-input>\n          </ion-item>\n      </ion-col>\n\n    </ion-row > \n    <ion-row >           \n        <ion-col col-12 style="font-size: 15px;text-align: center" >\n                {{"ReText" | translate }}\n        </ion-col>\n    </ion-row>  \n\n    <ion-row >           \n      <ion-col col-12>\n          <button ion-button round icon-right (click)="this.ClientMethods.onRecoveryPass()" class="btn-Login-close center">\n            {{"RebtnSend" | translate }}\n               <ion-icon ios="ios-send-outline" md="md-send"></ion-icon>\n          </button>        \n      </ion-col>\n    </ion-row>  \n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/RecoveryPass/RecoveryPass.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["c" /* Globals */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__Providers_client_methods_client_methods__["a" /* ClientMethodsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], RecoveryPassPage);

//# sourceMappingURL=RecoveryPass.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WireHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the WireHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WireHistoryPage = (function () {
    function WireHistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return WireHistoryPage;
}());
WireHistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-wire-history',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/wire-history/wire-history.html"*/'<!--\n  Generated template for the WireHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>WireHistory</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/wire-history/wire-history.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], WireHistoryPage);

//# sourceMappingURL=wire-history.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(251);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tabLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Language_Languaje__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__QuickQuote_QuickQuote__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Login_login__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Providers_globals__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var tabLogin = (function () {
    function tabLogin(ptrGlobals, translateService) {
        this.ptrGlobals = ptrGlobals;
        this.translateService = translateService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__Login_login__["a" /* LoginPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__QuickQuote_QuickQuote__["a" /* QuickQuotePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__Language_Languaje__["a" /* LanguagePage */];
        this.idioms = [];
        this.idioms = [
            {
                value: 'es',
                label: 'Español'
            },
            {
                value: 'en',
                label: 'Ingles'
            },
            {
                value: 'fr',
                label: 'Frances'
            }
        ];
    }
    return tabLogin;
}());
tabLogin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/TabLogin/TabLogin.html"*/'<ion-tabs [selectedIndex]="0">\n    <ion-tab [root]="tab1Root" tabTitle=" {{\'TaLogin\' | translate}}" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle=" {{\'TaQuickQuote\' | translate}}" tabIcon="logo-usd"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle=" {{\'TaRegister\' | translate}}" tabIcon="ios-contact-outline"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle=" {{\'TaLanguage\' | translate}}" tabIcon="md-globe"></ion-tab>    \n  </ion-tabs>\n'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/TabLogin/TabLogin.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__Providers_globals__["c" /* Globals */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
], tabLogin);

//# sourceMappingURL=TabLogin.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Login_login__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_TabLogin_TabLogin__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_Language_Languaje__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_QuickQuote_QuickQuote__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_RecoveryPass_RecoveryPass__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_send_money_send_money__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_beneficiaries_beneficiaries__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_help_help__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_wire_history_wire_history__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_beneficiaries_edit_beneficiaries_edit__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_send_wire_send_wire__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_end_emailtransfer_end_emailtransfer__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_end_interac_end_interac__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_menu_menu__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tabs_system_tabs_system__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ngx_translate_http_loader__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Providers_globals__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Providers_client_methods_client_methods__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Providers_methods_token_methods_token__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_in_app_browser__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_common__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































function setTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_26__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_TabLogin_TabLogin__["a" /* tabLogin */],
            __WEBPACK_IMPORTED_MODULE_4__pages_Login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_Language_Languaje__["a" /* LanguagePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_QuickQuote_QuickQuote__["a" /* QuickQuotePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_RecoveryPass_RecoveryPass__["a" /* RecoveryPassPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_send_money_send_money__["a" /* SendMoneyPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_beneficiaries_beneficiaries__["a" /* BeneficiariesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_wire_history_wire_history__["a" /* WireHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_tabs_system_tabs_system__["a" /* TabsSystemPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_beneficiaries_edit_beneficiaries_edit__["a" /* BeneficiariesEditPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_send_wire_send_wire__["a" /* SendWirePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_end_emailtransfer_end_emailtransfer__["a" /* EndEmailtransferPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_end_interac_end_interac__["a" /* EndInteracPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/beneficiaries-edit/beneficiaries-edit.module#BeneficiariesEditPageModule', name: 'BeneficiariesEditPage', segment: 'beneficiaries-edit', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/end-emailtransfer/end-emailtransfer.module#EndEmailtransferPageModule', name: 'EndEmailtransferPage', segment: 'end-emailtransfer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/beneficiaries/beneficiaries.module#BeneficiariesPageModule', name: 'BeneficiariesPage', segment: 'beneficiaries', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/end-interac/end-interac.module#EndInteracPageModule', name: 'EndInteracPage', segment: 'end-interac', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modal-bankaccount/modal-bankaccount.module#ModalBankaccountPageModule', name: 'ModalBankaccountPage', segment: 'modal-bankaccount', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modal-banks/modal-banks.module#ModalBanksPageModule', name: 'ModalBanksPage', segment: 'modal-banks', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modal-beneficiaries/modal-beneficiaries.module#ModalBeneficiariesPageModule', name: 'ModalBeneficiariesPage', segment: 'modal-beneficiaries', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modal-countries/modal-countries.module#ModalCountriesPageModule', name: 'ModalCountriesPage', segment: 'modal-countries', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modal-payers/modal-payers.module#ModalPayersPageModule', name: 'ModalPayersPage', segment: 'modal-payers', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modal-states/modal-states.module#ModalStatesPageModule', name: 'ModalStatesPage', segment: 'modal-states', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/send-money/send-money.module#SendMoneyPageModule', name: 'SendMoneyPage', segment: 'send-money', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/send-wire/send-wire.module#SendWirePageModule', name: 'SendWirePage', segment: 'send-wire', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/wire-history/wire-history.module#WireHistoryPageModule', name: 'WireHistoryPage', segment: 'wire-history', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (setTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_24__angular_common_http__["a" /* HttpClient */]]
                }
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_TabLogin_TabLogin__["a" /* tabLogin */],
            __WEBPACK_IMPORTED_MODULE_4__pages_Login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_Language_Languaje__["a" /* LanguagePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_QuickQuote_QuickQuote__["a" /* QuickQuotePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_RecoveryPass_RecoveryPass__["a" /* RecoveryPassPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_send_money_send_money__["a" /* SendMoneyPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_beneficiaries_beneficiaries__["a" /* BeneficiariesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_wire_history_wire_history__["a" /* WireHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_tabs_system_tabs_system__["a" /* TabsSystemPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_beneficiaries_edit_beneficiaries_edit__["a" /* BeneficiariesEditPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_send_wire_send_wire__["a" /* SendWirePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_end_emailtransfer_end_emailtransfer__["a" /* EndEmailtransferPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_end_interac_end_interac__["a" /* EndInteracPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_31__angular_common__["c" /* CurrencyPipe */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_27__Providers_globals__["c" /* Globals */],
            __WEBPACK_IMPORTED_MODULE_27__Providers_globals__["f" /* SendMoney */],
            __WEBPACK_IMPORTED_MODULE_27__Providers_globals__["b" /* Cotiza */],
            __WEBPACK_IMPORTED_MODULE_27__Providers_globals__["g" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_28__Providers_client_methods_client_methods__["a" /* ClientMethodsProvider */],
            __WEBPACK_IMPORTED_MODULE_29__Providers_methods_token_methods_token__["a" /* MethodsTokenProvider */],
            __WEBPACK_IMPORTED_MODULE_27__Providers_globals__["a" /* Beneficiaries */],
            __WEBPACK_IMPORTED_MODULE_27__Providers_globals__["e" /* NewWire */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_15__pages_beneficiaries_edit_beneficiaries_edit__["a" /* BeneficiariesEditPage */],
            __WEBPACK_IMPORTED_MODULE_27__Providers_globals__["d" /* Help */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return UserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Beneficiaries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Help; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SendMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Cotiza; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NewWire; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Globals = (function () {
    function Globals() {
        this.url_ws = 'http://www.prontoprontomoney.com:8084/ppm/ppmWS';
        this.url_moneris = 'https://www.prontoprontomoney.com/Transaction/MakeInterac?orderId=';
        this.colorbuttons = '#CED8F6';
        this.emailRecovery = '';
        this.booAnadelog = '0'; // creacion de log de seguimiento de la app 
        this.booIniciaToken = '1';
        this.IdentificacionObligatoria = '0'; //valor para identificacion obligatoria de ecuador al envio de depositos
    }
    return Globals;
}());
Globals = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], Globals);

var UserData = (function () {
    function UserData() {
        this.Name = '';
        this.LastName = '';
        this.SecondLastName = '';
        this.Profession = '';
        this.Address = '';
        this.City = '';
        this.State = '';
        this.ZipCode = '';
        this.PhoneNumber = '';
        this.DateofBirth = '';
        this.Email = '';
        this.password = '';
        this.re_password = '';
    }
    return UserData;
}());

var Beneficiaries = (function () {
    function Beneficiaries() {
        this.AGP_Name = '';
        this.AccountType = '';
        this.Agpayer_ID = '';
        this.BAN_AccNumber = '';
        this.BAN_Name = '';
        this.BNK_DefaultBranchDeposit = '';
        this.Bank_id = '';
        this.CTR_Name = '';
        this.Country_Code = '';
        this.PaymentMethodo = '';
        this.PaymentType = '';
        this.REC_Address = '';
        this.REC_City = '';
        this.REC_Email = '';
        this.REC_FirstName = '';
        this.REC_LastName1 = '';
        this.REC_LastName2 = '';
        this.REC_Phone1 = '';
        this.REC_State = '';
        this.REC_ZipCode = '';
        this.Receiver_id = '';
        this.REC_WirePropuse = '';
        this.REC_IDNumber = '';
        this.VG_New = false;
    }
    return Beneficiaries;
}());

var Help = (function () {
    function Help() {
        this.typehelp = 'Question';
        this.textHelp = '';
    }
    return Help;
}());

var SendMoney = (function () {
    function SendMoney() {
        this.LastCountry_Code = 'CO';
        this.Name_Beneficiario = '';
        this.id_Beneficiario = '';
        this.type_account = 'SAV';
        this.booSelectEdit = '0';
    }
    return SendMoney;
}());

var Cotiza = (function () {
    function Cotiza() {
        this.Amount = '1';
        this.Received = '1';
        this.Country_Code = 'CO';
        this.PromotionCode = '';
        this.AmountReceivedLOC = '1'; //"176435,6412"
        this.AmountReceivedUSD = ''; //"59,4100"
        this.AmountSend = ''; //"78,0000"
        this.Currency_Payment = '2'; // "COP"
        this.ExRateLOC = ''; //"2970,0000"
        this.ExRateUSDvsCAD = ''; //    "1,3130"
        this.ExchageRateCADvsLOC = ''; //    "2261,9954"
        this.FeeINTER = ''; //   "4,9900"
        this.FeeITRA = ''; //    "4,9900"
        this.FeeOriginalINTER = ''; //   "4,99"
        this.FeeOriginalITRA = ''; //   "4,99"
        this.PromotionAmount = ''; //   "0,0000"
        this.TotalCadINTER = ''; //   "82,9900"
        this.TotalCadITRA = ''; //   "82,9900"
        this.TypePromotion = ''; //   "N/A"
        this.TypePromotionValue = ''; //   "0,0000"
        this.newBen = {}; //BENEFICIARIO SELECTED
        this.ErrorPromo = '0';
        this.PromotionCodeError = '';
    }
    return Cotiza;
}());

var NewWire = (function () {
    function NewWire() {
        this.promocode = '';
        this.receiverId = '';
        this.TotalCadINTER = '';
        this.AmountReceivedLOC = '';
        this.FeeINTER = '';
        this.ExchageRateCADvsLOC = '';
        this.AmountSend = '';
        this.AgPAyer_id = '';
        this.BNK_DefaultBranchDeposit = '';
        this.BankAcNumber = '';
        this.typeAcId = '';
        this.Country_Code = '';
        this.bankid = '';
        this.payermethod = '';
        this.paymentMethod = '';
    }
    return NewWire;
}());

//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_TabLogin_TabLogin__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Providers_globals__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, translate, ptrGlobals, http) {
        this.ptrGlobals = ptrGlobals;
        this.http = http;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_TabLogin_TabLogin__["a" /* tabLogin */];
        if (window.localStorage.getItem('langauge') == null) {
            if (window.navigator.language.includes("en")) {
                translate.setDefaultLang('en');
            }
            else if (window.navigator.language.includes("fr")) {
                translate.setDefaultLang('fr');
            }
            else if (window.navigator.language.includes("es")) {
                translate.setDefaultLang('es');
            }
            else {
                translate.setDefaultLang('en');
            }
        }
        else {
            translate.setDefaultLang(window.localStorage.getItem('langauge'));
        }
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_6__Providers_globals__["c" /* Globals */], __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MethodsTokenProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Providers_globals__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_TabLogin_TabLogin__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_end_emailtransfer_end_emailtransfer__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_end_interac_end_interac__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















/*
  Generated class for the MethodsTokenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MethodsTokenProvider = (function () {
    function MethodsTokenProvider(http, http2, ptrGlobals, ptrSendMoney, ptrBeneficiaries, app, cotizador, alertCtrl, ptrNewWire, iab, ptrHelp, ptrUserData, translateService) {
        this.http = http;
        this.http2 = http2;
        this.ptrGlobals = ptrGlobals;
        this.ptrSendMoney = ptrSendMoney;
        this.ptrBeneficiaries = ptrBeneficiaries;
        this.app = app;
        this.cotizador = cotizador;
        this.alertCtrl = alertCtrl;
        this.ptrNewWire = ptrNewWire;
        this.iab = iab;
        this.ptrHelp = ptrHelp;
        this.ptrUserData = ptrUserData;
        this.translateService = translateService;
        this.DECIMAL_SEPARATOR = ".";
        this.GROUP_SEPARATOR = ",";
    }
    /* *****  ANADELOG *****/
    MethodsTokenProvider.prototype.onAnadeLog = function (data, tipoMsn) {
        if (this.ptrGlobals.booAnadelog == '1') {
            console.log('*** ' + new Date().getDate().toString() + '/' + new Date().getMonth().toString() + '/' + new Date().getFullYear().toString() + ' ' +
                new Date().getHours().toString() + ':' + new Date().getMinutes().toString() + ':' + new Date().getSeconds().toString() + ' | ' + tipoMsn +
                ' | ' + data + ' *** ');
        }
    };
    MethodsTokenProvider.prototype.onLastWireSend = function () {
        var _this = this;
        this.onAnadeLog("Open onLastWireSend " + this.ptrGlobals.token, 'INFO');
        var testData = "comando=LASTWIRESEND&data=&token=" + this.ptrGlobals.token;
        this.onAnadeLog(testData, 'INFO');
        var res1;
        return new Promise(function (resolve, reject) {
            _this.http2.post(_this.ptrGlobals.url_ws, testData, {
                headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'),
            })
                .subscribe(function (res) {
                resolve(res);
                res1 = res; //probar el ERROR DEL STATUS PARA NO PASAR POR ERRORES
                _this.onAnadeLog('onLastWireSend' + res, 'INFO');
                if (JSON.parse(res1).status == 'ERROR') {
                    if (JSON.parse(res1).mensaje == '9994') {
                        _this.onAnadeLog(JSON.parse(res1).status + ' ' + JSON.parse(res1).mesaje, ' | onLastWireSend' + ' | ERROR');
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_TabLogin_TabLogin__["a" /* tabLogin */]);
                    }
                    else if (JSON.parse(res1).mensaje == '9994') {
                        _this.onAnadeLog(JSON.parse(res1).status + ' ' + JSON.parse(res1).mesaje, ' | onLastWireSend' + ' | ERROR');
                        //creabeneficiarios  a pantalla 
                    }
                }
                else {
                    _this.ptrGlobals.booIniciaToken = '0';
                    _this.ptrSendMoney.LastCountry_Code = JSON.parse(res1).dato.Country_Code;
                    _this.ptrSendMoney.Name_Beneficiario = JSON.parse(res1).dato.REC_FirstName + ' ' +
                        JSON.parse(res1).dato.REC_LastName1 + ' ' +
                        JSON.parse(res1).dato.REC_LastName2;
                    _this.cotizador.Country_Code = _this.ptrSendMoney.LastCountry_Code;
                    _this.ptrSendMoney.Name_Bank = JSON.parse(res1).dato.BAN_Name;
                    _this.ptrBeneficiaries.Receiver_id = JSON.parse(res1).dato.Receiver_id;
                    _this.ptrNewWire.receiverId = JSON.parse(res1).dato.Receiver_id;
                    _this.ptrNewWire.BNK_DefaultBranchDeposit = JSON.parse(res1).dato.BNK_DefaultBranchDeposit;
                    _this.ptrNewWire.BankAcNumber = JSON.parse(res1).dato.BAN_AccNumber;
                    _this.ptrNewWire.Country_Code = JSON.parse(res1).dato.Country_Code;
                    _this.ptrNewWire.bankid = JSON.parse(res1).dato.Bank_id;
                    _this.ptrNewWire.AgPAyer_id = JSON.parse(res1).dato.Agpayer_ID;
                    _this.ptrNewWire.typeAcId = JSON.parse(res1).dato.AccountType;
                    _this.ptrNewWire.payermethod = JSON.parse(res1).dato.PaymentType;
                    _this.ptrSendMoney.Name_Bank = '';
                    _this.ptrSendMoney.Name_Payer = '';
                    _this.onAnadeLog('ptrNewWire' + _this.ptrNewWire, 'INFO');
                    _this.onListReceivers();
                    _this.onCotiza();
                }
            }, function (err) {
                _this.onAnadeLog(err, ' | onLastWireSend ' + ' | ERROR');
                reject(err);
            });
            _this.onAnadeLog("Close onLastWireSend ", 'INFO');
        });
    };
    MethodsTokenProvider.prototype.onListReceivers = function () {
        var _this = this;
        this.ptrSendMoney.lstBeneficiaries = '';
        this.onAnadeLog("Open onListReceivers " + this.ptrGlobals.token, 'INFO');
        var testData = "comando=LISTRECEIVERS&data=&token=" + this.ptrGlobals.token;
        this.onAnadeLog(testData, 'INFO');
        var res1;
        return new Promise(function (resolve, reject) {
            _this.http2.post(_this.ptrGlobals.url_ws, testData, {
                headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'),
            })
                .subscribe(function (res) {
                resolve(res);
                res1 = res;
                _this.ptrSendMoney.lstBeneficiaries = JSON.parse(res1);
                var i = 0;
                do {
                    if (_this.ptrNewWire.receiverId == _this.ptrSendMoney.lstBeneficiaries[i].Receiver_id) {
                        _this.ptrBeneficiaries.AccountType = _this.ptrSendMoney.lstBeneficiaries[i].AccountType;
                        _this.ptrBeneficiaries.AGP_Name = _this.ptrSendMoney.lstBeneficiaries[i].AGP_Name;
                        _this.ptrBeneficiaries.AccountType = _this.ptrSendMoney.lstBeneficiaries[i].AccountType;
                        _this.ptrBeneficiaries.Agpayer_ID = _this.ptrSendMoney.lstBeneficiaries[i].Agpayer_ID;
                        _this.ptrBeneficiaries.BAN_AccNumber = _this.ptrSendMoney.lstBeneficiaries[i].BAN_AccNumber;
                        _this.ptrBeneficiaries.BAN_Name = _this.ptrSendMoney.lstBeneficiaries[i].BAN_Name;
                        _this.ptrBeneficiaries.BNK_DefaultBranchDeposit = _this.ptrSendMoney.lstBeneficiaries[i].BNK_DefaultBranchDeposit;
                        _this.ptrBeneficiaries.Bank_id = _this.ptrSendMoney.lstBeneficiaries[i].Bank_id;
                        _this.ptrBeneficiaries.CTR_Name = _this.ptrSendMoney.lstBeneficiaries[i].CTR_Name;
                        _this.ptrBeneficiaries.Country_Code = _this.ptrSendMoney.lstBeneficiaries[i].Country_Code;
                        _this.ptrBeneficiaries.PaymentMethodo = _this.ptrSendMoney.lstBeneficiaries[i].PaymentMethodo;
                        _this.ptrBeneficiaries.PaymentType = _this.ptrSendMoney.lstBeneficiaries[i].PaymentType;
                        _this.ptrBeneficiaries.REC_Address = _this.ptrSendMoney.lstBeneficiaries[i].REC_Address;
                        _this.ptrBeneficiaries.REC_City = _this.ptrSendMoney.lstBeneficiaries[i].REC_City;
                        _this.ptrBeneficiaries.REC_Email = _this.ptrSendMoney.lstBeneficiaries[i].REC_Email;
                        _this.ptrBeneficiaries.REC_FirstName = _this.ptrSendMoney.lstBeneficiaries[i].REC_FirstName;
                        _this.ptrBeneficiaries.REC_IDNumber = _this.ptrSendMoney.lstBeneficiaries[i].REC_IDNumber;
                        _this.ptrBeneficiaries.REC_LastName1 = _this.ptrSendMoney.lstBeneficiaries[i].REC_LastName1;
                        _this.ptrBeneficiaries.REC_LastName2 = _this.ptrSendMoney.lstBeneficiaries[i].REC_LastName2;
                        _this.ptrBeneficiaries.REC_Phone1 = _this.ptrSendMoney.lstBeneficiaries[i].REC_Phone1;
                        _this.ptrBeneficiaries.REC_State = _this.ptrSendMoney.lstBeneficiaries[i].REC_State;
                        _this.ptrBeneficiaries.REC_ZipCode = _this.ptrSendMoney.lstBeneficiaries[i].REC_ZipCode;
                        _this.ptrBeneficiaries.Receiver_id = _this.ptrSendMoney.lstBeneficiaries[i].Receiver_id;
                        _this.ptrBeneficiaries.REC_IDNumber = _this.ptrSendMoney.lstBeneficiaries[i].REC_IDNumber;
                    }
                    i++;
                } while (i < _this.ptrSendMoney.lstBeneficiaries.length);
            }, function (err) {
                _this.onAnadeLog(err, ' | onListReceivers' + ' | ERROR');
                reject(err);
            });
            _this.onAnadeLog("Close onLastWireSend ", 'INFO');
        });
    };
    MethodsTokenProvider.prototype.onListBanks = function () {
        var _this = this;
        this.ptrSendMoney.lstBanks = '';
        this.onAnadeLog("Open onListBanks " + this.ptrGlobals.token, 'INFO');
        var testData = "comando=LISTBANK&data={'Country_Code':'" + this.ptrSendMoney.LastCountry_Code + "'}&token=" + this.ptrGlobals.token;
        this.onAnadeLog(testData, 'INFO');
        var res1;
        return new Promise(function (resolve, reject) {
            _this.http2.post(_this.ptrGlobals.url_ws, testData, {
                headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'),
            })
                .subscribe(function (res) {
                resolve(res);
                res1 = res;
                _this.onAnadeLog('onListBanks', 'INFO');
                _this.onAnadeLog(JSON.parse(res1), 'INFO');
                _this.ptrSendMoney.lstBanks = JSON.parse(res1);
            }, function (err) {
                _this.onAnadeLog(err, ' | onListBanks' + ' | ERROR');
                reject(err);
            });
            _this.onAnadeLog("Close onListBanks ", 'INFO');
        });
    };
    MethodsTokenProvider.prototype.onListPayers = function () {
        var _this = this;
        this.ptrSendMoney.lstPayers = '';
        this.onAnadeLog("Open onListPayers " + this.ptrGlobals.token, 'INFO');
        var testData = "comando=LISTAGPAYER&data={'AGP_City':'','Country_Code':'" + this.ptrSendMoney.LastCountry_Code + "','PaymentType':'AGE','State_Code':''}&token=" + this.ptrGlobals.token;
        this.onAnadeLog(testData, 'INFO');
        var res1;
        return new Promise(function (resolve, reject) {
            _this.http2.post(_this.ptrGlobals.url_ws, testData, {
                headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'),
            })
                .subscribe(function (res) {
                resolve(res);
                res1 = res;
                _this.onAnadeLog('onListPayers', 'INFO');
                _this.onAnadeLog(JSON.parse(res1), 'INFO');
                _this.ptrSendMoney.lstPayers = JSON.parse(res1);
            }, function (err) {
                _this.onAnadeLog(err, ' | onListPayers | ' + 'ERROR');
                reject(err);
            });
            _this.onAnadeLog("Close onListBanks ", 'INFO');
        });
    };
    /** REG BENEFICIARIO  */
    MethodsTokenProvider.prototype.onRegBeneficiaries = function () {
        var _this = this;
        this.onAnadeLog("Open onRegBeneficiaries " + this.ptrGlobals.token, 'INFO');
        var testData = "comando=REGBENEFI&data={" +
            "'REC_FirstName':'" + this.ptrBeneficiaries.REC_FirstName +
            "','REC_LastName1':'" + this.ptrBeneficiaries.REC_LastName1 +
            "','REC_LastName2':'" + this.ptrBeneficiaries.REC_LastName2 +
            "','Country_Code':'" + this.ptrBeneficiaries.Country_Code +
            "','REC_State':'" + this.ptrBeneficiaries.REC_State +
            "','REC_City':'" + this.ptrBeneficiaries.REC_City +
            "','REC_Address':'" + this.ptrBeneficiaries.REC_Address +
            "','REC_Phone1':'" + this.ptrBeneficiaries.REC_Phone1 +
            "','REC_ZipCode':'" + this.ptrBeneficiaries.REC_ZipCode +
            "','REC_Email':'" + this.ptrBeneficiaries.REC_Email +
            "','REC_IDNumber':'" + this.ptrBeneficiaries.REC_IDNumber +
            "'}&token=" + this.ptrGlobals.token;
        this.onAnadeLog(testData, 'INFO');
        var res1;
        return new Promise(function (resolve, reject) {
            _this.http2.post(_this.ptrGlobals.url_ws, testData, {
                headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'),
            })
                .subscribe(function (res) {
                resolve(res);
                res1 = res;
                _this.onAnadeLog('onRegBeneficiaries', 'INFO');
                _this.onAnadeLog(JSON.parse(res1), 'INFO');
                // this.onListReceivers();
            }, function (err) {
                _this.onAnadeLog(err, ' | onRegBeneficiaries | ' + 'ERROR');
                reject(err);
            });
            _this.onAnadeLog("Close onRegBeneficiaries ", 'INFO');
        });
    };
    MethodsTokenProvider.prototype.onUpdateBeneficiaries = function () {
        var _this = this;
        this.onAnadeLog("Open onUpdateBeneficiaries " + this.ptrGlobals.token, 'INFO');
        var testData = "comando=UPDATEBENE&data={'Country_Code':'" + this.ptrBeneficiaries.Country_Code +
            "','Receiver_id':'" + this.ptrBeneficiaries.Receiver_id +
            "','REC_FirstName':'" + this.ptrBeneficiaries.REC_FirstName +
            "','REC_LastName1':'" + this.ptrBeneficiaries.REC_LastName1 +
            "','REC_LastName2':'" + this.ptrBeneficiaries.REC_LastName2 +
            "','Country_Code':'" + this.ptrBeneficiaries.Country_Code +
            "','CTR_Name':'" + this.ptrBeneficiaries.CTR_Name +
            "','REC_State':'" + this.ptrBeneficiaries.REC_State +
            "','REC_City':'" + this.ptrBeneficiaries.REC_City +
            "','REC_Address':'" + this.ptrBeneficiaries.REC_Address +
            "','REC_Phone1':'" + this.ptrBeneficiaries.REC_Phone1 +
            "','REC_ZipCode':'" + this.ptrBeneficiaries.REC_ZipCode +
            "','REC_Email':'" + this.ptrBeneficiaries.REC_Email +
            "','BAN_AccNumber':'" + this.ptrBeneficiaries.BAN_AccNumber +
            "','AccountType':'" + this.ptrBeneficiaries.AccountType +
            "','BAN_Name':'" + this.ptrBeneficiaries.BAN_Name +
            "','Bank_id':'" + this.ptrBeneficiaries.Bank_id +
            "','PaymentMethodo':'" + this.ptrBeneficiaries.PaymentMethodo +
            "','PaymentType':'" + this.ptrBeneficiaries.PaymentType +
            "','Agpayer_ID':'" + this.ptrBeneficiaries.Agpayer_ID +
            "','REC_IDNumber':'" + this.ptrBeneficiaries.REC_IDNumber +
            "','BNK_DefaultBranchDeposit':'" + this.ptrBeneficiaries.BNK_DefaultBranchDeposit +
            "','AGP_Name':'" + this.ptrBeneficiaries.AGP_Name +
            "'}&token=" + this.ptrGlobals.token;
        this.ptrNewWire.Country_Code = this.ptrBeneficiaries.Country_Code;
        //this.cotizador.Coucntry_Code =  this.ptrBeneficiaries.Country_Code;                  
        this.onAnadeLog(testData, 'INFO');
        var res1;
        return new Promise(function (resolve, reject) {
            _this.http2.post(_this.ptrGlobals.url_ws, testData, {
                headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'),
            })
                .subscribe(function (res) {
                resolve(res);
                res1 = res;
                _this.onAnadeLog('onUpdateBeneficiaries', 'INFO');
                _this.onAnadeLog(JSON.parse(res1), 'INFO'); /** AL ACTIVAR ESTA SECCION TIENE EL ERROR DE QUE SE ENVIA UN GIRO Y TOMA EL ULTIMO DEL INICIO DE LA APP MAS NO EL Q ACABA DE ENVIAR SI ES BEC */
                /*  this.ptrSendMoney.Name_Beneficiario = this.ptrBeneficiaries.REC_FirstName+' '+this.ptrBeneficiaries.REC_LastName1+' '+this.ptrBeneficiaries.REC_LastName2;
                  this.ptrSendMoney.LastCountry_Code  = this.ptrBeneficiaries.Country_Code;
                  this.ptrSendMoney.Name_Bank           = '';
                  this.ptrSendMoney.Name_Payer          = '';
                  this.onListReceivers();*/
            }, function (err) {
                _this.onAnadeLog(err, ' | onUpdateBeneficiaries | ' + 'ERROR');
                reject(err);
            });
            _this.onAnadeLog("Close onUpdateBeneficiaries ", 'INFO');
        });
    };
    /* ********Methods Cotizaciones Inv*************/
    MethodsTokenProvider.prototype.onCotizaInv = function () {
        var _this = this;
        var testData = "comando=CALCTRANSINFOREV&data={'Amount':'" + this.cotizador.Received + "','Country_Code':'" + this.cotizador.Country_Code + "','PromotionCode':'" + this.cotizador.PromotionCode + "'}";
        var res1;
        this.onAnadeLog("Open onCotizaInv | " + this.cotizador.Amount, 'INFO');
        this.onAnadeLog(testData, 'INFO');
        window.localStorage.setItem('Country_Code', this.cotizador.Country_Code);
        if (this.cotizador.Amount >= 999) {
            this.cotizador.Received = '';
            this.cotizador.AmountSend = '0';
            this.cotizador.AmountReceivedLOC = '0';
            this.cotizador.ExchageRateCADvsLOC = '0';
            this.cotizador.FeeINTER = '0';
            this.cotizador.TotalCadINTER = '0';
            this.cotizador.Currency_Payment = '0';
            this.cotizador.Amount = '1';
            var alert_1 = this.alertCtrl.create({
                title: 'Max 999',
                subTitle: 'Max Send 999 CAD',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.cotizador.Received != '' && this.cotizador.Received != '0') {
            return new Promise(function (resolve, reject) {
                _this.http2.post(_this.ptrGlobals.url_ws, testData, { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'), })
                    .subscribe(function (res) {
                    res1 = res;
                    resolve(res);
                    _this.onAnadeLog('oncotiza', 'INFO');
                    _this.onAnadeLog(JSON.parse(res1), 'INFO');
                    _this.cotizador.Currency_Payment = JSON.parse(res1).Currency_Payment;
                    _this.ptrNewWire.AmountReceivedLOC = JSON.parse(res1).AmountReceivedLOC;
                    _this.ptrNewWire.ExchageRateCADvsLOC = JSON.parse(res1).ExchageRateCADvsLOC;
                    _this.ptrNewWire.FeeINTER = JSON.parse(res1).FeeINTER;
                    _this.ptrNewWire.TotalCadINTER = JSON.parse(res1).TotalCadINTER;
                    _this.ptrNewWire.AmountSend = JSON.parse(res1).AmountSend;
                    _this.ptrNewWire.promocode = _this.cotizador.PromotionCode;
                    _this.cotizador.Amount = parseFloat(JSON.parse(res1).AmountSend.replace(',', ".")).toFixed(2);
                    _this.cotizador.ExchageRateCADvsLOC = parseFloat(JSON.parse(res1).ExchageRateCADvsLOC.replace(',', ".")).toFixed(2);
                    _this.cotizador.FeeINTER = parseFloat(JSON.parse(res1).FeeINTER.replace(',', ".")).toFixed(2);
                    _this.cotizador.TotalCadINTER = parseFloat(JSON.parse(res1).TotalCadINTER.replace(',', ".")).toFixed(2);
                    if (_this.cotizador.Amount >= 999) {
                        _this.cotizador.Received = '';
                        _this.cotizador.AmountSend = '0';
                        _this.cotizador.AmountReceivedLOC = '0';
                        _this.cotizador.ExchageRateCADvsLOC = '0';
                        _this.cotizador.FeeINTER = '0';
                        _this.cotizador.TotalCadINTER = '0';
                        _this.cotizador.Currency_Payment = '0';
                        _this.cotizador.Amount = '1';
                        console.log("alarma");
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Max 999',
                            subTitle: 'Max Send 999 CAD',
                            buttons: ['OK']
                        });
                        alert_2.present();
                    }
                }, function (err) {
                    _this.cotizador.ErrorPromo = '1';
                    var alert = _this.alertCtrl.create({
                        title: 'Promotional code!',
                        subTitle: 'Promotional code  is used or incorrect!',
                        buttons: ['OK']
                    });
                    alert.present();
                    _this.cotizador.PromotionCodeError = 'Promotional code is used or incorrect!';
                    _this.onAnadeLog(err, ' | onCotizaInv | ' + 'ERROR');
                    _this.cotizador.PromotionCode = '';
                    _this.onCotizaInv();
                    //        reject(err);
                });
                _this.onAnadeLog("Close onCotizaInv", 'INFO');
            });
        }
    };
    /* ********Methods Cotizaciones *************/
    MethodsTokenProvider.prototype.onCotiza = function () {
        var _this = this;
        var testData = "comando=CALCTRANSINFO&data={'Amount':'" + this.cotizador.Amount + "','Country_Code':'" + this.cotizador.Country_Code + "','PromotionCode':'" + this.cotizador.PromotionCode + "'}";
        var res1;
        this.onAnadeLog("Open onCotiza token | " + this.cotizador.Amount, 'INFO');
        this.onAnadeLog(testData, 'INFO');
        console.log(testData);
        window.localStorage.setItem('Country_Code', this.cotizador.Country_Code);
        //  this.cotizador.ErrorPromo         = '0';
        if (this.cotizador.Amount >= 999) {
            this.cotizador.Received = '';
            this.cotizador.AmountSend = '0';
            this.cotizador.AmountReceivedLOC = '0';
            this.cotizador.ExchageRateCADvsLOC = '0';
            this.cotizador.FeeINTER = '0';
            this.cotizador.TotalCadINTER = '0';
            this.cotizador.Currency_Payment = '0';
            this.cotizador.Amount = '1';
            this.cotizador.ErrorPromo = '0';
            this.cotizador.PromotionCodeError = '';
            var alert_3 = this.alertCtrl.create({
                title: 'Max 999',
                subTitle: 'Max Send 999 CAD',
                buttons: ['OK']
            });
            alert_3.present();
        }
        else if (this.cotizador.Amount != '' && this.cotizador.Amount != '0') {
            return new Promise(function (resolve, reject) {
                _this.http2.post(_this.ptrGlobals.url_ws, testData, { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'), })
                    .subscribe(function (res) {
                    res1 = res;
                    resolve(res);
                    _this.onAnadeLog('oncotiza', 'INFO');
                    _this.onAnadeLog(JSON.parse(res1), 'INFO');
                    _this.cotizador.Currency_Payment = JSON.parse(res1).Currency_Payment;
                    _this.ptrNewWire.AmountReceivedLOC = JSON.parse(res1).AmountReceivedLOC;
                    _this.ptrNewWire.ExchageRateCADvsLOC = JSON.parse(res1).ExchageRateCADvsLOC;
                    _this.ptrNewWire.FeeINTER = JSON.parse(res1).FeeINTER;
                    _this.ptrNewWire.TotalCadINTER = JSON.parse(res1).TotalCadINTER;
                    _this.ptrNewWire.AmountSend = JSON.parse(res1).AmountSend;
                    if (_this.cotizador.PromotionCode != '')
                        _this.ptrNewWire.promocode = _this.cotizador.PromotionCode;
                    if (_this.cotizador.Currency_Payment == 'USD') {
                        _this.cotizador.Received = parseFloat(JSON.parse(res1).AmountReceivedLOC.replace(',', ".")).toFixed(2);
                        _this.cotizador.AmountReceivedLOC = parseFloat(JSON.parse(res1).AmountReceivedLOC.replace(',', ".")).toFixed(2);
                        _this.cotizador.ExchageRateCADvsLOC = parseFloat(JSON.parse(res1).ExchageRateCADvsLOC.replace(',', ".")).toFixed(2);
                        _this.cotizador.FeeINTER = parseFloat(JSON.parse(res1).FeeINTER.replace(',', ".")).toFixed(2);
                        _this.cotizador.TotalCadINTER = parseFloat(JSON.parse(res1).TotalCadINTER.replace(',', ".")).toFixed(2);
                        _this.cotizador.Currency_Payment = JSON.parse(res1).Currency_Payment;
                        _this.cotizador.AmountSend = parseFloat(JSON.parse(res1).AmountSend.replace(',', ".")).toFixed(2);
                    }
                    else {
                        _this.cotizador.Received = parseFloat(JSON.parse(res1).AmountReceivedLOC.replace(',', ".")).toFixed(0);
                        _this.cotizador.AmountReceivedLOC = parseFloat(JSON.parse(res1).AmountReceivedLOC.replace(',', ".")).toFixed(0);
                        _this.cotizador.ExchageRateCADvsLOC = parseFloat(JSON.parse(res1).ExchageRateCADvsLOC.replace(',', ".")).toFixed(0);
                        _this.cotizador.FeeINTER = parseFloat(JSON.parse(res1).FeeINTER.replace(',', ".")).toFixed(2);
                        _this.cotizador.TotalCadINTER = parseFloat(JSON.parse(res1).TotalCadINTER.replace(',', ".")).toFixed(2);
                        _this.cotizador.Currency_Payment = JSON.parse(res1).Currency_Payment;
                        _this.cotizador.AmountSend = parseFloat(JSON.parse(res1).AmountSend.replace(',', ".")).toFixed(0);
                    }
                }, function (err) {
                    _this.cotizador.ErrorPromo = '1';
                    var alert = _this.alertCtrl.create({
                        title: 'Promotional code!',
                        subTitle: 'Promotional code  is used or incorrect!',
                        buttons: ['OK']
                    });
                    alert.present();
                    _this.cotizador.PromotionCodeError = 'Promotional code is used or incorrect!';
                    _this.onAnadeLog(err, ' | onCotiza | ' + 'ERROR');
                    _this.cotizador.PromotionCode = '';
                    _this.cotizador.ErrorPromo = 0;
                    _this.onCotiza();
                });
                _this.onAnadeLog("Close onCotiza", 'INFO');
            });
        }
    };
    MethodsTokenProvider.prototype.onSendWire = function () {
        var _this = this;
        if (this.ptrNewWire.Country_Code == 'EC' && this.ptrNewWire.payermethod == 'DEP') {
            this.onUpdateBeneficiaries();
            this.ptrGlobals.booIniciaToken = '0';
        }
        var testData = "comando=INSWIRE&data={'promocode':'" + this.ptrNewWire.promocode +
            "','receiverId':'" + this.ptrNewWire.receiverId +
            "','TotalCadINTER':'" + this.ptrNewWire.TotalCadINTER +
            "','AmountReceivedLOC':'" + this.ptrNewWire.AmountReceivedLOC +
            "','FeeINTER':'" + this.ptrNewWire.FeeINTER +
            "','ExchageRateCADvsLOC':'" + this.ptrNewWire.ExchageRateCADvsLOC +
            "','AmountSend':'" + this.ptrNewWire.AmountSend +
            "','AgPAyer_id':'" + this.ptrNewWire.AgPAyer_id +
            "','BNK_DefaultBranchDeposit':'" + this.ptrNewWire.BNK_DefaultBranchDeposit +
            "','BankAcNumber':'" + this.ptrNewWire.BankAcNumber +
            "','typeAcId':'" + this.ptrNewWire.typeAcId +
            "','Country_Code':'" + this.ptrNewWire.Country_Code +
            "','bankid':'" + this.ptrNewWire.bankid +
            "','payermethod':'" + this.ptrNewWire.payermethod +
            "','paymentMethod':'" + this.ptrNewWire.paymentMethod +
            "'}&token=" + this.ptrGlobals.token;
        this.ptrBeneficiaries.PaymentType = 'EMAIL';
        this.onAnadeLog(testData, 'INFO');
        var res1;
        return new Promise(function (resolve, reject) {
            _this.http2.post(_this.ptrGlobals.url_ws, testData, {
                headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'),
            })
                .subscribe(function (res) {
                resolve(res);
                res1 = res;
                _this.onAnadeLog(res1, 'INFO'); //if error ojo{"status":"ERROR","mensaje":"9999"} *** scar alarma
                if (_this.ptrNewWire.paymentMethod == 'EMAIL') {
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_end_emailtransfer_end_emailtransfer__["a" /* EndEmailtransferPage */]);
                }
                else {
                    var browser = _this.iab.create(_this.ptrGlobals.url_moneris +
                        JSON.parse(res1.replace('[', '').replace(']', '')).EU_TempWireID +
                        '&charge_total=' + _this.ptrNewWire.TotalCadINTER.replace(',', '.') +
                        '&token=' + _this.ptrGlobals.token +
                        '&orderToken=' + JSON.parse(res1.replace('[', '').replace(']', '')).EU_TransactionID, '_blank', 'location=yes');
                    browser.show();
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_end_interac_end_interac__["a" /* EndInteracPage */]);
                }
            }, function (err) {
                _this.onAnadeLog(err, ' | onSendWire' + ' | ERROR');
                reject(err);
            });
            _this.onAnadeLog("Close onSendWire ", 'INFO');
        });
    };
    /** helpsend */
    MethodsTokenProvider.prototype.onHelpSend = function () {
        var _this = this;
        this.onAnadeLog("Open onHelpSend " + this.ptrGlobals.token, 'INFO');
        var testData = "comando=HELPTICKET&data=" +
            '{"ticket":{"requester":{"name":"' + this.ptrHelp.typehelp + '","email":"' + this.ptrGlobals.user + '"},"submitter_id":410983,"subject":"PPM-Movil Help Request","comment":{"body":"' + this.ptrHelp.textHelp + '"}}}';
        console.log(testData);
        this.onAnadeLog(testData, 'INFO');
        var res1;
        return new Promise(function (resolve, reject) {
            _this.http2.post(_this.ptrGlobals.url_ws, testData, {
                headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'),
            })
                .subscribe(function (res) {
                resolve(res);
                res1 = res;
                console.log(JSON.parse(res1), 'INFO');
                var respo = JSON.parse(res1);
                var mesa = _this.translateService.instant('HeTypeofmessageError');
                if (respo) {
                    mesa = 'Ticket #' + respo.ticket.id + _this.translateService.instant('HeTypeofmessageOk');
                }
                _this.ptrHelp.textHelp = '';
                _this.ptrHelp.typehelp = '';
                var alert = _this.alertCtrl.create({
                    title: 'Help!',
                    subTitle: mesa,
                    buttons: ['OK']
                });
                alert.present();
                _this.onAnadeLog('onHelpSend', 'INFO');
                _this.onAnadeLog(JSON.parse(res1), 'INFO');
                _this.ptrSendMoney.lstBanks = JSON.parse(res1);
            }, function (err) {
                _this.onAnadeLog(err, ' | onHelpSend' + ' | ERROR');
                reject(err);
            });
            _this.onAnadeLog("Close onHelpSend ", 'INFO');
        });
    };
    MethodsTokenProvider.prototype.format = function (valString) {
        if (!valString) {
            return '';
        }
        var val = valString.toString();
        var parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
        return parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.GROUP_SEPARATOR) + (!parts[1] ? '' : this.DECIMAL_SEPARATOR + parts[1]);
    };
    ;
    MethodsTokenProvider.prototype.unFormat = function (val) {
        if (!val) {
            return '';
        }
        val = val.replace(/^0+/, '');
        if (this.GROUP_SEPARATOR === ',') {
            return val.replace(/,/g, '');
        }
        else {
            return val.replace(/\./g, '');
        }
    };
    ;
    return MethodsTokenProvider;
}());
MethodsTokenProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__Providers_globals__["c" /* Globals */], __WEBPACK_IMPORTED_MODULE_5__Providers_globals__["f" /* SendMoney */],
        __WEBPACK_IMPORTED_MODULE_5__Providers_globals__["a" /* Beneficiaries */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_5__Providers_globals__["b" /* Cotiza */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__Providers_globals__["e" /* NewWire */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_5__Providers_globals__["d" /* Help */], __WEBPACK_IMPORTED_MODULE_5__Providers_globals__["g" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */]])
], MethodsTokenProvider);

//# sourceMappingURL=methods-token.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsSystemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help_help__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TabLogin_TabLogin__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__send_money_send_money__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__beneficiaries_beneficiaries__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsSystemPage = (function () {
    function TabsSystemPage(app) {
        this.app = app;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__send_money_send_money__["a" /* SendMoneyPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__help_help__["a" /* HelpPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__beneficiaries_beneficiaries__["a" /* BeneficiariesPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */];
    }
    TabsSystemPage.prototype.onclose = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__TabLogin_TabLogin__["a" /* tabLogin */]);
    };
    return TabsSystemPage;
}());
TabsSystemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/tabs-system/tabs-system.html"*/'<ion-tabs [selectedIndex]="0">\n    <ion-tab [root]="tab1Root" tabTitle=" {{\'TaSendMoney\' | translate}}" tabIcon="logo-usd"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle=" {{\'TaBeneficiarios\' | translate}}" tabIcon="md-people" ></ion-tab>    \n    <ion-tab [root]="tab2Root" tabTitle=" {{\'TaHelp\' | translate}}" tabIcon="md-help-circle" ></ion-tab>    <!--(ionSelect)="this.onclose()"-->        \n    <ion-tab [root]="tab4Root" tabTitle=" {{\'Taotros\' | translate}}" tabIcon="menu" ></ion-tab>            \n  </ion-tabs>'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/tabs-system/tabs-system.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], TabsSystemPage);

//# sourceMappingURL=tabs-system.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientMethodsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Providers_globals__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_TabLogin_TabLogin__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_system_tabs_system__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ClientMethodsProvider = (function () {
    function ClientMethodsProvider(http, app, http2, ptrGlobals, ptrUserData, cotizador, alertCtrl, translateService) {
        this.http = http;
        this.app = app;
        this.http2 = http2;
        this.ptrGlobals = ptrGlobals;
        this.ptrUserData = ptrUserData;
        this.cotizador = cotizador;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.DECIMAL_SEPARATOR = ".";
        this.GROUP_SEPARATOR = ",";
        this.onAnadeLog('Init Module of Clients method PPM v.2', 'INFO');
        this.onListCountries();
    }
    /* *****  ANADELOG *****/
    ClientMethodsProvider.prototype.onAnadeLog = function (data, tipoMsn) {
        if (this.ptrGlobals.booAnadelog == '1') {
            console.log('*** ' + new Date().getDate().toString() + '/' + new Date().getMonth().toString() + '/' + new Date().getFullYear().toString() + ' ' +
                new Date().getHours().toString() + ':' + new Date().getMinutes().toString() + ':' + new Date().getSeconds().toString() + ' | ' + tipoMsn +
                ' | ' + data + ' *** ');
        }
    };
    /* *********************  Methods login pages and token definition ***********************/
    ClientMethodsProvider.prototype.onlogin = function () {
        var _this = this;
        this.ptrGlobals.booIniciaToken = '1';
        var testData = "comando=Login&data={'username':'" + this.ptrGlobals.user + "','password':'" + this.ptrGlobals.password + "'}";
        return new Promise(function (resolve, reject) {
            _this.http2.post(_this.ptrGlobals.url_ws, testData, {
                headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'),
            })
                .subscribe(function (res) {
                _this.onAnadeLog(res, 'Info');
                _this.ptrGlobals.token = res;
                if (res == 'ERROR') {
                    var alert_1 = _this.alertCtrl.create({
                        title: _this.translateService.instant('LoginErrorTitle'),
                        subTitle: _this.translateService.instant('LoginError'),
                        buttons: ['OK']
                    });
                    alert_1.present();
                    _this.ptrGlobals.token = 'ERROR';
                }
                else {
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_tabs_system_tabs_system__["a" /* TabsSystemPage */]);
                }
                resolve(res);
            }, function (err) {
                _this.onAnadeLog(err, '| onlogin' + ' | ERROR');
                reject(err);
            });
            _this.onAnadeLog('Close onLogin ', 'INFO');
        });
    };
    /* ************ Methods ListCountry ----*/
    ClientMethodsProvider.prototype.onListCountries = function () {
        var _this = this;
        this.onAnadeLog("Open onListCountries ", 'INFO');
        var testData = "comando=LISTCOUNTRY&data={'data':''}";
        return new Promise(function (resolve, reject) {
            _this.http2.post(_this.ptrGlobals.url_ws, testData, {
                headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'),
            })
                .subscribe(function (res) {
                resolve(res);
                _this.ptrGlobals.lstCountry = res;
                _this.ptrGlobals.lstCountry = JSON.parse(_this.ptrGlobals.lstCountry);
            }, function (err) {
                _this.onAnadeLog(err, ' | onListCountries' + ' | ERROR');
                reject(err);
            });
            _this.onAnadeLog("Close onListCountries", 'INFO');
        });
    };
    /* ************ Methods ListStates ----*/
    ClientMethodsProvider.prototype.onListStates = function (strStateCode) {
        var _this = this;
        this.onAnadeLog("Open onListStates " + strStateCode, 'INFO');
        var testData = "comando=LISTSTATES&data=" + strStateCode; //comando=LISTSTATES&data=CA
        this.onAnadeLog(testData, 'INFO');
        return new Promise(function (resolve, reject) {
            _this.http2.post(_this.ptrGlobals.url_ws, testData, {
                headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'),
            })
                .subscribe(function (res) {
                resolve(res);
                _this.ptrGlobals.lstStates = res;
                _this.ptrGlobals.lstStates = JSON.parse(_this.ptrGlobals.lstStates);
                _this.onAnadeLog(_this.ptrGlobals.lstStates, 'INFO');
            }, function (err) {
                _this.onAnadeLog(err, ' | onListStates' + ' | ERROR');
                reject(err);
            });
            _this.onAnadeLog("Close onListStates ", 'INFO');
        });
    };
    /* ********Methods Cotizaciones *************/
    ClientMethodsProvider.prototype.onCotiza = function () {
        var _this = this;
        var testData = "comando=CALCTRANSINFO&data={'Amount':'" + this.cotizador.Amount + "','Country_Code':'" + this.cotizador.Country_Code + "','PromotionCode':'" + this.cotizador.PromotionCode + "'}";
        var res1;
        this.onAnadeLog("Open onCotiza | " + this.cotizador.Amount, 'INFO');
        this.onAnadeLog(testData, 'INFO');
        window.localStorage.setItem('Country_Code', this.cotizador.Country_Code);
        window.localStorage.setItem('Amount', this.cotizador.Amount);
        if (this.cotizador.Amount >= 999) {
            this.cotizador.Received = '';
            this.cotizador.AmountSend = '0';
            this.cotizador.AmountReceivedLOC = '0';
            this.cotizador.ExchageRateCADvsLOC = '0';
            this.cotizador.FeeINTER = '0';
            this.cotizador.TotalCadINTER = '0';
            this.cotizador.Currency_Payment = '0';
            this.cotizador.Amount = '1';
            var alert_2 = this.alertCtrl.create({
                title: 'Max 999',
                subTitle: 'Max Send 999 CAD',
                buttons: ['OK']
            });
            alert_2.present();
        }
        else if (this.cotizador.Amount != '' && this.cotizador.Amount != '0') {
            return new Promise(function (resolve, reject) {
                _this.http2.post(_this.ptrGlobals.url_ws, testData, { headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'), })
                    .subscribe(function (res) {
                    res1 = res;
                    resolve(res);
                    if (_this.cotizador.Currency_Payment == 'USD') {
                        _this.cotizador.Received = parseFloat(JSON.parse(res1).AmountReceivedLOC.replace(',', ".")).toFixed(2);
                        _this.cotizador.AmountReceivedLOC = parseFloat(JSON.parse(res1).AmountReceivedLOC.replace(',', ".")).toFixed(2);
                        _this.cotizador.ExchageRateCADvsLOC = parseFloat(JSON.parse(res1).ExchageRateCADvsLOC.replace(',', ".")).toFixed(2);
                        _this.cotizador.FeeINTER = parseFloat(JSON.parse(res1).FeeINTER.replace(',', ".")).toFixed(2);
                        _this.cotizador.TotalCadINTER = parseFloat(JSON.parse(res1).TotalCadINTER.replace(',', ".")).toFixed(2);
                        _this.cotizador.Currency_Payment = JSON.parse(res1).Currency_Payment;
                        _this.cotizador.AmountSend = parseFloat(JSON.parse(res1).AmountSend.replace(',', ".")).toFixed(2);
                    }
                    else {
                        _this.cotizador.Received = parseFloat(JSON.parse(res1).AmountReceivedLOC.replace(',', ".")).toFixed(0);
                        _this.cotizador.AmountReceivedLOC = parseFloat(JSON.parse(res1).AmountReceivedLOC.replace(',', ".")).toFixed(0);
                        _this.cotizador.ExchageRateCADvsLOC = parseFloat(JSON.parse(res1).ExchageRateCADvsLOC.replace(',', ".")).toFixed(0);
                        _this.cotizador.FeeINTER = parseFloat(JSON.parse(res1).FeeINTER.replace(',', ".")).toFixed(2);
                        _this.cotizador.TotalCadINTER = parseFloat(JSON.parse(res1).TotalCadINTER.replace(',', ".")).toFixed(2);
                        _this.cotizador.Currency_Payment = JSON.parse(res1).Currency_Payment;
                        _this.cotizador.AmountSend = parseFloat(JSON.parse(res1).AmountSend.replace(',', ".")).toFixed(0);
                    }
                }, function (err) {
                    _this.onAnadeLog(err, ' | onCotiza ' + ' | ERROR');
                    reject(err);
                });
                _this.onAnadeLog("Close onCotiza", 'INFO');
            });
        }
    };
    /* ********Methods Cotizaciones Inv*************/
    ClientMethodsProvider.prototype.onCotizaInv = function () {
        var _this = this;
        var testData = "comando=CALCTRANSINFOREV&data={'Amount':'" + this.cotizador.Received + "','Country_Code':'" + this.cotizador.Country_Code + "','PromotionCode':'" + this.cotizador.PromotionCode + "'}";
        var res1;
        this.onAnadeLog("Open onCotizaInv | " + this.cotizador.Amount, 'INFO');
        this.onAnadeLog(testData, 'INFO');
        console.log(testData);
        window.localStorage.setItem('Country_Code', this.cotizador.Country_Code);
        if (this.cotizador.Amount >= 999) {
            this.cotizador.Received = '';
            this.cotizador.AmountSend = '0';
            this.cotizador.AmountReceivedLOC = '0';
            this.cotizador.ExchageRateCADvsLOC = '0';
            this.cotizador.FeeINTER = '0';
            this.cotizador.TotalCadINTER = '0';
            this.cotizador.Currency_Payment = '0';
            this.cotizador.Amount = '1';
            var alert_3 = this.alertCtrl.create({
                title: 'Max 999',
                subTitle: 'Max Send 999 CAD',
                buttons: ['OK']
            });
            alert_3.present();
        }
        else if (this.cotizador.Received != '' && this.cotizador.Received != '0') {
            return new Promise(function (resolve, reject) {
                _this.http2.post(_this.ptrGlobals.url_ws, testData, { headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'), })
                    .subscribe(function (res) {
                    res1 = res;
                    resolve(res);
                    _this.cotizador.Amount = parseFloat(JSON.parse(res1).AmountSend.replace(',', ".")).toFixed(2);
                    _this.cotizador.ExchageRateCADvsLOC = parseFloat(JSON.parse(res1).ExchageRateCADvsLOC.replace(',', ".")).toFixed(2);
                    _this.cotizador.FeeINTER = parseFloat(JSON.parse(res1).FeeINTER.replace(',', ".")).toFixed(2);
                    _this.cotizador.TotalCadINTER = parseFloat(JSON.parse(res1).TotalCadINTER.replace(',', ".")).toFixed(2);
                }, function (err) {
                    _this.onAnadeLog(err, ' | onCotizaInv ' + ' | ERROR');
                    reject(err);
                });
                _this.onAnadeLog("Close onCotizaInv", 'INFO');
            });
        }
    };
    /* ****** Method Recovery Password ******/
    ClientMethodsProvider.prototype.onRecoveryPass = function () {
        var _this = this;
        this.onAnadeLog('Open onRecoveryPass | ' + this.ptrGlobals.emailRecovery, 'INFO');
        if (this.ptrGlobals.emailRecovery != '') {
            var testData = "comando=RECOVERY&data=" + this.ptrGlobals.emailRecovery;
            var error;
            this.onAnadeLog(testData, 'INFO');
            return new Promise(function (resolve, reject) {
                _this.http2.post(_this.ptrGlobals.url_ws, testData, { headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'), })
                    .subscribe(function (res) {
                    _this.onAnadeLog(res, 'INFO');
                    error = res;
                    _this.onAnadeLog(JSON.parse(error).status, 'INFO');
                    resolve(res);
                    if (JSON.parse(error).status == 'ERROR') {
                        var alert_4 = _this.alertCtrl.create({
                            title: "Error",
                            subTitle: JSON.parse(error).message,
                            buttons: ['OK']
                        });
                        alert_4.present();
                    }
                    else {
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_TabLogin_TabLogin__["a" /* tabLogin */]);
                    }
                }, function (err) { _this.onAnadeLog(err, ' | onRecoveryPass' + ' | ERROR'); reject(err); });
                _this.onAnadeLog('Close onRecoveryPass | ' + _this.ptrGlobals.emailRecovery, 'INFO');
                _this.ptrGlobals.emailRecovery = "";
            });
        }
        else {
            var alert_5 = this.alertCtrl.create({
                title: this.translateService.instant('EmailNullTitle'),
                subTitle: this.translateService.instant('EmailNullError'),
                buttons: ['OK']
            });
            alert_5.present();
            this.onAnadeLog('Close onRecoveryPass | ' + this.ptrGlobals.emailRecovery, 'INFO');
            this.ptrGlobals.emailRecovery = "";
        }
    };
    /* ******* Method Reg User*/
    ClientMethodsProvider.prototype.onRegUser = function () {
        var _this = this;
        this.onAnadeLog("Open onRegUser | " + this.ptrUserData.Name, 'INFO');
        var testData = "comando=REGUSER&data={'SND_FirstName':'" + this.ptrUserData.Name +
            "','SND_LastName1':'" + this.ptrUserData.LastName +
            "','SND_LastName2':'" + this.ptrUserData.SecondLastName +
            "','Country_Code':'CA','SND_State':'" + this.ptrUserData.State +
            "','SND_City':'" + this.ptrUserData.City +
            "','SND_Address':'" + this.ptrUserData.Address +
            "','SND_Phone1':'" + this.ptrUserData.PhoneNumber +
            "','SND_ZipCode':'" + this.ptrUserData.ZipCode +
            "','EU_Email':'" + this.ptrUserData.Email +
            "','DateofBirth':'" + this.ptrUserData.DateofBirth +
            "','EU_Password':'" + this.ptrUserData.password + "'}";
        var res1;
        this.onAnadeLog(testData, 'INFO');
        return new Promise(function (resolve, reject) {
            _this.http2.post(_this.ptrGlobals.url_ws, testData, { headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded'), })
                .subscribe(function (res) {
                res1 = res;
                resolve(res);
                var alert = _this.alertCtrl.create({
                    title: 'RegUser ok',
                    subTitle: 'RegUser ok',
                    buttons: ['OK']
                });
                alert.present();
                _this.onAnadeLog(JSON.parse(res1), 'INFO');
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_TabLogin_TabLogin__["a" /* tabLogin */]);
            }, function (err) {
                var alert = _this.alertCtrl.create({
                    title: 'RegUser Error',
                    subTitle: 'RegUser Error',
                    buttons: ['OK']
                });
                alert.present();
                _this.onAnadeLog(err, ' | onRegUser' + ' | ERROR');
                reject(err);
            });
            _this.onAnadeLog("Close onRegUser", 'INFO');
        });
    };
    ClientMethodsProvider.prototype.format = function (valString) {
        if (!valString) {
            return '';
        }
        var val = valString.toString();
        var parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
        return parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.GROUP_SEPARATOR) + (!parts[1] ? '' : this.DECIMAL_SEPARATOR + parts[1]);
    };
    ;
    ClientMethodsProvider.prototype.unFormat = function (val) {
        if (!val) {
            return '';
        }
        val = val.replace(/^0+/, '');
        if (this.GROUP_SEPARATOR === ',') {
            return val.replace(/,/g, '');
        }
        else {
            return val.replace(/\./g, '');
        }
    };
    ;
    return ClientMethodsProvider;
}());
ClientMethodsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__Providers_globals__["c" /* Globals */],
        __WEBPACK_IMPORTED_MODULE_6__Providers_globals__["g" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_6__Providers_globals__["b" /* Cotiza */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], ClientMethodsProvider);

//# sourceMappingURL=client-methods.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickQuotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Providers_globals__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Providers_client_methods_client_methods__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TabLogin_TabLogin__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_throttleTime__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_throttleTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_throttleTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_fromEvent__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_fromEvent__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var QuickQuotePage = (function () {
    function QuickQuotePage(navCtrl, ptrGlobals, translateService, cotizador, app, Modal, ClientMethods) {
        this.navCtrl = navCtrl;
        this.ptrGlobals = ptrGlobals;
        this.translateService = translateService;
        this.cotizador = cotizador;
        this.app = app;
        this.Modal = Modal;
        this.ClientMethods = ClientMethods;
        this.inicial = '0';
        this.inicial2 = '0';
        this.firstName = '1';
        this.firstName2 = '1';
        this.totaltopay = '1';
        this.firstNameControl = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]();
        this.firstNameControl2 = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]();
        this.ClientMethods.onCotiza();
    }
    QuickQuotePage.prototype.ngOnInit = function () {
        var _this = this;
        this.firstNameControl.valueChanges
            .debounceTime(3500)
            .subscribe(function (newValue) {
            if (newValue != _this.firstName) {
                _this.firstName = newValue;
                _this.cotizador.Amount = newValue;
                _this.ClientMethods.onCotiza();
                _this.firstName2 = _this.cotizador.Received;
            }
        });
        this.firstNameControl2.valueChanges
            .debounceTime(3500)
            .subscribe(function (newValue) {
            if (newValue != _this.firstName2) {
                _this.firstName2 = newValue;
                _this.cotizador.Received = newValue;
                _this.ClientMethods.onCotizaInv();
                _this.firstName = _this.cotizador.Amount;
            }
        });
        __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].fromEvent(window, 'resize')
            .throttleTime(200)
            .subscribe(function (e) {
            _this.firstName += '*'; // change something to show it worked
        });
    };
    QuickQuotePage.prototype.onOpenModal = function () {
        var _this = this;
        var Senddata = { Country_Code: '' };
        var ModalCountries = this.Modal.create('ModalCountriesPage', { data: Senddata });
        ModalCountries.present();
        ModalCountries.onDidDismiss(function (data) { _this.ClientMethods.onCotiza(); });
    };
    QuickQuotePage.prototype.closeModal = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__TabLogin_TabLogin__["a" /* tabLogin */]);
    };
    QuickQuotePage.prototype.ngDoCheck = function () {
        if (this.firstName != this.cotizador.Amount) {
            this.firstName = this.ClientMethods.format(this.cotizador.Amount);
        }
        if (this.firstName2 != this.cotizador.Received) {
            this.firstName2 = this.ClientMethods.format(this.cotizador.Received);
            this.totaltopay = this.ClientMethods.format(this.cotizador.TotalCadINTER);
        }
    };
    return QuickQuotePage;
}());
QuickQuotePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-QuickQuote',template:/*ion-inline-start:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/QuickQuote/QuickQuote.html"*/'<ion-content>\n  <ion-grid style="background-color:#c6c3e1;"><!-- style="background-color:#CED8F6;"-->\n    <ion-row > \n      <ion-col col-3>\n            <img  src="./assets/imgs/logo.png"  width="60" height="40"  />\n      </ion-col>\n      <ion-col col-9>\n            <span class="title-center">{{"QqTitle" | translate }}</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid >\n    <ion-row > \n   \n      <ion-col col-4>\n          <img  src="./assets/imgs/CA.png" width="60" height="38" class="flags" />          \n          <ion-label style=" font-size: 20px; text-align: center; color: blue;" >CAD</ion-label>\n      </ion-col>\n      <ion-col col-8>\n          <ion-item >\n              <ion-label color="primary" style=" font-size: 20px;"  floating>{{"QqSendCad" | translate }}</ion-label>\n              <ion-input type=text [value]="firstName" style=" font-size: 25px;font-weight: bold;"  [formControl]="firstNameControl" ></ion-input> \n          </ion-item>\n      </ion-col>      \n    </ion-row>  \n    <ion-row > \n     \n      <ion-col col-4>\n          <img  src="http://www.prontoprontomoney.com/img/{{this.cotizador.Country_Code}}.png" width="60" height="38" class="flags" (click)="onOpenModal()"/> \n          <ion-label style=" font-size: 20px; text-align: center; color: blue;" >{{this.cotizador.Currency_Payment}}</ion-label>  \n      </ion-col>\n      <ion-col col-8>\n          \n          <ion-item >\n              <ion-label color="primary" style=" font-size: 20px;"  floating>{{"QqReceiver" | translate }}</ion-label>\n              <ion-input type=text [value]="firstName2" style=" font-size: 25px;font-weight: bold;"  [formControl]="firstNameControl2"  ></ion-input>   \n          </ion-item>\n      </ion-col>      \n    </ion-row>    \n \n    <ion-row >   \n      <ion-col col-12>\n        <ion-item >\n            <ion-label style="font-size: 20px;color:rgba(80, 142, 255, 0.645); text-align: center; " >{{"QqExchangerate" | translate }}</ion-label>\n            <ion-input style="font-size: 20px;color: black; text-align-last: right; font-weight: bold" disabled="true" [(ngModel)]="this.cotizador.ExchageRateCADvsLOC" ></ion-input>                  \n        </ion-item >  \n      </ion-col>\n    </ion-row>          \n    <ion-row > \n      <ion-col col-12>\n        <ion-item >\n            <ion-label style="font-size: 20px;color: rgba(80, 142, 255, 0.645);; text-align: center; " >{{"QqFee" | translate }}</ion-label>\n            <ion-input style="font-size: 20px;color: black; text-align-last: right; font-weight: bold" disabled="true" [(ngModel)]="this.cotizador.FeeINTER" ></ion-input>                  \n        </ion-item >  \n      </ion-col>\n    </ion-row>          \n    <ion-row > \n      <ion-col col-12>\n        <ion-item>\n            <ion-label style="font-size: 20px;color: blue; font-weight: bold " >{{"QqTotaltopay" | translate }}</ion-label>\n            <ion-input style="font-size: 25px;color: blue; text-align-last: right; font-weight: bold"  disabled="true" [value]="totaltopay" ></ion-input>   \n        </ion-item>      \n      </ion-col>\n    </ion-row>      \n    <button ion-button round icon-right block  class="btn-Continue center" (click)="closeModal()" ><!--(click)="onSave()"-->\n      {{"QqbtnContinue" | translate }}\n    </button>  \n    \n</ion-grid>    \n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ricaurtetrivino/Documents/2018/Branch/src/pages/QuickQuote/QuickQuote.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["c" /* Globals */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_2__Providers_globals__["b" /* Cotiza */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__Providers_client_methods_client_methods__["a" /* ClientMethodsProvider */]])
], QuickQuotePage);

//# sourceMappingURL=QuickQuote.js.map

/***/ })

},[236]);
//# sourceMappingURL=main.js.map