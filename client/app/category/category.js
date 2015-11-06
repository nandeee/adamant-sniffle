'use strict';

angular.module('adamantSniffleApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('pcm.category', {
        url: '/category',
        templateUrl: 'app/category/category.html',
        controller: 'CategoryCtrl'
      });
  });
