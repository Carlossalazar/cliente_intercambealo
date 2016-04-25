'use strict';

angular.module('clienteIntercambealoApp')
.controller('AllProductsCtrl', function ($scope, $http, $route, Product, MisProductos,
    $localStorage, $rootScope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.products = Product.query(function() {
            $('#seleccionado').hide();
        }, function (error) {
            console.log(error);
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
            Intercambio.save({product_req_id: data.product_req_id,
                product_offered_id: data.product_offered_id},function(commit) {
                    swal("Transacción Realizada con éxito!", "Enviamos la peticion al dueño del producto", "success");
                    $scope.productos = MisProductos.query(function() {

                    }, function (error) {
                        console.log(error);
                    });
                },function(error) {
                    console.log(error);
                });
            }
        });
