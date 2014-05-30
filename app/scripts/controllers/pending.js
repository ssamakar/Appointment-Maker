'use strict';

angular.module('appointmentMakerApp')
  .controller('PendingCtrl', function ($scope) {
    
  	// TODO: use the Gigs service to GET the gigs array from the server;
  	// $scope.gigs = gigs.get();

  	$scope.gigs = [
  		{time: 5},
  		{time: 6}
  	];

  });
