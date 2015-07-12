<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

// Mock application module
angular.module('Sample', []);

// Load controller
import '../home.controller';

describe('Controller: HomeCtrl', () => {

  // load module that the controller is associated with
  beforeEach(angular.mock.module('<%= projectName %>'));

  let HomeCtrl;
  let scope;

  // Setup controller and mock it's scope
  beforeEach(inject(($controller, $rootScope) => {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('should have HomeCtrl defined', () => {
    expect(HomeCtrl)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

  it('should have scope.neopolitan defined as "awesome"', () => {
    expect(scope.neopolitan)<% if (testFramework === 'jasmine') { %>.toEqual('awesome')<% } else if (testFramework === 'mocha') { %>.to.equal('awesome')<% } %>;
  });
});
