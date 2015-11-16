'use strict';

angular.module('adamantSniffleApp')
  .factory('StyleService', function($http) {
    return {
      get: function() {
        var url = 'http://localhost:3000/style';
        return $http.get(url).then(function(response) {
          return response.data.data;
        });
      },
      getById: function(id) {
        var url = 'http://localhost:3000/styleById';
        return $http.get(url).then(function(response) {
          return response.data.data;
        });
      }
    };
  });
