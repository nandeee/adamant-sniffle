'use strict';

angular.module('adamantSniffleApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('pcm.main', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
