//Hover Y to show Z

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
				data.target.setAttribute("visible","true");
				data.target.emit("menghilang");
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

    //this.setupFadeAnimation();

    el.addEventListener(data.on, function () {
      //alert(data.on);
	  window.open(data.src,"_self");
      
      // Fade out image.
      //data.target.emit('set-image-fade');
      // Wait for fade to complete.
      //setTimeout(function () {
        // Set image.
        //data.target.setAttribute('material', 'src', data.src);
      //}, data.dur);
    //});
  });
  
}});