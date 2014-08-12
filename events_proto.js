// @preserve eventsjs, copyright Matthew Parke 2014, license https://github.com/mparke/eventsjs/blob/master/LICENSE
(function (window, Array) {
  var slice = Array.prototype.slice;

  /**
  *  Events prototype module
  *  @constructor
  *  @return {function} the mixin constructor
  */
  function Events() {
    this.events = {};
  }

  /**
  *  Registers an event callback to be executed by name with thisArg context
  *  @param {string} name: the event name
  *  @param {function} callback: the function to execute for event name
  *  @param {object} context: the thisArg to be used in applying the callback
  */
  Events.prototype.on = function(name, callback, context) {
    if (!this.events[name]) {
      this.events[name] = [];
    }

    this.events[name].push({ callback: callback, context: context || window });
  }

  /**
  *  Removes all events at name
  *  @param {string} name: the event name
  */
  Events.prototype.off = function(name) {
    if (this.events[name]) {
      // http://jsperf.com/new-array-vs-splice-vs-slice/2
      this.events[name] = [];
    }
  }

  /**
  *  Trigger the execution of callbacks associated with the given event name
  *  @param {string} name: the event name
  *  @param {...*} any number of additional arguments to be passed to all event callbacks
  */
  Events.prototype.trigger = function() {
    var args = slice.call(arguments);
    var callbacks = this.events[args.shift()];
    var length;
    var obj;

    if (callbacks) {
      length = callbacks.length;
      for (var i = 0; i < length; i++) {
        obj = callbacks[i];
        obj.callback.apply(obj.context, args);
      }
    }
  }

  if (typeof module === 'object') {
    module.exports = Events;
  } else if (typeof define === 'function') {
    define(function () { return Events; });
  } else {
    window.Events = Events;
  }
})(window, Array);
