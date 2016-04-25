'use strict';

/**
 * @ngdoc overview
 * @name clienteIntercambealoApp
 * @description
 * # clienteIntercambealoApp
 *
 * Main module of the application.
 */
var app = angular
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
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'AllProductsCtrl',
        controllerAs: 'allProducts'
      })
      .when('/registrarproductos', {
        templateUrl: 'views/registrarproductos.html',
        controller: 'MisProductosCtrl',
        controllerAs: 'misProducts'
      })
      .when('/notificaciones', {
        templateUrl: 'views/notificaciones.html',
        controller: 'NotificacionesCtrl',
        controllerAs: 'notifica'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  app.config(function($httpProvider)
{
    $httpProvider.interceptors.push('RequestHeadersInterceptor');
});

app.factory("RequestHeadersInterceptor", function()
{
    var request = function request(config)
    {
        config.headers["Authorization"] ="Token token="+ sessionStorage.getItem("ngStorage-token");
        console.log(config);
        return config;
    };

    return {
        request: request
    };
});
