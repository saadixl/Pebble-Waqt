var UI = require('ui');
var ajax = require('ajax');
// Create a Card with title and subtitle
var card = new UI.Card({
  title:'Waqt',
  subtitle:'Fetching...',
  style:'small'
});

// Display the Card
card.show();

// Construct URL
var URL = 'http://app.saadixl.pw/pebblewaqt/msa.php';

// Make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log("Successfully fetched waqt data!");

    // Extract data
    var location = 'Location: Dhaka';
    var desc = 'Fajr\t: ' + data.items[0].fajr+ '\nDhuhr: ' +  data.items[0].dhuhr + '\nAsr: '  + data.items[0].asr+ '\nMaghrib: '  + data.items[0].maghrib+ '\nIsha: '  + data.items[0].isha;
    card.subtitle(location);
    card.body(desc);
  },
  function(error) {
    // Failure!
    console.log('Failed fetching weather data: ' + error);
  }
);
