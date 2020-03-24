'use strict';

// add to my app.angular.js file
angular.module('urbexCartoonsApp').factory('countryService', function() {

  var countries = [{

    name: 'Deutschland',
    preview: 'images/de.png',
    previewGray: 'images/de_gray.png'
  }, {
    name: 'Benelux / Frankreich',
    preview: 'images/fra_bel_nld_lux.png',
    previewGray: 'images/fra_bel_nld_lux_gray.png'
  }, {
    name: 'Polen / Ukraine',
    preview: 'images/pol_ukr.png',
    previewGray: 'images/pol_ukr_gray.png'
  }];

  return {
    countries: function() {
      return countries;
    }
  };
});
