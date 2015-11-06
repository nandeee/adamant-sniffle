'use strict';

describe('Controller: LookCtrl', function () {

  // load the controller's module
  beforeEach(module('adamantSniffleApp'));

  var LookCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LookCtrl = $controller('LookCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
