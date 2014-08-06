(function (window, Array) {

  var slice = Array.prototype.slice;

  function Events () {
    this.events = {};
  }

  // registers an event callback to be executed by name
  Events.prototype.on = function (name, callback, context) {
    if (!this.events[name]) {
      this.events[name] = [];
    }

    this.events[name].push({ callback: callback, context: context || window });
  }

  // removes all events at name
  Events.prototype.off = function (name) {
    if (this.events[name]) {
      // http://jsperf.com/new-array-vs-splice-vs-slice/2
      this.events[name] = [];
    }
  }

  // eventName, args...
  Events.prototype.trigger = function () {
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
    define(function () { return Events; });
  } else if (typeof define === 'function') {
    module.exports = Events;
  } else {
    window.Events = Events;
  }
})(window, Array);
