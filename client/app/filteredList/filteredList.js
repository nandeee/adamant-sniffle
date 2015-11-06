'use strict';

angular.module('adamantSniffleApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('pcm.filteredList', {
        url: '/filtered-list',
        templateUrl: 'app/filteredList/filteredList.html',
        controller: 'FilteredListCtrl'
      });
  });
