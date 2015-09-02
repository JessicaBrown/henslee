"use strict";
var app = angular.module('hensleeApp', ['ngRoute', 'ui.bootstrap', 'ngMaterial', 'ngAria']);

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
        // .when('/heatair', {
        //     templateUrl: 'views/heatair.html',
        //     controller: 'HeatAirCtrl',
        // })
        // .when('/plumbing', {
        //     templateUrl: 'views/plumbing.html',
        //     controller: 'PlumbingCtrl',
        // })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl',
            controllerAs: 'cf'
        })
          .when('/review', {
            templateUrl: 'views/review.html',
            controller: 'ReviewCtrl',
            controllerAs: 'vm',
            resolve: {
                recentReviews: function(mainService) {
                    return mainService.getReviews();
                }
            }
        })

        .otherwise({
            redirectTo: '/home'
        });
});
