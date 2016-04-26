'use strict';

angular.module('clienteIntercambealoApp')
.controller('AllProductsCtrl', function ($location, $scope, $http, $route, Product, MisProductos, Intercambio,
    $localStorage, $rootScope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.products = Product.query(function(data) {

            $('#todos').show();
            $('#seleccionado').hide();


        }, function (error) {
            console.log(error);
            if (error.status == 401) {
                $('#todos').hide();
                $location.path("/");


            }
            $('#seleccionado').hide();
        });

        $scope.productos = MisProductos.query(function() {

        }, function (error) {
            console.log(error);
        });

        $scope.producto = function(id) {
            $scope.producto = Product.get({id:id},function() {

            }, function (error) {
                console.log(error);
            });
            $('#todos').hide();
            $('#seleccionado').show();


        };

        $scope.crearintercambio = function(ofertado, requerido) {
            var data =
            {
                product_req_id: requerido,
                product_offered_id: ofertado
            };
            debugger;
            Intercambio.save({product_req_id: data.product_req_id,
                product_offered_id: data.product_offered_id},function(commit) {
                    $scope.productos = MisProductos.query(function() {
                        $('#todos').show();
                        $('#seleccionado').hide();
                    }, function (error) {
                        console.log(error);
                    });
                },function(error) {
                    console.log(error);
                });
            }
        });
