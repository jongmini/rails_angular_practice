// including ngRoute as a dependency for our app, so we can support routing.

angular.module('myApp', ['ngRoute','myApp.controllers', 'myApp.services'])
.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: '/templates/dashboard.html',
    controller: 'HomeController'
  })
  .otherwise({redirectTo: '/'});
});