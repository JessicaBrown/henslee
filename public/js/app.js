"use strict";
var app = angular.module('hensleeApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/about', {
            templateUrl: '/views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/heatair', {
            templateUrl: 'views/heatair.html',
            controller: 'HeatAirCtrl',
        })
        .when('/plumbing', {
            templateUrl: 'views/plumbing.html',
            controller: 'PlumbingCtrl',
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl',
        })

        .otherwise({
            redirectTo: '/home'
        });
});
