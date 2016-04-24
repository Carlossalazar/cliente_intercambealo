'use strict';

angular.module('clienteIntercambealoApp')
.service('User', function ($resource) {
    return $resource('http://localhost:3000/v1/users/:id');

});
