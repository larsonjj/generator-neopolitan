'use strict';

angular.module('<%= _.camelize(projectName) %>')
  .provider('<%= _.camelize(name) %>', function() {

    // Private API

    var neopolitan = 'awesome';

    function Describe() {
      this.greet = function() {
        return neopolitan;
      };
    }

    // Public API (use 'this' to make public)

    this.setDescription = function(value) {
      neopolitan = value;
    };

    this.$get = function() {
      return new Describe();
    };

  });
