'use strict';

var app = angular.module('hensleeApp');

app.controller('AdminCtrl', function ($scope, mainService) {
    $scope.message = 'Inside the Admin Controller';
});