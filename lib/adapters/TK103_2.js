TK103_2 = {
    availableMethods:function(){
        return ['ping','alarm','login'];
    },
    pingMessage:function(device_uid){
        device_uid = device_uid.substr(0,12); // serial number
        return device_uid + ',+905424515038,GPRMC,003810.000,A,3952.0939,N,03249.2224,E,0.00,30.56,300316,,,A*57,F,, imei:866771021084982,09,1173.3,F:4.27V,1,141,21491,286,03,509D,50CC';
    },
    loginMessage:function(device_uid){
        console.log('LOGIN MESSAGE NOT IMPLEMENTED YET');
        device_uid = device_uid.substr(0,12); // serial number
        return device_uid + ',+905424515038,GPRMC,003810.000,A,3952.0939,N,03249.2224,E,0.00,30.56,300316,,,A*57,F,, imei:866771021084982,09,1173.3,F:4.27V,1,141,21491,286,03,509D,50CC';
    },
    alarmMessage:function(device_uid){
        console.log('ALARM MESSAGE NOT IMPLEMENTED YET');
        device_uid = device_uid.substr(0,12);
        return device_uid + ',+905424515038,GPRMC,003810.000,A,3952.0939,N,03249.2224,E,0.00,30.56,300316,,,A*57,F,, imei:866771021084982,09,1173.3,F:4.27V,1,141,21491,286,03,509D,50CC';
    },
    checkLoginResponse:function(response,device_uid){
        console.log('CHECK LOGIN MESSAGE NOT IMPLEMENTED YET');
        return true;
    }
}