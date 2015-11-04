'use strict';

angular.module('adamantSniffleApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('pcm.style', {
        url: '/style',
        templateUrl: 'app/style/style.html',
        controller: 'StyleCtrl'
      });
  });
