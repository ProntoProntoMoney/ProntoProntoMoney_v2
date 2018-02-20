import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { tabLogin } from '../pages/TabLogin/TabLogin';
import { Globals } from '../Providers/globals';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = tabLogin;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, translate: TranslateService,
    public ptrGlobals: Globals,public http: HttpClient,) {
    
    if (window.localStorage.getItem('langauge') == null)
    {
      if (window.navigator.language.includes("en"))
      {
        translate.setDefaultLang('en');
      }
      else if (window.navigator.language.includes("fr"))
      {
        translate.setDefaultLang('fr');
      }
      else if (window.navigator.language.includes("es"))
      {
        translate.setDefaultLang('es')
      }
      else
      {
        translate.setDefaultLang('en')
      }      
    }
    else{
      translate.setDefaultLang(window.localStorage.getItem('langauge'));
    }                
    platform.ready().then(() => {
    statusBar.styleDefault();
    splashScreen.hide();
    });
  }         
}
