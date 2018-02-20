import { Component } from '@angular/core';
import { IonicPage,App, NavController, NavParams,ViewController } from 'ionic-angular';
import { Globals } from '../../Providers/globals';
import { Cotiza} from '../../Providers/globals';
import { SendMoney } from '../../Providers/globals';
import { Beneficiaries } from '../../Providers/globals'
import { NewWire } from '../../Providers/globals'
import { BeneficiariesEditPage } from '../../pages/beneficiaries-edit/beneficiaries-edit';
import { MethodsTokenProvider} from '../../Providers/methods-token/methods-token';
/**
 * Generated class for the ModalCountriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-beneficiaries',
  templateUrl: 'modal-beneficiaries.html',
})
export class ModalBeneficiariesPage {

  constructor(public navCtrl: NavController, public ptrGlobals: Globals,public navParams: NavParams,private View:ViewController,
      public ptrSendMoney:SendMoney, public ptrBeneficiario:Beneficiaries,
    public app:App,public MethodsToken: MethodsTokenProvider,public cotizador:Cotiza,public ptrNewWire:NewWire){
  
  }

  onCloseModal(){
    this.ptrSendMoney.booSelectEdit = '1';
    const data = {
      Country_Code : ''
    };
    this.View.dismiss(data);
  }

  onSave( Country_Code,Beneficiario,Receiverid,defaultBrach,banknumber){
    this.ptrSendMoney.LastCountry_Code    = Country_Code;
    this.cotizador.Country_Code           = Country_Code;
    this.ptrSendMoney.Name_Beneficiario   = Beneficiario;   
    this.ptrSendMoney.id_Beneficiario     = Receiverid;    
    this.ptrSendMoney.Name_Bank           = '';
    this.ptrSendMoney.Name_Payer          = '';
    this.ptrNewWire.receiverId            = Receiverid;
    this.ptrNewWire.BNK_DefaultBranchDeposit  = defaultBrach;
    this.ptrNewWire.BankAcNumber              = banknumber;    
    this.ptrNewWire.Country_Code              = Country_Code;    
    
    this.MethodsToken.onCotiza();
    this.onCloseModal();
  }

  onEdit(objBene){
    this.ptrSendMoney.booSelectEdit               = '1';
    this.ptrSendMoney.LastCountry_Code            = objBene.Country_Code;
    this.ptrSendMoney.Name_Beneficiario           = objBene.REC_FirstName+' '+objBene.REC_LastName1+' '+objBene.REC_LastName2;   
    this.ptrSendMoney.id_Beneficiario             = objBene.Receiver_id;
    this.ptrSendMoney.Name_Bank                   = objBene.BAN_Name; 

    this.ptrBeneficiario.AccountType              = objBene.AccountType
    this.ptrBeneficiario.AGP_Name                 = objBene.AGP_Name;
    this.ptrBeneficiario.AccountType              = objBene.AccountType;
    this.ptrBeneficiario.Agpayer_ID               = objBene.Agpayer_ID;
    this.ptrBeneficiario.BAN_AccNumber            = objBene.BAN_AccNumber;
    this.ptrBeneficiario.BAN_Name                 = objBene.BAN_Name;
    this.ptrBeneficiario.BNK_DefaultBranchDeposit = objBene.BNK_DefaultBranchDeposit;
    this.ptrBeneficiario.Bank_id                  = objBene.Bank_id;
    this.ptrBeneficiario.CTR_Name                 = objBene.CTR_Name;
    this.ptrBeneficiario.Country_Code             = objBene.Country_Code;
    this.ptrBeneficiario.PaymentMethodo           = objBene.PaymentMethodo;
    this.ptrBeneficiario.PaymentType              = objBene.PaymentType;
    this.ptrBeneficiario.REC_Address              = objBene.REC_Address;
    this.ptrBeneficiario.REC_City                 = objBene.REC_City;
    this.ptrBeneficiario.REC_Email                = objBene.REC_Email;
    this.ptrBeneficiario.REC_FirstName            = objBene.REC_FirstName;
    this.ptrBeneficiario.REC_IDNumber             = objBene.REC_IDNumber;
    this.ptrBeneficiario.REC_LastName1            = objBene.REC_LastName1;
    this.ptrBeneficiario.REC_LastName2            = objBene.REC_LastName2;
    this.ptrBeneficiario.REC_Phone1               = objBene.REC_Phone1;
    this.ptrBeneficiario.REC_State                = objBene.REC_State;
    this.ptrBeneficiario.REC_ZipCode              = objBene.REC_ZipCode;
    this.ptrBeneficiario.Receiver_id              = objBene.Receiver_id;
    this.cotizador.Amount                         = '1'
    this.ptrBeneficiario.VG_New                   = false
    this.onCloseModal();
    this.onOpenEdit();
  }
  
  onOpenEdit(){
    this.app.getRootNav().setRoot(BeneficiariesEditPage);
  }

}
