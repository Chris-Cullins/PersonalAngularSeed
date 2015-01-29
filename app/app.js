(function () {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('myApp', [
    'ngRoute'
    ]).
    config(['$routeProvider', function($routeProvider) {
          $routeProvider.when('/', {templateUrl: 'views/landingpage.html', controller: 'LandingPageController'});
    }]);

})();
