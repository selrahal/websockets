'use strict';

// Declare app level module which depends on filters, and services
angular.module('webSockets', ['ngRoute']).
  config(['$routeProvider','$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider.when('/home', {templateUrl: 'app/home.html'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
