'use strict';

angular.module('clienteIntercambealoApp')
.controller('MisProductosCtrl', function ($scope, $http, $resource, $route,
    Product, MisProductos, Test, $location, $localStorage, $rootScope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.productos = MisProductos.query(function() {

        }, function (error) {
            console.log(error);
        });

        $scope.new = function() {
            if(!( $.trim($("#name").val()) == "" || $.trim($("#description").val()) == "")){
                Product.save({name:producto.name, description:producto.description,
                    state: true},function(data) {
                        $("#exampleModal").modal('hide');
                        swal("Producto Creado con Exito!", "Nombre del producto: " + data.name, "success");
                        $("#name").val("");
                        $("#description").val("");
                        $("#state").prop("checked", false);
                        $scope.productos = MisProductos.query(function() {

                        }, function (error) {
                            console.log(error);
                        });

                    },function(error) {
                        console.log('There was an error loading', error.statusText);
                        swal("Error creando productos!", error.e, "error");

                    });

                }else {
                    swal("Error, Falta algún dato!", "", "error");
                    console.log("datossssssssssssss");
                }
            };

            $scope.actualizarproducto = function(id){
                var data ={
                    name:"",
                    description:"",
                    state:""
                };
                data.name = $("#names").val();
                data.description = $("#descriptions").val();
                data.state = $("#states").prop("checked");
                $http.put('http://localhost:3000/v1/products/'+id,
                {name: data.name, description: data.description, state: data.state });
                $("#updateModal").modal('hide');
                $scope.productos = MisProductos.query(function() {

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
                if (datos.state == true) {
                    $("#states").prop("checked", true);
                }else {
                    $("#states").prop("checked", false);
                }
            };
        });
