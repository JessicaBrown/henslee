'use strict';

var app = angular.module('hensleeApp');

app.controller('PlumbingCtrl', function ($scope, plumbingService) {
    $scope.message = 'Inside the Plumbing Controller';
});