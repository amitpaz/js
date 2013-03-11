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
			return "http://localhost:8080/api/resources"
		},
		toJSON: function(){
			return {resource: this.attributes};
		}
	});
	
	return ResourceModel;

	
});