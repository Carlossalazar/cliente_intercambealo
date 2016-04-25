'use strict';

angular.module('clienteIntercambealoApp')
.service('Product', function ($resource) {
    return $resource('http://localhost:3000/v1/products/:id');

});
