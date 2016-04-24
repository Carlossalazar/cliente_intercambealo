'use strict';

/**
 * @ngdoc overview
 * @name clienteIntercambealoApp
 * @description
 * # clienteIntercambealoApp
 *
 * Main module of the application.
 */
angular
  .module('clienteIntercambealoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'logins'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'LoginCtrl',
        controllerAs: 'registros'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
