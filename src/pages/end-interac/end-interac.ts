import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { TabsSystemPage } from '../../pages/tabs-system/tabs-system';
import { TranslateService } from '@ngx-translate/core';
import { SendMoney } from '../../Providers/globals';
import { Cotiza,Globals } from '../../Providers/globals';
/**
 * Generated class for the EndInteracPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-end-interac',
  templateUrl: 'end-interac.html',
})
export class EndInteracPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App,public ptrGlobals:Globals,
              public translateService: TranslateService,public ptrSendMoney:SendMoney,
            public cotizador:Cotiza) {
  }

  onClose(){   
    this.ptrGlobals.booIniciaToken ='0';
    this.app.getRootNav().setRoot(TabsSystemPage);
  }

}
