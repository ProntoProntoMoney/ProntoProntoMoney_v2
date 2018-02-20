import { Injectable } from '@angular/core';
import { App} from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import 'rxjs/add/operator/map';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Globals } from '../../Providers/globals';
import { Cotiza } from  '../../Providers/globals';
import { UserData } from '../../Providers/globals';
import { tabLogin } from '../../pages/TabLogin/TabLogin';
import { TabsSystemPage } from '../../pages/tabs-system/tabs-system';

@Injectable()
export class ClientMethodsProvider {
  DECIMAL_SEPARATOR=".";
  GROUP_SEPARATOR=",";
  
  constructor(public http: Http,private app: App, public http2: HttpClient,public ptrGlobals: Globals,
              public ptrUserData : UserData,
              public cotizador:Cotiza,public alertCtrl: AlertController,public translateService: TranslateService) 
  {
    this.onAnadeLog('Init Module of Clients method PPM v.2','INFO');
    this.onListCountries();    
  }

/* *****  ANADELOG *****/

onAnadeLog(data,tipoMsn){
  if (this.ptrGlobals.booAnadelog == '1'){
  console.log('*** '+new Date().getDate().toString()+'/'+ new Date().getMonth().toString() +'/'+new Date().getFullYear().toString() +' '+ 
              new Date().getHours().toString()+':'+new Date().getMinutes().toString()+':'+new Date().getSeconds().toString()+' | '+tipoMsn+
            ' | '+data+' *** ')
  }
}

/* *********************  Methods login pages and token definition ***********************/

  onlogin()
  {
    this.ptrGlobals.booIniciaToken ='1';
    var testData = "comando=Login&data={'username':'"+this.ptrGlobals.user+"','password':'"+this.ptrGlobals.password+"'}"
    return new Promise((resolve, reject) => 
    {
      this.http2.post( this.ptrGlobals.url_ws, testData, 
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      })
      .subscribe(res => 
      {
        this.onAnadeLog(res,'Info');
        this.ptrGlobals.token=res;
        if (res == 'ERROR')
        {
          let alert = this.alertCtrl.create(
          {
            title: this.translateService.instant('LoginErrorTitle'),
            subTitle: this.translateService.instant('LoginError'),
            buttons: ['OK']
          });
          alert.present();    
          this.ptrGlobals.token = 'ERROR';          
        } 
        else
        {
          this.app.getRootNav().setRoot(TabsSystemPage)
        }
        resolve(res);
      }, (err) => 
      {
        this.onAnadeLog(err,'| onlogin'+' | ERROR');
        reject(err);        
      });
      this.onAnadeLog('Close onLogin ','INFO');      
    });    
  }

/* ************ Methods ListCountry ----*/

  onListCountries()
  {
    this.onAnadeLog("Open onListCountries ",'INFO');
    var testData = "comando=LISTCOUNTRY&data={'data':''}"
    return new Promise((resolve, reject) => 
    {
      this.http2.post( this.ptrGlobals.url_ws, testData, 
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      })
      .subscribe(res => 
      { 
        resolve(res);
        this.ptrGlobals.lstCountry=res;
        this.ptrGlobals.lstCountry=JSON.parse(this.ptrGlobals.lstCountry);
      }, (err) => 
      {
        this.onAnadeLog(err,' | onListCountries'+' | ERROR');
        reject(err);
      });
      this.onAnadeLog("Close onListCountries",'INFO');      
    });
  }

/* ************ Methods ListStates ----*/

onListStates(strStateCode)
{
  this.onAnadeLog("Open onListStates "+strStateCode,'INFO');
  var testData = "comando=LISTSTATES&data="+strStateCode//comando=LISTSTATES&data=CA
  this.onAnadeLog(testData,'INFO');
  return new Promise((resolve, reject) => 
  {
    this.http2.post( this.ptrGlobals.url_ws, testData, 
    {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    })
    .subscribe(res => 
    { 
      resolve(res);
      this.ptrGlobals.lstStates=res;
      this.ptrGlobals.lstStates=JSON.parse(this.ptrGlobals.lstStates);
      this.onAnadeLog(this.ptrGlobals.lstStates,'INFO');
    }, (err) => 
    {
      this.onAnadeLog(err,' | onListStates'+' | ERROR');
      reject(err);
    });
    this.onAnadeLog("Close onListStates ",'INFO');
  });
}

/* ********Methods Cotizaciones *************/

  onCotiza()
  {
    var testData = "comando=CALCTRANSINFO&data={'Amount':'" + this.cotizador.Amount + "','Country_Code':'" + this.cotizador.Country_Code + "','PromotionCode':'" + this.cotizador.PromotionCode + "'}";
    var res1:any;
    this.onAnadeLog("Open onCotiza | "+this.cotizador.Amount,'INFO');
    this.onAnadeLog(testData,'INFO');
   
    window.localStorage.setItem( 'Country_Code', this.cotizador.Country_Code);
    window.localStorage.setItem( 'Amount', this.cotizador.Amount);

    
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
    else if (this.cotizador.Amount != '' && this.cotizador.Amount != '0' )
    {
      return new Promise((resolve, reject) => 
      {
      this.http2.post( this.ptrGlobals.url_ws, testData, {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),})
        .subscribe(res => 
        { 
          res1=res; 
          resolve(res);
          
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
          this.onAnadeLog(err,' | onCotiza '+' | ERROR');
          reject(err);
        });
        this.onAnadeLog("Close onCotiza",'INFO');
      });   
    }
  }

  /* ********Methods Cotizaciones Inv*************/

onCotizaInv()
{
  var testData = "comando=CALCTRANSINFOREV&data={'Amount':'" + this.cotizador.Received + "','Country_Code':'" + this.cotizador.Country_Code + "','PromotionCode':'" + this.cotizador.PromotionCode + "'}";
  var res1:any;
  this.onAnadeLog("Open onCotizaInv | "+this.cotizador.Amount,'INFO');
  this.onAnadeLog(testData,'INFO');

  console.log(testData);
  
 
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
        
        this.cotizador.Amount  = parseFloat(JSON.parse(res1).AmountSend.replace(',', ".")).toFixed(2);
        this.cotizador.ExchageRateCADvsLOC = parseFloat(JSON.parse(res1).ExchageRateCADvsLOC.replace(',', ".")).toFixed(2);
        this.cotizador.FeeINTER = parseFloat(JSON.parse(res1).FeeINTER.replace(',', ".")).toFixed(2);
        this.cotizador.TotalCadINTER = parseFloat(JSON.parse(res1).TotalCadINTER.replace(',', ".")).toFixed(2);                    
      }, (err) => 
      {
        this.onAnadeLog(err,' | onCotizaInv '+' | ERROR');
        reject(err);
      });
      this.onAnadeLog("Close onCotizaInv",'INFO');
    });   
  }
}


  /* ****** Method Recovery Password ******/

  onRecoveryPass()
  {
    this.onAnadeLog('Open onRecoveryPass | '+this.ptrGlobals.emailRecovery,'INFO');
    if (this.ptrGlobals.emailRecovery != '')
    {
      var testData = "comando=RECOVERY&data="+this.ptrGlobals.emailRecovery
      var error:any;
      this.onAnadeLog(testData,'INFO');
      return new Promise((resolve, reject) => 
      {
        this.http2.post( this.ptrGlobals.url_ws, testData, {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),})
        .subscribe(res => 
        { 
          this.onAnadeLog(res,'INFO');
          error = res;
          this.onAnadeLog(JSON.parse(error).status,'INFO');
          resolve(res);
          if (JSON.parse(error).status == 'ERROR')
          {
            let alert = this.alertCtrl.create(
            {
              title: "Error",
              subTitle: JSON.parse(error).message,
              buttons: ['OK']
            });
              alert.present();    
          } 
          else
          {
            this.app.getRootNav().setRoot(tabLogin);
          }
        }, (err) => { this.onAnadeLog(err,' | onRecoveryPass'+' | ERROR'); reject(err);});
        this.onAnadeLog('Close onRecoveryPass | '+this.ptrGlobals.emailRecovery,'INFO');
        this.ptrGlobals.emailRecovery="";
      });          
    } 
    else
    {
      let alert = this.alertCtrl.create(
      {
        title: this.translateService.instant('EmailNullTitle'),
        subTitle: this.translateService.instant('EmailNullError'),
        buttons: ['OK']
      });
      alert.present();    
      this.onAnadeLog('Close onRecoveryPass | '+this.ptrGlobals.emailRecovery,'INFO');
      this.ptrGlobals.emailRecovery="";
    }
  }  
  
/* ******* Method Reg User*/

  onRegUser()
  {
    this.onAnadeLog("Open onRegUser | "+this.ptrUserData.Name,'INFO');
    var testData = "comando=REGUSER&data={'SND_FirstName':'" + this.ptrUserData.Name +
                                                "','SND_LastName1':'" + this.ptrUserData.LastName + 
                                                "','SND_LastName2':'" + this.ptrUserData.SecondLastName + 
                                                "','Country_Code':'CA','SND_State':'" + this.ptrUserData.State + 
                                                "','SND_City':'" + this.ptrUserData.City + 
                                                "','SND_Address':'" + this.ptrUserData.Address + 
                                                "','SND_Phone1':'" + this.ptrUserData.PhoneNumber + 
                                                "','SND_ZipCode':'" + this.ptrUserData.ZipCode + 
                                                "','EU_Email':'" + this.ptrUserData.Email + 
                                                "','DateofBirth':'" + this.ptrUserData.DateofBirth + 
                                                "','EU_Password':'" + this.ptrUserData.password + "'}";
    var res1:any;
    
    this.onAnadeLog(testData,'INFO');
    return new Promise((resolve, reject) => 
      {
      this.http2.post( this.ptrGlobals.url_ws, testData, {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),})
        .subscribe(res => 
        { 
          res1=res; 
          resolve(res);
          let alert = this.alertCtrl.create(
          {
            title: 'RegUser ok',
            subTitle: 'RegUser ok',
            buttons: ['OK']
          });
          alert.present();
          this.onAnadeLog(JSON.parse(res1),'INFO');
          this.app.getRootNav().setRoot(tabLogin);
        }, (err) => 
        {
          let alert = this.alertCtrl.create({
            title: 'RegUser Error',
            subTitle: 'RegUser Error',
            buttons: ['OK']
          });
          alert.present();          
          this.onAnadeLog(err,' | onRegUser'+' | ERROR');
          reject(err);
        });
        this.onAnadeLog("Close onRegUser",'INFO');
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



