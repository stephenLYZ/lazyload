// lazyload.js


(function(){
	"use strict"

	var objects = [],
		time = time || 250,
		setTime;

	var init = function(){
			
		var	imgs = document.querySelectorAll('[data-src]');

		for(var i = 0; i<imgs.length;i++)
		{
			objects.push(imgs[i]);
		}

		render();
		addEventListener('scroll',render);
	};

	var addEventListener = function(event,fn){
		if(document.addEventListener)
		{
			window.addEventListener(event,fn,false);
		}
		else
		{
			window.attachEvent('on' + event,fn);
		}
	};

	var render = function(){
		clearTimeout(setTime);
		setTime = setTimeout(setEvent,time);
	};

	var setEvent = function(){
		for(var i = 0; i< objects.length;i++)
		{
			if(check(objects[i]))
			{
				objects[i].src = objects[i].getAttribute('data-src');
				objects.splice(i,1);
			}
		}
	};

	var check = function(img){
		var view = img.getBoundingClientRect();
		if( view.left >=0 || view.top >=0){
			return true;
		}
		else{
			return false;
		}
	}

	return  {
		init: init()
	}
})(window,document);