import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickQuotePage } from './QuickQuote';

@NgModule({
  declarations: [
   // QuickQuotePage,
  ],
  imports: [
    IonicPageModule.forChild(QuickQuotePage),
  ],
})
export class QuickQuotePageModule {}