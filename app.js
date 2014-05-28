(function(global) {
  'use strict';

  var previousMyModule = global.MyModule;

  // Constructor
  function MyModule(options) {
    // enforces new
    if (!(this instanceof MyModule)) {
      return new MyModule(options);
    }

    this.options = options || {};
  }

  // Methods
  MyModule.prototype.methodName = function() {
    // method body
    console.log('init');
  };

  // no conflict Handler
  MyModule.noConflict = function noConflict() {
    global.MyModule = previousMyModule;
    return MyModule;
  };

  global.MyModule = MyModule;

}(this));


var foo = new window.MyModule();
    foo.methodName();