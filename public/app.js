// Create Angular
  var appBucket = angular.module('bucketApp', ['ngRoute']);

  appBucket.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/partials/home_page.html'
    })
    .when('/home_page', {
      templateUrl: '/javascripts/partials/html'
    })
    // .when('/partialsName2', {
    //   templateUrl: '/javascripts/partials/html'
    // })
    // .otherwise({
    //   redirectTo: '/'
    // })
})