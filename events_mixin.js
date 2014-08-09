// @preserve eventsjs, copyright Matthew Parke 2014, license https://github.com/mparke/eventsjs/blob/master/LICENSE
(function (window, Array) {
  var slice = Array.prototype.slice;

  function Events () {
    var events = {};

    // registers an event callback to be executed by name
    function on (name, callback, context) {
      if (!events[name]) {
        events[name] = [];
      }

      events[name].push({ callback: callback, context: context || window });
    }

    // removes all events at name
    function off (name) {
      if (events[name]) {
        // http://jsperf.com/new-array-vs-splice-vs-slice/2
        events[name] = [];
      }
    }

    // eventName, args...
    function trigger () {
      var args = slice.call(arguments);
      var callbacks = events[args.shift()];
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

    return function () {
      this.on = on;
      this.off = off;
      this.trigger = trigger;

      return this;
    };
  }

  if (typeof module === 'object') {
    module.exports = Events;
  } else if (typeof define === 'function') {
    define(function () { return Events; });
  } else {
    window.Events = Events;
  }
})(window, Array);
