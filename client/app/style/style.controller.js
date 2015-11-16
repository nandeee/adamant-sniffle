'use strict';

angular.module('adamantSniffleApp')
  .controller('StyleCtrl', function($scope, StyleService) {
    $scope.obj.section = 'style';
    $scope.obj.subSection = 'qc';
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
    $scope.qcFields = {};
    $scope.qcFieldsSpecificAttributes = {};

    $scope.labelMapping = {
      'styleId': 'Style ID',
      'level1Category': 'level1Category',
      'level2Category': 'level2Category',
      'level3Category': 'level3Category',
      'baseColor': 'Base Color',
      'baseProduct': 'Base Product',
      'colors': 'Colors',
      'vendorArticleNumber': 'Vendor Article Number',
      'vendorArticleName': 'Vendor Article Name',
      'ageGroup': 'Age Group',
      'fashionType': 'Fashion Type',
      'year': 'Year',
      'sizes': 'Sizes',
      'brand': 'Brand',
      'occasion': 'Occasion',
      'sleeve': 'Sleeve',
      'neck': 'Neck'
    }

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
                  'subMenu': null,
                  'selected': false,
                  'path': 'something.test.asdf'
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

    $scope.changeStyleSelection = function(value) {
      console.log(value);
      if (!value.selected) {
        value.selected = true;
      };
    }

    var myData = [];

    $scope.styleList = ['NTS536360TB', 'NTS536373UW', 'NTS536370TB', 'NTS536371TB', 'NTS536372TB', 'NTS536373TB', 'NTS536374TB'];

    $scope.getById = function getById() {
      StyleService.getById().then(function(response) {
        for (var prop in response.basicInformation) {
          if (prop === 'specificAttributes') {
            for (var field in response.basicInformation.specificAttributes) {
              if (Array.isArray(response.basicInformation.specificAttributes[field])) {
                console.log('<< Array >>');
                $scope.qcFieldsSpecificAttributes[field] = response.basicInformation.specificAttributes[field].join(', ');
              } else {
                $scope.qcFieldsSpecificAttributes[field] = response.basicInformation.specificAttributes[field];
              };
            }
            continue;
          };
          console.log('--> ' + prop);
          if (Array.isArray(response.basicInformation[prop])) {
            console.log('<< Array >>');
            $scope.qcFields[prop] = response.basicInformation[prop].join(', ');
          } else {
            $scope.qcFields[prop] = response.basicInformation[prop];
          };
          console.log(response.basicInformation[prop]);
        }
      });
    };

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

    $scope.handleFileUpload = function(e) {
      console.log(e);
    };

    var baseGridItem = {
      'select': null,
      'status': null,
      'styleId': null,
      'baseProduct': null,
      'brand': null,
      'ageGroup': null,
      'baseColor': null
    };

    $scope.gridOptions = {
      data: myData,
      enableFiltering: true,
      columnDefs: [{
        visible: false,
        name: 'field1',
        displayName: 'pretty display name'
      }, {
        visible: false,
        name: 'field2',
        displayName: 'somethingelse'
      }, {
        visible: false,
        name: 'firstName',
        displayName: 'something',
        width: 200
      }, {
        name: 'select',
        enableSorting: false,
        enableFiltering: false,
        width: 80,
        cellTemplate: '<div class="grid-checkbox" layout layout-align="center center"><md-checkbox md-no-ink aria-label="Checkbox No Ink" ng-model="row.entity[col.field]" class="md-primary"></md-checkbox></div>'
      }, {
        name: 'status'
      }, {
        name: 'styleId'
      }, {
        name: 'baseProduct'
      }, {
        name: 'brand'
      }, {
        name: 'ageGroup'
      }, {
        name: 'baseColor'
      }]
    };

    var gridItemObj = {
      'status': null,
      'basicInformation': {
        'styleId': null,
        'baseProduct': null,
        'brand': null,
        'ageGroup': null,
        'baseColor': null
      }
    };

    $scope.tempScopeObj = [];

    function iterateGridItem(obj, responseObj, tempGridItem) {
      for (var prop in obj) {
        if (obj[prop] !== null) {
          iterateGridItem(obj[prop], responseObj[prop], tempGridItem);
        } else {
          if (Array.isArray(responseObj[prop])) {
            tempGridItem[prop] = responseObj[prop].join(', ');
          } else {
            tempGridItem[prop] = responseObj[prop];
          };
        };
      }
    }

    function generateGridItemList(response) {
      for (var i = 0; i < response.length; i++) {
        var tempGridItem = angular.copy(baseGridItem);
        iterateGridItem(gridItemObj, response[i], tempGridItem);
        myData.push(tempGridItem);
        $scope.tempScopeObj.push(tempGridItem);
      };
    }

    StyleService.get().then(function(response) {
      generateGridItemList(response);
      for (var i = 0; i < response.length; i++) {
        console.log(response[i]);
      };
    });
  });
