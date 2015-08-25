'use strict';

var app = angular.module('hensleeApp');

app.controller('AboutCtrl', function ($scope, aboutService) {
    $scope.message = 'Inside the About Controller';
});