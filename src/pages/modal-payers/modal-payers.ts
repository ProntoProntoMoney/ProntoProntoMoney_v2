import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Globals } from '../../Providers/globals';
import { SendMoney } from '../../Providers/globals';
import { Cotiza } from '../../Providers/globals';
import { NewWire } from '../../Providers/globals';
import { MethodsTokenProvider } from '../../Providers/methods-token/methods-token';
/**
 * Generated class for the ModalPayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-payers',
  templateUrl: 'modal-payers.html',
})
export class ModalPayersPage {

  constructor(public navCtrl: NavController, public ptrGlobals: Globals,public navParams: NavParams,private View:ViewController,
    public ptrSendMoney:SendMoney,public cotizador:Cotiza,public ptrNewWire:NewWire, public ptrMethodsTokenProvider: MethodsTokenProvider){

}

onCloseModal(){
  const data = {
    Payer_code : ''
  };
  this.View.dismiss(data);
}

onSave( Payer_code,Payer_name,Country_Code){
  this.ptrSendMoney.id_Payer    = Payer_code;
  this.ptrSendMoney.Name_Payer  = Payer_name;  
  //this.cotizador.Country_Code   = Country_Code;  
  this.ptrGlobals.Country_Code  = Country_Code;
  this.ptrNewWire.AgPAyer_id    = Payer_code;
  this.ptrNewWire.bankid        = '0';
  this.ptrNewWire.payermethod   = 'AGE';
  
  this.onCloseModal();
}
}