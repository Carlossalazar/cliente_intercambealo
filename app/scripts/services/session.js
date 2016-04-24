'use strict';

angular.module('clienteIntercambealoApp')
.service('Session', function ($resource) {
    return $resource('http://localhost:3000/v1/sessions/:id');

});
