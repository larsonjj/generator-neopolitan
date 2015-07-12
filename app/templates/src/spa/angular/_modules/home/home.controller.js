'use strict';

angular.module('<%= _.camelize(projectName) %>')
  .controller('HomeCtrl', ($scope) => {
    $scope.neopolitan = 'awesome';
  });
