'use strict';

var app = angular.module('hensleeApp');

app.controller('ContactCtrl',
    function ($scope, $http, $mdToast, $animate, mainService) {
        var cf = this;
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

        this.sendMail = function () {
            // console.log(this);
            var data = {
                contactName: this.contactName,
                contactEmail: this.contactEmail,
                contactMsg: this.contactMsg,
            };
            
            mainService.sendMail(data).then(function(response){
                 $mdToast.show(
                    $mdToast.simple()
                    .content('Thanks for contacting us. We appreciate your business!')
                    .position($scope.getToastPosition())
                    .hideDelay(5000)
                );
                
            cf.contactName = '',
            cf.contactEmail = '',
            cf.contactMsg = ''
            })
        };
});
