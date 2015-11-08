'use strict';

angular.module('adamantSniffleApp')
  .controller('StyleCtrl', function($scope) {
    $scope.obj.section = 'style';
    $scope.obj.subSection = 'firstOne';
    $scope.fields = {
      'firstLevel': {
        'id': {
          'label': null,
          'type': 'text',
          'model': null,
          'section': null
        }
      },
      'basicInformation': {
        'styleId': {
          'label': 'Style ID',
          'type': 'text',
          'model': null,
          'section': null
        },
        'level1Category': {
          'label': 'level1Category',
          'type': 'number',
          'model': null,
          'section': null
        },
        'level2Category': {
          'label': 'level2Category',
          'type': 'textarea',
          'model': null,
          'section': null
        },
        'level3Category': {
          'label': 'level3Category',
          'type': 'checkbox',
          'model': false,
          'section': null
        },
        'baseColor': {
          'label': 'Base Color',
          'type': 'text',
          'model': [],
          'section': null,
          'inputType': 'array',
          'options': ['one', 'two', 'three', 'five', 'six', 'seven', 'eight']
        },
        'baseProduct': {
          'label': 'Base Product',
          'type': 'text',
          'model': null,
          'section': null
        },
        'colors': {
          'label': 'Colors',
          'type': 'text',
          'model': null,
          'section': null,
          'inputType': 'select',
          'options': ['one', 'two', 'three']
        },
        'vendorArticleNumber': {
          'label': 'Vendor Article Number',
          'type': 'text',
          'model': null,
          'section': null
        },
        'vendorArticleName': {
          'label': 'vendorArticleName',
          'type': 'text',
          'model': null,
          'section': null
        },
        'ageGroup': {
          'label': 'Age Group',
          'type': 'text',
          'model': null,
          'section': null
        },
        'fashionType': {
          'label': 'Fashion Type',
          'type': 'text',
          'model': null,
          'section': null
        },
        'year': {
          'label': 'Year',
          'type': 'text',
          'model': null,
          'section': null
        },
        'sizes': {
          'label': 'Sizes',
          'type': 'text',
          'model': [],
          'section': null,
          'inputType': 'array',
          'options': ['one']
        },
        'specificAttributes': {
          'label': 'specificAttributes',
          'type': 'text',
          'model': null,
          'section': null
        },
        'brand': {
          'label': 'Brand',
          'type': 'text',
          'model': null,
          'section': null
        },
        'occasion': {
          'label': 'Occasion',
          'type': 'text',
          'model': null,
          'section': null
        },
      }
    };

    $scope.sideMenu = {
      'style': {
        'one-l1': {
          'name': 'Men',
          'open': false,
          'leafNode': false,
          'subMenu': {
            'one-l2': {
              'name': 'Apparel',
              'open': false,
              'leafNode': false,
              'subMenu': {
                'one-l3': {
                  'name': 'T-Shirts',
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

    $scope.styleList = ['NTS536360TB', 'NTS536373UW', 'NTS536370TB', 'NTS536371TB', 'NTS536372TB', 'NTS536373TB', 'NTS536374TB'];

    $scope.toggleMenu = function(value) {
      value.open = !value.open;
    };

    $scope.querySearch = function querySearch(query, options) {
      var results = query ? options.filter(createFilterFor(query)) : options;
      return results;
    };

    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(item) {
        if (typeof item === 'number') {
          item = item.toString();
        };
        return angular.lowercase(item).indexOf(lowercaseQuery) !== -1;
      };
    };
  });
