'use strict';

angular.module('adamantSniffleApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('pcm.collection', {
        url: '/collection',
        templateUrl: 'app/collection/collection.html',
        controller: 'CollectionCtrl'
      });
  });
