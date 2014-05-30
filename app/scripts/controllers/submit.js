'use strict';

angular.module('appointmentMakerApp')
  .controller('SubmitCtrl', function ($scope) {
    
    $scope.submittedGig = {confirmed: false};

    $scope.submit = function(formData){
    	$scope.submittedGig = angular.extend($scope.submittedGig, formData);
    }

    //TODO: use the Gigs service to push this to an array of gigs hosted on the server.


  });
