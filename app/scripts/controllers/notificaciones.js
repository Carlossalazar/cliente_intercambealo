'use strict';

angular.module('clienteIntercambealoApp')
.controller('NotificacionesCtrl', function (Product, Intercambio,$scope,$localStorage, $http, $route, $location, User) {
    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $scope.pendientes  = Intercambio.query(function(data) {
        aceptarintercambio();
    });

    $scope.pasardatos = function(mios, ofertados, id) {
        $scope.mio = Product.get({id:mios});
        $scope.ofertado = Product.get({id:ofertados});
        $localStorage.interambio = id;
        $('#pasardatos').show();

    };
    $scope.aceptarintercambio = function name() {
        var id = localStorage.getItem("ngStorage-interambio");
        $http.put('http://localhost:3000/v1/transactions/'+id, {accept_chance: true });

        $scope.pendientes  = Intercambio.query();

    };
    $scope.rechazarintercambio = function() {
        var id = localStorage.getItem("ngStorage-interambio");
        Intercambio.delete({'id': id}, function(data) {
            $scope.pendientes  = Intercambio.query();


        }, function(error) {
            console.log('There was an error loading', error.statusText);
        });
    };
    //
});
