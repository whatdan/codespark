'use strict';

angular.module('codesparkApp',['ngRoute','codesparkApp.controllers'])
.config(['$routeProvider',function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/index.html',
		controller: 'indexCtrl'
	})
	.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'loginCtrl'
	})
	.when('/register', {
		templateUrl: 'views/register.html',
		controller: 'regCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
