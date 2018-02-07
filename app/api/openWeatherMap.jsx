var axios = require('axios');
//q=London,uk&
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=2b5b4b872f455ad5687ed78728f24ca8&units=metric';
 module.exports = {
   getTemp : function (location){
     var encodedLocation = encodeURIComponent(location);
     var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then((res)=>{
       return res.data.main.temp;
     }).catch((err)=>{
        if(err){
          throw new Error(err)
        }
     })
   }
 }
