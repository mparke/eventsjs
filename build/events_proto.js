// @preserve eventsjs, copyright Matthew Parke 2014, license https://github.com/mparke/eventsjs/blob/master/LICENSE
!function(t,e){function n(){this.events={}}var o=e.prototype.slice;n.prototype.on=function(e,n,o){this.events[e]||(this.events[e]=[]),this.events[e].push({callback:n,context:o||t})},n.prototype.off=function(t){this.events[t]&&(this.events[t]=[])},n.prototype.trigger=function(){var t,e,n=o.call(arguments),i=this.events[n.shift()];if(i){t=i.length;for(var s=0;t>s;s++)e=i[s],e.callback.apply(e.context,n)}},"object"==typeof module?define(function(){return n}):"function"==typeof define?module.exports=n:t.Events=n}(window,Array);