angular.module('PancakeFrontEnd').config(function($routeProvider, $locationProvider) {
  //$locationProvider.html5Mode(true);
  $routeProvider.
  when("/", {
    templateUrl: "app/components/new-client/newClient.html",
    controller: "newClientController",
    title: 'Binary Wasteland - New Client Signup'
  }).
  otherwise({
    redirectTo: "/"
  });
});
