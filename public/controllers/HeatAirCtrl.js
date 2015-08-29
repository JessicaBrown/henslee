'use strict';

var app = angular.module('hensleeApp');

app.controller('HeatAirCtrl', function ($scope, mainService) {
    $scope.message = 'Inside the Plumbing Controller';
       $scope.myInterval = 3000;
   $scope.noWrapSlides = false;

   var slides = $scope.slides = [
        { image: '../images/newAircon.jpg' },
           { image: '../images/check.jpg' },
           { image: '../images/goodman.jpg' },
           { image: '../images/airC.jpg' },
           { image: '../images/air34.jpg' },
           { image: '../images/trane-commercial.jpg' },
           { image: '../images/traneFurn.jpg' },
           { image: '../images/ducts.jpg' },
           { image: '../images/waterline.jpg' },
       
   ];
   $scope.addSlide = function () {
       // var newWidth = 600 + slides.length + 1;
       // slides.push(
           
           
       // });
   };
   // for (var i = 0; i < 4; i++) {
    //    $scope.addSlide();
   // }
});