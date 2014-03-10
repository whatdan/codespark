'use strict';

angular.module('codesparkApp.controllers',[])

.controller('loadCode',function($scope,$http) {

	 $http({method: 'GET', url: '/code/devqin/server.coffee'}).
    success(function(data, status, headers, config) {
	$scope.view = data;
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

})
