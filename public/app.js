// Create Angular
  var appName = angular.module('viewName', ['ngRoute']);

  appName.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/javascripts/partials/html'
    })
    // .when('/partialsName', {
    //   templateUrl: '/javascripts/partials/html'
    // })
    // .when('/partialsName2', {
    //   templateUrl: '/javascripts/partials/html'
    // })
    // .otherwise({
    //   redirectTo: '/'
    // })
})