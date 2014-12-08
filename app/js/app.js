'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.controllers',
  'myApp.services',
  'myApp.directives',
  'myApp.filters'
]).
config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {templateUrl: 'partials/landingpage.html', controller: 'LandingPageCtrl'});
}]);
