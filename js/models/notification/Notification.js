define([
  'underscore',
  'backbone',
],function (_, Backbone){
	
	var Notification = Backbone.Model.extend({
		type: "information",
		text: null,
		src: null,
	});
	
	return Notification;

	
});