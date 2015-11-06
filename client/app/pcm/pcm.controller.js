'use strict';

angular.module('adamantSniffleApp')
  .controller('PcmCtrl', function($scope) {
    $scope.obj = {
      'section': 'Style',
      'changeSection': function(section) {
        $scope.obj.section = section;
      }
    };
    $scope.message = 'Hello';
  });
