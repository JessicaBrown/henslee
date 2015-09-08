'use strict';

var app = angular.module('hensleeApp');

app.controller('UpdateCtrl', function (mainService, $location, $scope, updateReviews, $rootScope) {
      //this puts reveiws on scope 
   var af = this; 
   af.reviews = updateReviews;
      // console.log(this.reviews)
    
     //logout
   var ref = new Firebase("https://henslees.firebaseio.com/");
    af.logout = function () {
        ref.unauth();
        $rootScope.authData = '';
        $location.path('/home')
    }
     
    af.deleteReview = function(id) {
             // console.log(id);
    mainService.deleteReview(id).then(function(res) {
            // console.log(res);
           //code below updates deleted reviews
    mainService.getReviews().then(function(updateReviews){
    af.reviews = updateReviews;
            })
        })
    };
})
