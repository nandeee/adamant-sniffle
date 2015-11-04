'use strict';

angular.module('adamantSniffleApp')
  .controller('MainCtrl', function($scope) {
    $scope.links = {
      'style': 'Style',
      'sizeChart': 'Size Chart',
      'category': 'Categories',
      'Collection': 'Collections',
      'brand': 'Brands',
      'look': 'Look',
      'filteredList': 'Filtered List'
    };
  });
