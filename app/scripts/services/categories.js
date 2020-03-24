'use strict';

// add to my app.angular.js file
angular.module('urbexCartoonsApp').factory('categoryService', function() {

  var categories = [{
    name: 'Industrie',
    preview: 'images/industrie.png',
    previewGray: 'images/industrie_gray.png'
  }, {
    name: 'Wohnen',
    preview: 'images/wohnen.png',
    previewGray: 'images/wohnen_gray.png'
  }, {
    name: 'Bildung / Freizeit',
    preview: 'images/bildung.png',
    previewGray: 'images/bildung_gray.png'
  }, {
    name: 'Medizin',
    preview: 'images/medizin.png',
    previewGray: 'images/medizin_gray.png'
  }];

  return {
    categories: function() {
      return categories;
    }
  };
});
