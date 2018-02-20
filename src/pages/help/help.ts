import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MethodsTokenProvider} from '../../Providers/methods-token/methods-token';
import { Help } from '../../Providers/globals';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public MethodsToken: MethodsTokenProvider,
    public alertCtrl: AlertController,   public ptrHelp:Help) {
  }


  onSave(){
   if (this.ptrHelp.textHelp != '' && this.ptrHelp.typehelp != ''){
    this.MethodsToken.onHelpSend();
   }
   else
   {
    let alert = this.alertCtrl.create({
      title: 'Help!',
      subTitle: 'completar data',
      buttons: ['OK']
    });
    alert.present();     
   }
    
   
  }
}
