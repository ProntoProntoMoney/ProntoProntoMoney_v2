import { Component } from '@angular/core';
import { IonicPage, App, NavController,ModalController, Modal} from 'ionic-angular';
import { Globals } from '../../Providers/globals';
import { Cotiza,NewWire } from '../../Providers/globals';
import { SendMoney } from '../../Providers/globals';
import { TranslateService } from '@ngx-translate/core';
import { MethodsTokenProvider} from '../../Providers/methods-token/methods-token';
import { SendWirePage } from '../send-wire/send-wire';
import { AlertController } from 'ionic-angular';
import { Beneficiaries } from '../../Providers/globals';
import {FormControl} from '@angular/forms';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';


@IonicPage()
@Component({
  selector: 'page-send-money',
  templateUrl: 'send-money.html',
})
export class SendMoneyPage {
  promocode         = '';
  valorold          = '';
  inicial :any      = '0';
  inicial2:any      = '0';
  firstName         = '1';
  firstName2        = '1';
  totaltopay        = '1';
  firstNameControl  = new FormControl();
  firstNameControl2 = new FormControl();  
  promocodeControl  = new FormControl();
  buttonColor: string = '#eaeaf0'; //Default Color

  ngOnInit() {

    this.promocodeControl.valueChanges
    .debounceTime(3500)
    .subscribe(newValue => {
      this.promocode = newValue
        this.cotizador.PromotionCode = this.promocode ;
        this.MethodsToken.onCotiza()
    } 
  );


 this.firstNameControl.valueChanges
      .debounceTime(2000)
      .subscribe(newValue => {      
        
        if ( newValue != this.firstName )
        {
          this.cotizador.Amount = newValue;
          this.MethodsToken.onCotiza();
          this.firstName = newValue
          this.firstName2 = this.cotizador.Received;
        }
            
      });

    this.firstNameControl2.valueChanges
      .debounceTime(2000)
      .subscribe(newValue => {      

        if ( newValue != this.firstName2  )
        {
          for (var i = 0; i < (newValue.length) ; i++) {          
          newValue = newValue.replace(",","")
          }
          this.cotizador.Received =  newValue;
          console.log(this.cotizador.Received);
          this.cotizador.ErrorPromo         = '0';
          this.MethodsToken.onCotizaInv()
          //this.firstName2 = newValue
          this.firstName = this.cotizador.Amount;
        }
       
      });

    
      Observable.fromEvent(window, 'resize')
      .throttleTime(200)
      .subscribe(e => {
        this.firstName += '*';  // change something to show it worked
      });
  }    


  constructor(public navCtrl: NavController,public ptrGlobals:Globals,public ptrSendMoney:SendMoney,
    public translateService: TranslateService,private Modal:ModalController,public cotizador:Cotiza,
    public MethodsToken: MethodsTokenProvider,public app:App,public alertCtrl: AlertController,
    public Beneficiaries:Beneficiaries,public ptrNewWire :NewWire){ 

     
      if ( this.ptrSendMoney.booSelectEdit == '0' ){
        
        this.ptrGlobals.booIniciaToken ='0';
        this.MethodsToken.onLastWireSend();     
        this.ptrSendMoney.booSelectEdit = '0';        
      }

      if (this.ptrGlobals.booIniciaToken != '0')
      {
        
      this.MethodsToken.onListReceivers();
      this.MethodsToken.onListBanks();
      this.MethodsToken.onListPayers();      
      }
     }

     ngDoCheck() { 

      if (this.firstName != this.cotizador.Amount){
         this.firstName =  this.MethodsToken.format(this.cotizador.Amount)
      }
    
      if (this.firstName2 != this.cotizador.Received){
          this.firstName2 = this.MethodsToken.format(this.cotizador.Received)
          this.totaltopay = this.MethodsToken.format(this.cotizador.TotalCadINTER)
      }

    }
  onOpenModal() {      
    this.MethodsToken.onListReceivers();
    const Senddata = {Country_Code : ''};
    const ModalBeneficiaries : Modal = this.Modal.create('ModalBeneficiariesPage',{ data: Senddata });
    ModalBeneficiaries.present();
  }

  onOpenModalBanks(){
    this.buttonColor = '#E5E7E9';    
    this.ptrNewWire.payermethod == 'DEP';
    if ( this.ptrNewWire.Country_Code == 'EC' ) {
      let alert = this.alertCtrl.create({
      title: this.translateService.instant('IEtitulo'),
      inputs: [
        {
          name:  this.translateService.instant('IE'),
          placeholder:  this.translateService.instant('IEtitulo')
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {

          }
        },
        {
          text: 'Add',
          handler: data => {
            if (data.identifica !='') {
              this.ptrGlobals.IdentificacionObligatoria =data.identifica;
              this.MethodsToken.onListBanks();
              this.ptrSendMoney.Name_Bank = '';
              this.ptrSendMoney.Name_Payer = '';    
              this.Beneficiaries.Country_Code = this.ptrNewWire.Country_Code;
              const Senddata = {Bank_code : ''};
              const ModalBanks : Modal = this.Modal.create('ModalBanksPage',{ data: Senddata });
              ModalBanks.present();    
            } else {
              return false;
            }
          }
        }
      ]
    });
    alert.present(); 
    }
    else
    {
      this.ptrGlobals.IdentificacionObligatoria ='0';
      this.MethodsToken.onListBanks();
      this.ptrSendMoney.Name_Bank = '';
      this.ptrSendMoney.Name_Payer = '';    
      const Senddata = {Bank_code : ''};
      const ModalBanks : Modal = this.Modal.create('ModalBanksPage',{ data: Senddata });
      ModalBanks.present();    
    }
  }    


  onOpenModalPayers(){
    this.buttonColor = '#E5E7E9';
    this.MethodsToken.onListPayers();
    this.ptrSendMoney.Name_Bank = '';
    this.ptrSendMoney.Name_Payer = '';
    const Senddata = {Payer_code : ''};
    const ModalPayer : Modal = this.Modal.create('ModalPayersPage',{ data: Senddata });
    ModalPayer.present();    
  }    

  onSave(){
    console.log(this.cotizador.Amount);
    
    if ( this.ptrSendMoney.Name_Bank != '' || this.ptrSendMoney.Name_Payer != '' && this.cotizador.Amount != '1') { //|| this.ptrSendMoney.Name_Bank != undefined || this.ptrSendMoney.Name_Payer != undefined
      this.app.getRootNav().setRoot(SendWirePage);
    }
    else
    { 
      let alert = this.alertCtrl.create({
        title: this.translateService.instant('ErrorBanksTitle') ,
        subTitle: this.translateService.instant('ErrorBanksText') ,
        buttons: ['OK']
        });
        alert.present();      
    }  
  }

}
