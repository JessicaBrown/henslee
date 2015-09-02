'use strict';

var app = angular.module('hensleeApp');

app.service('mainService', function ($http, $q) {
    
   this.addReview = function(review) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: '/api/review',
            data: review
        }).then(function(result){
            console.log('dataService line 29 - res.data.message: ', result.data); 
             deferred.resolve(result.data);
        });
        return deferred.promise;
    };
    
        this.getReviews = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/api/reviews'
        }).then(function(result){
            console.log('dataService line 9 - res: ', result);
             deferred.resolve(result.data);
        })
        return deferred.promise;
    };
});
