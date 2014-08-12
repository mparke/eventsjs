eventsjs
========

Events Module

### Usage
##### As a mixin with the revealing module
<pre>
  <code>
  // with another module
  function MyModule () { Events().call(this); }
  var myModule = new MyModule();
  
  myModule.on('name', function () { 
    console.log('name event!');
  }, this);
  
  myModule.trigger('name'); // name event!
  myModule.off('name');
  myModule.trigger('name'); // <nothing>
  
  // creating a shareable global events object
  var globalEvents = Events().call({});
  </code>
</pre>

##### As a inheritable module with the prototype version
inheritance using [inherit_js](https://github.com/mparke/inherit_js)
<pre>
  <code>
  // extending another module
  function MyModule () { Events.prototype.constructor.call(this); }
  inherit(Events, MyModule);
  var myModule = new MyModule();
  
  myModule.on('name', function () { 
    console.log('name event!');
  }, this);
  
  myModule.trigger('name'); // name event!
  myModule.off('name');
  myModule.trigger('name'); // <nothing>
  
  // creating a shareable global events object
  var globalEvents = new Events();
  </code>
</pre>
