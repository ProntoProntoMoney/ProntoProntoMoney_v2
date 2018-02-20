import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/Login/login';
import { tabLogin } from '../pages/TabLogin/TabLogin';
import { LanguagePage } from '../pages/Language/Languaje';
import { QuickQuotePage } from '../pages/QuickQuote/QuickQuote';
import { RecoveryPassPage } from '../pages/RecoveryPass/RecoveryPass';
import { SendMoneyPage } from '../pages/send-money/send-money';
import { BeneficiariesPage } from '../pages/beneficiaries/beneficiaries';
import { HelpPage } from '../pages/help/help';
import { ProfilePage } from '../pages/profile/profile';
import { WireHistoryPage } from '../pages/wire-history/wire-history';
import { RegisterPage } from '../pages/register/register';
import { BeneficiariesEditPage } from '../pages/beneficiaries-edit/beneficiaries-edit';
import { SendWirePage } from '../pages/send-wire/send-wire';
import { EndEmailtransferPage } from '../pages/end-emailtransfer/end-emailtransfer';
import { EndInteracPage } from '../pages/end-interac/end-interac';
import { MenuPage } from '../pages/menu/menu';
import { TabsSystemPage } from '../pages/tabs-system/tabs-system';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Globals } from '../Providers/globals';
import { SendMoney } from '../Providers/globals';
import { Cotiza } from '../Providers/globals';
import { UserData } from '../Providers/globals';
import { Beneficiaries } from '../Providers/globals';
import { NewWire } from '../Providers/globals';
import { ClientMethodsProvider } from '../Providers/client-methods/client-methods';
import { MethodsTokenProvider } from '../Providers/methods-token/methods-token';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Help } from '../Providers/globals';
import { CurrencyPipe } from '@angular/common';

export function setTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    tabLogin,
    LoginPage,
    LanguagePage,
    QuickQuotePage,
    RecoveryPassPage,
    SendMoneyPage,
    BeneficiariesPage ,
    HelpPage,
    ProfilePage,
    WireHistoryPage,
    MenuPage,
    TabsSystemPage,
    RegisterPage,
    BeneficiariesEditPage,
    SendWirePage,
    EndEmailtransferPage,
    EndInteracPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule ,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (setTranslateLoader),
        deps: [HttpClient]
      }
    })
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    tabLogin,
    LoginPage,
    LanguagePage,
    QuickQuotePage,
    RecoveryPassPage,
    SendMoneyPage,
    BeneficiariesPage ,
    HelpPage,
    ProfilePage,
    WireHistoryPage,
    MenuPage,
    RegisterPage,
    TabsSystemPage,
    BeneficiariesEditPage,
    SendWirePage,
    EndEmailtransferPage,
    EndInteracPage
  ],
  providers: [
    StatusBar,
    CurrencyPipe,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Globals,
    SendMoney,
    Cotiza,
    UserData,
    ClientMethodsProvider,
    MethodsTokenProvider,
    Beneficiaries,
    NewWire,
    InAppBrowser,
    BeneficiariesEditPage,
    Help
  ]
})
export class AppModule {}
