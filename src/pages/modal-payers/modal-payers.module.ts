import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPayersPage } from './modal-payers';

@NgModule({
  declarations: [
    ModalPayersPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPayersPage),
  ],
})
export class ModalPayersPageModule {}
