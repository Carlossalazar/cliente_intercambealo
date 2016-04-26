'use strict';

/**
* @ngdoc function
* @name clienteIntercambealoApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the clienteIntercambealoApp
*/
angular.module('clienteIntercambealoApp')
.controller('LoginCtrl', function ($route, $scope, $localStorage, $location,
    $sessionStorage, Session, User) {
    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    $scope.login = function() {
        var session = $scope.user;
        Session.save({username: session.username, password: session.password},function(data) {
            $localStorage.token = data.access_token;
            $location.path('/dashboard');

        }, function(error) {
            console.log('There was an error loading', error.statusText);

        });
    };
    $scope.new = function() {
        var user = $scope.user;
        User.save({user},function(data) {
            console.log("user create!");
            $location.path('/');
        }, function(error) {
            console.log('There was an error loading', error.statusText);

        });
    };
});
