'use strict';

var app = angular.module('hensleeApp');

app.controller('HomeCtrl', function ($scope, homeService) {
    $scope.message = 'Inside the Home Controller';
});