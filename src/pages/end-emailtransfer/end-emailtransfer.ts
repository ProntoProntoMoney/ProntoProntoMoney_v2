import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsSystemPage } from '../../pages/tabs-system/tabs-system';
import { TranslateService } from '@ngx-translate/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Globals } from '../../Providers/globals';
/**
 * Generated class for the EndEmailtransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-end-emailtransfer',
  templateUrl: 'end-emailtransfer.html',
})
export class EndEmailtransferPage {

  constructor(public app:App,public translateService: TranslateService,private iab: InAppBrowser,
              public navCtrl: NavController, public navParams: NavParams,public ptrGlobals:Globals) {
  }

  onUrlOpen(url){
    const browser = this.iab.create(url,'_blank', 'location=yes');
    browser.show()
  }
  onClose(){
    this.ptrGlobals.booIniciaToken ='0';
    this.app.getRootNav().setRoot(TabsSystemPage);
  }

}
