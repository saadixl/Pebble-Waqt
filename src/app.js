var UI = require('ui');
var ajax = require('ajax');

// Create a Card with title and subtitle
var card = new UI.Card({
  title:'Waqt',
  subtitle:'Fetching...',
  style:'small'
});
 var cityAjaxUrl;

// Display the Card
card.show();


var locationOptions = {
  enableHighAccuracy: true, 
  maximumAge: 10000, 
  timeout: 10000
};

function locationSuccess(pos) {
  cityAjaxUrl =  pos.coords.latitude.toString() + ',' + pos.coords.longitude.toString();
  console.log(cityAjaxUrl);
  cityAjaxUrl = cityAjaxUrl.toString();
  // Construct URL
var URL = 'http://app.saadixl.pw/pebblewaqt/rgc.php?'+cityAjaxUrl;
console.log(URL);
// Make the request
 ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log("waqt data loaded!");

    // Extract data
    var location = 'Location: '+data.query;
    var desc = 'Fajr\t: ' + data.items[0].fajr+ '\nDhuhr: ' +  data.items[0].dhuhr + '\nAsr: '  + data.items[0].asr+ '\nMaghrib: '  + data.items[0].maghrib+ '\nIsha: '  + data.items[0].isha;
    card.subtitle(location);
    card.body(desc);
  },
  function(error) {
    // Failure!
    console.log('Failed fetching weather data: ' + error);
  }
); 

}

function locationError(err) {
  console.log('location error (' + err.code + '): ' + err.message);
}

navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);


