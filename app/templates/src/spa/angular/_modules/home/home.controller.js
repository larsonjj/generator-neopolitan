'use strict';

angular.module('<%= _.camelize(projectName) %>')
  .controller('HomeCtrl', function($scope) {
    $scope.neopolitan = 'awesome';
  });
