define([
  'underscore',
  'backbone',
  'models/resource/ResourceModel'
], function(_, Backbone, ResourceModel){

  var ResourceCollection = Backbone.Collection.extend({
      
      model: ResourceModel,

      initialize : function(models, options) {},
      
      parse: function(response) {
	      return response.resources.resource;
      },
      
      url: function (){
			return "http://localhost:8090/sources/resources.txt";
	  }
            
     
  });

  return ResourceCollection;

});
