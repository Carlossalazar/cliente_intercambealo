'use strict';

angular.module('clienteIntercambealoApp')
.controller('MisProductosCtrl', function ($scope, $http, $resource, $route,
    Product, MisProductos, $location, $localStorage, $rootScope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.productos = MisProductos.query(function() {
            $('#nuevo').hide();
            $('#mostar').hide();
            $('#actualizar').hide();
        }, function (error) {
            $('#nuevo').hide();
            $('#mostar').hide();
            $('#actualizar').hide();
            console.log(error);
            if (error.status == 401) {
                $location.path("/");
            }
        });

        $scope.ocultar = function() {
            $('#misproductos').hide();
            $('#nuevo').show();
            $('#ocultar').hide();
            $('#mostar').show();
        };

        $scope.mostar = function() {
            $('#misproductos').show();
            $('#nuevo').hide();
            $('#ocultar').show();
            $('#mostar').hide();
            $('#actualizar').hide();

        };

        $scope.new = function() {

            if(!( $.trim($("#name").val()) == "" || $.trim($("#description").val()) == "")){
                Product.save({name:$("#name").val(), description:$("#description").val(),
                state: true},function(data) {
                    $("#name").val("");
                    $("#description").val("");
                    $scope.productos = MisProductos.query(function() {
                        $('#misproductos').show();
                        $('#nuevo').hide();

                    }, function (error) {
                        console.log(error);
                    });

                },function(error) {
                    console.log('There was an error loading', error.statusText);

                });

            }else {
                console.log("faltan datos");
            }
        };

        $scope.actualizarproducto = function(id){
            var data ={
                name:"",
                description:"",
                state:""
            };
            data.name = $("#nam").val();
            data.description = $("#descriptio").val();
            debugger;
            $http.put('http://localhost:3000/v1/products/'+id,
            {name: data.name, description: data.description });
            $scope.productos = MisProductos.query(function() {
                $('#nuevo').hide();
                $('#mostar').hide();
                $('#actualizar').hide();
                $('#misproductos').show();
                $('#ocultar').show();

            }, function (error) {
                console.log(error);
            });
        };

        $scope.deleteproducto = function(id) {
            Product.delete({'id': id}, function(data) {
                $scope.productos = MisProductos.query(function() {

                }, function (error) {
                    console.log(error);
                });
                $("#updateModal").modal('hide');
                swal("Producto Eliminado =)!", "Buen trabajo!", "success");

            }, function(error) {
                console.log('There was an error loading', error.statusText);
                swal("Error Borrando el producto!", error.e, "error");
            });
        };

        $scope.pasardatos = function(datos){
            $scope.value = datos;
            $('#actualizar').show();
            $('#misproductos').hide();
            $('#ocultar').hide();
            $('#mostar').show();





        };
    });
