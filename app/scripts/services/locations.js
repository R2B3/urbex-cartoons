'use strict';

// add to my app.angular.js file
angular.module('urbexCartoonsApp').factory('locationService', function() {

  var locations = [{
    name: 'Hof van Neuteboom',
    shortName: 'neuteboom',
    category: 'Wohnen',
    country: 'Benelux / Frankreich',
    preview: 'images/neuteboom_200.jpg',
    image: 'images/locations/neuteboom.jpg',
    color: '#50b2fb',
    date: 201109
  }, {
    name: 'Kraftwerk ECVB',
    shortName: 'ecvb',
    category: 'Industrie',
    country: 'Benelux / Frankreich',
    preview: 'images/ecvb.png',
    image: 'images/locations/ecvb.jpg',
    color: '#686568',
    date: 201109
  }, {
    name: 'Kraftwerk Vockerode',
    shortName: 'vockerode',
    category: 'Industrie',
    country: 'Deutschland',
    preview: 'images/vockerode_200.jpg',
    image: 'images/locations/vockerode.jpg',
    color: '#fe6527',
    date: 201203
  }, {
  //   name: 'Werk Polysius',
  //   shortName: 'polysius',
  //   category: 'Industrie',
  //   country: 'Deutschland',
  //   preview: 'images/polysius.png',
  //   image: 'images/polysius.jpg',
  //   color: '#8aaa82'
  // }, {
    name: 'Sportschule Ballenstedt',
    shortName: 'sportschule',
    category: 'Bildung / Freizeit',
    country: 'Deutschland',
    preview: 'images/ballenstedt.png',
    image: 'images/locations/ballenstedt.jpg',
    color: '#4d5c52',
    date: 201203
  }, {
    name: 'Villa Albert',
    shortName: 'villa_albert',
    category: 'Wohnen',
    country: 'Benelux / Frankreich',
    preview: 'images/villa_albert.png',
    image: 'images/locations/villa_albert.jpg',
    color: '#00ccfa',
    date: 201209
  }, {
    name: 'Alte Rheinbrücke',
    shortName: 'alte_rheinbruecke',
    category: 'Industrie',
    country: 'Deutschland',
    preview: 'images/alte_rheinbruecke.png',
    image: 'images/locations/alte_rheinbruecke.jpg',
    color: '#2770b8',
    date: 201103
  }, {
    name: 'Bergklinik',
    shortName: 'bergklinik',
    category: 'Medizin',
    country: 'Deutschland',
    preview: 'images/bergklinik.png',
    image: 'images/locations/bergklinik.jpg',
    color: '#511704',
    date: 201009
  }, {
    name: 'Baumwollbleicherei',
    shortName: 'baumwolle',
    category: 'Industrie',
    country: 'Deutschland',
    preview: 'images/baumwollbleicherei_200.jpg',
    image: 'images/locations/baumwollbleicherei.jpg',
    color: '#56a39d',
    date: 201309
  }, {
    name: 'Central Thermique',
    shortName: 'central_thermique',
    category: 'Industrie',
    country: 'Benelux / Frankreich',
    preview: 'images/central_thermique.png',
    image: 'images/locations/central_thermique.jpg',
    color: '#cd6534',
    date: 201002
  }, {
    name: 'Chapel',
    shortName: 'chapel',
    category: 'Bildung / Freizeit', // Kategorie !
    country: 'Polen / Ukraine',
    preview: 'images/chapel.png',
    image: 'images/locations/chapel.jpg',
    color: '#606f5b',
    date: 201307
  }, {
    name: 'Chateau Electrique',
    shortName: 'chateau_electrique',
    category: 'Wohnen',
    country: 'Benelux / Frankreich',
    preview: 'images/chateau_electrique.png',
    image: 'images/locations/chateau_electrique.jpg',
    color: '#a97d91',
    date: 201105
  }, {
    name: 'Chateau HB',
    shortName: 'chateau_hb',
    category: 'Wohnen',
    country: 'Benelux / Frankreich',
    preview: 'images/chateau_hb.png',
    image: 'images/locations/chateau_hb.jpg',
    color: '#6e9c89',
    date: 201105
  }, {
    name: 'Fahrradmanufaktur',
    shortName: 'fahrradmanufaktur',
    category: 'Industrie',
    country: 'Deutschland',
    preview: 'images/fahrradmanufaktur.png',
    image: 'images/locations/fahrradmanufaktur.jpg',
    color: '#880c00',
    date: 200912
  }, {
    name: 'Gießerei SH',
    shortName: 'giesserei_sh',
    category: 'Industrie',
    country: 'Deutschland',
    preview: 'images/giesserei_sh.png',
    image: 'images/locations/giesserei_sh.jpg',
    color: '#414248',
    date: 201212
  }, {
    name: 'Hasard Cheratte',
    shortName: 'hasard_cheratte',
    category: 'Industrie',
    country: 'Benelux / Frankreich',
    preview: 'images/hasard_cheratte.png',
    image: 'images/locations/hasard_cheratte.jpg',
    color: '#2d421e',
    date: 200909
  }, {
    name: 'Hochofen',
    shortName: 'hochofen',
    category: 'Industrie',
    country: 'Benelux / Frankreich',
    preview: 'images/hochofen.png',
    image: 'images/locations/hochofen.jpg',
    color: '#3f535e',
    date: 201410
  }, {
    name: 'Kent School',
    shortName: 'kent_school',
    category: 'Bildung / Freizeit', // Kategorie
    country: 'Deutschland',
    preview: 'images/kent_school_200.jpg',
    image: 'images/locations/kent_school.jpg',
    color: '#757c53',
    date: 201006
  }, {
    name: 'Kohlenwäsche',
    shortName: 'kohlenwaesche',
    category: 'Industrie',
    country: 'Belgien',
    preview: 'images/kohlenwaesche_200.jpg',
    image: 'images/locations/kohlenwaesche.jpg',
    color: '#b34d42',
    date: 201009
  }, {
    name: 'Krematorium D',
    shortName: 'krematorium_d',
    category: 'Medizin',
    country: 'Deutschland',
    preview: 'images/krematorium_d_200.jpg',
    image: 'images/locations/krematorium_d.jpg',
    color: '#000000',
    date: 201203
  }, {
    name: 'Landschaftspark',
    shortName: 'landschaftspark',
    category: 'Industrie',
    country: 'Deutschland',
    preview: 'images/landschaftspark_200.jpg',
    image: 'images/locations/landschaftspark.jpg',
    color: '#00475a',
    date: 201105
  }, {
    name: 'Schlösser in Meckpomm',
    shortName: 'schloesser_meckpomm',
    category: 'Wohnen',
    country: 'Deutschland',
    preview: 'images/schloesser_meckpomm_200.jpg',
    image: 'images/locations/schloesser_meckpomm.jpg',
    color: '#8fa33b',
    date: 201108
  }, {
    name: 'Monestary',
    shortName: 'monestary',
    category: 'Bildung / Freizeit',
    country: 'Benelux / Frankreich',
    preview: 'images/monestary_200.jpg',
    image: 'images/locations/monestary.jpg',
    color: '#adb45c',
    date: 201007
  }, {
    name: 'Mühle des Schreckens',
    shortName: 'muehle_d_sch',
    category: 'Industrie',
    country: 'Deutschland',
    preview: 'images/muehle_d_sch_200.jpg',
    image: 'images/locations/muehle_d_sch.jpg',
    color: '#6bafc3',
    date: 201304
  }, {
    name: 'Nebelhotel',
    shortName: 'nebelhotel',
    category: 'Wohnen',
    country: 'Deutschland',
    preview: 'images/nebelhotel_200.jpg',
    image: 'images/locations/nebelhotel.jpg',
    color: '#523e34',
    date: 201211
  }, {
    name: 'Papierfabrik W',
    shortName: 'papierfabrik_w',
    category: 'Industrie',
    country: 'Deutschland',
    preview: 'images/papierfabrik_w_200.jpg',
    image: 'images/locations/papierfabrik_w.jpg',
    color: '#529753',
    date: 201211
  }, {
    name: 'Presswerk am Fluss',
    shortName: 'presswerk',
    category: 'Industrie',
    country: 'Deutschland',
    preview: 'images/presswerk_200.jpg',
    image: 'images/locations/presswerk.jpg',
    color: '#153549',
    date: 200912 // vom letzten Besuch 2011 keine Bilder drin
  }, {
    name: 'Relais de Ballons',
    shortName: 'relais_des_ballons',
    category: 'Bildung / Freizeit',
    country: 'Benelux / Frankreich',
    preview: 'images/relais_des_ballons_200.jpg',
    image: 'images/locations/relais_des_ballons.jpg',
    color: '#372630',
    date: 201304
  }, {
    name: 'Sinteranlage',
    shortName: 'sinteranlage',
    category: 'Industrie',
    country: 'Deutschland',
    preview: 'images/sinteranlage_200.jpg',
    image: 'images/locations/sinteranlage.jpg',
    color: '#8b4a24',
    date: 200910
  }, {
    name: 'Spreepark',
    shortName: 'spreepark',
    category: 'Bildung / Freizeit',
    country: 'Deutschland',
    preview: 'images/spreepark_200.jpg',
    image: 'images/locations/spreepark.jpg',
    color: '#773340',
    date: 201010
  }, {
    name: 'Stadtbad',
    shortName: 'stadtbad',
    category: 'Bildung / Freizeit',
    country: 'Deutschland',
    preview: 'images/stadtbad_200.jpg',
    image: 'images/locations/stadtbad.jpg',
    color: '#c5af5c',
    date: 0
  }, {
    name: 'Werkzeugmaschinenfabrik',
    shortName: 'werkzeugmaschinenfabrik',
    category: 'Industrie',
    country: 'Deutschland',
    preview: 'images/werkzeugmaschinenfabrik_200.jpg',
    image: 'images/locations/werkzeugmaschinenfabrik.jpg',
    color: '#606d49',
    date: 201207
  }, {
    name: 'Terre Rouge',
    shortName: 'terrerouge',
    category: 'Industrie',
    country: 'Benelux / Frankreich',
    preview: 'images/terre_rouge_200.jpg',
    image: 'images/locations/terre_rouge.jpg',
    color: '#c38127',
    date: 201002
  }, {
    name: 'Tschernobyl',
    shortName: 'tschernobyl',
    category: 'Wohnen',
    country: 'Polen / Ukraine',
    preview: 'images/tschernobyl_200.jpg',
    image: 'images/locations/tschernobyl.jpg',
    color: '#a88d24',
    date: 201605
  }];
  return {
    locations: function() {
      return locations;
    }
  };
});
