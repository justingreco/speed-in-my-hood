'use strict';

/**
 * @ngdoc function
 * @name speedInMyHoodApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the speedInMyHoodApp
 */
angular.module('speedInMyHoodApp')
  .controller('MainCtrl', function ($scope) {
    $scope.searches = [{label: 'Neighborhood'}, {label:'Address'}];
  });
