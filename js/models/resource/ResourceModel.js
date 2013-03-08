define([
  'underscore',
  'backbone',
],function (_, Backbone){
	
	var ResourceModel = Backbone.Model.extend({
		schema:{
			name: 'Text',
			description: 'Text',
			severity:  { type: 'Select', options: ['HIGH', 'MED', 'LOW'] }	
		},
		url: function (){
			return "sources/object.txt"
		}
	});
	
	return ResourceModel;

	
});