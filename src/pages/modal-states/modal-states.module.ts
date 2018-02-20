import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalStatesPage } from './modal-states';

@NgModule({
  declarations: [
    ModalStatesPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalStatesPage),
  ],
})
export class ModalStatesPageModule {}
