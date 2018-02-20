import { Component } from '@angular/core';
import { LanguagePage } from '../Language/Languaje';
import { QuickQuotePage } from '../QuickQuote/QuickQuote';
import { LoginPage } from '../Login/login';
import { Globals } from '../../Providers/globals';
import { TranslateService } from '@ngx-translate/core';
import { RegisterPage } from '../register/register';

@Component({
  templateUrl: 'TabLogin.html'
})
export class tabLogin {

  tab1Root = LoginPage;
  tab2Root = QuickQuotePage;
  tab3Root = RegisterPage;
  tab4Root = LanguagePage;  

  idioms: any[] = [];

  constructor(public ptrGlobals: Globals,public translateService: TranslateService) {
    this.idioms = [
      {
        value: 'es',
        label: 'Español'
      },
      {
        value: 'en',
        label: 'Ingles'
      },
      {
        value: 'fr',
        label: 'Frances'
      }
    ];
  }
}
