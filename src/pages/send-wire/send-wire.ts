import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { FormBuilder} from '@angular/forms';
import { Globals } from '../../Providers/globals';
import { Cotiza} from '../../Providers/globals';
import { Beneficiaries } from '../../Providers/globals';
import { NewWire } from '../../Providers/globals';
import 'rxjs/add/operator/map';
import { MethodsTokenProvider} from '../../Providers/methods-token/methods-token';
import { TabsSystemPage } from '../../pages/tabs-system/tabs-system';
/**
 * Generated class for the BeneficiariesEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send-wire',
  templateUrl: 'send-wire.html',
})
export class SendWirePage {
  totaltopay        = '1';
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public ptrGlobals: Globals,public app:App,
    public formBuilder: FormBuilder, public MethodsToken: MethodsTokenProvider,
    public prtBeneficiaries : Beneficiaries, public cotizador:Cotiza,public ptrNewWire:NewWire ) {


      this.totaltopay = this.MethodsToken.format(this.cotizador.TotalCadINTER)

  }

  onClose(){
    this.app.getRootNav().setRoot(TabsSystemPage);
  }

  onSendWireEmail(){
    this.ptrNewWire.paymentMethod = 'EMAIL'
    this.MethodsToken.onSendWire();
  }
  onSendWireInter(){
    this.ptrNewWire.paymentMethod = 'INTER'
    this.MethodsToken.onSendWire();
  }  
}
