'use strict';

angular.module('adamantSniffleApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('pcm.brand', {
        url: '/brand',
        templateUrl: 'app/brand/brand.html',
        controller: 'BrandCtrl'
      });
  });
