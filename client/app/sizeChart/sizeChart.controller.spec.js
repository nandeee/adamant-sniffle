'use strict';

describe('Controller: SizeChartCtrl', function () {

  // load the controller's module
  beforeEach(module('adamantSniffleApp'));

  var SizeChartCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SizeChartCtrl = $controller('SizeChartCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
