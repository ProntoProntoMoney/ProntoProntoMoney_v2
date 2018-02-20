import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,App,ViewController} from 'ionic-angular';
import { NewWire } from '../../Providers/globals';
import { SendMoney } from '../../Providers/globals';
import { AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import 'rxjs/add/operator/map';
/**
/**
 * Generated class for the ModalBankaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-bankaccount',
  templateUrl: 'modal-bankaccount.html',
})
export class ModalBankaccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private ptrNewWire:NewWire,public alertCtrl:AlertController,
    public app:App,public ptrSendMoney:SendMoney,private View:ViewController, public translateService: TranslateService) {
  }


  ionViewWillLoad(){
    this.ptrNewWire.typeAcId = 'SAV'
  }
  
  onClose(){
    const data = {
      Bank_code : ''
    };
    this.View.dismiss(data);
  } 

  onSaveChecked(typeAccount){
    if (typeAccount == '' )
    {
      let alert = this.alertCtrl.create({
        title: 'datos obligatorios',
        subTitle: 'datos de typoe account obligatorios',
        buttons: ['OK']
      });
      alert.present();
    }
    else
    {
      this.ptrNewWire.typeAcId     = typeAccount; 
    }   
  }

  onSave(accountNumber){
    
    if (accountNumber == ''  )
    {
      let alert = this.alertCtrl.create({
        title: 'datos obligatorios',
        subTitle: 'datos de account number y typoe account obligatorios',
        buttons: ['OK']
      });
      alert.present();
    }
    else
    {
      this.ptrNewWire.payermethod = 'DEP';
      this.ptrNewWire.BankAcNumber = accountNumber;      
      this.onClose();
    }  
  
  }
}
