'use strict';

angular.module('adamantSniffleApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('pcm.sizeChart', {
        url: '/size-chart',
        templateUrl: 'app/sizeChart/sizeChart.html',
        controller: 'SizeChartCtrl'
      });
  });
