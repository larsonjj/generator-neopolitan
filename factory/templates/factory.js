'use strict';

angular.module('<%= _.camelize(projectName) %>')
  .factory('<%= _.camelize(name) %>', function() {
    // Private API
    var name = 'neopolitan';

    // Public API
    return {
      aMethod: function() {
        return name;
      }
    };
  });
