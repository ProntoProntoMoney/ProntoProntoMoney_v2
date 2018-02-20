import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalBeneficiariesPage } from './modal-beneficiaries';

@NgModule({
  declarations: [
    ModalBeneficiariesPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalBeneficiariesPage),
  ],
})
export class ModalBeneficiariesPageModule {}
