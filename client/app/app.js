'use strict';

angular.module('adamantSniffleApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngMaterial',
    'ui.bootstrap',
    'ngFileUpload',
    'ui.grid'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/pcm/style');

    $locationProvider.html5Mode(true);
  }).directive('customOnChange', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var onChangeHandler = scope.$eval(attrs.customOnChange);
        element.bind('change', onChangeHandler);
      }
    };
  });
