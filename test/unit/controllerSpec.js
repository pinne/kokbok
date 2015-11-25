'use strict';

describe('Kokbok controllers', function() {

describe('KokbokListCtrl', function() {
  var scope, ctrl, $httpBackend;

  beforeEach(module('kokbokApp'));

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('recepies/recepies.json').
      respond([{name: 'Kycklingvingar'}, {name: 'Köttfärslimpa'}]);

    scope = $rootScope.$new();
    ctrl = $controller('KokbokListCtrl', {$scope: scope});

  it('Should display 2 recepies', inject(function($controller) {
      var scope = {};
      var ctrl = $controller('KokbokListCtrl', {$scope:scope});

      expect(scope.recepies.length).toBe(2);
  }));
});
});
