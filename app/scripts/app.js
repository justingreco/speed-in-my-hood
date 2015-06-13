'use strict';

/**
 * @ngdoc overview
 * @name speedInMyHoodApp
 * @description
 * # speedInMyHoodApp
 *
 * Main module of the application.
 */
angular
  .module('speedInMyHoodApp', [

    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
