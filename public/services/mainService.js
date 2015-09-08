'use strict';

var app = angular.module('hensleeApp');

app.service('mainService', function ($http, $q) {

    this.addReview = function (review) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: '/api/review',
            data: review
        }).then(function (result) {
            // console.log('mainService line 14 - res.data.message: ', result.data);
            deferred.resolve(result.data);
        });
        return deferred.promise;
    };

    this.getReviews = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/api/reviews'
        }).then(function (result) {
            // console.log('mainService line 26 - res: ', result);
            deferred.resolve(result.data);
        })
        return deferred.promise;
    };
    
     this.deleteReview = function(id) {
        var deferred = $q.defer();
        $http({
            method: "DELETE",
            url: 'api/reviews/' + id,   //has to match endpoint
        }).then(function(result) {
            // console.log('mainService line 37 - res: ', result)
            deferred.resolve(result.data);
        });
        return deferred.promise
    }
    
    this.sendMail = function(data){
         return $http({
             method: "POST",
             url: '/contact-form',
             data: data
         })
    }
    
});

