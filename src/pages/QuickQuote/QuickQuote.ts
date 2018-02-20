import { Component } from '@angular/core';
import { NavController, ModalController ,Modal,App} from 'ionic-angular';
import { Globals } from '../../Providers/globals';
import { Cotiza } from  '../../Providers/globals';
import 'rxjs/add/operator/map';
import { TranslateService } from '@ngx-translate/core';
import { ClientMethodsProvider } from '../../Providers/client-methods/client-methods';
import { tabLogin } from '../TabLogin/TabLogin';

import {FormControl} from '@angular/forms';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'page-QuickQuote',
  templateUrl: 'QuickQuote.html'
})
export class QuickQuotePage {
  inicial :any ='0';
  inicial2:any ='0';
  firstName        = '1';
  firstName2       = '1';
  totaltopay       = '1';
  firstNameControl = new FormControl();
  firstNameControl2 = new FormControl();  
  
  ngOnInit() {

    this.firstNameControl.valueChanges
      .debounceTime(3500)
      .subscribe(newValue => {
        
        if ( newValue != this.firstName )
        {
          this.firstName = newValue  
          this.cotizador.Amount = newValue;
          this.ClientMethods.onCotiza();
          this.firstName2 = this.cotizador.Received;
        }
            
      });

    this.firstNameControl2.valueChanges
      .debounceTime(3500)
      .subscribe(newValue => {       
        if ( newValue != this.firstName2  )
        {
          this.firstName2 = newValue          
          this.cotizador.Received = newValue;
          this.ClientMethods.onCotizaInv()
          this.firstName = this.cotizador.Amount;
        }
            });

    Observable.fromEvent(window, 'resize')
      .throttleTime(200)
      .subscribe(e => {
        this.firstName += '*';  // change something to show it worked
      });
  }    


  
  constructor(public navCtrl: NavController,  public ptrGlobals: Globals, public translateService: TranslateService,
              public cotizador:Cotiza,  private app: App,  private Modal:ModalController,  public ClientMethods:ClientMethodsProvider) {
    this.ClientMethods.onCotiza();
  } 
       
  onOpenModal() {      
    const Senddata = {Country_Code : ''};
    const ModalCountries : Modal = this.Modal.create('ModalCountriesPage',{ data: Senddata });
    ModalCountries.present();
    ModalCountries.onDidDismiss((data) => { this.ClientMethods.onCotiza()});
  }

  closeModal(){
    this.app.getRootNav().setRoot(tabLogin);
  }

  ngDoCheck() {

    if (this.firstName != this.cotizador.Amount){
      this.firstName = this.ClientMethods.format(this.cotizador.Amount)
    }
  
    if (this.firstName2 != this.cotizador.Received){
      this.firstName2   = this.ClientMethods.format(this.cotizador.Received)
      this.totaltopay   = this.ClientMethods.format(this.cotizador.TotalCadINTER)
    }
   }
    
}

