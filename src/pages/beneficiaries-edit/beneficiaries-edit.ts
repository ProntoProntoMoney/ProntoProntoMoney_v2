import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,App ,Modal } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { Globals,SendMoney } from '../../Providers/globals';
import { Beneficiaries } from '../../Providers/globals';
import 'rxjs/add/operator/map';
import { MethodsTokenProvider} from '../../Providers/methods-token/methods-token';
import { TabsSystemPage } from '../../pages/tabs-system/tabs-system';
import { AlertController } from 'ionic-angular';
import { Cotiza,NewWire} from '../../Providers/globals';
/**
 * Generated class for the BeneficiariesEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beneficiaries-edit',
  templateUrl: 'beneficiaries-edit.html',
})
export class BeneficiariesEditPage {
  public addDataForm:FormGroup;
  edit :any=true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public ptrGlobals: Globals,public app:App,
    public formBuilder: FormBuilder, private Modal:ModalController,public MethodsToken: MethodsTokenProvider,
    public prtBeneficiaries : Beneficiaries ,public alertCtrl: AlertController,public ptrSendMoney: SendMoney,
    public cotizador:Cotiza,public ptrNewWire:NewWire) {

      this.ptrGlobals.country_name = this.prtBeneficiaries.CTR_Name;
      this.ptrGlobals.Country_Code = this.prtBeneficiaries.Country_Code;      
      this.ptrGlobals.State_Name   =  this.prtBeneficiaries.REC_State;
      this.ptrGlobals.State_Code   =  this.prtBeneficiaries.REC_State;

      this.MethodsToken.onAnadeLog(this.ptrGlobals.Country_Code+' '+this.ptrGlobals.State_Name,'INFO');
      
      this.addDataForm = formBuilder.group({
        REC_FirstName   : [this.prtBeneficiaries.REC_FirstName, Validators.compose([Validators.required])],
        REC_LastName1   : [this.prtBeneficiaries.REC_LastName1, Validators.compose([Validators.required])],
        REC_LastName2   : [this.prtBeneficiaries.REC_LastName2, Validators.compose([Validators.required])],
        Country_Code    : [this.prtBeneficiaries.Country_Code, Validators.compose([Validators.required,this.onStates(this.ptrGlobals.Country_Code)])],
        REC_Address     : [this.prtBeneficiaries.REC_Address, Validators.compose([Validators.required])],
        REC_City        : [this.prtBeneficiaries.REC_City, Validators.compose([Validators.required])],
        REC_State       : [this.prtBeneficiaries.REC_State, Validators.compose([Validators.required,this.onStates(this.ptrGlobals.State_Code)])],
        REC_ZipCode     : [this.prtBeneficiaries.REC_ZipCode, Validators.compose([Validators.required,Validators.maxLength(6),Validators.minLength(6)])],
        REC_Phone1      : [this.prtBeneficiaries.REC_Phone1, Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10)])],
        REC_Email       : [this.prtBeneficiaries.REC_Email, Validators.compose([Validators.required,Validators.email])],
        REC_IDNumber    : [this.prtBeneficiaries.REC_IDNumber,Validators.compose([this.onAsignaid(this.prtBeneficiaries.REC_IDNumber)])],
        REC_WirePropuse : [this.prtBeneficiaries.REC_WirePropuse,Validators.compose([this.onAsignapro(this.prtBeneficiaries.REC_WirePropuse)])]
      });
      
  }

  onAsignaid(asigna){
    return (control: AbstractControl): {[key: string]: any} => {

    this.prtBeneficiaries.REC_IDNumber = control.value; 
   
    let isValid=true;
    if(!isValid)
        return { 'onAsignaid': {isValid} }
        else
        return null;
    };
  }
  
  onAsignapro(asigna){
    return (control: AbstractControl): {[key: string]: any} => {

    this.prtBeneficiaries.REC_WirePropuse = control.value; 
    
    let isValid=true;
    if(!isValid)
        return { 'onAsignapro': {isValid} }
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
      const Senddata = {Country_Code : ''};
      const ModalCountries : Modal = this.Modal.create('ModalCountriesPage',{ data: Senddata });
      ModalCountries.present();
    }

    onOpenModalStates() {      
      const Senddata = {State_Code : this.ptrGlobals.Country_Code};
      const ModalStates : Modal = this.Modal.create('ModalStatesPage',{ data: Senddata });
      ModalStates.present();  
    }    

  onClose(){
    this.app.getRootNav().setRoot(TabsSystemPage);        
  }

  onsave()
  {
    if (this.ptrGlobals.Country_Code == 'BR' || this.ptrGlobals.Country_Code == 'VE')
    {
      if ( this.prtBeneficiaries.REC_IDNumber == '' || this.prtBeneficiaries.REC_WirePropuse == '')
      {
        let alert = this.alertCtrl.create({
          title: 'datos obligatorios',
          subTitle: 'datos de id numer y propuse obligatorios',
          buttons: ['OK']
        });
        alert.present();
      }
      else
      {
        this.prtBeneficiaries.REC_FirstName  = this.addDataForm.value.REC_FirstName; 
        this.prtBeneficiaries.REC_LastName1  = this.addDataForm.value.REC_LastName1; 
        this.prtBeneficiaries.REC_LastName2  = this.addDataForm.value.REC_LastName2; 
        this.prtBeneficiaries.Country_Code   = this.ptrGlobals.Country_Code; 
        this.prtBeneficiaries.REC_State      = this.ptrGlobals.State_Code; 
        this.prtBeneficiaries.REC_City       = this.addDataForm.value.REC_City;
        this.prtBeneficiaries.REC_Address    = this.addDataForm.value.REC_Address;
        this.prtBeneficiaries.REC_Phone1     = this.addDataForm.value.REC_Phone1;
        this.prtBeneficiaries.REC_ZipCode    = this.addDataForm.value.REC_ZipCode;
        this.prtBeneficiaries.REC_Email      = this.addDataForm.value.REC_Email;
        this.prtBeneficiaries.REC_IDNumber   = this.addDataForm.value.REC_IDNumber; 
        this.prtBeneficiaries.REC_WirePropuse= this.addDataForm.value.REC_WirePropuse; 

        this.ptrSendMoney.LastCountry_Code    = this.prtBeneficiaries.Country_Code;
        this.cotizador.Country_Code           = this.prtBeneficiaries.Country_Code;
        this.ptrSendMoney.Name_Beneficiario   = this.addDataForm.value.REC_FirstName +' '+ this.addDataForm.value.REC_LastName1+' '+ this.addDataForm.value.REC_LastName2;   
        this.ptrSendMoney.id_Beneficiario     = this.addDataForm.value.REC_IDNumber;    
        this.ptrSendMoney.Name_Bank           = '';
        this.ptrSendMoney.Name_Payer          = '';
        this.ptrNewWire.receiverId            = this.prtBeneficiaries.Receiver_id;
        this.ptrNewWire.BNK_DefaultBranchDeposit  = this.addDataForm.value.BNK_DefaultBranchDeposit;
        this.ptrNewWire.BankAcNumber              = this.addDataForm.value.BankAcNumber;    
        this.ptrNewWire.Country_Code              = this.prtBeneficiaries.Country_Code; 
   
        
        console.log(this.prtBeneficiaries.VG_New);
        if (this.prtBeneficiaries.VG_New  == false){
          this.MethodsToken.onUpdateBeneficiaries();
        }
        else
        {
          this.MethodsToken.onRegBeneficiaries();
        }
        
        this.MethodsToken.onCotiza();
       this.onClose()

      }  
    } 
    else 
    {
      this.prtBeneficiaries.REC_FirstName  = this.addDataForm.value.REC_FirstName; 
      this.prtBeneficiaries.REC_LastName1  = this.addDataForm.value.REC_LastName1; 
      this.prtBeneficiaries.REC_LastName2  = this.addDataForm.value.REC_LastName2; 
      this.prtBeneficiaries.Country_Code   = this.ptrGlobals.Country_Code; 
      this.prtBeneficiaries.REC_State      = this.ptrGlobals.State_Code; 
      this.prtBeneficiaries.REC_City       = this.addDataForm.value.REC_City;
      this.prtBeneficiaries.REC_Address    = this.addDataForm.value.REC_Address;
      this.prtBeneficiaries.REC_Phone1     = this.addDataForm.value.REC_Phone1;
      this.prtBeneficiaries.REC_ZipCode    = this.addDataForm.value.REC_ZipCode;
      this.prtBeneficiaries.REC_Email      = this.addDataForm.value.REC_Email;
      this.prtBeneficiaries.REC_IDNumber   = this.addDataForm.value.REC_IDNumber; 
      this.prtBeneficiaries.REC_WirePropuse= this.addDataForm.value.REC_WirePropuse; 

      this.ptrSendMoney.LastCountry_Code    = this.prtBeneficiaries.Country_Code;
      this.cotizador.Country_Code           = this.prtBeneficiaries.Country_Code;
      this.ptrSendMoney.Name_Beneficiario   = this.addDataForm.value.REC_FirstName + ' '+ this.addDataForm.value.REC_LastName1+ ' '+this.addDataForm.value.REC_LastName2;   
      this.ptrSendMoney.id_Beneficiario     = this.addDataForm.value.REC_IDNumber;    
      this.ptrSendMoney.Name_Bank           = '';
      this.ptrSendMoney.Name_Payer          = '';
      this.ptrNewWire.receiverId            = this.prtBeneficiaries.Receiver_id; 
      this.ptrNewWire.BNK_DefaultBranchDeposit  = this.addDataForm.value.BNK_DefaultBranchDeposit;
      this.ptrNewWire.BankAcNumber              = this.addDataForm.value.BankAcNumber;    
      this.ptrNewWire.Country_Code              = this.prtBeneficiaries.Country_Code; 
      

   console.log(this.prtBeneficiaries.VG_New);
   
      if (this.prtBeneficiaries.VG_New  == false){
        this.MethodsToken.onUpdateBeneficiaries();
      }
      else
      {
        this.MethodsToken.onRegBeneficiaries();
      }
        this.MethodsToken.onCotiza();
        this.onClose()
     
    }
  }

}
