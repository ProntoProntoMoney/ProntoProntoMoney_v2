import { Component } from '@angular/core';
import { App, NavController} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import 'rxjs/add/operator/map';
import { RecoveryPassPage } from '../RecoveryPass/RecoveryPass';
import { Globals } from '../../Providers/globals';
import { Cotiza } from  '../../Providers/globals';
import { ClientMethodsProvider } from '../../Providers/client-methods/client-methods';
import { QuickQuotePage } from '../QuickQuote/QuickQuote';


@Component({
  selector: 'page-Login',
  templateUrl: 'Login.html'
})
export class LoginPage {
  
  constructor(public navCtrl: NavController,  public translateService: TranslateService,
              public ptrGlobals: Globals,     private app: App,
              public cotizador:Cotiza,        public ClientMethods:ClientMethodsProvider) {

                if (window.localStorage.getItem('Country_Code') == null)
                {}
                else{
                  this.cotizador.Country_Code =  window.localStorage.getItem('Country_Code');
                  //this.cotizador.Amount       =  window.localStorage.getItem('Amount');
                }                
                this.ClientMethods.onCotiza();

                this.ptrGlobals.user = 'ricaurte.trivino.r@gmail.com';
                this.ptrGlobals.password = '123456';

  }
  
  onRecoveryPass(){
    this.app.getRootNav().setRoot(RecoveryPassPage);
  }
  
  onclick2(){
    this.navCtrl.push(QuickQuotePage)
  }

  onchange(){
    console.log(this.cotizador.ExchageRateCADvsLOC);
    console.log(this.cotizador.Currency_Payment);
  }
}

  



