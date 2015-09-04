'use strict';

var app = angular.module('hensleeApp');

app.controller('AdminCtrl', function (mainService, $location, $scope, updateReviews, $rootScope) {
    var af = this;

    var ref = new Firebase("https://henslees.firebaseio.com/");
    this.loginAdmin = function () {
        console.log('*****LOGIN******');
        ref.authWithPassword({
            email: af.email,
            password: af.password
        }, function (error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                //redirect to admin page to delete reviews
                console.log("Authentication successfully with payload:", authData);
                $rootScope.authData = authData;
                $location.path('/update')
                $scope.$apply()
            }
        });
    }
})
