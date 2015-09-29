var firstApp = angular.module('firstApp', []);

firstApp.controller('FirstCtrl',
    ['$scope',
    function($scope){
      $scope.title = "HELLO WORLD FOR REAL";
      $scope.dogs = ['Schnauzer',
                     'Poodle',
                     'Puggle',
                     'Labradoodle'];
    }]);