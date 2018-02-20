import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App,Modal ,ModalController} from 'ionic-angular';
import { Globals, Beneficiaries } from '../../Providers/globals';
import { SendMoney } from '../../Providers/globals';
import { NewWire } from '../../Providers/globals';
import { MethodsTokenProvider } from '../../Providers/methods-token/methods-token';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ModalBanksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-banks',
  templateUrl: 'modal-banks.html',
})
export class ModalBanksPage {

  constructor(public navCtrl: NavController, public ptrGlobals: Globals,public navParams: NavParams,private View:ViewController,
    public ptrSendMoney:SendMoney,public ptrNewWire:NewWire, public ptrMethodsTokenProvider: MethodsTokenProvider,public alertCtrl: AlertController, 
  public ptrBeneficiaries : Beneficiaries, public app:App,private Modal:ModalController,){

}

onCloseModal(){
  const data = {
    Bank_code : ''
  };
  this.View.dismiss(data);
}

  onSave( Bank_code,Bank_name,agpayer){
    this.ptrSendMoney.id_Bank   = Bank_code;
    this.ptrSendMoney.Name_Bank = Bank_name;  
    this.ptrNewWire.bankid      = Bank_code;
    this.ptrNewWire.AgPAyer_id  = agpayer;
    this.ptrNewWire.payermethod = 'DEP';
    //this.ptrNewWire.typeAcId    = 'SAV';
    //this.ptrNewWire.typeAcId    = 'SAV'; VA DENTRO DE PANTALLA DE SELECCION Y LLENADO DE CUENTA OJO POR DEFECTO
    if (this.ptrGlobals.IdentificacionObligatoria != '0'){
      this.ptrBeneficiaries.REC_IDNumber = this.ptrGlobals.IdentificacionObligatoria;
    }
    
    this.onOpenModal()
    this.onCloseModal()
   // this.app.getRootNav().setRoot(BankdepositaccountPage);
   
  }
  
  onOpenModal() {      
    const Senddata = {Country_Code : ''};
    const ModalBankaccount : Modal = this.Modal.create('ModalBankaccountPage',{ data: Senddata });
    ModalBankaccount.present();
  }
}