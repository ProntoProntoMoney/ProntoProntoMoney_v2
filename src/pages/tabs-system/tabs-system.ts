import { Component } from '@angular/core';

import { App } from 'ionic-angular';
import { HelpPage } from '../help/help';
import { tabLogin } from '../TabLogin/TabLogin';
import { SendMoneyPage } from '../send-money/send-money';
import { BeneficiariesPage } from '../beneficiaries/beneficiaries';
import { MenuPage }  from '../menu/menu';

@Component({
  templateUrl: 'tabs-system.html'
})
export class TabsSystemPage {

  tab1Root = SendMoneyPage;
  tab2Root = HelpPage;
  tab3Root = BeneficiariesPage;
  tab4Root = MenuPage;
  constructor(private app: App) {
  }

  onclose(){
    this.app.getRootNav().setRoot(tabLogin)
  }
}