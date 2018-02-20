import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Globals } from '../../Providers/globals';
import { Cotiza } from '../../Providers/globals';

/**
 * Generated class for the ModalCountriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-countries',
  templateUrl: 'modal-countries.html',
})
export class ModalCountriesPage {

  constructor(public navCtrl: NavController, public ptrGlobals: Globals,public navParams: NavParams,private View:ViewController,
      public cotizador:Cotiza){
  
  }

  onCloseModal(){
    const data = {
      Country_Code : ''
    };
    this.View.dismiss(data);
  }

  onSave( CountryName,Country_Code){
    this.cotizador.newBen.CountryName = CountryName;
    this.cotizador.Country_Code = Country_Code;  
    this.ptrGlobals.Country_Code = Country_Code;
    this.ptrGlobals.country_name = CountryName; 
    this.ptrGlobals.State_Name = '';
    this.ptrGlobals.State_Code = '';
    this.onCloseModal();
  }
}
