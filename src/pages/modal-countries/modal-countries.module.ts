import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCountriesPage } from './modal-countries';

@NgModule({
  declarations: [
    ModalCountriesPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCountriesPage),
  ],
})
export class ModalCountriesPageModule {}
