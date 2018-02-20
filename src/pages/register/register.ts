import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController ,Modal } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { Globals } from '../../Providers/globals';
import { UserData } from '../../Providers/globals';
import { ClientMethodsProvider } from '../../Providers/client-methods/client-methods';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage  {
  public addDataForm:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public ptrGlobals: Globals,
              public formBuilder: FormBuilder, private Modal:ModalController,public ptrUserData: UserData,
              public ClientMethods:ClientMethodsProvider) {
                this.ptrGlobals.State_Code = 'QC';
                this.ptrGlobals.State_Name = 'QUEBEC';
                this.addDataForm = formBuilder.group({
                  Name            : ['', Validators.compose([Validators.required])],
                  LastName        : ['', Validators.compose([Validators.required])],
                  SecondLastName  : ['', Validators.compose([Validators.required])],
                  Profession      : ['', Validators.compose([Validators.required])],
                  Address         : ['', Validators.compose([Validators.required])],
                  City            : ['', Validators.compose([Validators.required])],
                  State           : ['', Validators.compose([Validators.required,this.onStates(this.ptrGlobals.State_Code)])],
                  ZipCode         : ['', Validators.compose([Validators.required,Validators.maxLength(6),Validators.minLength(6)])],
                  PhoneNumber     : ['', Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10)])], 
                  DateofBirth     : ['', Validators.compose([Validators.required])],
                  Email           : ['', Validators.compose([Validators.required,Validators.email])],
                  password        : ['', Validators.compose([Validators.required,Validators.minLength(6)])],
                  re_password     : ['', Validators.compose([Validators.required,this.equalto('password') ])]
                });
  }

  onSave()
  {
    this.ptrUserData.Name            = this.addDataForm.value.Name;
    this.ptrUserData.LastName        = this.addDataForm.value.LastName;
    this.ptrUserData.SecondLastName  = this.addDataForm.value.SecondLastName;
    this.ptrUserData.Profession      = this.addDataForm.value.Profession;
    this.ptrUserData.Address         = this.addDataForm.value.Address;
    this.ptrUserData.City            = this.addDataForm.value.City;
    this.ptrUserData.State           = this.ptrGlobals.State_Code;
    this.ptrUserData.ZipCode         = this.addDataForm.value.ZipCode;
    this.ptrUserData.PhoneNumber     = this.addDataForm.value.PhoneNumber;
    this.ptrUserData.DateofBirth     = this.addDataForm.value.DateofBirth;
    this.ptrUserData.Email           = this.addDataForm.value.Email;
    this.ptrUserData.password        = this.addDataForm.value.password;
    this.ClientMethods.onRegUser();
    this.addDataForm.reset();    
  }

  onClear(){
    this.addDataForm.value.Name      = '';
    this.addDataForm.value.LastName        = '';
    this.addDataForm.value.SecondLastName  = '';
    this.addDataForm.value.Profession      = '';
    this.addDataForm.value.Address         = '';
    this.addDataForm.value.City            = '';
    this.addDataForm.value.State           = '';
    this.addDataForm.value.ZipCode         = '';
    this.addDataForm.value.PhoneNumber     = '';
    this.addDataForm.value.DateofBirth     = '';
    this.addDataForm.value.Email           = '';
    this.addDataForm.value.password        = '';
    this.addDataForm.value.re_password     = '';
  }

  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
    
    let input = control.value;
    
    let isValid=control.root.value[field_name]==input
    if(!isValid)
    return { 'equalTo': {isValid} }
    else
    return null;
    };
    }

  onStates(field_name): ValidatorFn {
      return (control: AbstractControl): {[key: string]: any} => {
      
      let input = control.value;
      let isValid=input!='';
      if(!isValid)
      return { 'onStates': {isValid} }
      else
      return null;
      };
      }
    

  onOpenModal() {      
    const Senddata = {State_Code : 'CA'};
    const ModalStates : Modal = this.Modal.create('ModalStatesPage',{ data: Senddata });
    ModalStates.present();
  }


}
