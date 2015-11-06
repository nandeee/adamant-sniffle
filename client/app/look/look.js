'use strict';

angular.module('adamantSniffleApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('pcm.look', {
        url: '/look',
        templateUrl: 'app/look/look.html',
        controller: 'LookCtrl'
      });
  });
