'use strict';

var app = angular.module('hensleeApp');

app.controller('ContactCtrl',
    function ($scope, $http, $mdToast, $animate) {

        $scope.toastPosition = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };
        $scope.getToastPosition = function () {
            return Object.keys($scope.toastPosition)
                .filter(function (pos) {
                    return $scope.toastPosition[pos];
                })
                .join(' ');
        };

        this.sendMail = function () {
            console.log(this);
            var data = {
                contactName: this.contactName,
                contactEmail: this.contactEmail,
                contactMsg: this.contactMsg,
            };

            $http.post('/contact-form', data).
            success(function (data, status, headers, config) {

                $mdToast.show(
                    $mdToast.simple()
                    .content('Thanks for contacting us. We appreciate your business!')
                    .position($scope.getToastPosition())
                    .hideDelay(10000)
                );
            }).
            error(function (data, status, headers, config) {});
        };
    }
);
