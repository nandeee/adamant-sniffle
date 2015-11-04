'use strict';

angular.module('adamantSniffleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pcm', {
        url: '/pcm',
        templateUrl: 'app/pcm/pcm.html',
        controller: 'PcmCtrl'
      });
  });