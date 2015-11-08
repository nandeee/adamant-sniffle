'use strict';

angular.module('adamantSniffleApp')
  .controller('PcmCtrl', function($scope, $http) {
    $scope.obj = {
      'section': null,
      'subSection': null,
      'subSections': null,
      'changeSection': function(section) {
        $scope.obj.section = section;
        switch (section) {
          case 'style':
            $scope.obj.subSection = 'styleState';
            break;
          case null:
            $scope.obj.subSection = null;
            break;
        };
      }
    };

    $scope.changeSubSection = function(subSection) {
      $scope.obj.subSection = subSection;
    };

    $scope.sections = {
      'style': 'Style',
      'sizeChart': 'Size Chart',
      'category': 'Categories',
      'collection': 'Collections',
      'brand': 'Brands',
      'look': 'Look',
      'filteredList': 'Filtered List'
    };

    $scope.subSections = {
      'style': {
        'firstOne': 'First One',
        'content': 'Content',
        'imageUpload': 'Image Upload',
        'styleState': '(De) Activate Style'
      }
    };

    $scope.makeRequest = function() {
      $http.get('http://localhost:3000/posts/1').then(function(response) {
        console.log(response);
      });
    };
  });
