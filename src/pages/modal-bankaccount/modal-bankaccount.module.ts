import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalBankaccountPage } from './modal-bankaccount';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ModalBankaccountPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalBankaccountPage),
    TranslateModule.forChild()
  ],
  exports:[
    ModalBankaccountPage
  ]
})
export class ModalBankaccountPageModule {}
