'use strict';

var app = angular.module('hensleeApp');

app.controller('ReviewCtrl', function (mainService, recentReviews) {

    var vm = this;
    vm.reviews = recentReviews;
    vm.addReview = function () {
             // console.log('ReviewCtrl line 10: ');
        mainService.addReview(vm.newReview).then(function (res) {
            // console.log('res from ReviewCtrl in line 12: ', res);
            vm.reviews = res
        });
    };
});