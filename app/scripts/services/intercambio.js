'use strict';

angular.module('clienteIntercambealoApp')
.service('Intercambio', function ($resource) {
    return $resource('http://localhost:3000/v1/transactions/:id');

});
