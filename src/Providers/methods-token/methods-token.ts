import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { App } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Globals,Help ,UserData} from '../../Providers/globals';
import { Cotiza } from '../../Providers/globals';
import { Beneficiaries } from '../../Providers/globals';
import { NewWire } from '../../Providers/globals';
import { SendMoney } from '../../Providers/globals';
import { tabLogin } from '../../pages/TabLogin/TabLogin';
import { AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EndEmailtransferPage} from '../../pages/end-emailtransfer/end-emailtransfer';
import { EndInteracPage } from '../../pages/end-interac/end-interac';
import { TranslateService } from '@ngx-translate/core';

/*
  Generated class for the MethodsTokenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MethodsTokenProvider {
  DECIMAL_SEPARATOR=".";
  GROUP_SEPARATOR=",";

  constructor(public http: Http,public http2: HttpClient,public ptrGlobals: Globals,public ptrSendMoney:SendMoney,
              public ptrBeneficiaries:Beneficiaries,private app: App,public cotizador:Cotiza,public alertCtrl: AlertController, 
              public ptrNewWire : NewWire,private iab: InAppBrowser,public ptrHelp:Help,public ptrUserData:UserData,
              public translateService: TranslateService,) {
  }

/* *****  ANADELOG *****/

onAnadeLog(data,tipoMsn){
  if (this.ptrGlobals.booAnadelog == '1'){
  console.log('*** '+new Date().getDate().toString()+'/'+ new Date().getMonth().toString() +'/'+new Date().getFullYear().toString() +' '+ 
              new Date().getHours().toString()+':'+new Date().getMinutes().toString()+':'+new Date().getSeconds().toString()+' | '+tipoMsn+
            ' | '+data+' *** ')
  }
}
  

  onLastWireSend()
  {
    this.onAnadeLog("Open onLastWireSend "+this.ptrGlobals.token,'INFO');
    var testData = "comando=LASTWIRESEND&data=&token="+this.ptrGlobals.token;
    this.onAnadeLog(testData,'INFO');
    var res1:any;
    
    return new Promise((resolve, reject) => 
    {
      this.http2.post( this.ptrGlobals.url_ws, testData, 
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      })
      .subscribe(res => 
      { 
        resolve(res);
        res1=res;         //probar el ERROR DEL STATUS PARA NO PASAR POR ERRORES
        this.onAnadeLog('onLastWireSend'+res,'INFO');

        if ( JSON.parse(res1).status == 'ERROR'){
          if (JSON.parse(res1).mensaje == '9994' ) {
            this.onAnadeLog(JSON.parse(res1).status+ ' '+JSON.parse(res1).mesaje,' | onLastWireSend'+' | ERROR');
            this.app.getRootNav().setRoot(tabLogin);
          }
          else if (JSON.parse(res1).mensaje == '9994' ) {
            this.onAnadeLog(JSON.parse(res1).status+ ' '+JSON.parse(res1).mesaje,' | onLastWireSend'+' | ERROR');
            //creabeneficiarios  a pantalla 
          }
        }
        else
        {
        this.ptrGlobals.booIniciaToken ='0';
          
        this.ptrSendMoney.LastCountry_Code  = JSON.parse(res1).dato.Country_Code;
        this.ptrSendMoney.Name_Beneficiario = JSON.parse(res1).dato.REC_FirstName+' '+
                                              JSON.parse(res1).dato.REC_LastName1+' '+
                                              JSON.parse(res1).dato.REC_LastName2;
        this.cotizador.Country_Code               = this.ptrSendMoney.LastCountry_Code;         
        this.ptrSendMoney.Name_Bank               = JSON.parse(res1).dato.BAN_Name;        
        this.ptrBeneficiaries.Receiver_id         = JSON.parse(res1).dato.Receiver_id; 
        this.ptrNewWire.receiverId                = JSON.parse(res1).dato.Receiver_id;
        this.ptrNewWire.BNK_DefaultBranchDeposit  = JSON.parse(res1).dato.BNK_DefaultBranchDeposit;
        this.ptrNewWire.BankAcNumber              = JSON.parse(res1).dato.BAN_AccNumber;    
        this.ptrNewWire.Country_Code              = JSON.parse(res1).dato.Country_Code;    
        this.ptrNewWire.bankid                    = JSON.parse(res1).dato.Bank_id;  
        this.ptrNewWire.AgPAyer_id                = JSON.parse(res1).dato.Agpayer_ID;
        this.ptrNewWire.typeAcId                  = JSON.parse(res1).dato.AccountType;
        this.ptrNewWire.payermethod               = JSON.parse(res1).dato.PaymentType;

        this.ptrSendMoney.Name_Bank           = '';
        this.ptrSendMoney.Name_Payer          = '';
        
        this.onAnadeLog('ptrNewWire'+this.ptrNewWire,'INFO');
        this.onListReceivers();

        this.onCotiza();
        }                                            
      }, (err) => 
      {
        this.onAnadeLog(err,' | onLastWireSend '+' | ERROR');
        reject(err);
        
      });
      this.onAnadeLog("Close onLastWireSend ",'INFO');
    });
  }  

  onListReceivers()
  {
    this.ptrSendMoney.lstBeneficiaries='';
    this.onAnadeLog("Open onListReceivers "+this.ptrGlobals.token,'INFO');
    var testData = "comando=LISTRECEIVERS&data=&token="+this.ptrGlobals.token;
    this.onAnadeLog(testData,'INFO');
    var res1:any;
    return new Promise((resolve, reject) => 
    {
      this.http2.post( this.ptrGlobals.url_ws, testData, 
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      })
      .subscribe(res => 
      { 
        resolve(res);
        res1=res;    
        this.ptrSendMoney.lstBeneficiaries=JSON.parse(res1);
        var i = 0;
        do {
            if(this.ptrNewWire.receiverId == this.ptrSendMoney.lstBeneficiaries[i].Receiver_id)
            {
             
              this.ptrBeneficiaries.AccountType              = this.ptrSendMoney.lstBeneficiaries[i].AccountType
              this.ptrBeneficiaries.AGP_Name                 = this.ptrSendMoney.lstBeneficiaries[i].AGP_Name;
              this.ptrBeneficiaries.AccountType              = this.ptrSendMoney.lstBeneficiaries[i].AccountType;
              this.ptrBeneficiaries.Agpayer_ID               = this.ptrSendMoney.lstBeneficiaries[i].Agpayer_ID;
              this.ptrBeneficiaries.BAN_AccNumber            = this.ptrSendMoney.lstBeneficiaries[i].BAN_AccNumber;
              this.ptrBeneficiaries.BAN_Name                 = this.ptrSendMoney.lstBeneficiaries[i].BAN_Name;
              this.ptrBeneficiaries.BNK_DefaultBranchDeposit = this.ptrSendMoney.lstBeneficiaries[i].BNK_DefaultBranchDeposit;
              this.ptrBeneficiaries.Bank_id                  = this.ptrSendMoney.lstBeneficiaries[i].Bank_id;
              this.ptrBeneficiaries.CTR_Name                 = this.ptrSendMoney.lstBeneficiaries[i].CTR_Name;
              this.ptrBeneficiaries.Country_Code             = this.ptrSendMoney.lstBeneficiaries[i].Country_Code;
              this.ptrBeneficiaries.PaymentMethodo           = this.ptrSendMoney.lstBeneficiaries[i].PaymentMethodo;
              this.ptrBeneficiaries.PaymentType              = this.ptrSendMoney.lstBeneficiaries[i].PaymentType;
              this.ptrBeneficiaries.REC_Address              = this.ptrSendMoney.lstBeneficiaries[i].REC_Address;
              this.ptrBeneficiaries.REC_City                 = this.ptrSendMoney.lstBeneficiaries[i].REC_City;
              this.ptrBeneficiaries.REC_Email                = this.ptrSendMoney.lstBeneficiaries[i].REC_Email;
              this.ptrBeneficiaries.REC_FirstName            = this.ptrSendMoney.lstBeneficiaries[i].REC_FirstName;
              this.ptrBeneficiaries.REC_IDNumber             = this.ptrSendMoney.lstBeneficiaries[i].REC_IDNumber;
              this.ptrBeneficiaries.REC_LastName1            = this.ptrSendMoney.lstBeneficiaries[i].REC_LastName1;
              this.ptrBeneficiaries.REC_LastName2            = this.ptrSendMoney.lstBeneficiaries[i].REC_LastName2;
              this.ptrBeneficiaries.REC_Phone1               = this.ptrSendMoney.lstBeneficiaries[i].REC_Phone1;
              this.ptrBeneficiaries.REC_State                = this.ptrSendMoney.lstBeneficiaries[i].REC_State;
              this.ptrBeneficiaries.REC_ZipCode              = this.ptrSendMoney.lstBeneficiaries[i].REC_ZipCode;
              this.ptrBeneficiaries.Receiver_id              = this.ptrSendMoney.lstBeneficiaries[i].Receiver_id;
              this.ptrBeneficiaries.REC_IDNumber             = this.ptrSendMoney.lstBeneficiaries[i].REC_IDNumber;
            
      }
      i++;
  } 
  while (i < this.ptrSendMoney.lstBeneficiaries.length);        
        }, (err) => 
      {
        this.onAnadeLog(err,' | onListReceivers'+ ' | ERROR');
        reject(err);
      });
      this.onAnadeLog("Close onLastWireSend ",'INFO');
    });
  }  
  

  onListBanks()
  {
    this.ptrSendMoney.lstBanks = '';
    this.onAnadeLog("Open onListBanks "+this.ptrGlobals.token,'INFO');
    var testData = "comando=LISTBANK&data={'Country_Code':'" + this.ptrSendMoney.LastCountry_Code + "'}&token="+this.ptrGlobals.token; 
    this.onAnadeLog(testData,'INFO');
    var res1:any;
    return new Promise((resolve, reject) => 
    {
      this.http2.post( this.ptrGlobals.url_ws, testData, 
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      })
      .subscribe(res => 
      { 
        resolve(res);
        res1=res;  
        this.onAnadeLog('onListBanks','INFO');
               
        this.onAnadeLog(JSON.parse(res1),'INFO');
        this.ptrSendMoney.lstBanks=JSON.parse(res1);
        }, (err) => 
      {
        this.onAnadeLog(err,' | onListBanks'+' | ERROR');
        reject(err);
      });
      this.onAnadeLog("Close onListBanks ",'INFO');
    });
  }  
  
  onListPayers()
  {
    this.ptrSendMoney.lstPayers = '';
    this.onAnadeLog("Open onListPayers "+this.ptrGlobals.token,'INFO');
    var testData = "comando=LISTAGPAYER&data={'AGP_City':'','Country_Code':'" + this.ptrSendMoney.LastCountry_Code + "','PaymentType':'AGE','State_Code':''}&token="+this.ptrGlobals.token; 
    this.onAnadeLog(testData,'INFO');
    var res1:any;
    return new Promise((resolve, reject) => 
    {
      this.http2.post( this.ptrGlobals.url_ws, testData, 
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      })
      .subscribe(res => 
      { 
        resolve(res);
        res1=res;   
        this.onAnadeLog('onListPayers','INFO');
              
        this.onAnadeLog(JSON.parse(res1),'INFO');
        this.ptrSendMoney.lstPayers=JSON.parse(res1);
        }, (err) => 
      {
        this.onAnadeLog(err,' | onListPayers | '+'ERROR');
        reject(err);
      });
      this.onAnadeLog("Close onListBanks ",'INFO');
    });
  }  
/** REG BENEFICIARIO  */

onRegBeneficiaries(){
  this.onAnadeLog("Open onRegBeneficiaries "+this.ptrGlobals.token,'INFO');
  var testData = "comando=REGBENEFI&data={"+
                 "'REC_FirstName':'"  + this.ptrBeneficiaries.REC_FirstName + 
                 "','REC_LastName1':'"  + this.ptrBeneficiaries.REC_LastName1 + 
                 "','REC_LastName2':'"  + this.ptrBeneficiaries.REC_LastName2 + 
                 "','Country_Code':'"   + this.ptrBeneficiaries.Country_Code + 
                 
                 "','REC_State':'"      + this.ptrBeneficiaries.REC_State + 
                 "','REC_City':'"       + this.ptrBeneficiaries.REC_City + 
                 "','REC_Address':'"    + this.ptrBeneficiaries.REC_Address + 
                 "','REC_Phone1':'"     + this.ptrBeneficiaries.REC_Phone1 + 
                 "','REC_ZipCode':'"    + this.ptrBeneficiaries.REC_ZipCode + 
                 "','REC_Email':'"      + this.ptrBeneficiaries.REC_Email + 
                 "','REC_IDNumber':'"   + this.ptrBeneficiaries.REC_IDNumber + 
                 "'}&token="+this.ptrGlobals.token; 
                
  this.onAnadeLog(testData,'INFO');
  var res1:any;
  return new Promise((resolve, reject) => 
  {
    this.http2.post( this.ptrGlobals.url_ws, testData, 
    {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    })
    .subscribe(res => 
    { 
      resolve(res);
      res1=res;         
      this.onAnadeLog('onRegBeneficiaries','INFO');
      
      this.onAnadeLog(JSON.parse(res1),'INFO');
     // this.onListReceivers();
      }, (err) => 
    {
      this.onAnadeLog(err,' | onRegBeneficiaries | '+'ERROR');
      reject(err);
    });
    this.onAnadeLog("Close onRegBeneficiaries ",'INFO');
  });
}  


  onUpdateBeneficiaries(){
    this.onAnadeLog("Open onUpdateBeneficiaries "+this.ptrGlobals.token,'INFO');
    var testData = "comando=UPDATEBENE&data={'Country_Code':'" + this.ptrBeneficiaries.Country_Code + 
                   "','Receiver_id':'"    + this.ptrBeneficiaries.Receiver_id + 
                   "','REC_FirstName':'"  + this.ptrBeneficiaries.REC_FirstName + 
                   "','REC_LastName1':'"  + this.ptrBeneficiaries.REC_LastName1 + 
                   "','REC_LastName2':'"  + this.ptrBeneficiaries.REC_LastName2 + 
                   "','Country_Code':'"   + this.ptrBeneficiaries.Country_Code + 
                   "','CTR_Name':'"       + this.ptrBeneficiaries.CTR_Name + 
                   "','REC_State':'"      + this.ptrBeneficiaries.REC_State + 
                   "','REC_City':'"       + this.ptrBeneficiaries.REC_City + 
                   "','REC_Address':'"    + this.ptrBeneficiaries.REC_Address + 
                   "','REC_Phone1':'"     + this.ptrBeneficiaries.REC_Phone1 + 
                   "','REC_ZipCode':'"    + this.ptrBeneficiaries.REC_ZipCode + 
                   "','REC_Email':'"      + this.ptrBeneficiaries.REC_Email + 
                   "','BAN_AccNumber':'"  + this.ptrBeneficiaries.BAN_AccNumber + 
                   "','AccountType':'"    + this.ptrBeneficiaries.AccountType + 
                   "','BAN_Name':'"       + this.ptrBeneficiaries.BAN_Name + 
                   "','Bank_id':'"        + this.ptrBeneficiaries.Bank_id + 
                   "','PaymentMethodo':'" + this.ptrBeneficiaries.PaymentMethodo + 
                   "','PaymentType':'"    + this.ptrBeneficiaries.PaymentType + 
                   "','Agpayer_ID':'"     + this.ptrBeneficiaries.Agpayer_ID + 
                   "','REC_IDNumber':'"   + this.ptrBeneficiaries.REC_IDNumber + 
                   "','BNK_DefaultBranchDeposit':'" + this.ptrBeneficiaries.BNK_DefaultBranchDeposit + 
                   "','AGP_Name':'"       + this.ptrBeneficiaries.AGP_Name +     
                   "'}&token="+this.ptrGlobals.token; 
                  
    this.ptrNewWire.Country_Code              = this.ptrBeneficiaries.Country_Code; 
    //this.cotizador.Coucntry_Code =  this.ptrBeneficiaries.Country_Code;                  
    this.onAnadeLog(testData,'INFO');
    var res1:any;
    return new Promise((resolve, reject) => 
    {
      this.http2.post( this.ptrGlobals.url_ws, testData, 
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      })
      .subscribe(res => 
      { 
        resolve(res);
        res1=res;         
        this.onAnadeLog('onUpdateBeneficiaries','INFO');
        
        this.onAnadeLog(JSON.parse(res1),'INFO'); /** AL ACTIVAR ESTA SECCION TIENE EL ERROR DE QUE SE ENVIA UN GIRO Y TOMA EL ULTIMO DEL INICIO DE LA APP MAS NO EL Q ACABA DE ENVIAR SI ES BEC */
      /*  this.ptrSendMoney.Name_Beneficiario = this.ptrBeneficiaries.REC_FirstName+' '+this.ptrBeneficiaries.REC_LastName1+' '+this.ptrBeneficiaries.REC_LastName2;
        this.ptrSendMoney.LastCountry_Code  = this.ptrBeneficiaries.Country_Code;
        this.ptrSendMoney.Name_Bank           = '';
        this.ptrSendMoney.Name_Payer          = '';
        this.onListReceivers();*/
        }, (err) => 
      {
        this.onAnadeLog(err,' | onUpdateBeneficiaries | '+'ERROR');
        reject(err);
      });
      this.onAnadeLog("Close onUpdateBeneficiaries ",'INFO');
    });
  }  

  /* ********Methods Cotizaciones Inv*************/

onCotizaInv()
{
  var testData = "comando=CALCTRANSINFOREV&data={'Amount':'" + this.cotizador.Received + "','Country_Code':'" + this.cotizador.Country_Code + "','PromotionCode':'" + this.cotizador.PromotionCode + "'}";
  var res1:any;
  this.onAnadeLog("Open onCotizaInv | "+this.cotizador.Amount,'INFO');
  this.onAnadeLog(testData,'INFO');
 
  window.localStorage.setItem( 'Country_Code', this.cotizador.Country_Code);
  
  if (this.cotizador.Amount >= 999) 
  {
    this.cotizador.Received           = '';
    this.cotizador.AmountSend         = '0';
    this.cotizador.AmountReceivedLOC  = '0';
    this.cotizador.ExchageRateCADvsLOC= '0';
    this.cotizador.FeeINTER           = '0';
    this.cotizador.TotalCadINTER      = '0';
    this.cotizador.Currency_Payment   = '0';
    this.cotizador.Amount             = '1';    

    let alert = this.alertCtrl.create({
      title: 'Max 999',
      subTitle: 'Max Send 999 CAD',
      buttons: ['OK']
    });
    alert.present();
  }
  else if (this.cotizador.Received != '' && this.cotizador.Received != '0' )
  { 
    return new Promise((resolve, reject) => 
    {
    this.http2.post( this.ptrGlobals.url_ws, testData, {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),})
      .subscribe(res => 
      { 
        res1=res; 
        resolve(res);
        this.onAnadeLog('oncotiza','INFO');
        this.onAnadeLog(JSON.parse(res1),'INFO');
        this.cotizador.Currency_Payment        = JSON.parse(res1).Currency_Payment;
        this.ptrNewWire.AmountReceivedLOC      = JSON.parse(res1).AmountReceivedLOC;
        this.ptrNewWire.ExchageRateCADvsLOC    = JSON.parse(res1).ExchageRateCADvsLOC;
        this.ptrNewWire.FeeINTER               = JSON.parse(res1).FeeINTER;
        this.ptrNewWire.TotalCadINTER          = JSON.parse(res1).TotalCadINTER;
        this.ptrNewWire.AmountSend             = JSON.parse(res1).AmountSend;
        this.ptrNewWire.promocode              = this.cotizador.PromotionCode;

        this.cotizador.Amount  = parseFloat(JSON.parse(res1).AmountSend.replace(',', ".")).toFixed(2);
        this.cotizador.ExchageRateCADvsLOC = parseFloat(JSON.parse(res1).ExchageRateCADvsLOC.replace(',', ".")).toFixed(2);
        this.cotizador.FeeINTER = parseFloat(JSON.parse(res1).FeeINTER.replace(',', ".")).toFixed(2);
        this.cotizador.TotalCadINTER = parseFloat(JSON.parse(res1).TotalCadINTER.replace(',', ".")).toFixed(2);                    

        if (this.cotizador.Amount >= 999) 
        {
          this.cotizador.Received           = '';
          this.cotizador.AmountSend         = '0';
          this.cotizador.AmountReceivedLOC  = '0';
          this.cotizador.ExchageRateCADvsLOC= '0';
          this.cotizador.FeeINTER           = '0';
          this.cotizador.TotalCadINTER      = '0';
          this.cotizador.Currency_Payment   = '0';
          this.cotizador.Amount             = '1';    
          console.log("alarma");
      
          let alert = this.alertCtrl.create({
            title: 'Max 999',
            subTitle: 'Max Send 999 CAD',
            buttons: ['OK']
          });
          alert.present();
        }
      }, (err) => 
      {
        this.cotizador.ErrorPromo = '1';
        
        let alert = this.alertCtrl.create({
          title: 'Promotional code!',
          subTitle: 'Promotional code  is used or incorrect!',
          buttons: ['OK']
        });
        alert.present();

        this.cotizador.PromotionCodeError = 'Promotional code is used or incorrect!';
        this.onAnadeLog(err,' | onCotizaInv | '+'ERROR');
        this.cotizador.PromotionCode = '';
        this.onCotizaInv()
//        reject(err);
      });
      this.onAnadeLog("Close onCotizaInv",'INFO');
    });   
  }
}



/* ********Methods Cotizaciones *************/

onCotiza()
{
  var testData = "comando=CALCTRANSINFO&data={'Amount':'" + this.cotizador.Amount + "','Country_Code':'" + this.cotizador.Country_Code + "','PromotionCode':'" + this.cotizador.PromotionCode + "'}";
  var res1:any;
  
  this.onAnadeLog("Open onCotiza token | "+this.cotizador.Amount,'INFO');
  this.onAnadeLog(testData,'INFO');
 console.log(testData);
 
  window.localStorage.setItem( 'Country_Code', this.cotizador.Country_Code);

//  this.cotizador.ErrorPromo         = '0';
  

        
  if (this.cotizador.Amount >= 999) 
  {
    this.cotizador.Received           = '';
    this.cotizador.AmountSend         = '0';
    this.cotizador.AmountReceivedLOC  = '0';
    this.cotizador.ExchageRateCADvsLOC= '0';
    this.cotizador.FeeINTER           = '0';
    this.cotizador.TotalCadINTER      = '0';
    this.cotizador.Currency_Payment   = '0';
    this.cotizador.Amount             = '1';    
    this.cotizador.ErrorPromo         = '0';
    this.cotizador.PromotionCodeError = '';    
    let alert = this.alertCtrl.create({
      title: 'Max 999',
      subTitle: 'Max Send 999 CAD',
      buttons: ['OK']
    });
    alert.present();
  }
  else if (this.cotizador.Amount != '' && this.cotizador.Amount != '0' )
  {
    return new Promise((resolve, reject) => 
    {
    this.http2.post( this.ptrGlobals.url_ws, testData, {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),})
      .subscribe(res => 
      { 
        res1=res; 
        resolve(res);

        this.onAnadeLog('oncotiza','INFO');
        this.onAnadeLog(JSON.parse(res1),'INFO');
        
        this.cotizador.Currency_Payment        = JSON.parse(res1).Currency_Payment;
        this.ptrNewWire.AmountReceivedLOC      = JSON.parse(res1).AmountReceivedLOC;
        this.ptrNewWire.ExchageRateCADvsLOC    = JSON.parse(res1).ExchageRateCADvsLOC;
        this.ptrNewWire.FeeINTER               = JSON.parse(res1).FeeINTER;
        this.ptrNewWire.TotalCadINTER          = JSON.parse(res1).TotalCadINTER;
        this.ptrNewWire.AmountSend             = JSON.parse(res1).AmountSend;
        if (this.cotizador.PromotionCode !='')
        this.ptrNewWire.promocode              = this.cotizador.PromotionCode;

        if (this.cotizador.Currency_Payment == 'USD') 
        {
          this.cotizador.Received = parseFloat(JSON.parse(res1).AmountReceivedLOC.replace(',', ".")).toFixed(2);            
          this.cotizador.AmountReceivedLOC = parseFloat(JSON.parse(res1).AmountReceivedLOC.replace(',', ".")).toFixed(2);
          this.cotizador.ExchageRateCADvsLOC= parseFloat(JSON.parse(res1).ExchageRateCADvsLOC.replace(',', ".")).toFixed(2);
          this.cotizador.FeeINTER= parseFloat(JSON.parse(res1).FeeINTER.replace(',', ".")).toFixed(2);
          this.cotizador.TotalCadINTER= parseFloat(JSON.parse(res1).TotalCadINTER.replace(',', ".")).toFixed(2);
          this.cotizador.Currency_Payment= JSON.parse(res1).Currency_Payment;
          this.cotizador.AmountSend = parseFloat(JSON.parse(res1).AmountSend.replace(',', ".")).toFixed(2);
        } else {
          this.cotizador.Received = parseFloat(JSON.parse(res1).AmountReceivedLOC.replace(',', ".")).toFixed(0);                
          this.cotizador.AmountReceivedLOC = parseFloat(JSON.parse(res1).AmountReceivedLOC.replace(',', ".")).toFixed(0);
          this.cotizador.ExchageRateCADvsLOC= parseFloat(JSON.parse(res1).ExchageRateCADvsLOC.replace(',', ".")).toFixed(0);
          this.cotizador.FeeINTER= parseFloat(JSON.parse(res1).FeeINTER.replace(',', ".")).toFixed(2);
          this.cotizador.TotalCadINTER= parseFloat(JSON.parse(res1).TotalCadINTER.replace(',', ".")).toFixed(2);
          this.cotizador.Currency_Payment= JSON.parse(res1).Currency_Payment;
          this.cotizador.AmountSend = parseFloat(JSON.parse(res1).AmountSend.replace(',', ".")).toFixed(0);
        }             
        
      }, (err) => 
      {
        this.cotizador.ErrorPromo = '1';
        
        let alert = this.alertCtrl.create({
          title: 'Promotional code!',
          subTitle: 'Promotional code  is used or incorrect!',
          buttons: ['OK']
          
        });
        alert.present();

        this.cotizador.PromotionCodeError = 'Promotional code is used or incorrect!';
        this.onAnadeLog(err,' | onCotiza | '+'ERROR');
        this.cotizador.PromotionCode = '';
        this.cotizador.ErrorPromo = 0;
        this.onCotiza()
      });
      this.onAnadeLog("Close onCotiza",'INFO');
    });   
  }
}


  onSendWire()
  {
    if ( this.ptrNewWire.Country_Code == 'EC' && this.ptrNewWire.payermethod == 'DEP' ) {
      this.onUpdateBeneficiaries()    
      this.ptrGlobals.booIniciaToken ='0';
    }

    var testData = "comando=INSWIRE&data={'promocode':'" + this.ptrNewWire.promocode + 
    "','receiverId':'"                + this.ptrNewWire.receiverId + 
    "','TotalCadINTER':'"             + this.ptrNewWire.TotalCadINTER + 
    "','AmountReceivedLOC':'"         + this.ptrNewWire.AmountReceivedLOC + 
    "','FeeINTER':'"                  + this.ptrNewWire.FeeINTER + 
    "','ExchageRateCADvsLOC':'"       + this.ptrNewWire.ExchageRateCADvsLOC + 
    "','AmountSend':'"                + this.ptrNewWire.AmountSend + 
    "','AgPAyer_id':'"                + this.ptrNewWire.AgPAyer_id + 
    "','BNK_DefaultBranchDeposit':'"  + this.ptrNewWire.BNK_DefaultBranchDeposit + 
    "','BankAcNumber':'"              + this.ptrNewWire.BankAcNumber + 
    "','typeAcId':'"                  + this.ptrNewWire.typeAcId + 
    "','Country_Code':'"              + this.ptrNewWire.Country_Code + 
    "','bankid':'"                    + this.ptrNewWire.bankid+
    "','payermethod':'"               + this.ptrNewWire.payermethod + 
    "','paymentMethod':'"             + this.ptrNewWire.paymentMethod + 
    "'}&token="+this.ptrGlobals.token; 

    this.ptrBeneficiaries.PaymentType ='EMAIL';


    this.onAnadeLog(testData,'INFO');
    var res1:any;
    return new Promise((resolve, reject) => 
    {
      this.http2.post( this.ptrGlobals.url_ws, testData, 
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      })
      .subscribe(res => 
      { 
        resolve(res);
        res1=res;         
        this.onAnadeLog(res1,'INFO'); //if error ojo{"status":"ERROR","mensaje":"9999"} *** scar alarma
      
        if ( this.ptrNewWire.paymentMethod == 'EMAIL') {
          this.app.getRootNav().setRoot(EndEmailtransferPage);
        } else
        {
         const browser = this.iab.create(this.ptrGlobals.url_moneris+
                                          JSON.parse(res1.replace('[', '').replace(']', '')).EU_TempWireID+
                                         '&charge_total='     + this.ptrNewWire.TotalCadINTER.replace(',', '.')+
                                         '&token='            + this.ptrGlobals.token+
                                         '&orderToken=' + JSON.parse(res1.replace('[', '').replace(']', '')).EU_TransactionID 
                                         ,'_blank', 'location=yes');
          browser.show()         ;
          this.app.getRootNav().setRoot(EndInteracPage);          
        }
        
      }, (err) => 
      {
        this.onAnadeLog(err,' | onSendWire'+' | ERROR');
      
        reject(err);
      });
      this.onAnadeLog("Close onSendWire ",'INFO');
    });
  }  

/** helpsend */
  onHelpSend()
  {
    
    this.onAnadeLog("Open onHelpSend "+this.ptrGlobals.token,'INFO');
    var testData = "comando=HELPTICKET&data="+
    '{"ticket":{"requester":{"name":"'+ this.ptrHelp.typehelp+'","email":"'+ this.ptrGlobals.user+'"},"submitter_id":410983,"subject":"PPM-Movil Help Request","comment":{"body":"'+ this.ptrHelp.textHelp+'"}}}';
    
    console.log(testData);
    
    this.onAnadeLog(testData,'INFO');
    var res1:any;
    return new Promise((resolve, reject) => 
    {
      this.http2.post( this.ptrGlobals.url_ws, testData, 
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      })
      .subscribe(res => 
      { 
        resolve(res);
        res1=res;  
        console.log(JSON.parse(res1),'INFO');
        var respo = JSON.parse(res1);

        var mesa =  this.translateService.instant('HeTypeofmessageError');
        if(respo){
            mesa = 'Ticket #'+respo.ticket.id+ this.translateService.instant('HeTypeofmessageOk');
        }


        this.ptrHelp.textHelp = '';
        this.ptrHelp.typehelp = '';

        let alert = this.alertCtrl.create({
          title: 'Help!',
          subTitle: mesa,
          buttons: ['OK']
        });
        alert.present();
        
        this.onAnadeLog('onHelpSend','INFO');
               
        this.onAnadeLog(JSON.parse(res1),'INFO');
        this.ptrSendMoney.lstBanks=JSON.parse(res1);
        }, (err) => 
      {
        this.onAnadeLog(err,' | onHelpSend'+' | ERROR');
        reject(err);
      });
      this.onAnadeLog("Close onHelpSend ",'INFO');
    });
  }  


  format(valString) {
    if (!valString) {
        return '';
    }
    let val = valString.toString();
    const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
    return parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.GROUP_SEPARATOR) + (!parts[1] ? '' : this.DECIMAL_SEPARATOR + parts[1]);
};

unFormat(val) {
    if (!val) {
        return '';
    }
    val = val.replace(/^0+/, '');

    if (this.GROUP_SEPARATOR === ',') {
        return val.replace(/,/g, '');
    } else {
        return val.replace(/\./g, '');
    }
};  

}  

