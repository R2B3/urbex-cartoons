'use strict';

/**
 * @ngdoc function
 * @name urbexCartoonsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the urbexCartoonsApp
 */
angular.module('urbexCartoonsApp')
  .controller('MainCtrl', ['$scope', '$filter', '$http', '$routeParams', '$location', 'locationService', 'categoryService', 'countryService',
    function($scope, $filter, $http, $routeParams, $location, locationService, categoryService, countryService) {

      $scope.categories = categoryService.categories();
      $scope.countries = countryService.countries();

      $scope.locations = $filter('orderBy')(locationService.locations(), 'date', true);
      $scope.filteredLocations = $scope.locations;

      $scope.selectedCategory = {
        name: ''
      };

      if ($routeParams.locationShortName) {
        var location = $filter('filter')($scope.locations, {
          shortName: $routeParams.locationShortName
        })[0];
        if (location) {
          $scope.selectedLocation = location;
        }
      } else {
        $scope.selectedLocation = $scope.filteredLocations[0];
      }

      $scope.resetSelection = function() {
        $scope.selectedCategory = null;
        $scope.selectedCountry = null;
        $scope.filteredLocations = $scope.locations;
        $scope.selectedLocation = $scope.filteredLocations[0];
      };



      $scope.setSelectedCategory = function(c) {
        if (typeof c === 'string') {
          c = $filter('filter')($scope.categories, {
            name: c
          })[0];
        }

        if (!c) {
          return;
        }

        if (c === $scope.selectedCategory) {
          console.log('reset category');
          c = {
            name: ''
          };
        }

        // Filter locations. Within the function the selected category is set
        $scope.filterLocations(c, $scope.selectedCountry, 1);
      };

      $scope.setSelectedCountry = function(c) {
        console.log(c);
        if (typeof c === 'string') {
          c = $filter('filter')($scope.countries, {
            name: c
          })[0];
        }

        if (!c) {
          return;
        }

        if (c === $scope.selectedCountry) {
          console.log('reset country');
          c = {
            name: ''
          };
        }

        // Filter locations
        $scope.filterLocations($scope.selectedCategory, c, 2);
      };

      $scope.filterLocations = function(category, country, preference) {
        var filteredLocations;
        if (category && country) {
          console.log('filter for category and country');
          filteredLocations = $filter('filter')($scope.locations, {
            category: category.name,
            country: country.name
          });
        }

        if (!filteredLocations || filteredLocations.length === 0) {
          console.log('no filtered locations');
          switch (preference) {
            case 1:
              console.log('filter for category ' + category.name);
              $scope.selectedCategory = category;
              $scope.selectedCountry = null;
              filteredLocations = $filter('filter')($scope.locations, {
                category: category.name
              });
              break;
            case 2:
              console.log('filter for country ' + country.name);
              $scope.selectedCategory = null;
              $scope.selectedCountry = country;
              filteredLocations = $filter('filter')($scope.locations, {
                country: country.name
              });
          }

          if (filteredLocations.length === 0) {
            console.log('Filter returned no result. Reset country and category');
            $scope.selectedCountry = null;
            $scope.selectedCategory = null;
            filteredLocations = $scope.locations;
          }
        } else {
          $scope.selectedCategory = category;
          $scope.selectedCountry = country;
        }
        console.log(filteredLocations);
        $scope.filteredLocations = filteredLocations;

        // check if selected location is part of the filtered locations. If not, reset selected location
        if ($scope.filteredLocations.indexOf($scope.selectedLocation) < 0) {
          console.log('current location does not fit new filter. reset');
          $scope.setSelectedLocation(null);
        }
      };

      $scope.setSelectedLocation = function(l) {

        if (l) {
          $scope.selectedLocation = l;
          //$scope.filteredLocations.splice(  $scope.filteredLocations.indexOf(l), 1);
          //$scope.filteredLocations.unshift(l);
        } else {
          $scope.selectedLocation = $scope.filteredLocations[0];
        }
        //$location.url($scope.selectedLocation.shortName);
      };

      $scope.nextLocation = function(step) {
        if (!step) {
          return;
        }
        var currentIndex = $scope.filteredLocations.indexOf($scope.selectedLocation);
        console.log(currentIndex);
        var newIndex;
        // positve step: end of images is reached. go back to 0
        if (currentIndex + step > $scope.filteredLocations.length - 1) {
          newIndex = 0;
        } else if (currentIndex + step < 0) { // negative step: beginning of images is reached. go back to last one
          newIndex = $scope.filteredLocations.length - 1;
        } else {
          newIndex = currentIndex + step;
        }
        $scope.selectedLocation = $scope.filteredLocations[newIndex];
      };

      $scope.mouseOverLocation = null;
      $scope.setMouseOverLocation = function(l) {
        $scope.mouseOverLocation = l;
      };

      $scope.mouseOverCategory = null;
      $scope.setMouseOverCategory = function(c) {
        $scope.mouseOverCategory = c;
      };

      $scope.mouseOverCountry = null;
      $scope.setMouseOverCountry = function(c) {
        $scope.mouseOverCountry = c;
      };

      $scope.showImpressum = false;
      $scope.toggleShowImpressum = function() {
        $scope.showImpressum = !$scope.showImpressum;
      };


    }
  ]);
