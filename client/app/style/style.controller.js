'use strict';

angular.module('adamantSniffleApp')
  .controller('StyleCtrl', function($scope) {
    $scope.sideMenu = {
      'style': {
        'one-l1': {
          'name': 'One L1',
          'open': false,
          'leafNode': false,
          'subMenu': {
            'one-l2': {
              'name': 'One L2',
              'open': false,
              'leafNode': false,
              'subMenu': {
                'one-l3': {
                  'name': 'One L3',
                  'open': false,
                  'leafNode': true,
                  'subMenu': null
                }
              }
            }
          }
        },
        'two-l1': {
          'name': 'Two L1',
          'open': false,
          'leafNode': false,
          'subMenu': {
            'two-l2': {
              'name': 'Two L2',
              'open': false,
              'leafNode': true,
              'subMenu': {
                'one-l3': {
                  'name': 'One L3',
                  'open': false,
                  'leafNode': true,
                  'subMenu': null
                }
              }
            }
          }
        },
        'three-l1': {
          'name': 'Three L1',
          'open': false,
          'leafNode': true,
          'subMenu': null
        },
        'four-l1': {
          'name': 'Four L1',
          'open': false,
          'leafNode': true,
          'subMenu': null
        },
        'five-l1': {
          'name': 'Five L1',
          'open': false,
          'leafNode': true,
          'subMenu': null
        },
        'six-l1': {
          'name': 'Six L1',
          'open': false,
          'leafNode': true,
          'subMenu': null
        },
        'seven-l1': {
          'name': 'Seven L1',
          'open': false,
          'leafNode': false,
          'subMenu': {
            'seven-l2': {
              'name': 'Seven L2',
              'open': false,
              'leafNode': true,
              'subMenu': {
                'one-l3': {
                  'name': 'One L3',
                  'open': false,
                  'leafNode': true,
                  'subMenu': null
                }
              }
            }
          }
        }
      }
    };

    $scope.toggleMenu = function(value) {
      value.open = !value.open;
    };
  });
