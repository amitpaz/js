define([
  'underscore',
  'backbone',
],function (_, Backbone){
	
	var ResourceModel = Backbone.Model.extend({
		url: function (){
			return "sources/object.txt"
		}
	});
	
	return ResourceModel;

	
});