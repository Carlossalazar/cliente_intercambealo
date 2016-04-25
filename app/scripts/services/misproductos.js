'use strict';

angular.module('clienteIntercambealoApp')
.service('MisProductos', function ($resource) {
    return $resource('http://localhost:3000/v1/all');

});
