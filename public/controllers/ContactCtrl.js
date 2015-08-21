'use strict'

var app = angular.module('hensleeApp');

app.controller('ContactCtrl', function($scope, contactService){
  $scope.message = 'Testing routing Hell!';
});