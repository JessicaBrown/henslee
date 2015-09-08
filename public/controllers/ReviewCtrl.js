'use strict';

var app = angular.module('hensleeApp');

app.controller('ReviewCtrl', function (mainService, recentReviews,$scope, $http, $mdToast, $animate) {

       $scope.toastPosition = {
            bottom: true,
            top: false,
            left: true,
            right: true
        };
        
        $scope.getToastPosition = function () {
            return Object.keys($scope.toastPosition)
                .filter(function (pos) {
                    return $scope.toastPosition[pos];
                })
                .join(' ');
        };
        
         var vm = this;
         vm.reviews = recentReviews;
         vm.addReview = function () {
             // console.log('ReviewCtrl line 10: ');
         mainService.addReview(vm.newReview).then(function (res) {
            // console.log('res from ReviewCtrl in line 12: ', res);
         vm.reviews = res
           // clears form after submitting
         vm.newReview.name = '',
         vm.newReview.review = ''          
        });
                
         $mdToast.show(
         $mdToast.simple()
         .content('Thanks for the review!')
         .position($scope.getToastPosition())
         .hideDelay(5000));
         };
});
    