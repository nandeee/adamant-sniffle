'use strict';

describe('Controller: PcmCtrl', function () {

  // load the controller's module
  beforeEach(module('adamantSniffleApp'));

  var PcmCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PcmCtrl = $controller('PcmCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
