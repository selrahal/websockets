'use strict';

angular.module('webSockets', ['ngRoute']).
  config(['$routeProvider','$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider.when('/home', {templateUrl: 'app/home.html'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
