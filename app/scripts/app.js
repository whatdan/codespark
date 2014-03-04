'use strict';

angular.module('codesparkApp',['ngRoute'])
.config(['$routeProvider',function ($routeProvider) {
      $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .when('/register', {
          templateUrl: 'views/register.html',
          controller: 'regCtrl'
      })
      .when('/', {
          templateUrl: 'views/index.html',
          controller: 'indexCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}])
.controller('loginCtrl',function($scope) {

})
.controller('regCtrl',function($scope) {

});
