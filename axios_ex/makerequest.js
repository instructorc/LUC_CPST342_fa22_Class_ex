const axios = require('axios').default;

// Make a request for a user with a given ID
axios.get('https://www.googleapis.com/calendar/v3/calendars/2')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });