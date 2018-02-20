import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { tabLogin } from './TabLogin';

@NgModule({
  declarations: [
  //  tabLogin,
  ],
  imports: [
    IonicPageModule.forChild(tabLogin),
  ],
})
export class TabsPageModule {}