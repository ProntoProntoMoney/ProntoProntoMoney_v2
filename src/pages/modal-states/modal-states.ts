import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Globals } from '../../Providers/globals';
import { ClientMethodsProvider } from '../../Providers/client-methods/client-methods';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-modal-states',
  templateUrl: 'modal-states.html',
})
export class ModalStatesPage {

  constructor(public navCtrl: NavController,public translateService: TranslateService, public navParams: NavParams,
              private View:ViewController,public ptrGlobals: Globals, public ClientMethods:ClientMethodsProvider) {
            //this.ClientMethods.onListStates('CA');   
  }

  onCloseModal(){
    const data = {
      State_Code : ''
    };
    this.View.dismiss(data);
  }

  ionViewWillLoad(){
    const data = this.navParams.get('data') 
    this.ClientMethods.onAnadeLog(data.State_Code,'INFO');
    this.ClientMethods.onListStates(data.State_Code); 
    
  }

  onSave( State_Name,State_Code){
    this.ptrGlobals.State_Name = State_Name;
    this.ptrGlobals.State_Code = State_Name;    
    this.onCloseModal();
  }
}
