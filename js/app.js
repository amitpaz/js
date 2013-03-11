define(['jquery', 'underscore','backbone','router','models/notfication/NotificationManager']
, function ($, _, Backbone, Router, NotificationManager){
		var initialize = function(){
			Router.initialize();
			NotificationManager.initialize();
		};
	
		return {
			initialize:initialize	
		};
	
});