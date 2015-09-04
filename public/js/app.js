"use strict";
var app = angular.module('hensleeApp', ['ngRoute', 'ui.bootstrap', 'ngMaterial', 'ngAria']);

//added app.run for security 
//added to prevent going straight to the update page without logging in 
app.run(function ($rootScope, $location, $route){  
    $rootScope.$on('$routeChangeStart', function(event, next) {
        console.log(next.$$route.originalPath);
        if(next.$$route.originalPath === '/update' && !$rootScope.authData) {
            $location.path('/admin');
        }
    })    
});

//Angular NG-Routing
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
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl',
            controllerAs: 'cf'
        })
        .when('/review', {
            templateUrl: 'views/review.html',
            controller: 'ReviewCtrl',
            controllerAs: 'vm',
            //use resolve to make sure reviews run asynchronously
            resolve: {
                recentReviews: function (mainService) {
                    return mainService.getReviews();
                }
            }
        })
        .when('/admin', {
            controller: 'AdminCtrl',
            templateUrl: '/views/admin.html',
            controllerAs: 'af',
            resolve: {
                updateReviews: function (mainService) {
                    return mainService.getReviews();
                }
            }
        })
        .when('/update', {
            controller: 'UpdateCtrl',
            templateUrl: 'views/update.html',
            controllerAs: 'af',
            resolve: {
                updateReviews: function (mainService) {
                    return mainService.getReviews();
            }
        }
    })
        .otherwise({
            redirectTo: '/home'
    });
})

.directive('collapseMenu', function () {
    return {
        link: function (scope, elem, attrs) {
            $('.nav a').on('click', function(){
                $('.navbar-toggle').click() //bootstrap 3.x by Richard
            });
        }
    }
});
