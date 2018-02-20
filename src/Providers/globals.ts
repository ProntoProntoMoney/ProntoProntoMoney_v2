import { Injectable } from '@angular/core';


@Injectable()
export class Globals {
    url_ws: string = 'http://www.prontoprontomoney.com:8084/ppm/ppmWS';
    url_moneris :string = 'https://www.prontoprontomoney.com/Transaction/MakeInterac?orderId=';
    token: any;
    user:string;
    password:string;
    colorbuttons:string ='#CED8F6';
    lstCountry:any;
    lstStates:any;
    emailRecovery:any='';
    State_Name: any;
    State_Code: any;
    Country_Code:any;
    country_name:any;
    booAnadelog:any = '0'; // creacion de log de seguimiento de la app 
    booIniciaToken : any = '1';
    IdentificacionObligatoria:any='0'; //valor para identificacion obligatoria de ecuador al envio de depositos
    constructor() {}
}

export class UserData{
    Name            :any = '';
    LastName        :any = '';
    SecondLastName  :any = '';
    Profession      :any = '';
    Address         :any = '';
    City            :any = '';
    State           :any = '';
    ZipCode         :any = '';
    PhoneNumber     :any = '';
    DateofBirth     :any = '';
    Email           :any = '';
    password        :any = '';
    re_password     :any = '';    
}
export class Beneficiaries{
    AGP_Name                :any = '';
    AccountType             :any = '';
    Agpayer_ID              :any = '';
    BAN_AccNumber           :any = '';
    BAN_Name                :any = '';
    BNK_DefaultBranchDeposit:any = '';
    Bank_id                 :any = '';
    CTR_Name                :any = '';
    Country_Code            :any = '';
    PaymentMethodo          :any = '';
    PaymentType             :any = '';
    REC_Address             :any = '';
    REC_City                :any = '';
    REC_Email               :any = '';
    REC_FirstName           :any = '';
    REC_LastName1           :any = '';
    REC_LastName2           :any = '';
    REC_Phone1              :any = '';
    REC_State               :any = '';
    REC_ZipCode             :any = '';
    Receiver_id             :any = '';
    REC_WirePropuse         :any = '';
    REC_IDNumber            :any = '';
    VG_New                  :any = false;
    constructor() {}
}

export class Help{
    typehelp :any = 'Question';
    textHelp :any = ''
    constructor(){}
}
export class SendMoney {
    TotalCadINTER:any;
    LastCountry_Code:any='CO';
    Name_Beneficiario:any='';
    id_Beneficiario : any='';
    lstBeneficiaries: any;
    lstBanks        : any;
    id_Bank         : any;
    Name_Bank       : any;
    lstPayers       : any;
    id_Payer        : any;
    Name_Payer      : any;  
    type_account    : any ='SAV';  
    booSelectEdit   : any = '0';
    
    constructor() {}
}

export class Cotiza {
    Amount             : any='1';
    Received           : any='1';
    Country_Code       : any='CO';
    PromotionCode      : any='';    
    AmountReceivedLOC  : any='1';//"176435,6412"
    AmountReceivedUSD  : any='';//"59,4100"
    AmountSend         : any='';//"78,0000"
    Currency_Payment   : any='2';// "COP"
    ExRateLOC          : any='';//"2970,0000"
    ExRateUSDvsCAD     : any='';//    "1,3130"
    ExchageRateCADvsLOC: any='';//    "2261,9954"
    FeeINTER           : any='';//   "4,9900"
    FeeITRA            : any='';//    "4,9900"
    FeeOriginalINTER   : any='';//   "4,99"
    FeeOriginalITRA    : any='';//   "4,99"
    PromotionAmount    : any='';//   "0,0000"
    TotalCadINTER      : any='';//   "82,9900"
    TotalCadITRA       : any='';//   "82,9900"
    TypePromotion      : any='';//   "N/A"
    TypePromotionValue : any='';//   "0,0000"
    newBen             : any= {};//BENEFICIARIO SELECTED
    ErrorPromo         : any='0'; 
    PromotionCodeError : any=''
}

export class NewWire{
    promocode                   : any='';
    receiverId                  : any='';
    TotalCadINTER               : any='';
    AmountReceivedLOC           : any='';
    FeeINTER                    : any='';
    ExchageRateCADvsLOC         : any='';
    AmountSend                  : any='';
    AgPAyer_id                  : any='';
    BNK_DefaultBranchDeposit    : any='';
    BankAcNumber                : any='';
    typeAcId                    : any='';
    Country_Code                : any='';
    bankid                      : any='';
    payermethod                 : any='';
    paymentMethod               : any='';
    constructor() {}
}
