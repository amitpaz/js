define([
  'underscore',
  'backbone',
  'models/notification/Notification'
],function (_, Backbone), Notification{
	
	var NotificationManager = Backbone.Model.extend({
		dispalyPopup: true,
		__eventBus: null,
		initialize: function(){
			this.__eventBus = {};
			_.extend(this.__eventBus, Backbone.Events);
			this.__eventBus.on("notification",this.__handlenotification);
		},
		notify: function (notification){
			var notificationObject = null;
			
			if (typeof notification == "string"){
				notificationObject = new Notification({text:notification}); 
			}else if (typeof  notification == "Object" 
						&& notification instanceof notification){
				notificationObject = notification;
			}
			
			if (this.__eventBus !== null){
				this.__eventBus.trigger("notification",notificationObject);
			} 
			
		},
		__handlenotification: function (notification){
		},
	});
	
	return NotificationManager;

	
});