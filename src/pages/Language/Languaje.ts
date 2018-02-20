import { Component } from '@angular/core';
import { NavController,ViewController,App } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { tabLogin } from '../TabLogin/TabLogin';


@Component({
  selector: 'page-language',
  templateUrl: 'Language.html'
})
export class LanguagePage {

  constructor(public navCtrl: NavController,public viewCtrl:ViewController,public translateService: TranslateService,
    private app: App ) {}

  closeModal(){
    this.app.getRootNav().setRoot(tabLogin);
  }

  changeLanguage(langauge) {
         this.translateService.use(langauge);
         this.app.getRootNav().setRoot(tabLogin);
       //  this.navCtrl.push(LoginPage);
        window.localStorage.setItem( 'langauge', langauge);

      }
}
