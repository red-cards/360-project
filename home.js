//Hover Y to show Z
Pace.on('start', function() { 
	$("#tirai").fadeIn(); // not 
	
});

Pace.on('done', function() {
	$("#tirai").fadeOut(); // fired!
	document.querySelector("#tutorial").emit("hilang");
	document.querySelector("#bgsound").components.sound.playSound();
});
AFRAME.registerComponent('event-proxy', {
  schema: {
    listen: {default: ''},
    target: {type: 'selector'},
    emit: {default: ''}
  },
  update: function () {
    var data = this.data;
    this.el.addEventListener(data.listen, function () {
      data.target.emit(data.emit);
    });
  }
});
AFRAME.registerComponent('opendesc',{
	schema:{
		on: {type: 'string'},
		target: {type: 'selector'}
	},init:function(){
		var data = this.data;
		var el = this.el;
		el.addEventListener(data.on, function () {
			if(data.on=="mouseenter"){
				data.target.emit("muncul");
			}
		});
	}
});

AFRAME.registerComponent('set-image', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'},
    dur: {type: 'number', default: 300}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener(data.on, function () {
		window.open(data.src,"_self");
  });
  
}});