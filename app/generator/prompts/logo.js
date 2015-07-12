/**
 * Generate logo prompt
 */

'use strict';

var logoPrompt = function logoPrompt() {
  var neopolitanLogo = '\n' +
    '  welcome to'.red + '                   _ _ _\n'.red +
    '  _ __   ___  ___  _ __   ___ | (_) |_ __ _ _ __  \n'.red +
    ' | \'_ \\ / _ \\/ _ \\| \'_ \\ / _ \\| | | __/ _` | \'_ \\ \n'.red +
    ' | | | |  __/ (_) | |_) | (_) | | | || (_| | | | |\n' +
    ' |_| |_|\\___|\\___/| .__/ \\___/|_|_|\\__\\__,_|_| |_|\n'.grey +
    '                  |_| \n'.grey;

  // have Neopolitan greet the user.
  this.log(neopolitanLogo);
};

module.exports = logoPrompt;
