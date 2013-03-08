define(['jquery', 'dataTables', 'underscore', 'backbone'
, 'text!templates/about/aboutTemplate.html'
, 'jqueryUI']
,function($, datatables, _, Backbone, aboutTemplate,jqueryUI){
	   var AboutView = Backbone.View.extend({
	   	el: $("#content"),
	    render: function(){
	   		this.$el.html(aboutTemplate);
	  	}
	   			   		
	   
	   });
	   return AboutView;
   });