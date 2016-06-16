/*
 * Filename: getPhoneCode.js
 * Version: 2016-6-2 17:03:00
 */
(function($){
	var methods = {
		init: function(options){
		},
		show: function(){
		},
		hide: function(){
		},
		update: function(){
		}
	};
	$.fn.getPhoneCode = function(setting){
		var defaults = {
			time : 60,
			text : '秒后可重发',
			sendBefore : null, //当插件开始run的时候执行的回调函数， 默认为null
			sendAfter : null //当插件初始化完成后执行的回调函数， 默认为null
		};
		//默认值继承
		var config = $.extend( defaults, setting || {});
		var time = config.time;
		var text = config.text;
		obj = $(this);
		obj.each(function(){
			$(this).bind('click',function(event){
				// 引用回调函数
				if($(this).hasClass('s-dis')){
					return false;	
				}
				if (typeof config.sendBefore == 'function') { // 确保类型为函数类型
					config.sendBefore.call(this); // 执行回调函数
				}
				$(this).addClass('s-dis').attr('disabled', 'disabled');
				var that = $(this);
				var val = $(event.target)[0].tagName == 'INPUT' ? that.val() : that.html();
				var isinput = $(event.target)[0].tagName == 'INPUT' ? true : false;
				if(isinput){
						that.val(time + text );		 
					}
					else{
						that.html(time + text );
					}
				_timeRun = setInterval(function(){
					// 加载完成
					if(time==1){
						if(isinput){
							that.val(val);		 
						}
						else{
							that.html(val);
						}
						time = config.time;
						clearInterval(_timeRun);
						that.removeClass('s-dis').removeAttr('disabled');
						// 引用回调函数
					  	if (typeof config.sendAfter == 'function') { // 确保类型为函数类型
							config.sendAfter.call(this); // 执行回调函数
					  	}
					  	//返回一个数值等待下一次触发
						return time;
					}
					// 加载过程
					if(time>1){
						time--;
						if(isinput){
							that.val(time + text );		 
						}
						else{
							that.html(time + text );
						}
					}
				},1000);
			return false;			
			})
		})
	}
})(jQuery);




