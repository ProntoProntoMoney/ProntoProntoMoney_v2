import { Component } from '@angular/core';
import { NavController,App,ViewController } from 'ionic-angular';
import { Globals } from '../../Providers/globals';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { tabLogin } from '../TabLogin/TabLogin';
import { ClientMethodsProvider } from '../../Providers/client-methods/client-methods';

@Component({
  selector: 'page-RecoveryPass',
  templateUrl: 'RecoveryPass.html'
})
export class RecoveryPassPage {

  constructor(public navCtrl: NavController,  public ptrGlobals: Globals,
              public viewCtrl:ViewController, public ClientMethods:ClientMethodsProvider,
              public alertCtrl: AlertController,private app: App) {

  }

  closeModal(){
    this.app.getRootNav().setRoot(tabLogin);
  }

 
}
