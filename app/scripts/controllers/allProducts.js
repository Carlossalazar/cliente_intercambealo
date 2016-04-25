'use strict';

angular.module('clienteIntercambealoApp')
.controller('AllProductsCtrl', function ($scope, $http, $route, Product,
    $localStorage, $rootScope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.products = Product.query(function() {

        }, function (error) {
            console.log(error);
        });

        
        });
