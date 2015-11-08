'use strict';

angular.module('adamantSniffleApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngMaterial',
    'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
