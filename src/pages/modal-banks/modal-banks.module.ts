import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalBanksPage } from './modal-banks';

@NgModule({
  declarations: [
    ModalBanksPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalBanksPage),
  ],
})
export class ModalBanksPageModule {}
